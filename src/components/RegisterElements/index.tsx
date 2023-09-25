import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Classes from "./index.module.css";
import InputArea from "../InputArea";
import Button from "./../Button";
import {
  User,
  Lock,
  Calendar,
  At,
  Fingerprint,
  ShieldCheck,
} from "@phosphor-icons/react";

const LoginElements: React.FC = () => {
  const userExistsAlert = false;
  const noCorrespondingPasswordAlert = false;
  const inputRefName = useRef<HTMLInputElement | null>(null);
  const inputRefUser = useRef<HTMLInputElement | null>(null);
  const inputRefBirth = useRef<HTMLInputElement | null>(null);
  const inputRefEmail = useRef<HTMLInputElement | null>(null);
  const inputRefPassword = useRef<HTMLInputElement | null>(null);
  const inputRefConfirmationPassword = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [birth, setBirth] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  const nameInputChange = (data: string) => {
    setName(data);
  };

  const userInputChange = (data: string) => {
    setUser(data);
  };

  const birthInputChange = (data: string) => {
    setBirth(data);
  };

  const emailInputChange = (data: string) => {
    setEmail(data);
  };

  const passwordInputChange = (data: string) => {
    setPassword(data);
  };

  const confirmationPasswordInputChange = (data: string) => {
    setConfirmationPassword(data);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({ name, user, birth, email, password, confirmationPassword });
  };

  return (
    <div className={Classes.container}>
      <h1 className={Classes.title}>Olá,</h1>
      <p className={Classes.text}>Por favor, registre-se para continuar.</p>
      <h2 className={Classes.subTitle}>Cadastro</h2>

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
        id={"user"}
        name={"user input"}
        icone={<Fingerprint />}
        placeholder={"Usuário"}
        yellowBorder={userExistsAlert}
        onChangeData={userInputChange}
        inputRef={inputRefUser}
      ></InputArea>

      {userExistsAlert && (
        <p className={Classes.alertText}>Usuário já existe!</p>
      )}

      <InputArea
        id="birth"
        name="birth input"
        icone={<Calendar />}
        placeholder={"Nascimento"}
        yellowBorder={false}
        type="date"
        onChangeData={birthInputChange}
        inputRef={inputRefBirth}
      ></InputArea>

      <InputArea
        id={"email"}
        name={"email input"}
        icone={<At />}
        placeholder={"Email"}
        yellowBorder={false}
        type="email"
        onChangeData={emailInputChange}
        inputRef={inputRefEmail}
      ></InputArea>

      <InputArea
        id={"password"}
        name={"password input"}
        icone={<Lock />}
        placeholder={"Senha"}
        yellowBorder={noCorrespondingPasswordAlert}
        minLength={6}
        maxLength={50}
        type="password"
        onChangeData={passwordInputChange}
        inputRef={inputRefPassword}
      ></InputArea>

      <InputArea
        id={"confirmarionPassword"}
        name={"confirmationPassword input"}
        icone={<ShieldCheck />}
        placeholder={"Confirmar Senha"}
        yellowBorder={noCorrespondingPasswordAlert}
        minLength={6}
        maxLength={50}
        type="password"
        onChangeData={confirmationPasswordInputChange}
        inputRef={inputRefConfirmationPassword}
      ></InputArea>

      {noCorrespondingPasswordAlert && (
        <p className={Classes.alertText}>As senhas não correspondem!</p>
      )}

      <Button onSubmit={handleSubmit} text={"Registrar-se"} />

      <p className={Classes.lastText}>
        Já possuí uma conta? <Link to="/login"> Faça Login</Link>
      </p>
    </div>
  );
};

export default LoginElements;
