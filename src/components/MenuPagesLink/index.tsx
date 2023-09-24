import { useLocation } from 'react-router-dom';
import Classes from './index.module.css'
import Button from './../MenuPagesLinkButton'

const MenuPagesLink: React.FC = () => {
  const {pathname} = useLocation();
  console.log(pathname)

  return (
    <div className={Classes.container}>
      <Button idButton={'home-page'} text={'Pagina Inicial'} selected={pathname === '/home'}/>
      <Button idButton={'profile'} text={'Meu perfil'} selected={pathname === '/profile'}/>
      <Button idButton={'marketplace'} text={'Marketplace'} selected={pathname === '/marketplace'}/>
      <Button idButton={'logout'} text={'Sair'} selected={false}/>
    </div>
  );
};

export default MenuPagesLink;
