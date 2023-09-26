import { useMenu } from "../../context/MenuContext";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Classes from "./index.module.css";

const MarketplacePage = () => {
  const { menuOpen } = useMenu();
  return (
    <main
      className={`${Classes.container} ${menuOpen ? "" : Classes.closed_menu}`}
    >
      {menuOpen && <Menu />}
      <div>
        <Header />
      </div>
    </main>
  );
};

export default MarketplacePage;
