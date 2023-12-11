import styled, { keyframes, css } from "styled-components";

export const Modal = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  top: 10%;
  left: 85%;
  transform: translate(-50%, -50%);
  min-width: 150px;
  max-width: 290px;
  width: 50vw;
  height: 70px;
  background-color: var(--color-grey-2);
  border: 1px solid var(--color-grey-2);
  border-radius: 4px;
  z-index: 999;

  @media (max-width: 1080px) {
    top:  15%;
    left: 50%;
  }
`;

export const ModalContainer = styled.div`
  padding: 5px 8px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`

export const ModalText = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 15px;
`


export const ModalButton = styled.button`
  border: none;
  background: var(--color-grey-2);
  color: var(--color-grey-1);
`

const modalTimeOutAnimation = keyframes`
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
`;

export const ModalTimeOutError = styled.div`
  width: ${props => (props.show ? "0%" : "100%")};
  height: 5px;
  background: var(--color-negative);
  border-radius: 0 0 4px 4px;
  animation: ${props => (props.show ? "" : css`${modalTimeOutAnimation} 2s linear`)};
`;

export const ModalTimeOutApproved = styled.div`
  width: ${props => (props.show ? "0%" : "100%")};
  height: 5px;
  background: var(--color-sucess);
  border-radius: 0 0 4px 4px;
  animation: ${props => (props.show ? "" : css`${modalTimeOutAnimation} 2s linear`)};
`;
