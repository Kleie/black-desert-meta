import { Container, DiscordWrapper, LoginContainer, LogoWrraper } from "./styled";
import logo from "../../assets/logo.svg";
import DiscordLogo from "../../assets/logo-discord.svg";

export function Login() {
  return (
    <Container>
      <LoginContainer>
        <LogoWrraper>
          <img src={logo} alt="" />
          <h1>Black Desert META’s</h1>
        </LogoWrraper>

        <DiscordWrapper>
          <h2>Acesse a plataforma</h2>
          <p>Faça login com o Discord para começar a construir suas metas ainda hoje.</p>
          <a href="http://localhost:4003/auth/discord/login">
            <img src={DiscordLogo} alt="" /> Discord
          </a>
        </DiscordWrapper>
      </LoginContainer>
    </Container>
  );
}
