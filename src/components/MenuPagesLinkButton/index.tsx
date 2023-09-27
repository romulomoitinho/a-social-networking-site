import Classes from './index.module.css'


interface buttonProps {
  text: string,
  selected: boolean,
  idButton: string,
  handleSubmit?: () => void;
}

const MenuPagesLink: React.FC<buttonProps> = ({ text, selected, idButton, handleSubmit}) => {
  
  return (
    <div className={Classes.container} >
      <button id={idButton} type="submit" onClick={handleSubmit} className={`${Classes.button} ${selected ? Classes.selected_button : ''}`} >
            {text}
      </button>
    </div>
  );
};

export default MenuPagesLink;
