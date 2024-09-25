import Btn from "@/components/button/Button";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.css";

export default function Home() {
  return (
    <Container>
      <Row>
        <div className={styles.backgroundImage}>

        </div>
      </Row>
      <Row>
        <Col>
          <h1 className="text-danger fw-bold">Home</h1>
          <Btn type="primary"> new btn</Btn>
        </Col>
      </Row>
    </Container>
  );
}
