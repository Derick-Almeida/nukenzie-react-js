import Form from "./Form";
import Header from "./Header";
import List from "./List";
import { Container } from "./style";

function Dashboard({ setHomepage }) {
  return (
    <>
      <Header setHomepage={setHomepage} />
      <Container>
        <div>
          <Form />

          <div className="total--money">
            <h2>
              Valor total: <span>$ {12345}</span>
            </h2>
            <span>O valor se refere ao saldo</span>
          </div>
        </div>

        <List />
      </Container>
    </>
  );
}

export default Dashboard;
