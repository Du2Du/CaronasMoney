import { AiOutlineClose } from "react-icons/ai";
import { ModalContainer } from "./styles";

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  callback: (...props: any) => void;
  onHide?: () => void;
}

export const WithModal =
  <T extends unknown>(Component: React.FC<T>) =>
  (props: ModalProps & T) => {
    const { label, isOpen, setIsOpen, callback, onHide } = props;
    return !isOpen ? null : (
      <ModalContainer>
        <header>
          {label}
          <div
            className="closeButton"
            onClick={() => {
              setIsOpen(false);
              if (onHide) onHide();
            }}
          >
            <AiOutlineClose size={20} />
          </div>
        </header>
        <section>
          <Component {...props} />
        </section>
        <footer>
          <button onClick={() => setIsOpen(false)}>Fechar</button>
          <button
            className="buttonSuccess"
            onClick={() => {
              callback();
              setIsOpen(false);
            }}
          >
            Salvar
          </button>
        </footer>
      </ModalContainer>
    );
  };
