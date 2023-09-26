import { useMenu } from '../../context/MenuContext';
import Classes from './index.module.css'
import ArrowFatLeft from './../../assets/img/ArrowFatLeft.svg'
import ArrowFatRight from './../../assets/img/ArrowFatRight.svg'
import GlobeHemisphereEast from './../../assets/img/GlobeHemisphereEast.svg'
import Bell from './../../assets/img/Bell.svg'

interface headerProps {
  UserName?: string;
  UserImage?: string;
}

const Header: React.FC<headerProps> = ( {UserName='User Test', UserImage='src/assets/img/userTestImage.jpg'} ) => {
  const { toggleMenu, menuOpen } = useMenu();
  const HandlerButton = () => {
    console.log('click')
    toggleMenu()
  }

  return (
    <div className={Classes.container} >
      <div className={Classes.logoContainer} >
        <button onClick={HandlerButton}>
          <img src={menuOpen ? ArrowFatLeft : ArrowFatRight} alt="Seta para a esquerda" />
        </button>
        <p>SocialCompass</p>
      </div>
      <div className={Classes.userIcons}>
        <img src={GlobeHemisphereEast} alt="Imagem de um globo" />
        <img src={Bell} alt="Imagem de um sino" />
        <p>{UserName}</p>
        <img src={UserImage} alt="Imagem do usuário" className={Classes.userImage}/>
      </div>
    </div>
  );
};

export default Header;
