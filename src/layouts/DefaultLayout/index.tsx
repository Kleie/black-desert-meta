import { Nav } from "../../components/Nav";
import { Outlet, useLocation } from "react-router-dom";
import { Container, ContentWrapper } from "./styles";
import { ContextProvider } from "../../context/metaContext";

export function DefaultLayout() {
  const { pathname } = useLocation();
  const newTitle = pathname.replace("/", "").split("-").join(" ");

  return (
    <Container>
      <Nav />
      <ContextProvider>
        <ContentWrapper>
          <header>
            <h1>{newTitle}</h1>
          </header>
          <main>
            <Outlet />
          </main>
        </ContentWrapper>
      </ContextProvider>
    </Container>
  );
}
