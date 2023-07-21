import '../../styles/footer.scss';
import Logo from './LOGO.png';

function Footer() {
  return (
    <div>
      <footer className='footer'>
        <img src={Logo} alt='' className='footer__logo' />
        <p className='footer__rights'>© 2020 Kasa. All rights reserved</p>
      </footer>
    </div>
  )
}

export default Footer