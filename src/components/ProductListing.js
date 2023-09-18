import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ProductListing.css';
import SearchBar from './SearchBar';
import { useDispatch } from 'react-redux';
import { addToWishlist,removeFromWishlist } from '../redux/reducers/WishlistSlicer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import Header from './Header';

export default function ProductListing() {
  const [beers, setBeers] = useState([]);
  const [filteredBeers, setFilteredBeers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers').then((response) => {
      setBeers(response.data);
      setFilteredBeers(response.data);
    });
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);

    const filtered = beers.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBeers(filtered);
  };
  const handleToggleWishlist = (beer) => {
    if (wishlist.includes(beer)) {
      dispatch(removeFromWishlist(beer)); // Dispatch action to remove from wishlist
    } else {
      dispatch(addToWishlist(beer)); // Dispatch action to add to wishlist
    }
  };
  

  return (
    <>
    <Header isHomepage={false} />
    <div className="product-listing">
   
      <h1>Beer List</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="beer-cards">
        {filteredBeers.map((beer) => (
          <div key={beer.id} className="beer-card">
          <div className="wishlist-icon" onClick={() => handleToggleWishlist(beer)}>
      <FavoriteIcon
        color={wishlist.includes(beer) ? 'error' : 'inherit'}
        fontSize="large"
      />
      </div>
            <div className="beer-card-image">
              <img src={beer.image_url} alt={beer.name} />
            </div>
            <div className="beer-card-details">
         
      
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>ABV: {beer.abv}%</p>
              <p>{beer.description}</p>
              {/* <button onClick={() => handleAddToWishlist(beer, dispatch)}>Add to Wishlist</button> */}
            </div>
          </div>
        ))}
        {filteredBeers.length === 0 && (
          <p>No beers found. Please try a different search term.</p>
        )}
      </div>
    </div>
    </>
  );
}
