import Classes from './index.module.css'


interface buttonProps {
  text: string,
  selected: boolean,
  idButton: string
}

const MenuPagesLink: React.FC<buttonProps> = ({ text, selected, idButton }) => {
  


  return (
    <div className={Classes.container} >
      <button id={idButton} type="submit" className={`${Classes.button} ${selected ? Classes.selected_button : ''}`} >
            {text}
      </button>
    </div>
  );
};

export default MenuPagesLink;
