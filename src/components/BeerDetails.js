// BeerDetails.js
import React from 'react';

function BeerDetails({ beer }) {
  return (
    <div className="beer-details">
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>ABV: {beer.abv}%</p>
      <p>{beer.description}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default BeerDetails;
