"use server";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./page.module.css";
import Cta from "@/components/cta/cta";
import Btn from "@/components/button/Button";

export default async function Home() {
  const cta = [{
    alt: "Accommodation",
    img: "accommodation.jpg",
    link: "/accommodation",
    node:
      <div>
        <h2>Accommodation</h2>
        <p>The rooms at the Chambres d'hôtes</p>
        <Btn>
          See More
        </Btn>
      </div>
  }, {
    alt: "Activities",
    img: "activities.webp",
    link: "/activities",
    node:
      <div>
        <h2>Activities</h2>
        <p>Activities offered by the Chambres d'hôtes</p>
        <Btn>
          See More
        </Btn>
      </div>
  }, {
    alt: "Location & Attractions",
    img: "attractions.webp",
    link: "/attractions",
    node:
      <div>
        <h2>Location & Attractions</h2>
        <p>Attractions and places to go.</p>
        <Btn>
          See More
        </Btn>
      </div>
  }]

  return (
    <div>
      <div className={styles.backgroundImage}>
        <div className={styles.centerPanel} >
          <h1 className={styles.masterHeading}>Vue Du Vallon</h1>
          <h2 className="text-primary text-center">
            Chambres d'hôtes
          </h2>
        </div>

      </div>
      <Container>
        <Row>
          <Col className="text-center">
            <h1 className="mt-5">Welcome</h1>

            <p className="mt-3 my-5">
              Welcome to Vue Du Vallon chambres d’hôtes, a beautifully restored house located on the outskirts of Bersac-sur-Rivalier, offering five immaculate guests rooms with magnificent views across the valley to the Ambazac mountains.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>

            {
              cta.map(({ alt, img, link, node }) =>
                <div
                  className="pb-4"
                  key={img}
                >
                  <Cta
                    img={img}
                    alt={alt}
                    link={link}
                  >
                    {node}
                  </Cta>
                </div>
              )
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}
