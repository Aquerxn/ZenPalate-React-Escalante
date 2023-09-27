import Brand from "./Brand";
import CartWidget from "./CartWidget";
import ItemListContainer from "./ItemListContainer";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="containerItemList">
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
        </header>
    )
}


export default NavBar;