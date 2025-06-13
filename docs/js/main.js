/* ---------- CONFIG ---------- */
const API = "https://cyllium-backend-v3.onrender.com";   // ← URL del backend en Render
/* ---------------------------- */

// Environmental impact factors per kg of material (solo CO2)
const materialImpacts = {
    // Bioelements Materials
    'bioe8i-resin': { co2: 1.31 },
    'bioe8i-film': { co2: 8.18 },
    'bioe8i-laminado': { co2: 4.80 },
    // Bio-based
    pla: { co2: 1.815 },
    pbat: { co2: 1.221 },
    pha: { co2: 2.8 },
    // Conventional Plastics
    ldpe: { co2: 2.60 },
    hdpe: { co2: 3.27 },
    pp: { co2: 3.11 },
    pet: { co2: 4.03 }
};

// Lifecycle stage impact factors (percentage of total impact)
const lifecycleFactors = {
    production: 0.6,    // 60% of total impact
    transport: 0.15,    // 15% of total impact
    usage: 0.1,         // 10% of total impact
    endOfLife: 0.15     // 15% of total impact
};

// Calculate lifecycle impacts (solo CO2)
function calculateLifecycleImpacts(totalCO2) {
    return {
        production: {
            co2: totalCO2 * lifecycleFactors.production
        },
        transport: {
            co2: totalCO2 * lifecycleFactors.transport
        },
        usage: {
            co2: totalCO2 * lifecycleFactors.usage
        },
        endOfLife: {
            co2: totalCO2 * lifecycleFactors.endOfLife
        }
    };
}

// Add a new component to the calculator
function addComponent() {
    const template = document.getElementById('component-template');
    const container = document.getElementById('components-container');
    const clone = template.content.cloneNode(true);
    container.appendChild(clone);
    updateTotalImpact();
}

// Remove a component from the calculator
function removeComponent(button) {
    button.closest('.component-card').remove();
    updateTotalImpact();
}

// Update impact when material or weight changes
function updateImpact(element) {
    updateTotalImpact();
}

// Calculate total impact of all components (solo CO2)
function updateTotalImpact() {
    let totalCO2 = 0;
    
    const components = document.querySelectorAll('.component-card');
    const productionVolume = parseFloat(document.querySelector('.production-volume').value) || 1;
    
    components.forEach(component => {
        const material = component.querySelector('.material-type').value;
        const weight = parseFloat(component.querySelector('.weight').value) || 0;
        
        if (materialImpacts[material]) {
            totalCO2 += materialImpacts[material].co2 * weight;
        }
    });
    
    totalCO2 *= productionVolume;
    
    // Update the display (solo CO2)
    const co2Element = document.getElementById('co2-impact');
    if (co2Element) {
        co2Element.textContent = `CO₂: ${totalCO2.toFixed(2)} kg`;
    }
}

// API helper functions
async function apiRequest(endpoint, options = {}) {
    try {
        const url = `${API}${endpoint}`;
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || `HTTP error! status: ${response.status}`);
        }
        
        return data;
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

function getUserId() {
    let userId = localStorage.getItem('userId');
    if (!userId) {
        userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
        localStorage.setItem('userId', userId);
    }
    return userId;
}

