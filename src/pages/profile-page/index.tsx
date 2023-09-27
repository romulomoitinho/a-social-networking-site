import { useMenu } from "../../context/MenuContext";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Classes from "./index.module.css";
import Button from "../../components/Button";
import { Cake, Envelope, MapPin, Phone, User } from "@phosphor-icons/react";
import PostComponent from "../../components/PostComponent";
import ModalProfile from "../../components/ModalProfile";
import { useState } from "react";


const ProfilePage = () => {

  const { menuOpen } = useMenu();
  const UserName = "Eduarda Pereira";
  const Occupation = "UI/UX Designer";
  const sex = "Masculino";
  const birth = "2001";
  const adress = "2239 Hog Camp Road Schaumburg";
  const email = "charles5182@ummoh.com";
  const phone = "(33) 75700-5467";
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }
  
  return (
    
    <main
      className={`${Classes.container} ${menuOpen ? "" : Classes.closed_menu}`}
    >
      {menuOpen && <Menu />}
      <div>
        <Header />
        <div className={Classes.body}>
          <div className={Classes.usersImageJobImage}>
            <img
              src="src/assets/img/back-ground-profile.jpg"
              alt="foto de fundo do perfil"
              className={Classes.backGroundPhoto}
            />
            <div className={Classes.profileName}>
              <img
                src="src/assets/img/userTestImage.jpg"
                alt="Imagem"
                className={Classes.userImage}
              />
              <div className={Classes.usersNameOccupation}>
                <p className={Classes.userName}>{UserName}</p>
                <p className={Classes.userOccupation}>{Occupation}</p>
              </div>
            </div>
            <div className={Classes.editButton}>
              <Button text="Editar Perfil" onSubmit={openModal}/>
            </div>
          </div>
          <div className={Classes.content}>
            <div className={Classes.aboutUser}>
              <div className={Classes.aboutUserInfo}>
                <h2>Sobre</h2>
                <p>
                  <User /> {sex}
                </p>
                <hr className={Classes.line} />
                <p>
                  <Cake /> {birth}
                </p>
                <hr className={Classes.line} />
                <p>
                  <MapPin /> {adress}
                </p>
                <hr className={Classes.line} />
                <p>
                  <Envelope /> {email}
                </p>
                <hr className={Classes.line} />
                <p>
                  <Phone /> {phone}
                </p>
              </div>
            </div>
            <div className={Classes.followPosts}>
              <div className={Classes.title}>
                <p>Followers</p>
                <p>Following</p>
                <p className={Classes.selected}>Posts</p>
              </div>
              <hr className={Classes.lineFollowPosts} />
              <PostComponent />
              <PostComponent />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && <ModalProfile handleCancel={closeModal}/>}
    </main>
  );
};

export default ProfilePage;
