import './Footer.css';

const date = new Date();
const fullYear = date.getFullYear();

const Footer = () => {
    return (
        <footer className='footer'>
            <p className='footer__text'>Copyright{fullYear}</p>
        </footer>
    )
}
export default Footer;