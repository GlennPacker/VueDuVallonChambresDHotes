'use client'
import AttractionGrid from '@/components/attractionGrid/attractionGrid';
import AttractionsFilter from '@/components/attractionsFilter/attractionsFilter';
import BtnServer from '@/components/button/ButtonServer';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import styles from './attractions.module.css';

const Attractions = () => {
  const [filter, setFilter] = useState<string | null>(null);

  return <Container>
    <h1 className="text-center mt-5 mb-3">
      Vue Du Vallon Haute Vienne
    </h1>
    <div>
      Situated in the beautiful French Lake District of Haute Vienne, Vue du Vallon Chambres d'hôtes is ideally placed for a multi-activity holiday, here you can enjoy the beautiful countryside, lakes and rivers on our doorstep or venture further to explore the bustling city of Limoges, world famous for its porcelain production, whilst also offering culture, entertainment and fine dining.  Find time to visit the surrounding small villages, brocantes, markets and historical sites and try local food to make your holiday a unique and enjoyable taste of rural France.
    </div>

    <div className={styles.filterContainer}>
      <AttractionsFilter
        onChange={value => setFilter(value)}
        val={filter}
      />
      <BtnServer href="/attractions/lakes">Lakes</BtnServer>
      <BtnServer href="/attractions/restaurants">Restaurants</BtnServer>
      <BtnServer href="/attractions/beach">Beach</BtnServer>
      <BtnServer href="/attractions/localTowns">Local Towns</BtnServer>
    </div>

    <AttractionGrid filter={filter} />
  </Container>
}

export default Attractions;