import {useState} from 'react';
import StarRatings from 'react-star-ratings';

const UserAction = () => {
    const [userRating, setUserRating] = useState(0);
    const handleUserRatingChange = (newRating) => {
      setUserRating(newRating);
    };

    return (
        <div className='userAction'>
            <div>
                <strong>Votre note : </strong>
                <StarRatings
                rating={userRating}
                starDimension="16px"
                starSpacing="2px"
                changeRating={handleUserRatingChange}
                />
            </div>
        </div>
    );
};

export default UserAction;
