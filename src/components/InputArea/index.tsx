import { ReactNode } from 'react';
import Classes from './index.module.css';

interface Props {
    icone: ReactNode;
    placeholder: string;
    yellowBorder: boolean;
  }

const InputArea: React.FC<Props> = ({icone, placeholder, yellowBorder}) => {

    return (
    <div className={`${Classes.container} ${yellowBorder ? Classes.yellowBorder : ''}`}>
        <input
            id="id"
            type="type"
            name="name"
            placeholder={placeholder}
        />
        {icone}
    </div>    
    ) 
}

export default InputArea;