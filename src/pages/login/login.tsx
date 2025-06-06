import {
  BodyLogin,
  CardLogin,
  LoginContent,
  IllustrationWrapper,
  Title,
  Text,
} from "./style";
import Logo from "../../assets/logo_login.png";
import LoginForm from "../../components/form/form";
import Monitoring from "../../assets/monitoring.png";

const Login = () => {
  return (
    <BodyLogin>
      <CardLogin>
        <LoginContent>
          <img src={Logo} alt="Logo da tropa digital" />

          <div>
            <Title>Bem-vindo de volta</Title>
            <Text>Entre com sua conta para acessar o painel.</Text>
          </div>

          <LoginForm />
        </LoginContent>

        <IllustrationWrapper>
          <img src={Monitoring} alt="Ilustração de monitoramento" />
        </IllustrationWrapper>
      </CardLogin>
    </BodyLogin>
  );
};

export default Login;
