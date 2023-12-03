import ProtoTypes from 'prop-types'
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/userFetchGifs";
// eslint-disable-next-line react/prop-types
export const Gifgrid = ({ category }) => {

    const {images, isLoading} = useFetchGifs(category);

    return (
    <>
        <h3>{category}</h3>
        {
            isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
            {
                images.map(( image ) => (
                    <GifItem  
                        key={image.id}
                        { ...image }
                    />
                ))
            }
        </div>
    </>
    )
}

Gifgrid.protoType = {
    category: ProtoTypes.string
}


