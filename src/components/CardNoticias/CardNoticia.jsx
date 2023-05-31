import { Card, Col, Button } from 'react-bootstrap';
import './card-noticia.css';

const CardNoticia = () => {
  return (
    <Col md={6} lg={4} className="mb-3">
      <Card id="newCard">
        <Card.Img variant="top" src="/img/news.jpg" />
        <Card.Body>
          <Card.Title className=" fw-bold">Título de la Noticia</Card.Title>
          <Card.Text className="line-clamp">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quidem corporis in magni. Magnam laboriosam nobis, doloribus
            architecto deleniti reiciendis, animi quidem pariatur placeat
            laudantium vel iure eum labore sit?
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
  );
};

export default CardNoticia;
