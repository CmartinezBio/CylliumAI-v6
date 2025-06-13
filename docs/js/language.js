// Language translations for all pages
const translations = {
  en: {
    // Index page
    login: "Log in",
    register: "Register",
    username: "username",
    password: "password",
    newUsername: "new username",
    newPassword: "new password",
    userRegistration: "User Registration",
    successfulRegistration: "Registration successful.",
    userExists: "User already exists.",
    invalidCredentials: "Invalid username or password.",
    
    // Welcome page
    hello: "Hello",
    welcome: "Welcome to Cyllium AI, a revolutionary platform developed by",
    welcomeText: "Welcome to Cyllium AI, a revolutionary platform developed by Bioelements to transform the future of biopackaging! Cyllium AI is a visionary project that combines artificial intelligence and advanced data analysis to innovate in the design of sustainable products, optimize their life cycle and predict their biodegradability with scientific precision. More than a tool, it is an engine of change for a greener, more efficient and intelligent industry.",
    
    // Menu page
    mainMenu: "Cyllium AI Applications",
    formDesign: "Formulation Design (In development)",
    environmentalImpact: "Environmental Impact Calculator",
    biodegradability: "Biodegradability of our products",
    biolabVirtual: "Virtual Biolab",
    
    // Products page
    productTypes: "Product Types",
    bioBag: "Bio Bag with Flap",
    ecommerceBag: "E-commerce Bio Bag",
    tShirtBag: "T-shirt Bio Bag",
    biofilm: "Biofilm",
    dimensions: "Dimensions",
    width: "Width (mm)",
    length: "Length (mm)",
    thickness: "Thickness (μm)",
    materiality: "Material",
    contact: "Contact",
    emailForResults: "Email (for sending results)",
    emailPlaceholder: "your.email@example.com",
    calculate: "Calculate",
    
    // Results page
    selectBiodegradation: "Select the type of biodegradation you want to predict",
    aerobic: "Aerobic",
    anaerobic: "Anaerobic",
    environmental: "Environmental",
    aeroStandard: "ASTM D6400 - ISO14855 (>90% in 180 days)",
    anaeroStandard: "ISO 14853 (>90% in 365 days)",
    enviroStandard: "Ubiquitous Fungi (>98% in 600 days)",
    loading: "Loading",
    biodegradationKinetics: "Biodegradation Kinetics - ",
    time: "Time (days)",
    biodegradation: "Biodegradation (%)",
    error: "Error:",
    incompleteData: "Incomplete data",
    
    // Save-info page
    download: "Download",
    pdfReport: "PDF Report",
    generatingPdfReport: "Generating PDF report...",
    pdfError: "An error occurred while generating the PDF report. Please try again.",
    
    // PDF Report translations
    reportTitle: "Biodegradability Report",
    reportSubject: "Biodegradability analysis results",
    date: "Date",
    product: "Product",
    bag: "Bag",
    material: "Material",
    formulation: "Formulation",
    dimensions: "Dimensions",
    thickness: "Thickness",
    whatIsCyllium: "What is Cyllium AI?",
    cylliumIntro: "Cyllium AI is an innovative biodegradability prediction tool developed by Bioelements, designed to help companies validate and optimize their sustainable products. Using advanced machine learning models trained with thousands of experimental data points, Cyllium AI can predict the biodegradation behavior of your products in different environmental conditions with high precision.\n\nThis technology saves time and resources on costly laboratory tests, accelerating the development of new sustainable materials. Our system evaluates compliance with major international standards and patents to certify if your product is genuinely biodegradable and can be marketed as such.",
    aerobicBiodegradation: "Aerobic Biodegradation - ASTM D6400/ISO14855",
    aerobicText: "Aerobic biodegradation occurs in the presence of oxygen. The ASTM D6400 standard is a standardized test method for determining the aerobic biodegradation of plastic materials under controlled composting conditions. This test measures the amount of carbon dioxide produced during the biodegradation process over time.\n\nISO 14855 complements this standard by establishing a method to determine the ultimate aerobic biodegradability and disintegration of plastic materials under controlled composting conditions by measuring the generated carbon dioxide and the degree of disintegration of the material at the end of the test.\n\nEvaluation criteria: A material must achieve more than 90% biodegradation in 180 days to be considered biodegradable according to these standards. This certification is crucial for products that will be marketed as compostable or biodegradable in aerobic environments.",
    anaerobicBiodegradation: "Anaerobic Biodegradation - ISO 14853",
    anaerobicText: "Anaerobic biodegradation occurs in the absence of oxygen, such as in landfills or anaerobic digesters. ISO 14853 is a standardized test method for determining the anaerobic biodegradation of plastic materials under high-solids anaerobic-digestion conditions.\n\nEvaluation criteria: A material must achieve more than 90% biodegradation under anaerobic conditions in 365 days to be considered biodegradable according to this standard. This certification is relevant for products that may end up in landfills or anaerobic waste treatment systems.",
    environmentalBiodegradation: "Environmental Biodegradation - PCT PUC Patent",
    environmentalText: "Environmental biodegradation occurs under natural soil conditions. The PCT PUC Patent establishes a standardized test method for determining the aerobic biodegradation of plastic materials under soil conditions. This test simulates the exposure of materials to natural soil conditions and measures biodegradation over time.\n\nEvaluation criteria: A material must achieve more than 98% biodegradation in 600 days to be considered biodegradable according to this standard. This certification is important for products that may end up in the soil, such as agricultural products, packaging, or wrapping that will be disposed of in natural environments.",
    compliesWithASTM: "Complies with ASTM D6400/ISO14855 standards",
    compliesWithISO: "Complies with ISO 14853 standard",
    compliesWithPCT: "Complies with PCT PUC Patent requirements",
    conclusion: "Conclusion",
    conclusionPrefix: "This bag produced by Bioelements with formulation ",
    conclusionText: "complies with all evaluated international biodegradability standards. This product can be marketed as biodegradable and is an excellent choice for companies committed to environmental sustainability.",
    footerText1: "This report has been automatically generated by Cyllium AI, a tool by Bioelements.",
    footerText2: "For more information visit www.bioelements.com",
    filename: "Biodegradability_Report",
    
    // Final page
    thanks: "Thank you",
    forUsing: "for using",

    // Calculator page
    "calculator-title": "Environmental Impact Calculator",
    "add-component-btn": "+ Add Component",
    "total-impact": "Estimated Total Impact",
    "production-volume": "Production Volume (units)",
    "calculate-btn": "Calculate Impact",
    "back-to-menu": "← Back to Menu",
    "component-type": "Component Type",
    "primary-packaging": "Primary Packaging (In direct contact with product)",
    "secondary-packaging": "Secondary Packaging (Groups primary packaged products)",
    "tertiary-packaging": "Tertiary Packaging (For transport and distribution)",
    "material": "Material",
    "weight": "Weight (kg)",
    "delete-btn": "Delete",

    // Results page
    "results-title": "Analysis Results",
    "total-impact-title": "Total Impact",
    "lifecycle-analysis": "Lifecycle Stage Analysis",
    "production": "Production",
    "transport": "Transport",
    "usage": "Usage",
    "end-of-life": "End of Life",
    "impact-distribution": "Impact Distribution",
    "download-btn": "Download PDF Report",
    "back-to-calculator": "← Back to Calculator",
    "production-volume-text": "Total Production Volume: {0} units",

    // My Products page
    "my-products-title": "My Products",
    "new-product-btn": "+ New Product",
    "no-products": "No saved products",
    "view-details": "View Details",
    "duplicate": "Duplicate",
    "delete": "Delete",
    "product-name-label": "Product Name",
    "product-name-placeholder": "Ex: Eco-friendly Package",
    "component-name": "Component Name",
    "component-name-placeholder": "Ex: Primary packaging",

    // Results page additions
    "results-prefix": "Results: ",
  },
  es: {
    // Index page
    login: "Iniciar sesión",
    register: "Registrarse",
    username: "usuario",
    password: "contraseña",
    newUsername: "nuevo usuario",
    newPassword: "nueva contraseña",
    userRegistration: "Registro de usuario",
    successfulRegistration: "Registro exitoso.",
    userExists: "El usuario ya existe.",
    invalidCredentials: "Usuario o contraseña incorrectos.",
    
    // Welcome page
    hello: "Hola",
    welcome: "¡Te damos la bienvenida a Cyllium AI, una plataforma revolucionaria desarrollada por",
    welcomeText: "¡Te damos la bienvenida a Cyllium AI, una plataforma revolucionaria desarrollada por Bioelements para transformar el futuro del biopackaging! Cyllium AI es un proyecto visionario que combina inteligencia artificial y análisis avanzado de datos para innovar en el diseño de productos sostenibles, optimizar su ciclo de vida y predecir su biodegradabilidad con precisión científica. Más que una herramienta, es un motor de cambio para una industria más verde, eficiente e inteligente.",
    
    // Menu page
    mainMenu: "Aplicaciones Cyllium AI",
    formDesign: "Diseño de formulaciones (En desarrollo)",
    environmentalImpact: "Impacto Medioambiental (En desarrollo)",
    biodegradability: "Biodegradabilidad de nuestros productos",
    biolabVirtual: "Laboratorio Virtual",
    
    // Products page
    productTypes: "Tipos de Producto",
    bioBag: "Biobolsa Brida",
    ecommerceBag: "Biobolsa Ecommerce",
    tShirtBag: "Biobolsa Camiseta",
    biofilm: "Biofilm",
    dimensions: "Dimensiones",
    width: "Ancho (mm)",
    length: "Largo (mm)",
    thickness: "Espesor (μm)",
    materiality: "Materialidad",
    contact: "Contacto",
    emailForResults: "Email (para envío de resultados)",
    emailPlaceholder: "tu.correo@ejemplo.com",
    calculate: "Calcular",
    
    // Results page
    selectBiodegradation: "Selecciona el tipo de biodegradación que deseas predecir",
    aerobic: "Aeróbico",
    anaerobic: "Anaeróbico",
    environmental: "Ambiental",
    aeroStandard: "ASTM D6400 - ISO14855 (>90% en 180 días)",
    anaeroStandard: "ISO 14853 (>90% en 365 días)",
    enviroStandard: "Hongos Ubiquitarios (>98% en 600 días)",
    loading: "Cargando",
    biodegradationKinetics: "Cinética de biodegradación - ",
    time: "Tiempo (días)",
    biodegradation: "Biodegradación (%)",
    error: "Error:",
    incompleteData: "Datos incompletos",
    
    // Save-info page
    download: "Descargar",
    pdfReport: "Informe PDF",
    generatingPdfReport: "Generando informe PDF...",
    pdfError: "Ocurrió un error al generar el informe PDF. Por favor, inténtelo de nuevo.",
    
    // PDF Report translations
    reportTitle: "Informe de Biodegradabilidad",
    reportSubject: "Resultados de análisis de biodegradabilidad",
    date: "Fecha",
    product: "Producto",
    bag: "Bolsa",
    material: "Material",
    formulation: "Formulación",
    dimensions: "Dimensiones",
    thickness: "Espesor",
    whatIsCyllium: "¿Qué es Cyllium AI?",
    cylliumIntro: "Cyllium AI es una innovadora herramienta de predicción de biodegradabilidad desarrollada por Bioelements, diseñada para ayudar a las empresas a validar y optimizar sus productos sostenibles. Utilizando modelos avanzados de machine learning entrenados con miles de datos experimentales, Cyllium AI puede predecir con alta precisión el comportamiento de biodegradación de sus productos en diferentes condiciones ambientales.\n\nEsta tecnología permite ahorrar tiempo y recursos en pruebas de laboratorio costosas, acelerando el desarrollo de nuevos materiales sostenibles. Nuestro sistema evalúa el cumplimiento con las principales normas internacionales y patentes para certificar si su producto es genuinamente biodegradable y puede ser comercializado como tal.",
    aerobicBiodegradation: "Biodegradación Aeróbica - ASTM D6400/ISO14855",
    aerobicText: "La biodegradación aeróbica ocurre en presencia de oxígeno. La norma ASTM D6400 es un método de prueba estándar para determinar la biodegradación aeróbica de materiales plásticos en condiciones de compostaje controladas. Esta prueba mide la cantidad de dióxido de carbono producido durante el proceso de biodegradación a lo largo del tiempo.\n\nLa norma ISO 14855 complementa este estándar, estableciendo un método para determinar la biodegradabilidad aeróbica final y la desintegración de materiales plásticos en condiciones controladas de compostaje mediante la medición del dióxido de carbono generado y el grado de desintegración del material al final de la prueba.\n\nCriterios de evaluación: Un material debe alcanzar más del 90% de biodegradación en 180 días para considerarse biodegradable según estas normas. Esta certificación es crucial para productos que se comercializarán como compostables o biodegradables en entornos aeróbicos.",
    anaerobicBiodegradation: "Biodegradación Anaeróbica - ISO 14853",
    anaerobicText: "La biodegradación anaeróbica ocurre en ausencia de oxígeno, como en vertederos o digestores anaeróbicos. La norma ISO 14853 es un método de prueba estándar para determinar la biodegradación anaeróbica de materiales plásticos en condiciones de digestión anaeróbica de alta concentración de sólidos.\n\nCriterios de evaluación: Un material debe alcanzar más del 90% de biodegradación en condiciones anaeróbicas en 365 días para considerarse biodegradable según esta norma. Esta certificación es relevante para productos que pueden terminar en vertederos o en sistemas de tratamiento anaeróbico de residuos.",
    environmentalBiodegradation: "Biodegradación Ambiental - Patente PCT PUC",
    environmentalText: "La biodegradación ambiental ocurre en condiciones naturales del suelo. La Patente PCT PUC establece un método de prueba estándar para determinar la biodegradación aeróbica de materiales plásticos en condiciones de suelo. Esta prueba simula la exposición de materiales a las condiciones naturales del suelo y mide la biodegradación a lo largo del tiempo.\n\nCriterios de evaluación: Un material debe alcanzar más del 98% de biodegradación en 600 días para considerarse biodegradable según esta norma. Esta certificación es importante para productos que pueden terminar en el suelo, como productos agrícolas, envases o embalajes que se descartarán en entornos naturales.",
    compliesWithASTM: "Cumple con normas ASTM D6400/ISO14855",
    compliesWithISO: "Cumple con norma ISO 14853",
    compliesWithPCT: "Cumple con lo establecido en la Patente PCT PUC",
    conclusion: "Conclusión",
    conclusionPrefix: "Esta bolsa produzida por Bioelements con la formulación ",
    conclusionText: "cumple con todas las normas internacionales de biodegradabilidad evaluadas. Este producto puede ser comercializado como biodegradable y es una excelente opción para empresas comprometidas con la sostenibilidad ambiental.",
    footerText1: "Este informe ha sido generado automáticamente por Cyllium AI, herramienta de Bioelements.",
    footerText2: "Para más información visite www.bioelements.com",
    filename: "Informe_Biodegradabilidad",
    
    // Final page
    thanks: "Gracias",
    forUsing: "por utilizar",

    // Calculator page
    "calculator-title": "Calculadora de Impacto Ambiental",
    "add-component-btn": "+ Agregar Componente",
    "total-impact": "Impacto Total Estimado",
    "production-volume": "Volumen de Producción (unidades)",
    "calculate-btn": "Calcular Impacto",
    "back-to-menu": "← Volver al Menú",
    "component-type": "Tipo de Componente",
    "primary-packaging": "Empaque Primario (En contacto directo con el producto)",
    "secondary-packaging": "Empaque Secundario (Agrupa productos con empaque primario)",
    "tertiary-packaging": "Empaque Terciario (Para transporte y distribución)",
    "material": "Material",
    "weight": "Peso (kg)",
    "delete-btn": "Eliminar",

    // Results page
    "results-title": "Resultados del Análisis",
    "total-impact-title": "Impacto Total",
    "lifecycle-analysis": "Análisis por Etapa del Ciclo de Vida",
    "production": "Producción",
    "transport": "Transporte",
    "usage": "Uso",
    "end-of-life": "Fin de Vida",
    "impact-distribution": "Distribución de Impacto",
    "download-btn": "Descargar Reporte PDF",
    "back-to-calculator": "← Volver a la Calculadora",
    "production-volume-text": "Volumen Total de Producción: {0} unidades",

    // My Products page
    "my-products-title": "Mis Productos",
    "new-product-btn": "+ Nuevo Producto",
    "no-products": "No hay productos guardados",
    "view-details": "Ver Detalles",
    "duplicate": "Duplicar",
    "delete": "Eliminar",
    "product-name-label": "Nombre del Producto",
    "product-name-placeholder": "Ej: Empaque Eco-friendly",
    "component-name": "Nombre del Componente",
    "component-name-placeholder": "Ej: Empaque primario",

    // Results page additions
    "results-prefix": "Resultados: ",
  },
  pt: {
    // Index page
    login: "Iniciar sessão",
    register: "Registrar",
    username: "usuário",
    password: "senha",
    newUsername: "novo usuário",
    newPassword: "nova senha",
    userRegistration: "Registro de usuário",
    successfulRegistration: "Registro bem-sucedido.",
    userExists: "O usuário já existe.",
    invalidCredentials: "Nome de usuário ou senha inválidos.",
    
    // Welcome page
    hello: "Olá",
    welcome: "Bem-vindo à Cyllium AI, uma plataforma revolucionária desenvolvida por",
    welcomeText: "Bem-vindo à Cyllium AI, uma plataforma revolucionária desenvolvida pela Bioelements para transformar o futuro das embalagens biodegradáveis! Cyllium AI é um projeto visionário que combina inteligência artificial e análise avançada de dados para inovar no design de produtos sustentáveis, otimizar seu ciclo de vida e prever sua biodegradabilidade com precisão científica. Mais do que uma ferramenta, é um motor de mudança para uma indústria mais verde, eficiente e inteligente.",
    
    // Menu page
    mainMenu: "Aplicativos Cyllium AI",
    formDesign: "Design de formulação (Em desenvolvimento)",
    environmentalImpact: "Impacto Ambiental (Em desenvolvimento)",
    biodegradability: "Biodegradabilidade dos nossos produtos",
    biolabVirtual: "Laboratório Virtual",
    
    // Products page
    productTypes: "Tipos de Produto",
    bioBag: "Biossaco com Aba",
    ecommerceBag: "Biossaco para E-commerce",
    tShirtBag: "Biossaco Camiseta",
    biofilm: "Biofilme",
    dimensions: "Dimensões",
    width: "Largura (mm)",
    length: "Comprimento (mm)",
    thickness: "Espessura (μm)",
    materiality: "Materialidade",
    contact: "Contato",
    emailForResults: "Email (para envio de resultados)",
    emailPlaceholder: "seu.email@exemplo.com",
    calculate: "Calcular",
    
    // Results page
    selectBiodegradation: "Selecione o tipo de biodegradação que deseja prever",
    aerobic: "Aeróbico",
    anaerobic: "Anaeróbico",
    environmental: "Ambiental",
    aeroStandard: "ASTM D6400 - ISO14855 (>90% em 180 dias)",
    anaeroStandard: "ISO 14853 (>90% em 365 dias)",
    enviroStandard: "Fungos Ubíquos (>98% em 600 dias)",
    loading: "Carregando",
    biodegradationKinetics: "Cinética de biodegradação - ",
    time: "Tempo (dias)",
    biodegradation: "Biodegradação (%)",
    error: "Erro:",
    incompleteData: "Dados incompletos",
    
    // Save-info page
    download: "Baixar",
    pdfReport: "Relatório PDF",
    generatingPdfReport: "Gerando relatório PDF...",
    pdfError: "Ocorreu um erro ao gerar o relatório PDF. Por favor, tente novamente.",
    
    // PDF Report translations
    reportTitle: "Relatório de Biodegradabilidade",
    reportSubject: "Resultados de análise de biodegradabilidade",
    date: "Data",
    product: "Produto",
    bag: "Sacola",
    material: "Material",
    formulation: "Formulação",
    dimensions: "Dimensões",
    thickness: "Espessura",
    whatIsCyllium: "O que é Cyllium AI?",
    cylliumIntro: "Cyllium AI é uma ferramenta inovadora de previsão de biodegradabilidade desenvolvida pela Bioelements, projetada para ajudar as empresas a validar e otimizar seus produtos sustentáveis. Usando modelos avançados de aprendizado de máquina treinados com milhares de dados experimentais, o Cyllium AI pode prever com alta precisão o comportamento de biodegradação de seus produtos em diferentes condições ambientais.\n\nEsta tecnologia economiza tempo e recursos em testes laboratoriais caros, acelerando o desenvolvimento de novos materiais sustentáveis. Nosso sistema avalia a conformidade com as principais normas internacionais e patentes para certificar se o seu produto é genuinamente biodegradável e pode ser comercializado como tal.",
    aerobicBiodegradation: "Biodegradação Aeróbica - ASTM D6400/ISO14855",
    aerobicText: "A biodegradação aeróbica ocorre na presença de oxigênio. A norma ASTM D6400 é um método de teste padrão para determinar a biodegradação aeróbica de materiais plásticos em condições de compostagem controladas. Este teste mede a quantidade de dióxido de carbono produzido durante o processo de biodegradação ao longo do tempo.\n\nA norma ISO 14855 complementa este padrão, estabelecendo um método para determinar a biodegradabilidade aeróbica final e a desintegração de materiais plásticos em condições controladas de compostagem através da medição do dióxido de carbono gerado e o grau de desintegração do material no final do teste.\n\nCritérios de avaliação: Um material deve atingir mais de 90% de biodegradação em 180 dias para ser considerado biodegradável de acordo com estas normas. Esta certificação é crucial para produtos que serão comercializados como compostáveis ou biodegradáveis em ambientes aeróbicos.",
    anaerobicBiodegradation: "Biodegradação Anaeróbica - ISO 14853",
    anaerobicText: "A biodegradação anaeróbica ocorre na ausência de oxigênio, como em aterros sanitários ou digestores anaeróbicos. A norma ISO 14853 é um método de teste padrão para determinar a biodegradação anaeróbica de materiais plásticos em condições de digestão anaeróbica de alta concentração de sólidos.\n\nCritérios de avaliação: Um material deve atingir mais de 90% de biodegradação em condições anaeróbicas em 365 dias para ser considerado biodegradável de acordo com esta norma. Esta certificação é relevante para produtos que podem acabar em aterros sanitários ou em sistemas de tratamento de resíduos anaeróbicos.",
    environmentalBiodegradation: "Biodegradação Ambiental - Patente PCT PUC",
    environmentalText: "A biodegradação ambiental ocorre em condições naturais do solo. A Patente PCT PUC estabelece um método de teste padrão para determinar a biodegradação aeróbica de materiais plásticos em condições de solo. Este teste simula a exposição de materiais às condições naturais do solo e mede a biodegradação ao longo do tempo.\n\nCritérios de avaliação: Um material deve atingir mais de 98% de biodegradação em 600 dias para ser considerado biodegradável de acordo com esta norma. Esta certificação é importante para produtos que podem acabar no solo, como produtos agrícolas, embalagens ou invólucros que serão descartados em ambientes naturais.",
    compliesWithASTM: "Cumpre com as normas ASTM D6400/ISO14855",
    compliesWithISO: "Cumpre com a norma ISO 14853",
    compliesWithPCT: "Cumpre com o estabelecido na Patente PCT PUC",
    conclusion: "Conclusão",
    conclusionPrefix: "Esta sacola produzida pela Bioelements com a formulação ",
    conclusionText: "cumpre com todas as normas internacionais de biodegradabilidade avaliadas. Este produto pode ser comercializado como biodegradável e é uma excelente escolha para empresas comprometidas com a sustentabilidade ambiental.",
    footerText1: "Este relatório foi gerado automaticamente pelo Cyllium AI, uma ferramenta da Bioelements.",
    footerText2: "Para mais informações visite www.bioelements.com",
    filename: "Relatorio_Biodegradabilidade",
    
    // Final page
    thanks: "Obrigado",
    forUsing: "por usar",

    // Calculator page
    "calculator-title": "Calculadora de Impacto Ambiental",
    "add-component-btn": "+ Adicionar Componente",
    "total-impact": "Impacto Total Estimado",
    "production-volume": "Volume de Produção (unidades)",
    "calculate-btn": "Calcular Impacto",
    "back-to-menu": "← Voltar ao Menu",
    "component-type": "Tipo de Componente",
    "primary-packaging": "Embalagem Primária (Em contato direto com o produto)",
    "secondary-packaging": "Embalagem Secundária (Agrupa produtos com embalagem primária)",
    "tertiary-packaging": "Embalagem Terciária (Para transporte e distribuição)",
    "material": "Material",
    "weight": "Peso (kg)",
    "delete-btn": "Excluir",

    // Results page
    "results-title": "Resultados da Análise",
    "total-impact-title": "Impacto Total",
    "lifecycle-analysis": "Análise por Etapa do Ciclo de Vida",
    "production": "Produção",
    "transport": "Transporte",
    "usage": "Uso",
    "end-of-life": "Fim de Vida",
    "impact-distribution": "Distribuição de Impacto",
    "download-btn": "Baixar Relatório PDF",
    "back-to-calculator": "← Voltar para Calculadora",
    "production-volume-text": "Volume Total de Produção: {0} unidades",

    // My Products page
    "my-products-title": "Meus Produtos",
    "new-product-btn": "+ Novo Produto",
    "no-products": "Sem produtos salvos",
    "view-details": "Ver Detalhes",
    "duplicate": "Duplicar",
    "delete": "Excluir",
    "product-name-label": "Nome do Produto",
    "product-name-placeholder": "Ex: Embalagem Eco-friendly",
    "component-name": "Nome do Componente",
    "component-name-placeholder": "Ex: Embalagem primária",

    // Results page additions
    "results-prefix": "Resultados: ",
  }
};

