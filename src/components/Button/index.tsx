import Classes from './index.module.css';

interface buttonProps {
    onSubmit?: (event: React.FormEvent) => void;
    text: string
    grayBackground?: boolean
  }


const InputArea: React.FC<buttonProps> = ({ onSubmit, text, grayBackground=false }) => {

    return (
    <div className={`${Classes.container} ${grayBackground ? Classes.grayBackground : ''}`}>
        <button type="submit" onClick={onSubmit} className={Classes.center} >
            {text}
        </button>
    </div>    
    ) 
}

export default InputArea;