import React, {useState} from 'react';
import StarRatings from 'react-star-ratings';
import FavoriteButton from './FavoriteButton';

const UserAction = ({  }) => {
    const [userRating, setUserRating] = useState(0);
    const handleUserRatingChange = (newRating) => {
      setUserRating(newRating);
    };

    return (
        <div className='userAction'>
            <span>
                <strong>Votre note : </strong>
                <StarRatings
                rating={userRating}
                starDimension="16px"
                starSpacing="2px"
                changeRating={handleUserRatingChange}
                />
            </span>
            <FavoriteButton/>
        </div>
    );
};

export default UserAction;
