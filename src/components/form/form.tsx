import { Form, Input, Button, Label, DivInput } from "./style";

const LoginForm = () => {
  return (
    <Form>
      <DivInput>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="seunome@seuservidor.com" required />
      </DivInput>
      
      <DivInput>
        <Label htmlFor="password">Senha</Label>
        <Input id="password" type="password" placeholder="Digite aqui" required />
      </DivInput>
      
      <Button type="submit">Enviar</Button>
    </Form>
  );
};

export default LoginForm;
