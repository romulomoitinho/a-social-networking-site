import { useMenu } from "../../context/MenuContext";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import WhatInYourMind from "../../components/WhatInYourMind";
import Classes from "./index.module.css";
import MyFriends from "../../components/MyFriends";
import PopularProducts from "../../components/PopularProducts";
import PostComponent from "../../components/PostComponent";

const HomePage = () => {
  const { menuOpen } = useMenu();
  return (
    <main
      className={`${Classes.container} ${menuOpen ? "" : Classes.closed_menu}`}
    >
      {menuOpen && <Menu />}
      <div>
        <Header />
        <div className={Classes.postElements}>
          <div className={Classes.postSection}>
            <WhatInYourMind />
            <PostComponent />
          </div>
          <div className={Classes.sideSection}>
            <MyFriends />
            <PopularProducts />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
