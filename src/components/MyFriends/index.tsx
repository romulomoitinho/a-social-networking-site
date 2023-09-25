import Classes from "./index.module.css";
import { CaretUp } from '@phosphor-icons/react'
import Friend from "../Friend";
 
const MyFriends: React.FC = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.myFriendsDiv}>
        <p>Meus Amigos</p>
        <CaretUp />
      </div>
      <Friend UserImage="src/assets/img/userTestImage.jpg" UserName="User test"/>
      <Friend UserImage="src/assets/img/userTestImage.jpg" UserName="User test"/>
      <Friend UserImage="src/assets/img/userTestImage.jpg" UserName="User test"/>
    </div>
  );
};

export default MyFriends;
