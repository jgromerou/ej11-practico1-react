import { Card, Row } from 'react-bootstrap';

const GridNoticias = () => {
  return (
    <>
      <Card className="mt-3">
        <Card.Title className="mt-4 display-6 fw-bold text-center text-lg-start p-3">
          Categoria seleccionada: Deportes
        </Card.Title>
        <Row className="mb-4 mt-2 px-3">
          {/* TODO: aquí va la lista de noticias que se trae de la consulta de la API */}
        </Row>
      </Card>
    </>
  );
};

export default GridNoticias;
