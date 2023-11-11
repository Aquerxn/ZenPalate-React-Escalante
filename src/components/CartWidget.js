import cart1 from ".././img/cart1.png"
import { useContext } from "react";
import { listCartContext } from "./ProviderContextoListCart";
import { controllerShowCart } from "./ContextCart";

const CartWidget = () => {
    const { setCartShow, cartShow } = useContext(controllerShowCart)
    const { listCart } = useContext(listCartContext)

    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="containerLength" onClick={showCart}>
            <img src={cart1} alt="cart"></img>
            <span className="cantCart">
                {listCart.length}
            </span>
        </div>
    )
}

export default CartWidget;