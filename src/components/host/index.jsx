import React from 'react';
import data from '../../logements.json';
import '../../styles/host.scss';

function Host({idCurrentItem}){
    return (
        <div>
            {data.map((item) => (
                item.id === idCurrentItem ? (
                    <div className='host' key={item.id}>
                        <p className='host__name'>{item.host.name}</p>
                        <img src={item.host.picture} alt='owner' className='host__picture'/>
                    </div>
                ) : null
            ))}
        </div>
      );
} 

export default Host