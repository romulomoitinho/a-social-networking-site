import Classes from './index.module.css'
import InputArea from '../InputArea';
import Button from './../Button'
import { User, Lock, Calendar, At, Fingerprint, ShieldCheck } from '@phosphor-icons/react';

const LoginElements: React.FC = () => {

    return (
    <div className={Classes.container}>
        <h1 className={Classes.title}>Olá,</h1>
        <p className={Classes.text}>Por favor, registre-se para continuar.</p>
        <h2 className={Classes.subTitle}>Cadastro</h2>
        <InputArea icone={<User />} placeholder={'Nome'}></InputArea>
        <InputArea icone={<Fingerprint />} placeholder={'Usuário'}></InputArea>
        <InputArea icone={<Calendar />} placeholder={'Nascimento'}></InputArea>
        <InputArea icone={<At  />} placeholder={'Email'}></InputArea>
        <InputArea icone={<Lock />} placeholder={'Senha'}></InputArea>
        <InputArea icone={<ShieldCheck />} placeholder={'Confirmar Senha'}></InputArea>
        <Button/>
        <p className={Classes.lastText}>Já possuí uma conta?<a href="/login"> Faça Login</a></p>
    </div>    
    ) 
}

export default LoginElements;