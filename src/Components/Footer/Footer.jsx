import "./Footer.css";
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <section className="footer-container">
            <NavLink to="/"><HomeIcon fontSize="inherit"/></NavLink>
            <NavLink to="/favourites" ><FavoriteIcon fontSize="inherit"/></NavLink>
            <NavLink to="/cart"><ShoppingBasketIcon fontSize="inherit"/></NavLink>
            <NavLink to="/profile"><AccountCircleIcon fontSize="inherit"/></NavLink>
        </section>
    );
}
 
export default Footer;