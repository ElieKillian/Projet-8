import React, {useState} from 'react';
import '../../styles/gallery.scss';
import Arrowleft from './arrow_back_ios-24px 1.png';
import Arrowright from './arrow_forward_ios-24px 1.png';

function Gallery({item}) {

    const [currentSlide, setCurrentSlide] = useState(0);

    function updateSlide (i){
        setCurrentSlide(i);
    };

    function backward() {
        const previousSlide = currentSlide - 1 < 0 ? item.pictures.length -1 : currentSlide - 1;
        updateSlide(previousSlide);
    }

    function forward() {
        const nextSlide = (currentSlide + 1) % item.pictures.length;
        updateSlide(nextSlide);
    };

  return (
    <div className='gallery'>
            { item ? (
                <div className='gallery__container'>
                    {item.pictures.length > 1 ? 
                        <div className='gallery__container__items'>
                            <img src={Arrowleft} onClick={backward} alt='flèche' className='gallery__container__items__left' />
                            <img src={Arrowright} onClick={forward} alt='flèche' className='gallery__container__items__right' />   
                            <div className='gallery__container__items__slides'>{currentSlide + 1} / {item.pictures.length}</div>   
                        </div>
                    : null}   
                    <img src={item.pictures[currentSlide]} alt='bannière' className='gallery__container__banner' />                              
                </div>
            ) : null }
    </div>
)}

export default Gallery

