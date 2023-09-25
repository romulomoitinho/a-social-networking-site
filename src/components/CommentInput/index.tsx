import Classes from "./index.module.css";
import {
  Camera,
  Image,
  MapPin,
  Paperclip,
  Smiley,
  ArrowCircleRight,
} from "@phosphor-icons/react";
import UserImage from "./../../assets/img/userTestImage.jpg";

const CommentInput: React.FC = () => {
  return (
    <div className={Classes.container}>
      <div className={Classes.yourComent}>
        <img
          src={UserImage}
          alt="Imagem do usuário"
          className={Classes.userImage}
        />
        <div className={Classes.textArea}>
            <input
            id='WhatInYourMind'
            type='text'
            placeholder='Tem algo a dizer?'
          />
          <div>
            <Camera fill="#A1A3A7" />
            <Image fill="#A1A3A7" />
            <Paperclip fill="#A1A3A7" />
            <MapPin fill="#A1A3A7" />
            <Smiley fill="#A1A3A7" />
            {true && <button>
            <ArrowCircleRight fill="#E9B425"/>
            </button>}
          </div>
        </div>
      </div>
      </div>
  )
};

export default CommentInput;
