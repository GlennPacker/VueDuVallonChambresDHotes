import styles from './attraction.module.css';

export type TAttraction = {
  img: string;
  place: string;
  tags: Tag[];
  text: string;
}

export enum Tag {
  Beach = 'Beach',
  Cycling = 'Cycling',
  Kayaking = 'Kayaking',
  HistoricalInterest = 'Historical Interest',
  Lakes = 'Lakes and waterways',
  LocalTown = 'Local Town',
  MountainBiking = 'Mountain Biking',
  NatureWalk = 'Nature Walk',
  Paragliding = 'Paragliding',
  Walks = 'Walks',
  Woodlands = 'Woodlands'
}

const Attraction = ({ img, place, text }: TAttraction) => {
  return <div className={styles.container}>
    <img
      src={img}
      alt={place}
      width="300px;"
    />
    <h3 className='pt-2'>{place}</h3>
    <div className={styles.text}>
      {text}
    </div>
  </div>
}

export default Attraction
