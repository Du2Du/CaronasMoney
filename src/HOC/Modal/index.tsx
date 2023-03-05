import { useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ModalContainer } from "./styles";
import { useOutsideAlerter } from "./Utils";

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
    const modalRef = useRef<any>(null);
    const { label, isOpen, setIsOpen, callback, onHide } = props;
    const hideModal = () => {
      setIsOpen(false);
      if (onHide) onHide();
    };
    useOutsideAlerter(modalRef, hideModal);
    return !isOpen ? null : (
      <ModalContainer ref={modalRef}>
        <header className="header">
          {label}
          <div className="closeButton" onClick={hideModal}>
            <AiOutlineClose size={20} />
          </div>
        </header>
        <section>
          <Component {...props} />
        </section>
        <footer>
          <button onClick={hideModal}>Fechar</button>
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
