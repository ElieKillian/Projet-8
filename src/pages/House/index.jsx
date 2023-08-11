import '../../styles/house.scss';
import React from 'react';
import { useParams } from 'react-router-dom';
import Gallery from '../../components/gallery';
import data from '../../logements.json';
import Tags from '../../components/tags';
import Host from '../../components/host';
import Stars from '../../components/stars';
import Collapse from '../../components/collapse';
import Notfound from '../../components/Notfound';

function House() {

  document.title = 'Kasa - Logement';

  const { id } = useParams();

  const page = data.find((item) => item.id === id);

  if(!page){
    return <Notfound />;
  }

  return (
      <div className='house'>
        <Gallery idCurrentItem={id} />
        <div className='house__content'>
          <div className='house__content__left'>
            <h2 className='house__content__left__title' >{page.title}</h2>  
            <p className='house__content__left__location' >{page.location}</p>  
            <Tags idCurrentItem={id}  />
          </div>
          <div className='house__content__right'>
            <Host idCurrentItem={id} />
            <Stars idCurrentItem={id} />
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