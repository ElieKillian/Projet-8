import '../../styles/home.scss';
import Banner from '../../components/banner';
import data from '../../logements.json'; 
import { Link } from 'react-router-dom';

function Home() {

  document.title = 'Kasa - Accueil';

  return (
    <div className='home'>
      <Banner className='home__banner' />
      <div className='home__grid'>
        {data.map((item) => (
          <Link to={`/logements/${item.id}`} key={item.id} className='home__grid__card'>
            <p className='home__grid__card__title'>{item.title}</p>
            <img src={item.cover} alt='' className='home__grid__card__img' />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Home
