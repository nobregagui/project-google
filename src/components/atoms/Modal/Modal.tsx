import { useEffect } from "react";
import { IPropsModal } from "../../../utils/interfaces";
import { Modal, ModalCloseButton, ModalOverlay } from "./Modal.styles";

function ModalComponent({ isOpen, onClose, children }: IPropsModal) {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (isOpen && event.target instanceof HTMLElement) {
        const modal = document.querySelector(".modal");
        if (modal && !modal.contains(event.target)) {
          onClose(
            event as unknown as React.MouseEvent<HTMLButtonElement, MouseEvent>
          );
        }
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <Modal className="modal">
        <ModalCloseButton onClick={onClose} />
        {children}
      </Modal>
    </ModalOverlay>
  );
}

export default ModalComponent;
