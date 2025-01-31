import { useModal } from '@/providers/ModalProvider';
import { Button } from '../button/default/ButtonDefault';

interface ModalFooterProps {
  fnConfirm: () => void;
}

export function ModalFooter(props: ModalFooterProps) {
  const { closeModal } = useModal();
  return (
    <footer className="flex justify-between gap-4 mt-5">
      <Button variant="outline" onClick={closeModal}>
        Cancel
      </Button>
      <Button
        onClick={() => {
          closeModal();
          props.fnConfirm();
        }}
      >
        Confirm
      </Button>
    </footer>
  );
}
