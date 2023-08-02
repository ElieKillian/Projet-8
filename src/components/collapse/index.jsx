import React, { useState } from 'react';
import arrow from './arrow_back_ios-24px 2.png';
import '../../styles/collapse.scss';

function Collapse(props) {
  const [showContent, setShowContent] = useState(true);

  const pressOnCollapse = () => {
    setShowContent(!showContent);
  }

  const content = props.content;
  const testContent = Array.isArray(content) ? (
    content.map((element, index) => <p key={index}>{element}</p>)
  ) : <p>{content}</p> ;


  return (
    <div className="bar" key={showContent}>
      <div className="bar__titlebar">
        <h2>{props.title}</h2>
        <button
          className="bar__titlebar__toggle"
          onClick={pressOnCollapse}
        >
          {showContent ? 
            <img src={arrow} alt='flèche' className='bar__titlebar__toggle__toparrow'/> : <img src={arrow} alt='flèche' className='bar__titlebar__toggle__bottomarrow'/>
          }
        </button>
      </div>
      <div className={showContent ? 'bar__texthide' : 'bar__textshow'} >
        {testContent}
      </div>
    </div>
  );
}

export default Collapse;