// Product storage functions (using API with localStorage fallback)
async function saveProduct(productData) {
    const userId = getUserId();
    
    try {
        // Try API first
        const response = await apiRequest(`/api/users/${userId}/products`, {
            method: 'POST',
            body: JSON.stringify(productData)
        });
        
        if (response.success) {
            console.log('Product saved to backend:', response.product);
            return response.product;
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        console.warn('Failed to save to backend, using localStorage fallback:', error);
        
        // Fallback to localStorage
    let userProducts = JSON.parse(localStorage.getItem(`products_${userId}`) || '[]');
        productData.id = Date.now().toString(); // Simple ID for fallback
    productData.date = new Date().toISOString();
    userProducts.push(productData);
    localStorage.setItem(`products_${userId}`, JSON.stringify(userProducts));
        return productData;
    }
}

async function loadUserProducts() {
    const userId = getUserId();
    
    try {
        // Try API first
        const response = await apiRequest(`/api/users/${userId}/products`);
        
        if (response.success) {
            console.log(`Loaded ${response.count} products from backend`);
            return response.products;
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        console.warn('Failed to load from backend, using localStorage fallback:', error);
        
        // Fallback to localStorage
        const products = JSON.parse(localStorage.getItem(`products_${userId}`) || '[]');
        console.log(`Loaded ${products.length} products from localStorage`);
        return products;
    }
}

async function deleteProduct(productId) {
    const userId = getUserId();
    
    try {
        // Try API first
        const response = await apiRequest(`/api/users/${userId}/products/${productId}`, {
            method: 'DELETE'
        });
        
        if (response.success) {
            console.log('Product deleted from backend');
            displayProducts(); // Refresh the display
            return true;
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        console.warn('Failed to delete from backend, using localStorage fallback:', error);
        
        // Fallback to localStorage
    let userProducts = JSON.parse(localStorage.getItem(`products_${userId}`) || '[]');
        userProducts = userProducts.filter(p => p.id != productId);
    localStorage.setItem(`products_${userId}`, JSON.stringify(userProducts));
        displayProducts();
        return true;
    }
}

async function getProduct(productId) {
    const userId = getUserId();
    
    try {
        // Try API first
        const response = await apiRequest(`/api/users/${userId}/products/${productId}`);
        
        if (response.success) {
            return response.product;
        } else {
            throw new Error(response.error);
        }
    } catch (error) {
        console.warn('Failed to get from backend, using localStorage fallback:', error);
        
        // Fallback to localStorage
        const products = JSON.parse(localStorage.getItem(`products_${userId}`) || '[]');
        return products.find(p => p.id == productId) || null;
    }
}

async function displayProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;

    // Show loading state
    container.innerHTML = '<p class="text-white text-center">Cargando productos...</p>';

    try {
        const products = await loadUserProducts();
    container.innerHTML = '';

    if (products.length === 0) {
        container.innerHTML = '<p class="text-white text-center">No hay productos guardados</p>';
        return;
    }

    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
            
            // Format date
            const date = new Date(product.date).toLocaleDateString();
            
        card.innerHTML = `
            <div class="product-name">${product.name}</div>
                <div class="product-date">${date}</div>
            <div class="product-metrics">
                <div class="metric">CO₂: ${product.totalImpact.co2.toFixed(2)} kg</div>
                    <div class="metric">Volumen: ${product.productionVolume} unidades</div>
            </div>
            <div class="action-buttons">
                    <button class="action-btn" onclick="viewProduct('${product.id}')">Ver Detalles</button>
                    <button class="action-btn" onclick="duplicateProduct('${product.id}')">Duplicar</button>
                    <button class="action-btn delete-btn" onclick="deleteProduct('${product.id}')">Eliminar</button>
            </div>
        `;
        container.appendChild(card);
    });
    } catch (error) {
        console.error('Error displaying products:', error);
        container.innerHTML = '<p class="text-white text-center">Error al cargar productos</p>';
    }
}

