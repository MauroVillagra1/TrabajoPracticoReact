/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";
import Noticias from "./Noticias";

const ListaNoticias = ({ noticias }) => {
  return (
    <Container className="row justify-content-center">
      {noticias.map((noticia, indiceNoticia) => (
        <Noticias
          noticia={noticia}
          key={indiceNoticia}
          className="col-12 col-md-4"
        />
      ))}
    </Container>
  );
};

export default ListaNoticias;
