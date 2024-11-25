import { Container } from 'react-bootstrap';
import styles from './reservations.module.css';
import ContactForm from '@/components/contactForm/ContactForm';

const Reservations = () => {
  return <main>
    <div className={styles.reservationsContainer}>
      <a
        className={styles.reservationItem}
        href="https://www.booking.com/hotel/fr/vue-du-vallon.en-gb.html"
        target="_blank"
      >
        <img
          src="/reservations/booking.avif"
          alt="booking.com"
        />
      </a>

      <a
        className={styles.reservationItem}
        href="https://www.expedia.fr/en/Bersac-Sur-Rivalier-Hotels-Vue-Du-Vallon.h102855565.Hotel-Information"
        target="_blank"
      >
        <img
          src="/reservations/expedia.avif"
          alt="Expedia"
        />
      </a>

      <a
        className={styles.reservationItem}
        href="https://www.airbnb.fr/s/Bersac~sur~Rivalier--France/homes?place_id=ChIJe62VZ3lQ-UcRsJnnYJLTBQQ&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&query=Bersac-sur-Rivalier%2C%20France&flexible_trip_lengths%5B%5D=one_week&channel=EXPLORE&ne_lat=46.080336562169215&ne_lng=1.4256610594062522&sw_lat=46.07862770242615&sw_lng=1.4232478546932157&zoom=18.857343325024658&zoom_level=18.857343325024658&monthly_start_date=2024-06-01&monthly_length=3&monthly_end_date=2024-09-01&price_filter_input_type=0&price_filter_num_nights=5&search_by_map=true"
        target="_blank"
      >
        <img
          src="/reservations/airbnb.avif"
          alt="Airbnb"
        />
      </a>
    </div>
    <Container>
      <h1 className="text-center mt-5 mb-3">Reservations</h1>
      <p>Currently unavailable on this webiste. Please use one of the providers above or send an email to&nbsp;
        <a
          className={styles.email}
          href="mailto:info@vueduvallon.fr?subject=Reservation%20Enquiry">info@vueduvallon.fr
        </a>
      </p>

      <ContactForm />
    </Container>
    <main />
  </main>
}

export default Reservations