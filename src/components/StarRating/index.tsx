/* eslint-disable indent */
import React, { useState } from 'react';
import { Star, StarContainer } from './styles';

interface StarRatingProps {
  rated?: number;
  disabled?: boolean;
  onChange: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ rated, disabled = false, onChange }) => {
  const [rating, setRating] = useState(0);

  React.useEffect(() => {
    if (rated) {
      setRating(rated);
    }
  }, [rated]);

  const handleStarClick = (selectedRating: number) => {
    setRating(selectedRating);
    onChange(selectedRating);
  };

  return (
    <StarContainer>
      {[1, 2, 3, 4, 5].map((index) => (
        <Star
          key={index}
          disabled={disabled}
          filled={index <= rating}
          onClick={() => disabled ? {} : handleStarClick(index)}
        >
          &#9733;
        </Star>
      ))}
    </StarContainer>
  );
};

export default StarRating;