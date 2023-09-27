import cart from ".././img/cart.png"

const CartWidget = () => {
    return(
        <div className="containerCant">
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                3
            </span>
        </div>
    )
}

export default CartWidget;