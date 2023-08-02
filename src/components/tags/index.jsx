import React from 'react';
import '../../styles/tags.scss';
import data from '../../logements.json';

function Tags({idCurrentItem}) {

  return (
    <div className='tags'>
        {data.map((item) => (
            item.id === idCurrentItem ? (
                    Object.values(item.tags).map((tag) => (
                        <div key={tag} className="tags__bar" >
                            <p className="tags__bar__content" >
                                {tag} 
                            </p>
                        </div>
                    ))
            ) : null
        ))}
    </div>
  );
}

export default Tags;
