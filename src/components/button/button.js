import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Button = styled.button`
  width: 90%;
  height: 50px;
  border: 1px solid var(--color-color-primary);
  background: var(--color-color-primary);
  border-radius: 4px;
  color: #fff;
  font-size: 14px;

  &:hover {
    background: var(--color-color-primary-50);
  }
`

export const ButtonDisable = styled.button`
  width: 90%;
  height: 50px;
  border: 1px solid var(--color-color-primary-disable);
  background: var(--color-color-primary-disable);
  border-radius: 4px;
  color: #fff;
  font-size: 14px;

  &:hover {
    background: var(--color-color-primary);
  }

  &:active {
    background: var(--color-color-primary-50);
  }
`

export const ButtonReturn = styled.button`
  border: var(--color-grey-3);
  background: var(--color-grey-3);
  text-decoration: none;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
  padding: 10px 15px;

  &:hover {
    background: var(--color-grey-2);
  }
`

export const ButtonTech = styled.button`
  border: var(--color-grey-3);
  background: var(--color-grey-3);
  text-decoration: none;
  font-size: 20px;
  font-weight: 700;
  border-radius: 4px;
  color: #fff;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--color-grey-2);
  }
`


export const ButtonLink = styled(Link)`
  width: 90%;
  height: 50px;
  border: 1px solid var(--color-grey-1);
  background: var(--color-grey-1);
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;

  &:hover {
    background: var(--color-grey-2);
    border-color: var(--color-grey-2);
  }
`

export const ButtonBack = styled(Link)`
  border: var(--color-grey-3);
  background: var(--color-grey-3);
  text-decoration: none;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
  padding: 10px 15px;

  &:hover {
    background: var(--color-grey-2);
  }
`