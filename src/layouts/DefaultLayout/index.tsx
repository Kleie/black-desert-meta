import { Nav } from "../../components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import { AvatarWrapper, Container, ContentWrapper } from "./styles";
import { useMetaContext } from "../../hooks/useMetaContext";

export function DefaultLayout() {
  const { pathname } = useLocation();
  const { user } = useMetaContext();
  const newTitle = pathname.replace("/", "").split("-").join(" ");

  return (
    <Container>
      <Nav />
      <ContentWrapper>
        <header>
          <h1>{newTitle}</h1>
          <AvatarWrapper>
            <img src={user?.avatar} alt="" />
          </AvatarWrapper>
        </header>
        <main>
          <Outlet />
        </main>
      </ContentWrapper>
    </Container>
  );
}
