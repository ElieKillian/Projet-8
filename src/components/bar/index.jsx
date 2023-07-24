import React, { useState } from 'react';
import arrow from './arrow_back_ios-24px 2.png';
import '../../styles/largebar.scss';

function Collapse(props) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  }

  const collapseStyle = {
    display: isCollapsed ? 'none' : 'block'
  };

  return (
    <div className="bar">
      <div className="bar__titlebar">
        <h2>{props.title}</h2>
        <button
          className="bar__titlebar__button"
          onClick={handleToggleCollapse}
        >
          {isCollapsed ? 
            <img src={arrow} alt='flèche' className='bar__titlebar__button__toparrow'/> : <img src={arrow} alt='flèche' className='bar__titlebar__button__bottomarrow'
          />}
        </button>
      </div>
      <div className="bar__textbar" style={collapseStyle}>
        <p className='bar__textbar__text'>{props.content}</p>
      </div>
    </div>
  );
}

export default Collapse;


