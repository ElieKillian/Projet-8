import '../../styles/index.scss';
import Notfound from '../../components/Notfound';

function Error() {

  document.title = 'Kasa - Page non trouvée';

  return (
    <Notfound />
  )
}

export default Error