import InterectionButton from "../InterectionButton";
import CommentInput from "../CommentInput"
import Classes from "./index.module.css";
import {
  Clock,
  ThumbsUp,
  ChatCircleDots,
  ShareNetwork,
} from "@phosphor-icons/react";

const PostComponent: React.FC = () => {
  const UserName = "Rômulo Moitinho";
  const UserImage = "src/assets/img/userTestImage.jpg";
  const Minutes = 30;
  const Lugar = "Paisagens Exuberantes";

  return (
    <div className={Classes.container}>
      <div className={Classes.textAndPostInfo}>
        <div className={Classes.userAndTitle}>
          <div className={Classes.userTitle}>
            <img
              src={UserImage}
              alt="Imagem do usuário"
              className={Classes.userImage}
            />

            <div>
              <p>{UserName}</p>
              <div className={Classes.postInfo}>
                <Clock fill="#75767D" />
                <p className={Classes.aboutTime}>{Minutes} minutos atrás em </p>
                <p className={Classes.aboutPlace}>{Lugar}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={Classes.postText}>
          <p>
            Minha última viagem para a Ilha do Comendador, um lugar simplesmente
            incrível, natureza praticamente intocada. Recomendo a todos que
            apreciam o mundo como ele é.
          </p>
        </div>
      </div>

      <div className={Classes.postImg}>
        <img src={UserImage} alt="A testImage" />
      </div>

      <div className={Classes.interectionSection}>
        <InterectionButton
          icon={<ThumbsUp />}
          idButton="like"
          selected={true}
          text="Curtiu"
          amount={100}
        />
        <InterectionButton
          icon={<ChatCircleDots />}
          idButton="comments"
          selected={false}
          text="Comentários"
          amount={100}
        />
        <InterectionButton
          icon={<ShareNetwork />}
          idButton="share"
          selected={false}
          text="Compartilhar"
          amount={100}
        />
         
      </div>
      <CommentInput></CommentInput>
      
    </div>
  );
};

export default PostComponent;
