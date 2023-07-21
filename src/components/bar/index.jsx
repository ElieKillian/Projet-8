import React from 'react';
import arrow from './arrow_back_ios-24px 2.png';
// import { useEffect} from 'react';

function Bar(props) {

  // function ClickOnArrow(){
  //   const clickArrow = document.querySelector('.bar__titlebar__arrow');

  //   clickArrow.addEventListener('click', () => {
      
  //   })
      
  // }

  // useEffect(() => {
  //   ClickOnArrow();
  // }, []); 

  return (
    <div className='bar'>
        <div className='bar__titlebar'>
            <h2> {props.title} </h2> 
            <img src={arrow} alt='flèche' className='bar__titlebar__arrow'/>
        </div>

        <p className='bar__textbar'> {props.content} </p>
    </div>
  )
}

export default Bar
