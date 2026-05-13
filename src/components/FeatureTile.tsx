interface TileContent{
    name: string;
    link: string;
    description: string;
}
import './FeatureTile.css'

export default function FeatureTile(props: TileContent){
    return(
        <>
        <div className="tile">
            <img src={props.link} className="tile-image"/>
            <h3>{props.name}</h3>
            <p className="body2">{props.description}</p>
        </div>
        </>
    )
}