import '../../styles/house.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Gallery from '../../components/gallery';
import Tag from '../../components/tag';
import Host from '../../components/host';
import Stars from '../../components/stars';
import Collapse from '../../components/collapse';
import Notfound from '../../components/Notfound';

function House() {

  document.title = 'Kasa - Logement';

  const { id } = useParams();
  const [load, setLoad] =useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('../logements.json');
        const jsonData = await response.json();
        setData(jsonData);
        setLoad(false);
      } catch {
        setError(true);
      }
    } 
    fetchData();
  }, []);

  if (error === true){
    return null;
  }

  const itemUsed = data.find((item) => item.id === id);

  if (!itemUsed){
    if(load){
      return null
    } else {
      return <Notfound />
    }
  }

  const tags = itemUsed.tags;

  return (
      <div className='house' key={itemUsed.id}>
        <Gallery content={itemUsed.pictures} />
        <div className='house__content'>
          <div className='house__content__left'>
            <h2 className='house__content__left__title' >{itemUsed.title}</h2>  
            <p className='house__content__left__location'>{itemUsed.location}</p>  
            <div className='tags'>
              {tags.map((element) => 
                <Tag content={element}  />
              )}
            </div>
          </div>
          <div className='house__content__right'>
            <Host content={itemUsed.host} />
            <Stars content={itemUsed.rating} />
          </div>   
        </div>     
        <div className='house__bottom'>
          <div className='house__bottom__left'>
          <Collapse title="Description" content={itemUsed.description} /> 
          </div>
          <div className='house__bottom__right'> 
          <Collapse title="Equipements" content={itemUsed.equipments} />   
          </div>              
        </div>   
      </div>
)}

export default House