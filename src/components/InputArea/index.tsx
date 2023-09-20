import { ReactNode } from 'react';
import Classes from './index.module.css';

interface Props {
    icone: ReactNode;
    placeholder: string;
  }

const InputArea: React.FC<Props> = ({icone, placeholder}) => {

    return (
    <div className={Classes.container}>
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