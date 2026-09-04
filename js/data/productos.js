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
    destacado: true
  },
  {
    id: 2,
    nombre: "Biblioteca Recoleta",
    precio: 720000,
    categoria: "Bibliotecas",
    descripcion: "Biblioteca alta de cinco estantes regulables, pensada para colecciones que crecen. Ensambles a la vista que celebran el oficio ebanista.",
    medidas: "120 x 35 x 200 cm",
    materiales: "Nogal macizo, estantes de guatambu",
    imagen: "assets/img/Biblioteca Recoleta.png",
    destacado: false
  },
  {
    id: 3,
    nombre: "Butaca Mendoza",
    precio: 480000,
    categoria: "Sillones",
    descripcion: "Butaca de lectura con respaldo envolvente y apoyabrazos anchos. Su tapizado de lino natural invita a quedarse un rato mas.",
    medidas: "75 x 80 x 78 cm",
    materiales: "Roble macizo, tapizado de lino natural",
    imagen: "assets/img/Butaca Mendoza.png",
    destacado: true
  },
  {
    id: 4,
    nombre: "Escritorio Costa",
    precio: 560000,
    categoria: "Escritorios",
    descripcion: "Escritorio de tapa amplia con cajonera lateral y pasacables oculto. Disenado para trabajar comodo sin perder la elegancia del ambiente.",
    medidas: "140 x 65 x 75 cm",
    materiales: "Paraiso macizo, detalles en cuero vacuno",
    imagen: "assets/img/Escritorio Costa.png",
    destacado: false
  },
  {
    id: 5,
    nombre: "Mesa Comedor Pampa",
    precio: 950000,
    categoria: "Mesas",
    descripcion: "Mesa de comedor para ocho personas, de tapa generosa y patas esculpidas. El corazon de la casa, hecho para sobremesas largas.",
    medidas: "220 x 95 x 75 cm",
    materiales: "Algarrobo macizo recuperado, cera natural",
    imagen: "assets/img/Mesa Comedor Pampa.png",
    destacado: true
  },
  {
    id: 6,
    nombre: "Mesa de Centro Araucaria",
    precio: 340000,
    categoria: "Mesas",
    descripcion: "Mesa baja de centro con estante inferior para libros y objetos. Equilibra el living con su veta marcada y su base liviana.",
    medidas: "110 x 60 x 40 cm",
    materiales: "Araucaria maciza, base de hierro patinado",
    imagen: "assets/img/Mesa de Centro Araucaria.png",
    destacado: false
  },
  {
    id: 7,
    nombre: "Mesa de Noche Aconcagua",
    precio: 230000,
    categoria: "Dormitorio",
    descripcion: "Mesa de noche compacta con cajon de cierre suave y estante abierto. Todo lo esencial al alcance de la mano, nada de mas.",
    medidas: "50 x 40 x 55 cm",
    materiales: "Lenga maciza, correderas de madera",
    imagen: "assets/img/Mesa de Noche Aconcagua.png",
    destacado: false
  },
  {
    id: 8,
    nombre: "Silla de Trabajo Belgrano",
    precio: 290000,
    categoria: "Sillas",
    descripcion: "Silla de trabajo ergonomica con asiento tapizado en cuero y respaldo curvo. Firmeza artesanal para jornadas largas.",
    medidas: "48 x 52 x 82 cm",
    materiales: "Guatambu macizo, asiento de cuero vacuno",
    imagen: "assets/img/Silla de Trabajo Belgrano.png",
    destacado: false
  },
  {
    id: 9,
    nombre: "Sillas Cordoba",
    precio: 620000,
    categoria: "Sillas",
    descripcion: "Juego de dos sillas de comedor con asiento de esterillado artesanal. Livianas, apilables y de una calidez inconfundible.",
    medidas: "48 x 50 x 80 cm por unidad",
    materiales: "Roble macizo, esterillado artesanal",
    imagen: "assets/img/Sillas Córdoba.png",
    destacado: false
  },
  {
    id: 10,
    nombre: "Sillon Copacabana",
    precio: 780000,
    categoria: "Sillones",
    descripcion: "Sillon de dos cuerpos con almohadones mullidos y funda desmontable. Un abrazo de bouclé para las tardes de lluvia.",
    medidas: "160 x 85 x 80 cm",
    materiales: "Guatambu macizo, tapizado de boucle",
    imagen: "assets/img/Sillón Copacabana.png",
    destacado: false
  },
  {
    id: 11,
    nombre: "Sofa Patagonia",
    precio: 1250000,
    categoria: "Sofas",
    descripcion: "Sofa de tres cuerpos tapizado en lana patagonica, con estructura reforzada de lenga. La pieza insignia del taller Hermanos Jota.",
    medidas: "210 x 90 x 82 cm",
    materiales: "Lenga maciza, tapizado de lana patagonica",
    imagen: "assets/img/Sofá Patagonia.png",
    destacado: true
  }
];

// Share the dataset with future views (catalogo.js, detalle.js, index.js, cart.js).
globalThis.productos = productos;
