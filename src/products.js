import imagenProducto1 from "../src/img/plato-princial1.png"
import imagenProducto2 from "../src/img/plato-princial2.png"
import imagenProducto3 from "../src/img/plato-princial3.png"
import imagenProducto4 from "../src/img/postre1.png"
import imagenProducto5 from "../src/img/jugo1.png"
import imagenProducto6 from "../src/img/jugo2.png"
import imagenProducto7 from "../src/img/adicionales.png"


const productos = [
    {
        id: 1,
        title: "Pimientos Rellenos",
        description: "",
        stock: 15,
        type: "Platos Principales",
        imagen: imagenProducto1,
        price: 3000,
    },
    {
        id: 2,
        title: "Pasta con Hongos y Espinaca",
        description: "",
        stock: 10,
        type: "Platos Principales",
        imagen: imagenProducto2,
        price: 4000,
    },
    {
        id: 3,
        title: "Salmon con Esparragos",
        description: "",
        stock: 5,
        type: "Platos Principales",
        imagen: imagenProducto3,
        price: 7000,
    },
    {
        id: 4,
        title: "Jugo Tropical",
        description: "",
        stock: 15,
        type: "Bebidas",
        imagen: imagenProducto4,
        price: 2000,
    },
    {
        id: 5,
        title: "Limonada",
        description: "",
        stock: 7,
        type: "Bebidas",
        imagen: imagenProducto5,
        price: 2000,
    },
    {
        id: 6,
        title: "Mousse de Chocolate",
        description: "",
        stock: 8,
        type: "Postres",
        imagen: imagenProducto6,
        price: 3000,
    },
    {
        id: 7,
        title: "Cubiertos",
        description: "",
        stock: 20,
        type: "Adicionales",
        imagen: imagenProducto7,
        price: 500,
    }
]

export default productos;