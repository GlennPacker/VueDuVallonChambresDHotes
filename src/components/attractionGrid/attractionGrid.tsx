import Attraction from "@/components/attraction/attraction";
import styles from './attractionGrid.module.css';
import attractionList from "@/app/attractionList";
import { Tag } from "@/components/attraction/attraction";

const attractions = attractionList.map(item => ({ ...item, img: `/attractions/${item.img}` }));

type props = {
  filter?: string | null
}

const AttractionGrid = ({ filter }: props) => {
  return <div className={styles.container}>
    {attractions
      .filter(({ tags }) =>
        filter
          ? tags.some(t => t.toString() === filter || Tag[filter] === t)
          : true
      )
      .map(({ img, place, tags, text }) =>
        <div key={place}>
          <Attraction
            place={place}
            tags={tags}
            text={text}
            img={img}
          />
        </div>
      )}
  </div>
}

export default AttractionGrid;