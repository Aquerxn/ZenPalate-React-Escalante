import "../../src/containerCart.css";
import close1 from "../img/close1.jpg";
import ItemCart from "./ItemCart";
import clear1 from "../img/clear1.jpg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "./ProviderContextoListCart";

const ContainerCart = () => {

    const { cartShow, setCartShow} = useContext(controllerShowCart);
    const {listCart, clearCart } = useContext(listCartContext);

    const style = {
        display: cartShow
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        
            <div className="cart" style={style} >
                <div className="cerrar">
                    <button className="close" onClick={closeCart}>
                        <img src={close1}></img>
                    </button>
                </div>

                <div className="containerItemsCart">
                    {
                        (listCart.length === 0 ) ? <span className="emptyCart">Tu carrito esta vacio, ¡llenalo!</span>
                        : listCart.map(producto => ( 
                            <ItemCart 
                                key={producto.id}
                                id={producto.id}
                                title={producto.title}
                                image={producto.imagen}
                                quantity={producto.quantity}
                                price={producto.price}
                            />
                        ))
                    }   
                </div>

                <div className="TerminarCompra">
                    
                    <button className="terminar" >
                        Terminar compra
                    </button>

                    <button className="clear" onClick={clearCart}>
                        <img src={clear1}></img>
                    </button>
                </div>
            </div>
        
    )
}

export default ContainerCart;