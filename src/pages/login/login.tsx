import { CardLogin, TextSection, ImageSection, Title, Text } from "./style";
import Logo from "../../assets/logo_login.png";
import LoginForm from "../../components/form/form";
const Login = () => {
  return (
    <div>
      <CardLogin>
        <TextSection>
          <img src={Logo} />

          <div>
            <Title>Bem-vindo de volta</Title>
            <Text>Entre com sua conta para acessar o painel.</Text>
          </div>

          <LoginForm />
        </TextSection>

        <ImageSection></ImageSection>
      </CardLogin>
    </div>
  );
};

export default Login;
