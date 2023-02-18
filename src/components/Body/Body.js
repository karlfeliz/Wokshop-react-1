import './Body.css';
import Message from '../Message/Message' ;


const Body = () => {
    return (
        <body className='body'>
            <Message text="Ejercicio React" variant="upper"></Message>
            <Message text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"></Message>
        </body>

    )
}
export default Body;