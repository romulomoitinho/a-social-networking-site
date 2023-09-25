import { useRef, useState } from "react";
import Classes from "./index.module.css";
import InputArea from "../InputArea";
import Button from "../Button";
import { User, Lock } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const LoginElements: React.FC = () => {
  const userPasswordAlert = false;
  const inputRefUser = useRef<HTMLInputElement | null>(null);
  const inputRefPassword = useRef<HTMLInputElement | null>(null);
  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userInputChange = (data: string) => {
    setUser(data);
  };

  const passwordInputChange = (data: string) => {
    setPassword(data);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({user, password})
  };

  return (
    <div className={Classes.container}>
      <h1 className={Classes.title}>Olá,</h1>
      <p className={Classes.text}>
        Para continuar navegando de forma segura, efetue o login.
      </p>
      <h2 className={Classes.subTitle}>Login</h2>
        <InputArea
          id={'user'}
          name={'user input'}
          icone={<User />}
          placeholder={"Usuário"}
          yellowBorder={userPasswordAlert}
          onChangeData={userInputChange}
          inputRef={inputRefUser}
        ></InputArea>

        <InputArea
          id={'password'}
          name={'password input'}
          icone={<Lock />}
          placeholder={"Senha"}
          yellowBorder={userPasswordAlert}
          minLength={6}
          maxLength={50}
          type='password'
          onChangeData={passwordInputChange}
          inputRef={inputRefPassword}
        ></InputArea>

        {userPasswordAlert && (
          <p className={Classes.alertText}>
            Usuário e/ou Senha inválidos.
            <br />
            Por favor, tente novamente!
          </p>
        )}
        <Button  onSubmit={handleSubmit} text={'Entrar'}/>
      <p className={Classes.lastText}>
        Novo por aqui?<Link to="/register"> Registre-se</Link>
      </p>
    </div>
  );
};

export default LoginElements;
