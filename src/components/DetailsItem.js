import Image from "./Image";
import Description from "./Description";
import "../detailsItem.css"
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./ButtonDetalles";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {

        setDatos([])

        fetchSimultion(productos.filter( flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])


    return(
        <div className="detailsItem">
            {
                datos.map(items => (
                    <>
                    <div className="containerLeft">
                        <Image imagen={datos[0].imageProduct}
                        />
                    </div>

                    <div className="containerRight">
                        <Description 
                        title={datos[0].title}
                        parrafo={datos[0].parrafo}
                        cantidad={datos[0].cantidad}
                        precio={datos[0].precio}
                        />
                    </div>

                    <div className="buttons">
                        <AddCantCart 
                        cantidad={5}
                        />

                        <ButtonDetalles
                        txt="Agregar al carrito"
                        />
                    </div>
                        </>
                
                
                
                ))
            }
        </div>
    )
}