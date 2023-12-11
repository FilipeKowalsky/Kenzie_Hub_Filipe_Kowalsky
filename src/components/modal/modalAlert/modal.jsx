import { useState, useEffect } from "react";
import {
  Modal,
  ModalContainer,
  ModalText,
  ModalButton,
  ModalTimeOutError,
  ModalTimeOutApproved
} from "./styled";
import { TextStyleHeadlineBold } from "../../../styles/typography";
import ErrorImg from "../../../assets/Error.png";
import ApprovedImg from "../../../assets/Approved.png";

export const CustomModal = ({ show, onClose, errorMessage, approvedMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (show) {
      setIsOpen(true);
      clearTimeout(timer);
      setTimer(setTimeout(() => {
        setIsOpen(false);
        onClose();
      }, 3000));
    }
  }, [show]);

  const handleCloseModal = () => {
    setIsOpen(false);
    clearTimeout(timer);
    onClose();
  };

  return (
    <Modal show={isOpen ? "true" : undefined}>
      <ModalContainer>
        <ModalText>
          <img src={errorMessage ? ErrorImg : ApprovedImg} alt="Ícone de erro ou aprovação" />
          {errorMessage ? (
            <TextStyleHeadlineBold>{errorMessage}</TextStyleHeadlineBold>
          ) : (
            <TextStyleHeadlineBold>{approvedMessage}</TextStyleHeadlineBold>
          )}
        </ModalText>
        <ModalButton onClick={handleCloseModal}>X</ModalButton>
      </ModalContainer>
      {errorMessage ? <ModalTimeOutError /> : <ModalTimeOutApproved />}
    </Modal>
  );
};
