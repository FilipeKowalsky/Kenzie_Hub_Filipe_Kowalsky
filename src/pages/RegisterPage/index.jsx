import { useForm } from "react-hook-form";
import Logo from "../../assets/Logo.png";
import { ButtonBack, ButtonDisable } from "../../components/button/button";
import { Header, HeaderContainer, Main, Form, InputContainer, Input, Select } from "./styled";
import { TextStyleTitle1, TextStyleHeadlineItalic, TextStyleHeadline, Error } from "../../styles/typography";
import { restriction } from "./script";
import { zodResolver } from "@hookform/resolvers/zod";
import { CustomModal } from "../../components/modal/modalAlert/modal";
import { ContextApi } from "../../providers/ContextApi"
import { useContext } from "react";

export const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(restriction)
  });

  const {createUser, onCloseModalApproved, onCloseModalError, showModalApproved, showModalError} = useContext(ContextApi)
  
  const submit = async (formData) => {
    await createUser(formData);
  };

  return (
    <>
      <Header>
        <HeaderContainer>
          <img src={Logo} alt="Logo com escrita 'Kenzie Hub'" />
          <ButtonBack to="/">Voltar</ButtonBack>
        </HeaderContainer>
      </Header>
      <Main>
        <Form onSubmit={handleSubmit(submit)}>
          <TextStyleTitle1>Crie sua conta</TextStyleTitle1>
          <TextStyleHeadlineItalic>Rapido e grátis, vamos nessa</TextStyleHeadlineItalic>
          <InputContainer>
            <TextStyleHeadline>Nome</TextStyleHeadline>
            <Input placeholder="Nome" type="text" {...register("name")} />
            {errors.name ? <Error>{errors.name.message}</Error> : null}
          </InputContainer>
          <InputContainer>
            <TextStyleHeadline>Email</TextStyleHeadline>
            <Input placeholder="E-mail" type="email" {...register("email")} />
            {errors.email ? <Error>{errors.email.message}</Error> : null}
          </InputContainer>
          <InputContainer>
            <TextStyleHeadline>Senha</TextStyleHeadline>
            <Input placeholder="Senha" type="password" {...register("password")} />
            {errors.password ? <Error>{errors.password.message}</Error> : null}
          </InputContainer>
          <InputContainer>
            <TextStyleHeadline>Confirmar Senha</TextStyleHeadline>
            <Input placeholder="Confirme sua senha" type="password" {...register("confirm")} />
            {errors.confirm ? <Error>{errors.confirm.message}</Error> : null}
          </InputContainer>
          <InputContainer>
            <TextStyleHeadline>Bio</TextStyleHeadline>
            <Input placeholder="Bio" type="text" {...register("bio")} />
            {errors.bio ? <Error>{errors.bio.message}</Error> : null}
          </InputContainer>
          <InputContainer>
            <TextStyleHeadline>Contato</TextStyleHeadline>
            <Input placeholder="Contato" {...register("contact")} />
            {errors.contact ? <Error>{errors.contact.message}</Error> : null}
          </InputContainer>
          <InputContainer>
            <TextStyleHeadline>Selecionar módulo</TextStyleHeadline>
            <Select {...register("course_module")}>
              <option value="1º Módulo (Frontend inicial)">Primeiro Módulo</option>
              <option value="2º Módulo (Frontend avançado)">Segundo Módulo</option>
            </Select>
            {errors.course_module ? <Error>{errors.course_module.message}</Error> : null}
          </InputContainer>
          <ButtonDisable>Cadastrar</ButtonDisable>
        </Form>
      </Main>
      <CustomModal show={showModalError} onClose={onCloseModalError} errorMessage="Ops! Algo deu errado!" />
      <CustomModal show={showModalApproved} onClose={onCloseModalApproved} approvedMessage="Conta criada com sucesso!" />
    </>
  );
};