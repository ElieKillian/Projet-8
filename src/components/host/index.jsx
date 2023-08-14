import React from 'react';
import '../../styles/host.scss';

function Host(props){
    return (
        <div className='host'>
            <p className='host__name'>{props.content.name}</p>
            <img src={props.content.picture} alt='owner' className='host__picture'/>
        </div>
      );
} 

export default Host

// key={props.id}