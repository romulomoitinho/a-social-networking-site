import { useLocation, Link, useNavigate } from "react-router-dom";
import Classes from "./index.module.css";
import Button from "./../MenuPagesLinkButton";
import { AuthContext } from './../../context/AutenticationContext';
import { useContext } from "react";

const MenuPagesLink: React.FC = () => {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const { pathname } = useLocation();
  const navigate = useNavigate()
  
  const onLogout = async () => {
    if (await logout()) {
      console.log({logoutAut: isAuthenticated})
      navigate('/login')
    }
    
  }
  return (
    <div className={Classes.container}>
      <Link to="/home" className={Classes.removingDecorations}>
        <Button
          idButton={"home-page"}
          text={"Pagina Inicial"}
          selected={pathname === "/home"}
        />
      </Link>

      <Link to="/profile" className={Classes.removingDecorations}>
      <Button
        idButton={"profile"}
        text={"Meu perfil"}
        selected={pathname === "/profile"}
      />
      </Link>

      <Link to="/marketplace" className={Classes.removingDecorations}>
      <Button
        idButton={"marketplace"}
        text={"Marketplace"}
        selected={pathname === "/marketplace"}
      />
      </Link>
      
        <Button idButton={"logout"} text={"Sair"} selected={false} handleSubmit={onLogout}/>
    </div>
  );
};

export default MenuPagesLink;
