import Classes from "./index.module.css";

interface friendProps {
  UserImage: string;
  UserName: string;
}

const Friend: React.FC<friendProps> = ( {UserImage, UserName} ) => {
  return (
    <div className={Classes.container}>
      <img src={UserImage} alt="Imagem do usuário" />
      <p>{UserName}</p>
    </div>
  );
};

export default Friend;
