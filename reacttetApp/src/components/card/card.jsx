import './style.css'

export function Card(props) {
    return (
            <div className={props.className}>
                <img src={props.src} class={props.class} alt={props.alt}/>
                <p>{props.text}</p>
            </div>
    )
}

