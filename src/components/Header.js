import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';

export default function Header({ isHomepage }) {
  const navigate = useNavigate();

  const handleNavigateToWishlist = () => {
    navigate('/wishlist');
  };
  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className='header'>
      <div className='logo'>
        <h3>Funk Beer</h3>
      </div>
      <div className='header_right'>
      <div className='header_right_one'><h3 onClick={handleNavigateToWishlist}>Wishlist</h3></div>
      {!isHomepage && ( // Render "Logout" option if not on the homepage
          <div className='header_right_two'>
            <h3 onClick={handleLogout}>Logout</h3>
          </div>
        )}
        
      </div>
    </div>
  );
}
