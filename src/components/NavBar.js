import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
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
        </header>
    )
}


export default NavBar;