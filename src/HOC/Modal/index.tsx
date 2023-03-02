import { ModalContainer } from "./styles";

interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
}

export const WithModal = (Component: React.FC<any>) => (props: ModalProps) => {
  const { label, isOpen, setIsOpen } = props;
  return isOpen ? null : (
    <ModalContainer>
      <Component {...props} />
    </ModalContainer>
  );
};
