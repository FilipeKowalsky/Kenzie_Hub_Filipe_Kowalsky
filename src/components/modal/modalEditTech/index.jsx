import React, { useContext } from "react";
import {
  Modal,
  ModalContainer,
  ModalButton,
  HeaderModal,
  FormModal,
  InputModal,
  SelectModal,
  Backdrop,
  ButtonUpdate,
  ButtonDelete,
  ButtonContainer,
} from "./styled";
import { TechContextApi } from "../../../providers/TechContextApi";
import { TextStyleHeadline, TextStyleTitle3 } from "../../../styles/typography";

export const ModalEditTech = ({ show, onClose }) => {
  const { closeModalUpdate, } = useContext(TechContextApi);

  const handleButtonClick = () => {
    closeModalUpdate();
    onClose();
  };

  if (!show) {
    return null;
  }
  
  return (
    <>
      <Backdrop />
      <Modal>
        <ModalContainer>
          <HeaderModal>
            <TextStyleTitle3>Cadastrar Tecnologia</TextStyleTitle3>
            <ModalButton onClick={handleButtonClick}>X</ModalButton>
          </HeaderModal>
          <FormModal>
            <TextStyleHeadline>Nome do projeto</TextStyleHeadline>
            <InputModal type="text" placeholder="Typescript" />
            <TextStyleHeadline>Status</TextStyleHeadline>
            <SelectModal>
              <option value="">Iniciante</option>
              <option value="">Intermediario</option>
              <option value="">Avançado</option>
            </SelectModal>
            <ButtonContainer>
              <ButtonUpdate>Salvar alterações</ButtonUpdate>
              <ButtonDelete >Excluir</ButtonDelete>
            </ButtonContainer>
          </FormModal>
        </ModalContainer>
      </Modal>
    </>
  );
};
