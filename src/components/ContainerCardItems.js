import CardItem from "./CardItem";
import fetchSimulation from "../fetchSimulation";
import productos from  "../products"
import { useState, useEffect } from "react";
import "../../src/containerCardsItems.css"

const ContainerCardItems = () => {
    const [datos, setDatos] = useState([]);

    useEffect(()=> {
        fetchSimulation(productos, 3000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [])
    
    return(
        <div className="containerCardsItems">
            {
                datos.map(product => (
                    <CardItem 
                    key={product.id}
                    imagen={product.imagen}
                    title={product.title}
                    cantidad={product.stock}
                    precio={product.price}
                    />
                ))
            }
        </div>
    )
}

export default ContainerCardItems;