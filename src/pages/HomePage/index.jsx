import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Logo from "../../assets/Logo.png";
import Olho from "../../assets/password.png";
import { Main, Form, InputContainer, Input, ImgInput, InputPassword } from "./styled";
import { TextStyleTitle1, TextStyleHeadline, TextStyleHeadlineItalic, Error } from "../../styles/typography";
import { Button, ButtonLink } from "../../components/button/button";
import { restriction } from "./script";
import { CustomModal } from "../../components/modal/modalAlert/modal";
import { ContextApi } from "../../providers/ContextApi"

export const HomePage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(restriction)
  });

  const {loginUser, onCloseModalApproved, onCloseModalError, showModalApproved, showModalError} = useContext(ContextApi)

  const submit = (formData) => {
    loginUser(formData);
  };

  return (
    <Main>
      <>
        <img src={Logo} alt="Logo com escrita 'Kenzie Hub'" />
        <Form onSubmit={handleSubmit(submit)}>
          <TextStyleTitle1>Login</TextStyleTitle1>
          <InputContainer>
            <TextStyleHeadline>Email</TextStyleHeadline>
            <Input placeholder="Digite seu E-mail" type="email" {...register("email")} />
            {errors.email ? <Error>{errors.email.message}</Error> : null}
          </InputContainer>
          <InputContainer>
            <TextStyleHeadline>Senha</TextStyleHeadline>
            <InputPassword>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {errors.password ? <Error>{errors.password.message}</Error> : null}
              <ImgInput
                src={Olho}
                onClick={() => setShowPassword(!showPassword)}
              />
            </InputPassword>
          </InputContainer>
          <Button onClick={handleSubmit(submit)}>Entrar</Button>
          <TextStyleHeadlineItalic>Ainda não possui uma conta?</TextStyleHeadlineItalic>
          <ButtonLink to="/register">Cadastre-se</ButtonLink>
        </Form>
        <CustomModal show={showModalError} onClose={onCloseModalError} errorMessage="Ops! Algo deu errado!" />
        {(
          <CustomModal show={showModalApproved} onClose={onCloseModalApproved} approvedMessage="Conta logada com sucesso!" />
        )}
      </>
    </Main>
  );
};
