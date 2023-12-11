import { styled } from "styled-components"

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(18 18 20 / 50%);
  z-index: 998;
`;

export const Modal = styled.div`
  position: fixed;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 150px;
  max-width: 309px;
  width: 90%;
  height: 270px;
  background-color: var(--color-grey-3);
  border: 1px solid var(--color-grey-3);
  border-radius: 4px;
  z-index: 999;
  display: flex;
  justify-content: center;

  
`

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  background: var(--color-grey-2);
  width: 100%;
  padding: 0px 15px;
  border: 1px solid var(--color-grey-2);
  border-radius: 3px 3px 0px 0px;
`

export const FormModal = styled.form`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 0 15px;
  margin-top: 3px;
`

export const ModalButton = styled.button`
  border: none;
  background: var(--color-grey-2);
  color: var(--color-grey-1);
`

export const InputModal = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid var(--color-grey-0);
  border-radius: 3px;
  background: var(--color-grey-2);
  font-size: 12px;
  padding: 0 10px;
  color: #fff;
`

export const SelectModal = styled.select`
  width: 100%;
  height: 35px;
  border: 1px solid var(--color-grey-0);
  border-radius: 3px;
  background: var(--color-grey-2);
  color: #fff;
  padding: 0px 5px;
  font-size: 12px;
`

export const ButtonModalTech = styled.button`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-color-primary);
  border: 1px solid var(--color-color-primary);
  border-radius: 4px;
  margin-top: 10px;
  color: #fff;

  &:hover {
    background: var(--color-color-primary-50);
  }
`