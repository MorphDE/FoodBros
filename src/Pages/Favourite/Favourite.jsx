import "./Favourite.css";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import { FavoriteContext } from "../../Context/Context";
import StarIcon from '@mui/icons-material/Star';

const Favourite = () => {

    const { favoriteItems, setFavoriteItems } = useContext(FavoriteContext);

    return (
        <section className="favourite-container">
           <div className="favo-t-container">
            <h2 className="favo-title">YOUR FAVOURITES</h2>
            </div> 
            <div className="balken"></div>
            {favoriteItems.map((item, key) => (
                <div className="favorite-foodcard" key={key}>
                    <p className="favo-name">{item.name}</p>
                    <p className="favo-shortdesc">{item.shortdesc}</p>
                    <div className="price-rating">
                        <p className="favo-price">{item.price} €</p>
                        <p className="rating-star">{item.rating} <StarIcon fontSize="small" style={{ fill: "#ffc700", filter: "drop-shadow(0px 0px 5px #ffc700)"  }}/></p>
                    </div>
                </div>
            ))}
            <Footer/>
        </section>
    );
}
 
export default Favourite;