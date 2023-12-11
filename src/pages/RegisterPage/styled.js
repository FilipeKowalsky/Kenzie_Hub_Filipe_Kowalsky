import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const HeaderContainer = styled.div`
  width: 90%;
  max-width: 370px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 100px 0;
`

export const Main = styled.main`
  width: 100%;
  background: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const Form = styled.form`
  width: 90%;
  max-width: 370px;
  max-height: 2000px;
  padding: 15px 0;
  background: var(--color-grey-3);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  justify-content: center;
  gap: 20px;
  margin: 20px 0 60px 0;
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

export const Select = styled.select`
  width: 100%;
  height: 48px;
  background: var(--color-grey-2);
  border: 1px solid var(--color-grey-2);
  border-radius: 4px;
  padding: 15px;
  color: var(--color-grey-1);
  
  &:focus {
    border-color: var(--color-grey-0);
  }
`