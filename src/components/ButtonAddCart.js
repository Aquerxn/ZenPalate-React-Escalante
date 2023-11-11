import { useContext } from "react";
import { listCartContext } from "./ProviderContextoListCart";
import cart1 from "../img/cart1.png"

const ButtonAddCart = ( {id, img} ) => {
    
    let {addProduct } = useContext(listCartContext)

    const handlerClick = () => { 
        addProduct(id)
    }
    
    return(
        <button id="addCart" onClick={handlerClick}>
            <img src={cart1} alt="add"></img>
        </button>
    )
}

export default ButtonAddCart;