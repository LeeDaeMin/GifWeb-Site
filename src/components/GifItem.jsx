// import ProtoTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export const GifItem = ({ title, url }) => {
    
    return (
        <div className="card">
            <img src={ url } alt={title} />
            <p>{title}</p>
        </div>
    )
}

// GifItem.protoType = {
//     title: ProtoTypes.string,
//     url: ProtoTypes.string
// }