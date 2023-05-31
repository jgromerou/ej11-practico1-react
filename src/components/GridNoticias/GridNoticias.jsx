import { Card, Row, Col, Button } from 'react-bootstrap';
import './grid-noticias.css';

const GridNoticias = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Title className="mt-4 display-6 fw-bold text-center text-lg-start p-3">
          Categoria seleccionada: Deportes
        </Card.Title>
        <Row className="mb-4 mt-2 px-3">
          <Col md={6} lg={4} className="mb-3">
            <Card id="newCard">
              <Card.Img variant="top" src="/img/news.jpg" />
              <Card.Body>
                <Card.Title className=" fw-bold">
                  Título de la Noticia
                </Card.Title>
                <Card.Text className="line-clamp">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quidem corporis in magni. Magnam laboriosam nobis,
                  doloribus architecto deleniti reiciendis, animi quidem
                  pariatur placeat laudantium vel iure eum labore sit?
                </Card.Text>
                <Card.Footer className="text-muted text-center fw-bold">
                  <Button
                    variant="primary"
                    className="text-uppercase text-light fw-bold py-2"
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ir a la noticia completa
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card id="newCard">
              <Card.Img variant="top" src="/img/news.jpg" />
              <Card.Body>
                <Card.Title className="fw-bold">
                  Título de la Noticia
                </Card.Title>
                <Card.Text className="line-clamp">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quidem corporis in magni. Magnam laboriosam nobis,
                  doloribus architecto deleniti reiciendis, animi quidem
                  pariatur placeat laudantium vel iure eum labore sit?
                </Card.Text>
                <Card.Footer className="text-muted text-center fw-bold">
                  <Button
                    variant="primary"
                    className="text-uppercase text-light fw-bold py-2"
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ir a la noticia completa
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card id="newCard">
              <Card.Img variant="top" src="/img/news.jpg" />
              <Card.Body>
                <Card.Title className=" fw-bold">
                  Título de la Noticia
                </Card.Title>
                <Card.Text className="line-clamp">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quidem corporis in magni. Magnam laboriosam nobis,
                  doloribus architecto deleniti reiciendis, animi quidem
                  pariatur placeat laudantium vel iure eum labore sit?
                </Card.Text>
                <Card.Footer className="text-muted text-center fw-bold">
                  <Button
                    variant="primary"
                    className="text-uppercase text-light fw-bold py-2"
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ir a la noticia completa
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} lg={4} className="mb-3">
            <Card id="newCard">
              <Card.Img variant="top" src="/img/news.jpg" />
              <Card.Body>
                <Card.Title className=" fw-bold">
                  Título de la Noticia
                </Card.Title>
                <Card.Text className="line-clamp">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quidem corporis in magni. Magnam laboriosam nobis,
                  doloribus architecto deleniti reiciendis, animi quidem
                  pariatur placeat laudantium vel iure eum labore sit?
                </Card.Text>
                <Card.Footer className="text-muted text-center fw-bold">
                  <Button
                    variant="primary"
                    className="text-uppercase text-light fw-bold py-2"
                    href="https://www.example.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ir a la noticia completa
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default GridNoticias;