async function viewProduct(productId) {
    try {
        const product = await getProduct(productId);
    
    if (product) {
        localStorage.setItem('packagingComponents', JSON.stringify({
            components: product.components,
            productionVolume: product.productionVolume,
            productName: product.name
        }));
        window.location.href = 'calculator_result.html';
        } else {
            alert('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error viewing product:', error);
        alert('Error al cargar el producto');
    }
}

async function duplicateProduct(productId) {
    try {
        const product = await getProduct(productId);
    
    if (product) {
            const newProduct = {
                name: `${product.name} (Copia)`,
                components: product.components,
                productionVolume: product.productionVolume,
                totalImpact: product.totalImpact
            };
            
            await saveProduct(newProduct);
        displayProducts();
        } else {
            alert('Producto no encontrado');
        }
    } catch (error) {
        console.error('Error duplicating product:', error);
        alert('Error al duplicar el producto');
    }
}

// Modify existing functions to handle product names
async function calculateAndRedirect() {
    const components = [];
    document.querySelectorAll('.component-card').forEach(component => {
        components.push({
            name: component.querySelector('.component-name').value || 'Componente sin nombre',
            type: component.querySelector('.component-type').value,
            material: component.querySelector('.material-type').value,
            weight: parseFloat(component.querySelector('.weight').value) || 0
        });
    });
    
    const productionVolume = parseFloat(document.querySelector('.production-volume').value) || 1;
    const productName = document.getElementById('product-name').value || 'Producto sin nombre';
    
    const totalImpact = calculateTotalImpact(components, productionVolume);
    
    // Save product data
    const productData = {
        name: productName,
        components: components,
        productionVolume: productionVolume,
        totalImpact: totalImpact
    };
    
    try {
        await saveProduct(productData);
        console.log('Product saved successfully');
    } catch (error) {
        console.error('Error saving product:', error);
        // Continue anyway, as the calculation can still be viewed
    }
    
    // Save current calculation for results page
    localStorage.setItem('packagingComponents', JSON.stringify({
        components: components,
        productionVolume: productionVolume,
        productName: productName
    }));
    
    // Redirect to results page
    window.location.href = 'calculator_result.html';
}

function calculateTotalImpact(components, productionVolume) {
    let totalCO2 = 0;
    
    components.forEach(component => {
        if (materialImpacts[component.material]) {
            totalCO2 += materialImpacts[component.material].co2 * component.weight;
        }
    });
    
    totalCO2 *= productionVolume;
    
    return {
        co2: totalCO2
    };
}

// Modify the updateResults function to show product name
function updateResults() {
    try {
        const data = JSON.parse(localStorage.getItem('packagingComponents') || '{"components": [], "productionVolume": 1, "productName": ""}');
        const componentsData = data.components;
        const productionVolume = data.productionVolume;
        const productName = data.productName;
        
        // Add product name to the results page if it exists
        const titleElement = document.getElementById('results-title');
        if (titleElement && productName) {
            titleElement.textContent = `Resultados: ${productName}`;
        }
        
        let totalCO2 = 0;
        
        // Calculate totals (solo CO2)
        componentsData.forEach(component => {
            if (materialImpacts[component.material]) {
                totalCO2 += materialImpacts[component.material].co2 * component.weight;
            }
        });
        
        totalCO2 *= productionVolume;
        
        // Update total impact display (solo CO2)
        const totalCO2Element = document.getElementById('total-co2');
        if (totalCO2Element) {
            totalCO2Element.textContent = `CO₂: ${totalCO2.toFixed(2)} kg`;
        }
        
        // Calculate and update lifecycle impacts (solo CO2)
        const lifecycle = calculateLifecycleImpacts(totalCO2);
        
        // Update lifecycle impact sections (solo CO2)
        const productionElement = document.getElementById('production-impact');
        if (productionElement) {
            productionElement.innerHTML = `CO₂: ${lifecycle.production.co2.toFixed(2)} kg`;
        }
        
        const transportElement = document.getElementById('transport-impact');
        if (transportElement) {
            transportElement.innerHTML = `CO₂: ${lifecycle.transport.co2.toFixed(2)} kg`;
        }
        
        const usageElement = document.getElementById('usage-impact');
        if (usageElement) {
            usageElement.innerHTML = `CO₂: ${lifecycle.usage.co2.toFixed(2)} kg`;
        }
        
        const endOfLifeElement = document.getElementById('end-of-life-impact');
        if (endOfLifeElement) {
            endOfLifeElement.innerHTML = `CO₂: ${lifecycle.endOfLife.co2.toFixed(2)} kg`;
        }
        
        // Create impact distribution chart
        const ctx = document.getElementById('impactChart');
        if (ctx) {
            new Chart(ctx.getContext('2d'), {
                type: 'pie',
                data: {
                    labels: ['Producción', 'Transporte', 'Uso', 'Fin de Vida'],
                    datasets: [{
                        data: [60, 15, 10, 15],
                        backgroundColor: [
                            'rgba(63, 207, 142, 0.8)',
                            'rgba(54, 162, 235, 0.8)',
                            'rgba(255, 206, 86, 0.8)',
                            'rgba(255, 99, 132, 0.8)'
                        ]
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false
                }
            });
        }
    } catch (error) {
        console.error('Error updating results:', error);
        // Show error message to user
        const totalCO2Element = document.getElementById('total-co2');
        if (totalCO2Element) {
            totalCO2Element.textContent = 'Error al calcular';
            }
    }
}

// Initialize pages
window.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    if (path.includes('calculator.html')) {
        addComponent();
    } else if (path.includes('calculator_result.html')) {
        updateResults();
    } else if (path.includes('my_products.html')) {
        displayProducts();
    }
});
