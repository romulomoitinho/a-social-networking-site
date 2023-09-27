import { Cake, Dna, IdentificationCard, MapPin, Phone, User } from "@phosphor-icons/react";
import InputArea from "../InputArea";
import Classes from "./index.module.css";
import { useRef, useState } from "react";
import Button from "../Button";

interface modalProps {
  handleCancel: () => void;
}

const ModalProfile: React.FC<modalProps> = ({ handleCancel }) => {
  const inputRefName = useRef<HTMLInputElement | null>(null);
  const inputRefOccupation = useRef<HTMLInputElement | null>(null);
  const inputRefSex = useRef<HTMLInputElement | null>(null);
  const inputRefBirth = useRef<HTMLInputElement | null>(null);
  const inputRefAddress = useRef<HTMLInputElement | null>(null);
  const inputRefPhone = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState<string>("");
  const [occupation, setOccupation] = useState<string>("");
  const [sex, setSex] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  const nameInputChange = (data: string) => {
    setName(data);
  };

  const occupationInputChange = (data: string) => {
    setOccupation(data);
  };
  
  const sexInputChange = (data: string) => {
    setSex(data);
  };
  
  const birthInputChange = (data: string) => {
    setBirth(data);
  };
  
  const addressInputChange = (data: string) => {
    setAddress(data);
  };
  
  const phoneInputChange = (data: string) => {
    setPhone(data);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, occupation, sex, birth, address, phone });
  };

  return (
    <div className={Classes.container}>
      <div className={Classes.editOptions}>
        <h1>Editar Perfil</h1>
        <InputArea
        id={"name"}
        name={"name input"}
        icone={<User />}
        placeholder={"Nome"}
        yellowBorder={false}
        onChangeData={nameInputChange}
        inputRef={inputRefName}
      ></InputArea>

      <InputArea
        id={"occupation"}
        name={"occupation input"}
        icone={<IdentificationCard />}
        placeholder={"Ocupação"}
        yellowBorder={false}
        onChangeData={occupationInputChange}
        inputRef={inputRefOccupation}
      />

      <InputArea
        id={"sex"}
        name={"sex input"}
        icone={<Dna />}
        placeholder={"Sexo"}
        yellowBorder={false}
        onChangeData={sexInputChange}
        inputRef={inputRefSex}
      />

      <InputArea
        id={"birth"}
        name={"birth input"}
        icone={<Cake />}
        placeholder={"Data de Nascimento"}
        yellowBorder={false}
        onChangeData={birthInputChange}
        inputRef={inputRefBirth}
      />

      <InputArea
        id={"address"}
        name={"address input"}
        icone={<MapPin />}
        placeholder={"Endereço"}
        yellowBorder={false}
        onChangeData={addressInputChange}
        inputRef={inputRefAddress}
      />

      <InputArea
        id={"phone"}
        name={"phone input"}
        icone={<Phone />}
        placeholder={"Telefone"}
        yellowBorder={false}
        onChangeData={phoneInputChange}
        inputRef={inputRefPhone}
      />

    <Button onSubmit={handleCancel} text={"Cancelar"} grayBackground={true}/>
    <Button onSubmit={handleSubmit} text={"Salvar"} />
    
      </div>
    </div>
  );
};

export default ModalProfile;