// Save and get language preference
function saveLanguage(lang) {
  localStorage.setItem("cyllium_language", lang);
}

function getLanguage() {
  return localStorage.getItem("cyllium_language") || "en"; // Default to English
}

// Change language function
function changeLanguage(lang) {
  saveLanguage(lang);
  applyLanguage(lang);
}

// Apply translation based on page-specific elements
function applyLanguage(lang) {
  document.querySelector("html").setAttribute("lang", lang);
  const t = translations[lang];
  
  // Update all elements with data attributes
  document.querySelectorAll('[data-en], [data-es], [data-pt]').forEach(element => {
    if (element.hasAttribute(`data-${lang}`)) {
      element.textContent = element.getAttribute(`data-${lang}`);
    }
  });

  // Update menu title
  const menuTitle = document.querySelector('.menu-title');
  if (menuTitle) {
    menuTitle.textContent = t.mainMenu;
  }
  
  // Generic function to update elements on any page
  function updateElements(selectors) {
    for (let selector in selectors) {
      const elements = document.querySelectorAll(selector);
      if (elements.length > 0) {
        elements.forEach(el => {
          if (selectors[selector].attr) {
            el.setAttribute(selectors[selector].attr, t[selectors[selector].key]);
          } else {
            el.textContent = t[selectors[selector].key];
          }
        });
      }
    }
  }
  
  // Get current page filename
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // Page specific translations
  switch (currentPage) {
    case 'index.html':
      updateElements({
        '.login-container h3': { key: 'login' },
        '#username': { key: 'username', attr: 'placeholder' },
        '#password': { key: 'password', attr: 'placeholder' },
        'button.login-btn.inverse': { key: 'login' },
        '#login-error': { key: 'invalidCredentials' },
        'button[data-bs-toggle="modal"]': { key: 'register' },
        '.modal-content h4': { key: 'userRegistration' },
        '#new-username': { key: 'newUsername', attr: 'placeholder' },
        '#new-password': { key: 'newPassword', attr: 'placeholder' },
        '.modal-content button.login-btn': { key: 'register' },
        '#register-msg': { key: 'successfulRegistration' },
        '#register-error': { key: 'userExists' }
      });
      break;
      
    case 'welcome.html':
      updateElements({
        '.title': { key: 'hello' },
        'p': { key: 'welcomeText' }
      });
      break;
      
    case 'menu.html':
      updateElements({
        '.menu-title': { key: 'mainMenu' },
        '.menu-button:nth-of-type(1)': { key: 'formDesign' },
        '.menu-button:nth-of-type(2)': { key: 'environmentalImpact' },
        '.menu-button:nth-of-type(3)': { key: 'biodegradability' }
      });
      break;
      
    case 'products.html':
      updateElements({
        '.heading:nth-of-type(1)': { key: 'productTypes' },
        '.accordion-button[data-tipo="BIOBOLSA BRIDA"]': { key: 'bioBag' },
        '.accordion-button[data-tipo="BIOBOLSA ECOMMERCE"]': { key: 'ecommerceBag' },
        '.accordion-button[data-tipo="BIOBOLSA CAMISETA"]': { key: 'tShirtBag' },
        '.accordion-button[data-tipo="BIOFILM"]': { key: 'biofilm' },
        '.heading:nth-of-type(2)': { key: 'dimensions' },
        'label[for="input-ancho"]': { key: 'width' },
        'label[for="input-largo"]': { key: 'length' },
        'label[for="input-espesor"]': { key: 'thickness' },
        'label[for="input-materialidad"]': { key: 'materiality' },
        '.heading:nth-of-type(3)': { key: 'contact' },
        'label[for="input-email"]': { key: 'emailForResults' },
        '#input-email': { key: 'emailPlaceholder', attr: 'placeholder' },
        '.calculate-btn': { key: 'calculate' }
      });
      break;
      
    case 'results.html':
      updateElements({
        '#msg-inicial': { key: 'selectBiodegradation' },
        '.category[data-ambiente="Aeróbica"] .text': { key: 'aerobic' },
        '.category[data-ambiente="Anaeróbica"] .text': { key: 'anaerobic' },
        '.category[data-ambiente="Ambiental"] .text': { key: 'environmental' },
        '.category[data-ambiente="Aeróbica"] .time': { key: 'aeroStandard' },
        '.category[data-ambiente="Anaeróbica"] .time': { key: 'anaeroStandard' },
        '.category[data-ambiente="Ambiental"] .time': { key: 'enviroStandard' },
        '.loader .text-white': { key: 'loading' }
      });
      
      // For SVG chart elements if they exist
      const chartTitle = document.getElementById('chart-title');
      const xAxisLabel = document.getElementById('x-axis-label');
      const yAxisLabel = document.getElementById('y-axis-label');
      
      if (chartTitle) {
        // Extract environment type from the current title
        const currentTitle = chartTitle.textContent;
        const envType = currentTitle.split('-')[1]?.trim();
        
        if (envType) {
          let translatedEnv = '';
          switch (envType) {
            case 'Aeróbica': translatedEnv = t.aerobic; break;
            case 'Anaeróbica': translatedEnv = t.anaerobic; break;
            case 'Ambiental': translatedEnv = t.environmental; break;
            default: translatedEnv = envType;
          }
          chartTitle.textContent = t.biodegradationKinetics + translatedEnv;
        } else {
          chartTitle.textContent = t.biodegradationKinetics;
        }
      }
      
      if (xAxisLabel) xAxisLabel.textContent = t.time;
      if (yAxisLabel) yAxisLabel.textContent = t.biodegradation;
      break;
      
    case 'save-info.html':
      updateElements({
        '#download-button p .only-color': { key: 'download' },
        '#download-button p': { key: 'pdfReport' },
        '#loading-text': { key: 'generatingPdfReport' }
      });
      break;
      
    case 'final.html':
      // The final page has the title with two text nodes
      const finalTitle = document.querySelector('.final-title');
      if (finalTitle) {
        // Clear existing content
        finalTitle.innerHTML = '';
        // Add the two lines with a line break
        finalTitle.appendChild(document.createTextNode(t.thanks));
        finalTitle.appendChild(document.createElement('br'));
        finalTitle.appendChild(document.createTextNode(t.forUsing));
      }
      break;

    case 'calculator.html':
      updateElements({
        '#calculator-title': { key: 'calculator-title' },
        '#add-component-btn': { key: 'add-component-btn' },
        '#total-impact': { key: 'total-impact' },
        '#production-volume': { key: 'production-volume' },
        '#calculate-btn': { key: 'calculate-btn' },
        '#back-to-menu': { key: 'back-to-menu' }
      });

      // Update all component cards
      document.querySelectorAll('.component-card').forEach(card => {
        const labels = card.querySelectorAll('label');
        labels.forEach(label => {
          if (label.id === 'component-type') label.textContent = t['component-type'];
          if (label.id === 'material') label.textContent = t['material'];
          if (label.id === 'weight') label.textContent = t['weight'];
        });

        const typeSelect = card.querySelector('.component-type');
        if (typeSelect) {
          const options = typeSelect.querySelectorAll('option');
          options[0].textContent = t['primary-packaging'];
          options[1].textContent = t['secondary-packaging'];
          options[2].textContent = t['tertiary-packaging'];
        }

        const deleteBtn = card.querySelector('.btn-danger');
        if (deleteBtn) deleteBtn.textContent = t['delete-btn'];
      });
      break;

    case 'calculator_result.html':
      updateElements({
        '#results-title': { key: 'results-title' },
        '#total-impact-title': { key: 'total-impact-title' },
        '#lifecycle-analysis': { key: 'lifecycle-analysis' },
        '#production': { key: 'production' },
        '#transport': { key: 'transport' },
        '#usage': { key: 'usage' },
        '#end-of-life': { key: 'end-of-life' },
        '#impact-distribution': { key: 'impact-distribution' },
        '#download-btn': { key: 'download-btn' },
        '#back-to-calculator': { key: 'back-to-calculator' }
      });

      // Update production volume text if it exists
      const volumeInfo = document.querySelector('.metric-value');
      if (volumeInfo && volumeInfo.textContent.includes('Volumen')) {
        const volume = volumeInfo.textContent.match(/\d+/)[0];
        volumeInfo.textContent = t['production-volume-text'].replace('{0}', volume);
      }
      break;
  }
  
  // If there is a language selector on the page, update its value
  const langSelect = document.getElementById('language-select');
  if (langSelect) {
    langSelect.value = lang;
  }
}

