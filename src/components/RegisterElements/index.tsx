import Classes from './index.module.css'
import InputArea from '../InputArea';
import Button from './../Button'
import { User, Lock, Calendar, At, Fingerprint, ShieldCheck } from '@phosphor-icons/react';

const LoginElements: React.FC = () => {
    const userExistsAlert = false;
    const noCorrespondingPasswordAlert = false;

    return (
    <div className={Classes.container}>
        <h1 className={Classes.title}>Olá,</h1>
        <p className={Classes.text}>Por favor, registre-se para continuar.</p>
        <h2 className={Classes.subTitle}>Cadastro</h2>
        <InputArea icone={<User />} placeholder={'Nome'} yellowBorder={false}></InputArea>
        <InputArea icone={<Fingerprint />} placeholder={'Usuário'} yellowBorder={userExistsAlert}></InputArea>
        {userExistsAlert && <p className={Classes.alertText}>Usuário já existe!</p>}
        <InputArea icone={<Calendar />} placeholder={'Nascimento'} yellowBorder={false}></InputArea>
        <InputArea icone={<At  />} placeholder={'Email'} yellowBorder={false}></InputArea>
        <InputArea icone={<Lock />} placeholder={'Senha'} yellowBorder={noCorrespondingPasswordAlert}></InputArea>
        <InputArea icone={<ShieldCheck />} placeholder={'Confirmar Senha'} yellowBorder={noCorrespondingPasswordAlert}></InputArea>
        {noCorrespondingPasswordAlert && <p className={Classes.alertText}>As senhas não correspondem!</p>}
        <Button/>
        <p className={Classes.lastText}>Já possuí uma conta?<a href="/login"> Faça Login</a></p>
    </div>    
    ) 
}

export default LoginElements;