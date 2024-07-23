
import { Container, Card, Image } from "react-bootstrap";
import { FaHeart } from "react-icons/fa";

export default function App() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{ maxWidth: "42rem" }}>
        <Card.Body>
          <div className="d-flex mb-3">
            <a href="#!">
              <Image
                src="https://mdbcdn.b-cdn.net/img/new/avatars/18.webp"
                className="border rounded-circle me-2"
                alt="Avatar"
                style={{ height: "40px" }}
              />
            </a>
            <div>
              <a href="#!" className="text-dark mb-0">
                <strong>Username</strong>
              </a>
              <a
                href="#!"
                className="text-muted d-block"
                style={{ marginTop: "-6px" }}
              >
                <small>10h</small>
              </a>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque ex
              non impedit corporis sunt nisi nam fuga dolor est, saepe vitae
              delectus fugit, accusantium qui nulla aut adipisci provident
              praesentium?
            </p>
          </div>
        </Card.Body>
        <div className="bg-image hover-overlay ripple rounded-0">
          <Card.Img
            src="https://mdbcdn.b-cdn.net/img/new/standard/people/077.webp"
            className="w-100"
          />
          <a href="#!">
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </a>
        </div>
        <Card.Body>
          <div className="d-flex justify-content-between mb-3">
            <div>
              <a href="#!">
                <FaHeart className="me-1" color="danger" />
                <span>124</span>
              </a>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}
