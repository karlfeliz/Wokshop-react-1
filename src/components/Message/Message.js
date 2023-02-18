import './Message.css';

const Message=(props)=>{
    return props.variant === 'upper' ? <h2 className='title'>{props.text}</h2> : <p className='text'>{props.text}</p>
}
export default Message;