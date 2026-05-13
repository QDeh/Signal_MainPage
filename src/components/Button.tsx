interface ButtonContent{
    name: string;
    link: string;
}
import './Button.css'

export default function Button(props: ButtonContent){
    return(
        <>
        <a href={props.link} className='button'>{props.name}</a>
        </>
    )
}