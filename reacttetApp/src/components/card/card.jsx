import faceImage from '../../assets/faceImage.jpg'
import './style.css'

export function Card(props) {
    return (
        <>
            <div className={props.className}>
                <img src={props.src} class={props.class}/>
                <p>{props.text}</p>
            </div>
        </>
    )
}

