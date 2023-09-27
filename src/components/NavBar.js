import Brand from "./Brand";
import CartWidget from "./CartWidget";


const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">
                <Brand />
            </div>

            <nav className="categorias">
                <ul>
                    <li><a href="#">Platos Principales</a></li>
                    <li><a href="#">Postres</a></li>
                    <li><a href="#">Bebidas</a></li>
                    <li><a href="#">Adicionales</a></li>
                </ul>
            </nav>

            <div className="containerCart">
                <CartWidget/>
            </div>
        </header>
    )
}


export default NavBar;