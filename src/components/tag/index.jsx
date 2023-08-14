import React from 'react';
import '../../styles/tags.scss';

function Tag(props) {

  return (
    <div key={props.tag} className="tags__bar" >
        <p className="tags__bar__content" >
            {props.tag} 
        </p>
    </div>
  );
}

export default Tag;
