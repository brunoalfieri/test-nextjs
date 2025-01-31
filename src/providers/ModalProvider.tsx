'use client';
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ModalContextProps<T extends object | null> {
  isOpen: boolean;
  openModal: (props?: { fnConfirm?: () => void; customProps?: T }) => void;
  closeModal: () => void;
  fnConfirm: () => () => void;
  setFnConfirm: Dispatch<SetStateAction<() => () => void>>;
  customProps: T;
}

//@ts-expect-error: Usage unkown
const ModalContext = createContext<ModalContextProps<unknown> | undefined>(
  undefined
);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = <T extends object | null>({
  children,
}: ModalProviderProps & T) => {
  const [fnConfirm, setFnConfirm] = useState<() => () => void>(() => () => {});
  const [isOpen, setIsOpen] = useState(false);
  const [customProps, setCustomProps] = useState<T | null>(null);

  const openModal = (props?: { fnConfirm?: () => void; customProps?: T }) => {
    if (props && props.fnConfirm) {
      const fn = props.fnConfirm;
      setFnConfirm(() => fn);
    }
    if (props?.customProps) {
      setCustomProps(props?.customProps);
    }
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        //@ts-expect-error: Usage unknown
        openModal,
        closeModal,
        setFnConfirm,
        fnConfirm,
        customProps,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = <T extends object | null>() => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context as ModalContextProps<null | T>;
};
