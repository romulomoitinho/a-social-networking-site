import Classes from './index.module.css'
import InputArea from '../InputArea';
import { User, Lock } from '@phosphor-icons/react';
const LoginElements: React.FC = () => {

    return (
    <div className={Classes.container}>
        <h1 className={Classes.title}>Olá,</h1>
        <p className={Classes.text}>Para continuar navegando de forma segura, efetue o login.</p>
        <h2 className={Classes.subTitle}>Login</h2>
        <InputArea icone={<User />} placeholder={''}></InputArea>
        <InputArea icone={<Lock  />} placeholder={''}></InputArea>
    </div>    
    ) 
}

export default LoginElements;