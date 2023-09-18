import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../redux/reducers/WishlistSlicer';
import FavoriteIcon from '@mui/icons-material/Favorite'; // Import the wishlist icon
import Header from './Header';
import './Wishlist.css'
function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (beer) => {
    dispatch(removeFromWishlist(beer));
  };

  return (
    <div>
    <Header isHomepage={false} />
      <h1>Wishlist</h1>
      <div className="beer-cards" >
        {wishlist.map((beer) => (
          <div key={beer.id} className="beer-card" style={{marginLeft:"2%",marginRight:"2%"}}>
            <div className="wishlist-icon" onClick={() => handleRemoveFromWishlist(beer)}>
              <FavoriteIcon color="error" fontSize="large" />
            </div>
            <div className="beer-card-image">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="beer-card-details">
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>ABV: {beer.abv}%</p>
              <p>{beer.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;
