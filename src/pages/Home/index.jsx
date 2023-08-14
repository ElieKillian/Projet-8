import '../../styles/home.scss';
import Banner from '../../components/banner';
import Card from '../../components/card';
import data from '../../logements.json'; 

function Home() {

  document.title = 'Kasa - Accueil';

  return (
    <div className='home'>
      <Banner className='home__banner' />
      <div className='home__grid'>
        {data.map((item) => (
          <Card id={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    </div>
  )
}

export default Home
