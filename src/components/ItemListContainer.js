import { Link } from "react-router-dom"

const ItemListContainer = (props) => {
    return(
        <ul >
            <li>
                <Link to="category/Platos Principales"> 
                    {props.itemUno} 
                </Link>
            </li>

            <li>
                <Link to="category/Postres">
                    {props.itemDos}
                </Link>
            </li>

            <li>
                <Link to="category/Bebidas">
                    {props.itemTres}
                </Link>
            </li>

            <li>
                <Link to="category/Adicionales">
                    {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;