import React, { useState } from 'react';
import arrow from './arrow_back_ios-24px 2.png';
import '../../styles/collapse.scss';

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <div className="bar">
      <div className="bar__titlebar">
        <h2>{props.title}</h2>
        {/* {props.title && <h1>{props.title}</h1>}  */}
        <button
          className="bar__titlebar__toggle"
          onClick={handleToggleCollapse}
        >
          {isCollapsed ? 
            <img src={arrow} alt='flèche' className='bar__titlebar__toggle__toparrow'/> : <img src={arrow} alt='flèche' className='bar__titlebar__toggle__bottomarrow'/>
          }
        </button>
      </div>
      <div className={isCollapsed ? 'bar__texthide' : 'bar__textshow'} >
        <p className={isCollapsed ? 'bar__texthide__text' : 'bar__textshow__text'}>
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default Collapse;



