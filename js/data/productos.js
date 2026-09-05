// Catalog dataset exposed as a global (globalThis.productos) so plain <script> tags work on static hosting without a build step.
const productos = [
  {
    id: 1,
    nombre: "Aparador Uspallata",
    precio: 890000,
    categoria: "Aparadores",
    descripcion: "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    medidas: "180 x 45 x 75 cm",
    materiales: "Nogal macizo FSC®, herrajes de latón",
    imagen: "assets/img/Aparador Uspallata.png",
    destacado: true,
    detalles: {
      acabado: "Aceite natural ecológico",
      peso: "68 kg",
      capacidad: "6 compartimentos interiores"
    }
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    precio: 720000,
    categoria: "Bibliotecas",
    descripcion: "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    medidas: "100 x 35 x 200 cm",
    materiales: "Estructura de acero, estantes de roble",
    imagen: "assets/img/Biblioteca Recoleta.png",
    destacado: false,
    detalles: {
      acabado: "Laca mate ecológica",
      capacidad: "45 kg por estante",
      modulares: "5 estantes ajustables"
    }
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    precio: 480000,
    categoria: "Sillones",
    descripcion: "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    medidas: "80 x 75 x 85 cm",
    materiales: "Guatambú macizo, tela bouclé",
    imagen: "assets/img/Butaca Mendoza.png",
    destacado: true,
    detalles: {
      acabado: "Cera vegetal, tapizado premium",
      tapizado: "Repelente al agua y manchas",
      confort: "Espuma alta densidad"
    }
  },
  {
    id: 4,
    nombre: "Escritorio Costa",
    precio: 560000,
    categoria: "Escritorios",
    descripcion: "Escritorio compacto con cajón organizado y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    medidas: "120 x 60 x 75 cm",
    materiales: "Bambú laminado, herrajes ocultos",
    imagen: "assets/img/Escritorio Costa.png",
    destacado: false,
    detalles: {
      acabado: "Laca mate resistente",
      almacenamiento: "1 cajón con organizador",
      cables: "Pasacables integrado"
    }
  },
  {
    id: 5,
    nombre: "Mesa Comedor Pampa",
    precio: 950000,
    categoria: "Mesas",
    descripcion: "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    medidas: "160-240 x 90 x 75 cm",
    materiales: "Roble macizo FSC®, mecanismo alemán",
    imagen: "assets/img/Mesa Comedor Pampa.png",
    destacado: true,
    detalles: {
      acabado: "Aceite-cera natural",
      capacidad: "6-10 comensales",
      extension: "Sistema de mariposa central"
    }
  },
  {
    id: 6,
    nombre: "Mesa de Centro Araucaria",
    precio: 340000,
    categoria: "Mesas",
    descripcion: "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    medidas: "90 x 90 x 45 cm",
    materiales: "Sobre de mármol Patagonia, patas de nogal",
    imagen: "assets/img/Mesa de Centro Araucaria.png",
    destacado: false,
    detalles: {
      acabado: "Mármol pulido, aceite natural en madera",
      peso: "42 kg",
      cargaMaxima: "25 kg distribuidos"
    }
  },
  {
    id: 7,
    nombre: "Mesa de Noche Aconcagua",
    precio: 230000,
    categoria: "Dormitorio",
    descripcion: "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    medidas: "45 x 35 x 60 cm",
    materiales: "Roble macizo FSC®, herrajes soft-close",
    imagen: "assets/img/Mesa de Noche Aconcagua.png",
    destacado: false,
    detalles: {
      acabado: "Barniz mate de poliuretano",
      almacenamiento: "1 cajón + repisa inferior",
      caracteristicas: "Cajón con cierre suave"
    }
  },
  {
    id: 8,
    nombre: "Silla de Trabajo Belgrano",
    precio: 290000,
    categoria: "Sillas",
    descripcion: "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    medidas: "60 x 60 x 90-100 cm",
    materiales: "Malla técnica, tejido reciclado",
    imagen: "assets/img/Silla de Trabajo Belgrano.png",
    destacado: false,
    detalles: {
      acabado: "Base cromada, tapizado premium",
      regulacion: "Altura + inclinación respaldo",
      certificacion: "Ergonomía europea EN 1335"
    }
  },
  {
    id: 9,
    nombre: "Sillas Córdoba",
    precio: 620000,
    categoria: "Sillas",
    descripcion: "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    medidas: "45 x 52 x 80 cm (cada una)",
    materiales: "Contrachapado nogal, tubo de acero",
    imagen: "assets/img/Sillas Córdoba.png",
    destacado: false,
    detalles: {
      acabado: "Laca mate, pintura epoxi",
      apilables: "Hasta 6 sillas",
      incluye: "Set de 4 sillas"
    }
  },
  {
    id: 10,
    nombre: "Sillón Copacabana",
    precio: 780000,
    categoria: "Sillones",
    descripcion: "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    medidas: "90 x 85 x 95 cm",
    materiales: "Cuero curtido vegetal, acero pintado",
    imagen: "assets/img/Sillón Copacabana.png",
    destacado: false,
    detalles: {
      acabado: "Cuero anilina premium",
      rotacion: "360° silenciosa y suave",
      garantia: "10 años en estructura"
    }
  },
  {
    id: 11,
    nombre: "Sofá Patagonia",
    precio: 1250000,
    categoria: "Sofas",
    descripcion: "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    medidas: "220 x 90 x 80 cm",
    materiales: "Madera de eucalipto certificada FSC®",
    imagen: "assets/img/Sofá Patagonia.png",
    destacado: true,
    detalles: {
      tapizado: "Lino 100% natural premium",
      relleno: "Espuma HR + plumón reciclado",
      sostenibilidad: "Materiales 100% reciclables"
    }
  }
];

// Share the dataset with future views (catalogo.js, detalle.js, index.js, cart.js).
globalThis.productos = productos;
