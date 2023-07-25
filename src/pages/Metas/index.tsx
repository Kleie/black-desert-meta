import { Card } from "../../components/UI/Card";
import {
  CardWrapper,
  DiariasArea,
  InputArea,
  MetasArea,
  MetasContainer,
  SemanaisArea,
} from "./styles";

export function Metas() {
  return (
    <>
      <InputArea>
        <button>** Coluna</button>
        <input
          type="text"
          placeholder="Adicionar: Diarias - Semanais - Metas"
        />
        {/*faltando icone aq  */}
      </InputArea>

      <MetasContainer>
        <DiariasArea>
          <h2>
            Diárias <span>2h horas restante</span>
          </h2>
          <ul>
            <CardWrapper>
              <Card padding={1.5}>
                <h3>Jettina</h3>
                <p>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card padding={1.5}>
                <h3>Jettina</h3>
                <p>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </Card>
            </CardWrapper>
            <CardWrapper>
              <Card padding={1.5}>
                <h3>Jettina</h3>
                <p>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </Card>
            </CardWrapper>
          </ul>
        </DiariasArea>

        <SemanaisArea>
          <h2>
            Semanais <span>2h horas restante</span>
          </h2>
          <ul>
            <CardWrapper>
              <Card padding={1.5}>
                <h3>Jettina</h3>
                <p>
                  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
              </Card>
            </CardWrapper>
          </ul>
        </SemanaisArea>

        <MetasArea>
          <h2>titulo</h2>
          <ul>
            <li>item1</li>
            <li>item1</li>
            <li>item1</li>
          </ul>
        </MetasArea>
      </MetasContainer>
    </>
  );
}
