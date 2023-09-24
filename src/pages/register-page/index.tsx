import Classes from './index.module.css';
import './index.css';
import Laptop from './../../assets/img/login-laptop.jpeg'
import RegisterElements from '../../components/RegisterElements';
import Logo from './../../assets/img/compass.uol_Negativo 1.svg'

const RegisterPage = () => {
    return (
    <>
    <main className={Classes.main}>
            <div className={Classes.loginArea}>
                <RegisterElements />
            </div>
            <div className={Classes.imageArea}>
                <img src={Laptop} alt='A laptop image' className={Classes.img}></img>
                <img src={Logo} alt="Compass Logo" className={Classes.logo}/>
            </div>
            
        </main>
        
        </>
    
    
    ) 
}

export default RegisterPage;