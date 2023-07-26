import '../../styles/home.scss';
import Banner from '../../components/banner';

function Home() {
  return (
    <div className='home'>
      <Banner className='home__banner' />
      <h1> Page d'accueil 🏠</h1>
    </div>
  )
}

export default Home
