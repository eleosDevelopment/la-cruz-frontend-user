import React, {
  cloneElement,
  createContext,
  type FC,
  type ReactNode,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";

const StyledModal = styled.div`
	width: 75%;
  padding: 75px 10px 20px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-background);
  border: 2px solid var(--color-actions);
  border-radius: 10px;
  box-shadow: 0px 0px 10px var(--color-actions);
  transition: all 0.5s;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(5px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 5px 15px;
  border: 2px solid var(--color-grey-500);
  border-radius: 20px;

  transform: translateX(0.8rem);
  transition: all 0.7s;
  position: absolute;
  top: 1.3rem;
  right: 1.5rem;

  color: var(--color-grey-500);
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-grey-100);
    border-radius: 20px;
    color: var(--color-grey-800);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 5px;
    color: var(--color-grey-500);
  }

  &:hover svg {
    color: var(--color-grey-800);
  }
`;

interface ModalContextType {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);
interface ModalProps {
  children?: ReactNode;
}

interface ModalComponent extends FC<ModalProps> {
  Open: typeof Open;
  Window: typeof Window;
}

const Modal: ModalComponent = ({ children }) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

interface OpenProps {
  children: React.ReactElement;
  opens: string;
}

const Open: FC<OpenProps> = ({ children, opens: opensWindowName }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Open component must be used within a Modal component");
  }
  const { open } = context;

  if (!children || !React.isValidElement(children)) {
    throw new Error(
      "Open component expects a single valid React element as its child."
    );
  }
  return cloneElement(
    children as React.ReactElement<{ onClick?: () => void }>,
    { onClick: () => open(opensWindowName) }
  );
};

interface WindowProps {
  children?: React.ReactElement<{ onCloseModal?: () => void }>;
  name: string;
}

const Window: FC<WindowProps> = ({ children, name }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Window component must be used within a Modal component");
  }
  const { openName, close } = context;

  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal>
        <Button onClick={close}>
          <HiXMark />
          Cerrar
        </Button>

        <div>
          {children ? cloneElement(children, { onCloseModal: close }) : null}
        </div>
      </StyledModal>
    </Overlay>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
