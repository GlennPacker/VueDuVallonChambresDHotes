import AttractionGrid from "@/components/attractionGrid/attractionGrid";
import { Tag } from "@/components/attraction/attraction";
import { Container } from "react-bootstrap";

const Attractions = () => {
  return <Container>
    <h1 className="text-center mt-5 mb-3">
      Vue Du Vallon Haute Vienne
    </h1>
    <h2>Local Restaurants</h2>

    <AttractionGrid filter={Tag.LocalTown} />
  </Container>
}

export default Attractions;