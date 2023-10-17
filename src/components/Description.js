const Description = (props) => {
    return(
        <div className="cardDescription">
            <h3 className="title">
                {props.title}
            </h3>

            <span className="description">
                <span className="descriptionTitle">Descripcion</span>
                <p className="descripcion">
                    {props.parrafo}
                </p>
            </span>

            <span className="cant">
                cantidad: {props.cantidad}
            </span>

            <span className="precio">
                ${props.precio}
            </span>
        </div>
    )
}

export default Description;