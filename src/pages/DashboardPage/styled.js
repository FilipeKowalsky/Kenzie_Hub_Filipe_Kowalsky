import { styled } from "styled-components";

export const Div = styled.div`
  width: 100%;
  min-height: 100vh;
  
  background: var(--color-grey-4);
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
  border-bottom: 1px solid var(--color-grey-3);
  background: var(--color-grey-4);
`;


export const NavContainer = styled.div`
  width: 80%;
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Header = styled.header`
  margin-top: 115px;
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid var(--color-grey-3);
`

export const HeaderContainer = styled.div`
  width: 80%;
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`

export const Main = styled.main`
  width: 80%;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 50px 0;
  gap: 20px;
`

export const HeaderTech = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const ListContainer = styled.ul`
  width: 100%;
  background: var(--color-grey-3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const List = styled.li`
  width: 95%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-grey-4);
  padding: 0 15px;
  border-radius: 4px;
  margin: 15px 0;

  &:hover {
    background: var(--color-grey-2);
    cursor: pointer;
  }
`