import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { Div, Nav, NavContainer, Header, HeaderContainer, Main, HeaderTech, ListContainer, List } from "./styled";
import { TextStyleTitle2, TextStyleHeadlineItalic, TextStyleTitle1 } from "../../styles/typography";
import { ButtonReturn, ButtonTech } from "../../components/button/button";
import { ContextApi } from "../../providers/ContextApi";
import { useContext } from "react";
import { ModalTech } from "../../components/modal/modalCreateTech";
import { TechContextApi } from "../../providers/TechContextApi";
import { ModalEditTech } from "../../components/modal/modalEditTech";

export const DashboardPage = () => {
  const { user, userLogout } = useContext(ContextApi);
  const { showModalTech, closeModal, openModal, openModalUpdate,
    closeModalUpdate, showModalUpdateTech, tech} = useContext(TechContextApi);
  
  return (
    <Div>
      <Nav>
        <NavContainer>
          <img src={Logo} alt="Logo" />
          <ButtonReturn onClick={() => userLogout()}>Sair</ButtonReturn>
        </NavContainer>
      </Nav>
      <Header>
        <HeaderContainer>
          <TextStyleTitle2>Olá, {user.name}</TextStyleTitle2>
          <TextStyleHeadlineItalic>{user.course_module}</TextStyleHeadlineItalic>
        </HeaderContainer>
      </Header>
      <Main>
        <>
          <HeaderTech>
            <TextStyleTitle1>Tecnologias</TextStyleTitle1>
            <ButtonTech onClick={openModal}> + </ButtonTech>
          </HeaderTech>
          <ListContainer>
            {tech.map((item) =>(
              <List onClick={() => openModalUpdate(item)} key={item.id}> 
                <TextStyleTitle1>{item.title}</TextStyleTitle1>
                <TextStyleHeadlineItalic>{item.status}</TextStyleHeadlineItalic>
            </List>
            ))}
          </ListContainer>
          <ModalEditTech show={showModalUpdateTech} onClose={closeModalUpdate} />
          <ModalTech show={showModalTech} onClose={closeModal} />
        </>
      </Main>
    </Div>
  );
};
