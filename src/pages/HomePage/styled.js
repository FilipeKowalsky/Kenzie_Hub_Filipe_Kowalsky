import { styled } from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  background: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const Form = styled.div`
  width: 90%;
  max-width: 370px;
  height: 560px;
  background: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;
  gap: 30px;
`

export const InputContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Input = styled.input`
  width: 100%;
  height: 48px;
  background: var(--color-grey-2);
  border: 1px solid var(--color-grey-2);
  border-radius: 4px;
  padding: 15px;
  color: #fff;

  &:focus {
    border-color: var(--color-grey-0);
  }
`

export const ImgInput = styled.img`
  position: absolute;
  top: 19px;
  right: 20px;
  cursor: pointer;
` 

export const InputPassword = styled.div`
  position: relative;
` 