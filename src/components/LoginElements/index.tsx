import Classes from './index.module.css'
import InputArea from '../InputArea';
import Button from '../Button'
import { User, Lock } from '@phosphor-icons/react';

const LoginElements: React.FC = () => {

    return (
    <div className={Classes.container}>
        <h1 className={Classes.title}>Olá,</h1>
        <p className={Classes.text}>Para continuar navegando de forma segura, efetue o login.</p>
        <h2 className={Classes.subTitle}>Login</h2>
        <InputArea icone={<User />} placeholder={'Usuário'}></InputArea>
        <InputArea icone={<Lock  />} placeholder={'Senha'}></InputArea>
        <Button/>
        <p className={Classes.lastText}>Novo por aqui?<a href="/register"> Registre-se</a></p>
    </div>    
    ) 
}

export default LoginElements;