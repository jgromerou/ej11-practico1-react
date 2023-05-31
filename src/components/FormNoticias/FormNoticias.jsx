import { Card, Form, Row, Col } from 'react-bootstrap';
import './form-noticias.css';
import GridNoticias from '../GridNoticias';
import { useEffect, useState } from 'react';

const FormNoticias = () => {
  // https://newsdata.io/api/1/news?apikey=pub_23780f986c99c831d5da97ac5387f0936f5f1&q=pizza

  const [noticias, setNoticias] = useState();

  useEffect(() => {
    consultaAPI();
  }, []);

  const consultaAPI = async () => {
    const resp = await fetch('https://newsdata.io/api/1/news', {
      headers: { 'Content-Type': 'application/json' },
      params: {
        apikey: 'pub_23780f986c99c831d5da97ac5387f0936f5f1',
        q: 'pizza',
      },
    });
    const datos = await resp.json();
    console.log(datos);
    //setNoticias(datos);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mt-2 mb-4 text-uppercase display-6 fw-bold text-center">
            Noticias
          </Card.Title>
          <Form className="container-wrapper mt-2">
            <Form.Group
              as={Row}
              className="justify-content-center align-items-center mb-3"
              controlId="nombreNoticias"
            >
              <Col md={2}>
                <Form.Label className="fw-bold mb-3">
                  Buscar por categoria:{' '}
                </Form.Label>
              </Col>
              <Col md={6}>
                <Form.Select className="mb-3" aria-label="generoSelect">
                  <option>Seleccione una opción...</option>
                  <option value="Políticas">Políticas</option>
                  <option value="Deportes">Deportes</option>
                  <option value="Economía">Economía</option>
                  <option value="Seguridad">Seguridad</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
      <GridNoticias />
    </>
  );
};

export default FormNoticias;
