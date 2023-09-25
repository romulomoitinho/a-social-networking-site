import { useMenu } from "../../context/MenuContext";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import WhatInYourMind from "../../components/WhatInYourMind";
import Classes from "./index.module.css"
import MyFriends from "../../components/MyFriends";

const HomePage = () => {
    const { menuOpen } = useMenu();
    return (
    <main className={`${Classes.container} ${menuOpen ? '' : Classes.closed_menu}`}>
         {menuOpen && <Menu />}
         <div>
            <Header />
            <div className={Classes.postElements}>
                <WhatInYourMind></WhatInYourMind>
                <div><MyFriends/></div>
            </div>
        </div>    
    </main>
    ) 
}

export default HomePage;