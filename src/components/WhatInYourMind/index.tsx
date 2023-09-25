import Classes from "./index.module.css";
import {
  Camera,
  Image,
  MapPin,
  Paperclip,
  Smiley,
} from "@phosphor-icons/react";
import UserImage from "./../../assets/img/userTestImage.jpg";
import Button from "./../Button";

const WhatInYourMind: React.FC = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.whatInYourMindUpper}>
        <img
          src={UserImage}
          alt="Imagem do usuário"
          className={Classes.userImage}
        />
        <div className={Classes.textArea}>
            <input
            id='WhatInYourMind'
            type='text'
            placeholder='No que você está pensando?'
          />
        </div>
      </div>

      <div className={Classes.whatInYourMindBotton}>
        <div className={Classes.postOptions}>
          <Camera fill="#A1A3A7" />
          <Image fill="#A1A3A7" />
          <Paperclip fill="#A1A3A7" />
          <MapPin fill="#A1A3A7" />
          <Smiley fill="#A1A3A7" />
        </div>
        <div>
          <Button text="Postar" />
        </div>
      </div>
    </div>
  );
};

export default WhatInYourMind;
