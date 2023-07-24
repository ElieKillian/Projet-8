import '../../styles/index.scss';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className='error'>
      <p className='error__404'>404</p>
      <p className='error__text'>Oups ! La page que vous avez demandée n'existe pas.</p>
      <Link to="/" className='error__link'>Retour à la page d'accueil</Link>
    </div>
  )
}

export default Error