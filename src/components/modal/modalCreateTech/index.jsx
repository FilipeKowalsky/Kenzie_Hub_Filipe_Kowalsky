import React, { useContext } from "react";
import { Modal, ModalContainer, ModalButton, HeaderModal, FormModal, InputModal, SelectModal, ButtonModalTech, Backdrop } from "./styled";
import { TechContextApi } from "../../../providers/TechContextApi";
import { useForm } from "react-hook-form";
import { TextStyleTitle2, TextStyleTitle3 } from "../../../styles/typography";

export const ModalTech = ({ show, onClose }) => {
  const { closeModal, createTech } = useContext(TechContextApi);

  const { register, handleSubmit, formState: { errors } } = useForm();

  const handleButtonClick = () => {
    closeModal();
    onClose();
  };

  const submit = (formData) => {
    createTech(formData);
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
            <TextStyleTitle2>Cadastrar Tecnologia</TextStyleTitle2>
            <ModalButton onClick={handleButtonClick}>X</ModalButton>
          </HeaderModal>
          <FormModal onSubmit={handleSubmit(submit)}>
            <TextStyleTitle3>Nome</TextStyleTitle3>
            <InputModal type="text" placeholder="Typescript" {...register("title")}/>
            {errors.title && <span>{errors.title.message}</span>}
            <TextStyleTitle3>Selecionar status</TextStyleTitle3>
            <SelectModal {...register("status")}>
              {errors.status && <span>{errors.status.message}</span>}
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </SelectModal>
            <ButtonModalTech type="submit">Cadastrar Tecnologia</ButtonModalTech>
          </FormModal>
        </ModalContainer>
      </Modal>
    </>
  );
};
