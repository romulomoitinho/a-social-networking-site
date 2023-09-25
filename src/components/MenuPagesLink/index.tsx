import { useLocation, Link } from "react-router-dom";
import Classes from "./index.module.css";
import Button from "./../MenuPagesLinkButton";

const MenuPagesLink: React.FC = () => {
  const { pathname } = useLocation();
  console.log(pathname);

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

      <Link to="/home" className={Classes.removingDecorations}>
      <Button
        idButton={"marketplace"}
        text={"Marketplace"}
        selected={pathname === "/marketplace"}
      />
      </Link>

      <Link to="/login" className={Classes.removingDecorations}>
        <Button idButton={"logout"} text={"Sair"} selected={false} />
      </Link>
    </div>
  );
};

export default MenuPagesLink;
