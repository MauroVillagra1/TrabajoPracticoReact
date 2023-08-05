import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap/";

const Noticias = ({ noticia }) => {
  {
    console.log(noticia);
  }
  return (
    <>
      <Card className="my-2 col-12 col-md-4 mx-4">
        <Card.Header className="">
          <img
            src={
              noticia.image_url ||
              "https://www.yaskawa-pillar.mx/img/categorias/no-disponible.jpg"
            }
            alt={noticia.title}
            className="card-img-top h-100 img-fluid"
          />
        </Card.Header>
        <Card.Body>
          <Card.Title>{noticia.title || "No existe titulo"}</Card.Title>
          <Card.Text className="text-truncate">
            {noticia.description || "No pudimos encontrar la descripcion"}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="primary">
            <a
              href={noticia.link}
              target="_blank"
              rel="noreferrer"
              className="nav-link"
            >
              Ver más
            </a>
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Noticias;
