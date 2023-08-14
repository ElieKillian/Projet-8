import '../../styles/house.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/gallery';
import data from '../../logements.json';
import Tag from '../../components/tag';
import Host from '../../components/host';
import Stars from '../../components/stars';
import Collapse from '../../components/collapse';
import Notfound from '../../components/Notfound';

function House() {

  document.title = 'Kasa - Logement';

  const { id } = useParams();

  const page = data.find((item) => item.id === id);

  const tags = page.tags;

  if(!page){
    return <Notfound />;
  }

  return (
      <div className='house'>
        <Gallery content={page.pictures} />
        <div className='house__content'>
          <div className='house__content__left'>
            <h2 className='house__content__left__title' >{page.title}</h2>  
            <p className='house__content__left__location'>{page.location}</p>  
            <div className='tags'>
              {tags.map((element) => 
                <Tag content={element}  />
              )}
            </div>
          </div>
          <div className='house__content__right'>
            <Host content={page.host} />
            <Stars content={page.rating} />
          </div>   
        </div>     
        <div className='house__bottom'>
          <div className='house__bottom__left'>
          <Collapse title="Description" content={page.description} /> 
          </div>
          <div className='house__bottom__right'> 
          <Collapse title="Equipements" content={page.equipments} />   
          </div>              
        </div>   
      </div>
)}

export default House