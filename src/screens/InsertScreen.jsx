import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export function InsertScreen() {
  const [colectedData, setColectedData] = useState({});

  return (
    <section>
      <Form>
        <h1>Tensçoes Geostáticas</h1>
        <fieldset>
          <Form.Group className="mx-2 mb-3">
            <label>
              <b>Nível do lençol freático: </b>
            </label>
            <input
              value={colectedData.level}
              onChange={(level) => {
                setColectedData(level);
              }}
              className="form-control"
              type="number"
            />
          </Form.Group>
          <Form.Group className="mx-2 mb-3">
            <label>
              <b>Informe o número de camadas: </b>
            </label>
            <input className="form-control" type="number" />
          </Form.Group>
          <div className="text-center">
            <Link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/amostras/${colectedData.level}`}
            >
              <Button variant="primary">Adicionar novos dados</Button>
            </Link>
          </div>
        </fieldset>
      </Form>
    </section>
  );
}
