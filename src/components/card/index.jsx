import { Link } from 'react-router-dom';
import '../../styles/card.scss';


function Card(props) {
    return (
        <Link to={`/logements/${props.id}`} key={props.id} className='home__grid__card'>
            <p className='home__grid__card__title'>{props.title}</p>
            <img src={props.cover} alt='couverture' className='home__grid__card__img' />
        </Link>
    )
  }
  
  export default Card
  