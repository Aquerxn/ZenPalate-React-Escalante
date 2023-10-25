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
        description: "Una deliciosa fusión de pimientos jugosos y una mezcla irresistible de carne, arroz y hierbas frescas que deleitarán tu paladar con su sabor y presentación impecable.",
        stock: 15,
        type: "Platos Principales",
        imagen: imagenProducto1,
        price: 3000,
    },
    {
        id: 2,
        title: "Pasta con Hongos y Espinaca",
        description: "Nuestra Pasta con Hongos y Espinacas es una delicia reconfortante que combina a la perfección la suavidad de los hongos salteados, la frescura de las espinacas y la textura perfecta de la pasta al dente. Cada bocado es una experiencia de sabores terrosos y frescos que se entrelazan en armonía, ofreciendo una experiencia culinaria gratificante y llena de calidez.",
        stock: 10,
        type: "Platos Principales",
        imagen: imagenProducto2,
        price: 4000,
    },
    {
        id: 3,
        title: "Salmon con Esparragos",
        description: "Nuestro Salmon con Espárragos es una obra maestra de la cocina contemporánea, que combina a la perfección la frescura del salmón perfectamente cocido con la textura tierna y crujiente de los espárragos frescos. Cada bocado es una explosión de sabores delicados y saludables, realzados por una combinación sutil de condimentos y hierbas frescas que elevan la experiencia culinaria a nuevas alturas de satisfacción y placer.",
        stock: 5,
        type: "Platos Principales",
        imagen: imagenProducto3,
        price: 7000,
    },
    {
        id: 4,
        title: "Jugo Tropical",
        description: "Nuestro Jugo Tropical es una refrescante mezcla de sabores exóticos, que combina la dulzura natural de una variedad de frutas tropicales maduras y jugosas. Cada sorbo ofrece una explosión de frescura y vitalidad, transportando a los sentidos a un paraíso de sabores tropicales que capturan la esencia del verano en cada vaso.",
        stock: 15,
        type: "Bebidas",
        imagen: imagenProducto6,
        price: 2000,
    },
    {
        id: 5,
        title: "Limonada",
        description: "Nuestra Limonada es un refrescante elixir que equilibra a la perfección la acidez vibrante del limón recién exprimido con la justa cantidad de dulzura. Cada sorbo ofrece una experiencia refrescante y revitalizante que despierta los sentidos y deja una sensación de frescura en el paladar.",
        stock: 7,
        type: "Bebidas",
        imagen: imagenProducto5,
        price: 2000,
    },
    {
        id: 6,
        title: "Mousse de Chocolate",
        description: "Nuestro Mousse de Chocolate es un deleite irresistible que combina la suavidad sedosa del chocolate con una textura ligera y aireada. Cada cucharada es una experiencia indulgente que envuelve el paladar en un abrazo de sabor a chocolate intenso y satisfactorio, creando un placer culinario inigualable para los amantes del chocolate.",
        stock: 8,
        type: "Postres",
        imagen: imagenProducto4,
        price: 3000,
    },
    {
        id: 7,
        title: "Cubiertos",
        description: "Puedes pedir cubiertos adicionales con tu comida favorita.",
        stock: 20,
        type: "Adicionales",
        imagen: imagenProducto7,
        price: 500,
    }
]

export default productos;