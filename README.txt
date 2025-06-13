===============================
🚀 Cyllium AI - Plataforma Inteligente de Aplicaciones Ambientales
===============================

Cyllium AI es una plataforma web integral que combina inteligencia artificial 
y análisis ambiental para ofrecer herramientas avanzadas de evaluación de 
sostenibilidad y biodegradabilidad de materiales biobasados.

🌟 CARACTERÍSTICAS PRINCIPALES
-------------------------------
✅ Calculadora de Impacto Ambiental con IA
✅ Predicción de Biodegradabilidad de Productos
✅ Biolab Virtual con Tour 360°
✅ Sistema de Gestión de Productos
✅ Diseño de Formulaciones (En desarrollo)
✅ Interfaz multiidioma (ES/EN/PT)
✅ Sistema de autenticación de usuarios

-------------------------------
🔧 REQUISITOS TÉCNICOS
-------------------------------
Backend:
- Python 3.8 o superior
- Flask y dependencias (ver backend/requirements.txt)

Frontend:
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- VS Code con extensión Live Server (recomendado)
- Conexión a internet (para Font Awesome)

-------------------------------
📁 ESTRUCTURA DEL PROYECTO
-------------------------------
/Cyllium-V5/
│
├── docs/                        ← Frontend (Aplicación Web)
│   ├── index.html              ← Página de login
│   ├── welcome.html            ← Página de bienvenida
│   ├── menu.html               ← Menú principal de aplicaciones
│   ├── calculator.html         ← Calculadora de impacto ambiental
│   ├── calculator_result.html  ← Resultados de cálculos ambientales
│   ├── products.html           ← Predicción de biodegradabilidad
│   ├── results.html            ← Resultados de biodegradabilidad
│   ├── biolab-virtual.html     ← Tour virtual del laboratorio
│   ├── my_products.html        ← Gestión de productos guardados
│   ├── /css/                   ← Hojas de estilo
│   ├── /js/                    ← Scripts JavaScript
│   ├── /assets/                ← Imágenes, videos y recursos
│   └── /360/                   ← Contenido para tour virtual
│
├── backend/                     ← Backend API (Python Flask)
│   ├── app.py                  ← Servidor principal con IA
│   ├── requirements.txt        ← Dependencias Python
│   ├── modelo_random_forest.pkl ← Modelo ML v1
│   └── modelo_random_forest_v7.pkl ← Modelo ML v7 (actual)
│
└── README.txt                   ← Este archivo

-------------------------------
🚀 INSTALACIÓN Y CONFIGURACIÓN
-------------------------------

1. CLONA EL REPOSITORIO
-----------------------
git clone [URL_DEL_REPOSITORIO]
cd Cyllium-V5

2. CONFIGURA EL BACKEND (API + IA)
----------------------------------
cd backend

# Crear entorno virtual (recomendado)
python -m venv venv

# Activar entorno virtual
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar servidor backend
python app.py

✅ Backend disponible en: http://localhost:5000

3. CONFIGURA EL FRONTEND
------------------------
cd ../docs

# Opción A: VS Code + Live Server (RECOMENDADO)
- Abre la carpeta 'docs' en VS Code
- Instala extensión "Live Server"
- Clic derecho en index.html → "Open with Live Server"

# Opción B: Servidor Python simple
python -m http.server 8000
# Abrir en navegador: http://localhost:8000

✅ Frontend disponible en: http://localhost:5500 (Live Server)

-------------------------------
👤 SISTEMA DE USUARIOS
-------------------------------

Credenciales predeterminadas:
• Usuario: admin
• Contraseña: 2700

O crear cuenta nueva desde la interfaz de login.

-------------------------------
🎯 FLUJO DE USO DE APLICACIONES
-------------------------------

1. ACCESO AL SISTEMA
--------------------
- Abrir index.html
- Iniciar sesión o crear cuenta
- Navegar por welcome.html hasta menu.html

2. CALCULADORA DE IMPACTO AMBIENTAL
-----------------------------------
- Seleccionar "Calculadora de Impacto Ambiental"
- Ingresar nombre del producto y volumen de producción
- Agregar componentes con material y peso
- Ver resultados de huella de carbono en tiempo real
- Calcular impacto completo con gráficos detallados

3. BIODEGRADABILIDAD CON IA
---------------------------
- Seleccionar "Biodegradabilidad de nuestros productos"
- Elegir tipo de producto y características
- Seleccionar ambiente de degradación (Aeróbico/Anaeróbico/Ambiental)
- Obtener predicción AI con curvas de biodegradación

4. BIOLAB VIRTUAL
-----------------
- Explorar tour virtual 360° del laboratorio
- Interacción inmersiva con espacios de investigación

5. GESTIÓN DE PRODUCTOS
----------------------
- Guardar y revisar análisis previos
- Historial de cálculos realizados

-------------------------------
🔬 TECNOLOGÍAS UTILIZADAS
-------------------------------

Frontend:
- HTML5, CSS3, JavaScript ES6
- Bootstrap 5
- Font Awesome (iconos)
- Diseño responsive
- Animaciones CSS

Backend:
- Python Flask
- Machine Learning (scikit-learn)
- Pandas para análisis de datos
- Matplotlib para visualizaciones
- CORS habilitado

Inteligencia Artificial:
- Random Forest para predicción de biodegradabilidad
- Modelos entrenados con datos reales de laboratorio
- Cálculos de impacto ambiental con factores científicos

-------------------------------
🎨 CARACTERÍSTICAS DE DISEÑO
-------------------------------
- Interfaz moderna con gradientes y glassmorphism
- Paleta de colores: Verde biotech (#3fcf8e, #64d4a4)
- Tipografía: Inter (Google Fonts)
- Efectos hover y transiciones suaves
- Video de fondo dinámico
- Totalmente responsive

-------------------------------
🌍 SOPORTE MULTIIDIOMA
-------------------------------
- Español (ES) - Idioma principal
- Inglés (EN) - Traducciones completas
- Portugués (PT) - Soporte básico

-------------------------------
📞 CONTACTO Y DESARROLLO
-------------------------------
Desarrollado por: Raimundo Varleta
Equipo: Science Team - Bioelements
Plataforma: Cyllium AI v5.0 U2

🌱 Impulsando la innovación en materiales sostenibles
