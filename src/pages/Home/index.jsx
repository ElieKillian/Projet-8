import '../../styles/home.scss';
import Banner from '../../components/banner';
import Card from '../../components/card';
import React from 'react';
import { useState, useEffect } from 'react';


function Home() {

  document.title = 'Kasa - Accueil';

  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('./logements.json');
        const jsonData = await response.json();
        setData(jsonData);
      } catch {
        setError(true);
      }
    }
    fetchData();
  }, []);
 
  if (error === true){
    return null;
  }

  return (
    <div className='home'>
      <Banner className='home__banner' key='banner' />
      <div className='home__grid'>
        {data.map((item) => (
          <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    </div>
  )
}

export default Home
