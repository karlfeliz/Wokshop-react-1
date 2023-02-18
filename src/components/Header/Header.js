import './Header.css';
import Logo from '../Logo/Logo';
import Link from '../Link/Link' ;

const socialLinks = [{text: "Facebook", ref:"https://www.facebook.com/TheValleyDBS"},{text: "Instagram", ref:"https://www.instagram.com/thevalleydbs/"},{text: "Twitter", ref:"https://twitter.com/TheValleyDBS?lang=es"}];
const internalLinks = [{text: "Docu React", ref:"https://reactjs.org/"}, {text: "Ir a The Valley", ref:"https://thevalley.es/", variant: "button"}];

const Header = () => {
    return (
        <div className='header'>
            <div className='header__social'>
                {socialLinks.map((link) => {
                    return <Link key={link.link} text={link.text} enlace={link.ref}></Link>

                })}
            </div>
            <Logo></Logo>

            <div className='header__internals'>
                {internalLinks.map((link) => {
                    return <Link key={link.link} text={link.text} enlace={link.ref} variant={link.variant}></Link>

                })}
            </div>
        </div>
    )
}
export default Header;