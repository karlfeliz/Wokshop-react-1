import './Link.css';


const Link = (props) => {
    return (
        props.variant === 'button' ? <a href={props.enlace} className='link link__variant'>{props.text}</a> :
        <a href={props.enlace} className='link'>{props.text}</a>
    )


}

export default Link;