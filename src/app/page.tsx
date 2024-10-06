import Btn from "@/components/button/Button";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.backgroundImage}>
        <div className={styles.centerPanel} >
          <h1 className={styles.masterHeading}>Vue Du Vallon</h1>
          <h2 className="text-primary text-center">Chambres d'hôtes</h2>
        </div>
        <Container>
          <Row >

          </Row>
          <Row>
            <Col>

              <Btn type="primary"> new btn</Btn>
            </Col>
          </Row>
        </Container>
      </div>

    </div>
  );
}
