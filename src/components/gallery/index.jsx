import React, {useState} from 'react';
import '../../styles/gallery.scss';
import Arrowleft from './arrow_back_ios-24px 1.png';
import Arrowright from './arrow_forward_ios-24px 1.png';

// function Gallery({item}) {

function Gallery(props) {

    const [currentSlide, setCurrentSlide] = useState(0);

    function updateSlide (i){
        setCurrentSlide(i);
    };

    function backward() {
        const previousSlide = currentSlide - 1 < 0 ? props.content.length -1 : currentSlide - 1;
        updateSlide(previousSlide);
    }

    function forward() {
        const nextSlide = (currentSlide + 1) % props.content.length;
        updateSlide(nextSlide);
    };

  return (
    <div className='gallery'>
            { props ? (
                <div className='gallery__container'>
                    {props.content.length > 1 ? 
                        <div className='gallery__container__items'>
                            <img src={Arrowleft} onClick={backward} alt='flèche' className='gallery__container__items__left' />
                            <img src={Arrowright} onClick={forward} alt='flèche' className='gallery__container__items__right' />   
                            <div className='gallery__container__items__slides'>{currentSlide + 1} / {props.content.length}</div>   
                        </div>
                    : null}   
                    <img src={props.content[currentSlide]} alt='bannière' className='gallery__container__banner' />                              
                </div>
            ) : null }
    </div>
)}

export default Gallery

