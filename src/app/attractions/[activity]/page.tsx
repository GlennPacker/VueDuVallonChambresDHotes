import AttractionGrid from "@/components/attractionGrid/attractionGrid";
import { Container } from "react-bootstrap";

const Attractions = ({ params }) => {
  const urlToTagMap = {
    beach: 'Beach',
    cycling: 'Cycling',
    kayaking: 'Kayaking',
    historicalinterest: 'HistoricalInterest',
    lakes: 'Lakes',
    localtown: 'LocalTown',
    mountainbiking: 'MountainBiking',
    naturewalk: 'NatureWalk',
    paragliding: 'Paragliding',
    walks: 'Walks',
    woodlands: 'Woodlands'
  }
  const tag = urlToTagMap[params.activity];

  return <Container>
    <h1 className="text-center mt-5 mb-3">
      Vue Du Vallon Haute Vienne
    </h1>
    <h2>Local Lakes</h2>

    <AttractionGrid filter={tag} />
  </Container>
}

export default Attractions;