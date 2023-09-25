import Classes from './index.module.css';

interface buttonProps {
    onSubmit?: (event: React.FormEvent) => void;
    text: string
  }


const InputArea: React.FC<buttonProps> = ({ onSubmit, text }) => {

    return (
    <div className={Classes.container}>
        <button type="submit" onClick={onSubmit} className={Classes.center} >
            {text}
        </button>
    </div>    
    ) 
}

export default InputArea;