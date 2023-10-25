import Image from "./Image";
import "../../src/cardItem.css"
import Description from "./Description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import {Link} from "react-router-dom"
import cart1 from "../img/cart1.png"

const CardItem = (props) => {
    return(
        <div className="cardItem">
            <Image image={props.imagen}/>
            <Description 
            title={props.title}
            cantidad = {props.cantidad}
            precio = {props.precio}
            />
            <div className="buttons">
            <Link to={ `/item/${props.id}`}>
                    <ButtonDetalles 
                        txt="Ver detalles" 
                    />
                </Link>

                <ButtonAddCart 
                    id={props.id}
                    image={cart1}
                />
            </div>
        </div>    
        )
}

export default CardItem;