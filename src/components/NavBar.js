import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";



const NavBar = () => {
    return (
        <ContextCart>
            <header>
                <div className="containerBrand">
                    <Brand />
                </div>

                <nav className="categorias">
                <ItemListContainer 
                            itemUno = "Platos Principales"
                            itemDos = "Postres"
                            itemTres = "Bebidas"
                            itemCuatro = "Adicionales"
                        />
                </nav>

                <div className="containerCart">
                    <CartWidget/>
                </div>
                <ContainerCart />
            </header>
        </ContextCart>
    )
}


export default NavBar;