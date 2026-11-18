const misRecetas = [
    {
        id: 1,
        titulo: "Huevo frito tradicional",
        ingredientes: ["Huevo"],
        tiempo: 5,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Calentar una sartén pequeña con un chorrito de aceite a fuego medio.",
            "Cascar el huevo con cuidado directamente en la sartén.",
            "Cocinar hasta que la clara esté completamente blanca y firme, pero la yema siga tierna.",
            "Salpimentar a gusto y retirar con espátula."
        ]
    },
    {
        id: 2,
        titulo: "Huevo revuelto clásico",
        ingredientes: ["Huevo"],
        tiempo: 5,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Cascar los huevos en un bol, agregar una pizca de sal y batir enérgicamente con tenedor.",
            "Calentar una sartén a fuego bajo con un toque de aceite o manteca.",
            "Verter los huevos y dejar que se asienten unos segundos.",
            "Remover suavemente con cuchara de madera desde los bordes hacia el centro hasta que queden cremosos."
        ]
    },
    {
        id: 3,
        titulo: "Huevo duro perfecto",
        ingredientes: ["Huevo"],
        tiempo: 10,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Colocar el huevo en una pequeña olla con agua fría (que lo cubra por completo).",
            "Llevar a hervor a fuego fuerte.",
            "A partir de que hierve, contar exactamente 9 a 10 minutos para yema firme.",
            "Pasar inmediatamente a un bol con agua fría para cortar la cocción y pelar fácil."
        ]
    },
    {
        id: 4,
        titulo: "Omelette básico",
        ingredientes: ["Huevo"],
        tiempo: 7,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Batir dos huevos en un bol con sal y pimienta.",
            "Verter en una sartén caliente lubricada con aceite.",
            "Mover la sartén para que se distribuya bien. Cuando los bordes se despeguen, doblar al medio.",
            "Cocinar un minuto más de cada lado y servir."
        ]
    },
    {
        id: 5,
        titulo: "Tortilla francesa clásica",
        ingredientes: ["Huevo"],
        tiempo: 6,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Batir dos huevos en un bol con sal.",
            "Verter en la sartén caliente con aceite.",
            "A medida que se cocina la base, enrollar la tortilla sobre sí misma desde un extremo al otro.",
            "Retirar cuando tenga forma de cilindro dorado."
        ]
    },
    {
        id: 6,
        titulo: "Huevos a la copa",
        ingredientes: ["Huevo"],
        tiempo: 4,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Colocar agua en una olla y llevar a hervor.",
            "Introducir el huevo con una cuchara con cuidado para que no se rompa la cáscara.",
            "Dejar hervir exactamente 3 minutos.",
            "Retirar, cortar la parte superior de la cáscara con un cuchillo y comer con cucharita."
        ]
    },
    {
        id: 7,
        titulo: "Huevo pasado por agua",
        ingredientes: ["Huevo"],
        tiempo: 3,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Hervir agua en una olla pequeña.",
            "Sumergir el huevo y cocinar por solo 2 minutos y medio.",
            "Retirar y servir en huevera: la clara estará blanda y la yema totalmente líquida."
        ]
    },
    {
        id: 8,
        titulo: "Huevo a la plancha sin aceite",
        ingredientes: ["Huevo"],
        tiempo: 5,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Calentar una sartén antiadherente limpia a fuego medio.",
            "Cascar el huevo directamente en la sartén seca.",
            "Tapar la sartén con una tapa o plato para que el vapor cocine la parte superior.",
            "Retirar cuando la clara esté firme."
        ]
    },
    {
        id: 9,
        titulo: "Huevo frito con puntilla crujiente",
        ingredientes: ["Huevo"],
        tiempo: 5,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Calentar abundante aceite en una sartén a fuego fuerte.",
            "Cascar el huevo y volcar aceite caliente por encima con una cuchara mientras se fríe.",
            "Lograrás bordes dorados y crujientes ('puntilla') con yema blanda."
        ]
    },
    {
        id: 10,
        titulo: "Revuelto rápido en microondas",
        ingredientes: ["Huevo"],
        tiempo: 2,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Romper un huevo en una taza apta para microondas, agregar sal y batir con tenedor.",
            "Llevar al microondas por 30 segundos, sacar, revolver con tenedor y calentar 20 segundos más.",
            "¡Listo para comer directo de la taza!"
        ]
    },
    {
        id: 11,
        titulo: "Huevo poché (pochado)",
        ingredientes: ["Huevo"],
        tiempo: 5,
        dificultad: "Media",
        porciones: 1,
        pasos: [
            "Poner a calentar agua en una olla chica con un chorrito de vinagre (sin que llegue a hervor fuerte).",
            "Con una cuchara, hacer un remolino rápido en el centro del agua.",
            "Cascar el huevo en el centro del remolino con cuidado.",
            "Cocinar durante 3 minutos exactos y retirar con espumadera."
        ]
    },
    {
        id: 12,
        titulo: "Huevo poché en taza (método facilísimo)",
        ingredientes: ["Huevo"],
        tiempo: 4,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Forrar el interior de una taza con un trozo de film transparente, pincelado con aceite.",
            "Cascar el huevo dentro del film, cerrar atando las puntas como una bolsita.",
            "Sumergir la bolsita en agua hirviendo durante 3 minutos y medio.",
            "Retirar el film con cuidado y servir."
        ]
    },
    {
        id: 13,
        titulo: "Revuelto de huevo con agua (esponjoso)",
        ingredientes: ["Huevo"],
        tiempo: 5,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Batir dos huevos agregando una cucharadita de agua y sal.",
            "Verter en sartén a fuego muy bajo con aceite.",
            "Revolver constantemente despacio; el vapor del agua hará que queden súper esponjosos.",
            "Retirar antes de que se sequen del todo."
        ]
    },
    {
        id: 14,
        titulo: "Huevos duros cortados al medio con aceite y sal",
        ingredientes: ["Huevo"],
        tiempo: 10,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Hervir el huevo durante 10 minutos y pelarlo.",
            "Cortarlo al medio a lo largo sobre un plato.",
            "Condimentar con un chorrito de aceite, sal fina y pimienta a gusto."
        ]
    },
    {
        id: 15,
        titulo: "Huevos picados rápidos",
        ingredientes: ["Huevo"],
        tiempo: 8,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Hervir el huevo hasta que esté duro (10 minutos) y pelarlo.",
            "Picarlo completamente con un cuchillo sobre la tabla.",
            "Mezclar con un toque de aceite, sal y pimienta para acompañar cualquier plato rápido."
        ]
    },
    {
        id: 16,
        titulo: "Huevo duro rallado",
        ingredientes: ["Huevo"],
        tiempo: 12,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Hervir el huevo hasta que esté bien duro y dejarlo enfriar por completo.",
            "Pasarlo directamente por el lado grueso de un rallador de cocina.",
            "Queda con una textura ideal para decorar o mezclar con otros ingredientes."
        ]
    },
    {
        id: 17,
        titulo: "Omelette soplado al plato",
        ingredientes: ["Huevo"],
        tiempo: 8,
        dificultad: "Media",
        porciones: 1,
        pasos: [
            "Separar la clara de la yema. Batir la clara a punto nieve.",
            "Incorporar la yema con movimientos suaves para no bajar el batido.",
            "Cocinar en sartén a fuego bajo con tapa por 4 minutos y doblar."
        ]
    },
    {
        id: 18,
        titulo: "Tortilla de claras rápida",
        ingredientes: ["Huevo"],
        tiempo: 5,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Separar las claras de dos huevos y descartar (o guardar) las yemas.",
            "Batir las claras ligeramente con sal.",
            "Cocinar en sartén caliente con unas gotitas de aceite hasta que cuaje."
        ]
    },
    {
        id: 19,
        titulo: "Huevo duro marinado en sal",
        ingredientes: ["Huevo"],
        tiempo: 12,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Hervir el huevo, pelarlo y cortarlo al cuarto.",
            "Dejar reposar 5 minutos en un bol con sal fina y un toque de aceite de oliva."
        ]
    },
    {
        id: 20,
        titulo: "Huevo estofado exprés en agua",
        ingredientes: ["Huevo"],
        tiempo: 6,
        dificultad: "Fácil",
        porciones: 1,
        pasos: [
            "Calentar una taza de agua en una sartén chica con sal y un chorrito de aceite.",
            "Cuando rompa el hervor suave, cascar el huevo dentro.",
            "Tapar y dejar cocinar 4 minutos hasta que la clara envuelva la yema de forma suave."
        ]
    }
];