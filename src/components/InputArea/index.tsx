import { ReactNode } from "react";
import Classes from "./index.module.css";

interface Props {
  icone: ReactNode;
  placeholder: string;
  yellowBorder: boolean;
  minLength?: number;
  maxLength?: number;
  type?: string;
  onChangeData: (data: string) => void;
  inputRef: React.RefObject<HTMLInputElement>;
  id: string;
  name: string;
}

const InputArea: React.FC<Props> = ({
  icone,
  placeholder,
  yellowBorder,
  minLength = 0,
  maxLength = 255,
  type = "text",
  onChangeData,
  inputRef,
  id,
  name,
}) => {
  const handleChange = () => {
    // Acessa o valor do input diretamente usando a ref
    const newValue = inputRef.current?.value || '';
    onChangeData(newValue);
  };

  return (
    <div
      className={`${Classes.container} ${
        yellowBorder ? Classes.yellowBorder : ""
      }`}
    >
      <input
        id={id}
        type={type}
        name={name}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        ref={inputRef}
        onChange={handleChange}
      />
      {icone}
    </div>
  );
};

export default InputArea;
