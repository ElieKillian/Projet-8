import React from 'react';
import data from '../../logements.json';
import '../../styles/stars.scss';
import Star from './Vector.png';
import EmptyStar from './Vectorempty.png';

function Rating({idCurrentItem}){

    const currentItem = data.find((item) => item.id === idCurrentItem);
    const rating = currentItem.rating;

    return (
        <div className='rating' key={currentItem}>
            <div className='rating__stars'>
                { rating < 1 ?  <img src={EmptyStar} alt="empty" /> : <img src={Star} alt='star' /> }
                { rating < 2 ?  <img src={EmptyStar} alt="empty" /> : <img src={Star} alt='star' /> }
                { rating < 3 ?  <img src={EmptyStar} alt="empty" /> : <img src={Star} alt='star' /> }
                { rating < 4 ?  <img src={EmptyStar} alt="empty" /> : <img src={Star} alt='star' /> }
                { rating < 5 ?  <img src={EmptyStar} alt="empty" /> : <img src={Star} alt='star' /> }
            </div>
        </div>
      );
} 

export default Rating