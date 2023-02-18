import './Logo.css';
import logo from '../../assets/TheValley_horizontal.png'; // Tell webpack this JS file uses this image


const Logo = () =>{
    return <img className='logo' src={logo} alt="Logo" />
}

export default Logo;
