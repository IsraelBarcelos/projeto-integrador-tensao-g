import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export function Samples() {
  const params = useParams();
  const [material, setMaterial] = useState(
    Array(parseInt(params.layers)).fill(0)
  );
  const [hits, setHits] = useState(Array(parseInt(params.layers)).fill(0));

  useEffect(() => {
    console.log(material);
  }, [material, hits]);

  return (
    <section>
      <Form>
        <h1 className="form-title text-center">Tensçoes Geostáticas</h1>
        <fieldset>
          <Form.Group className="mx-2 mb-3">
            <table>
              <tbody>
                <tr>
                  <td>
                    <b>Nível do lençol freático: </b>
                  </td>
                  <td>
                    <div className="d-inline-block border border-dark text-center">
                      {params.level}
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Número de Camadas:&nbsp;</b>
                  </td>
                  <td>
                    <div className="d-inline-block border border-dark text-center">
                      {params.layers}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form.Group>

          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Amostra</th>
                <th>Golpes</th>
                <th>Material</th>
              </tr>
            </thead>
            <tbody>
              {Array.apply(null, Array(parseInt(params.layers))).map(function (
                layer,
                index
              ) {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>
                      <input type="number" className="form-control input-sm" />
                    </td>
                    <td>
                      <select
                        value={material[index]}
                        onChange={(materialSelected) => {
                          let newArray = [...material];
                          newArray[index] = parseInt(
                            materialSelected.target.value
                          );
                          setMaterial([...newArray]);
                        }}
                        className="custom-select form-control"
                      >
                        <option defaultValue>Escolher</option>
                        <option value="1">Solo tipo 1</option>
                        <option value="2">Solo tipo 2</option>
                        <option value="3">Solo tipo 3</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>

          <button
            onClick={(event) => {
              event.preventDefault();
              console.log(material);
            }}
          >
            log
          </button>
          <div className="text-center">
            <Link to={`/amostras/`}>
              <Button variant="primary">Adicionar novos dados</Button>
            </Link>
          </div>
        </fieldset>
      </Form>
    </section>
  );
}
