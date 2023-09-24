import Logo from './../../assets/img/compass.uol_Negativo 1.svg'
import MenuPagesLink from '../MenuPagesLink';
import Classes from './index.module.css'
const Menu: React.FC = () => {


  return (
    <div className={Classes.container}>
      <img src={Logo} alt="Compass Logo" className={Classes.img}/>
      <MenuPagesLink />
    </div>
  );
};

export default Menu;
