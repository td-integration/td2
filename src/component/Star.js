import React, { useState } from 'react';
import './star.css';

const Star = () => {
  const [stars, setStars] = useState([false, false, false, false,false]);

  const handleClick = (clickedIndex) => {
    // Toggle the state of the clicked star and all previous stars
    const updatedStars = stars.map((_, index) => index <= clickedIndex);

    setStars(updatedStars);
  };

  return (
    <div className='star'>
      {stars.map((isOn, index) => (
        <img
          key={index}
          src={isOn ? process.env.PUBLIC_URL + 'star_on.png' : process.env.PUBLIC_URL + 'star_off.png'}
          onClick={() => handleClick(index)}
          alt={`star-${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Star;
