import React from 'react';
import '../../styles/tags.scss';

function Tag(props) {

  return (
    <div className="tags__bar" >
        <p className="tags__bar__content" >
            {props.content} 
        </p>
    </div>
  );
}

export default Tag;
