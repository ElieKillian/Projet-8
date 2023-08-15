import '../../styles/banner.scss';
import Imghome from './Image source 1.png';
import ImgAbout from './bannerabout.png';


function Banner(props) {

if (props.className === "home__banner"){
    return (
        <div className='banner'>
            <img src= {Imghome} alt='Bord de mer' className='banner__imghome' />
            <div className='banner__mask'>
                <p className='banner__mask__text'>Chez vous, partout et ailleurs</p>   
            </div> 
        </div>
      )
};

if (props.className === "about__banner"){
    return (
        <div className='banner'>
            <img src= {ImgAbout} alt='Montagne' className='banner__imgabout' />     
        </div>
      )
};

return null;

}

export default Banner