import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, Input, Button, Label, DivInput, ErrorMessage, PasswordWrapper, ToggleButton } from "./style";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { loginSchema } from "../../schema/loginSchema";
import type { LoginData } from "../../schema/loginSchema";

const LoginForm = () => {

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur',
  });

  const onSubmit = (data: LoginData) => {
    console.log("Dados enviados:", data);
  };

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <DivInput>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="seunome@seuservidor.com"
          {...register("email")}
        />
        {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
      </DivInput>

      <DivInput>
        <Label htmlFor="password">Senha</Label>
        <PasswordWrapper>
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Digite aqui"
            {...register("password")}
          />

          <ToggleButton type="button" onClick={togglePassword}>
            {showPassword ? <IoEyeOffOutline size={16} /> : <IoEyeOutline size={16} />}
          </ToggleButton>
        </PasswordWrapper>
        {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
      </DivInput>

      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default LoginForm;
