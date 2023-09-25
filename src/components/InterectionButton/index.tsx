import Classes from './index.module.css'


interface buttonProps {
  text: string,
  selected: boolean,
  idButton: string,
  icon: JSX.Element;
  amount: number;
}

const InterectionButton: React.FC<buttonProps> = ({ text, selected, idButton, icon, amount}) => {
  
  return (
    <div className={Classes.container} >
      <button id={idButton} type="submit" className={`${Classes.button} ${selected ? Classes.selected_button : ''}`} >
            {icon}<p>{text}</p><p className={`${Classes.button_counter}  ${selected ? Classes.button_counter_selected : ''}`}>{amount}</p>
      </button>
    </div>
  );
};

export default InterectionButton;