// Add function to update component template when adding new components
function updateComponentLanguage(component, lang) {
  const t = translations[lang];
  
  const labels = component.querySelectorAll('label');
  labels.forEach(label => {
    if (label.id === 'component-type') label.textContent = t['component-type'];
    if (label.id === 'material') label.textContent = t['material'];
    if (label.id === 'weight') label.textContent = t['weight'];
  });

  const typeSelect = component.querySelector('.component-type');
  if (typeSelect) {
    const options = typeSelect.querySelectorAll('option');
    options[0].textContent = t['primary-packaging'];
    options[1].textContent = t['secondary-packaging'];
    options[2].textContent = t['tertiary-packaging'];
  }

  const deleteBtn = component.querySelector('.btn-danger');
  if (deleteBtn) deleteBtn.textContent = t['delete-btn'];
}

// Modify the original addComponent function to include language update
const originalAddComponent = window.addComponent;
if (originalAddComponent) {
  window.addComponent = function() {
    originalAddComponent();
    const components = document.querySelectorAll('.component-card');
    const lastComponent = components[components.length - 1];
    if (lastComponent) {
      updateComponentLanguage(lastComponent, getLanguage());
    }
  };
}

// Initialize with the saved language or default to English
document.addEventListener("DOMContentLoaded", function() {
  const currentLang = getLanguage();
  applyLanguage(currentLang);
}); 