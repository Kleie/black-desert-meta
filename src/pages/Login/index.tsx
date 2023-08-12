import { Container, LoginWrapper, LogoWrapper } from "./styled";
import logo from "../../assets/logo.svg";
import { DiscordLogo } from "@phosphor-icons/react";

export function Login() {
  return (
    <Container>
      <LoginWrapper>
        <LogoWrapper>
          <img src={logo} alt="" />
        </LogoWrapper>
        <h1>Log In</h1>
        <a href="http://localhost:4003/auth/discord/login">
          <DiscordLogo size={39} weight="fill" />
          Discord
        </a>
      </LoginWrapper>
    </Container>
  );
}
