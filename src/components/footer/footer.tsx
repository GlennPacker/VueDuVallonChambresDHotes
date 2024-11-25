import { Container } from "react-bootstrap";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.pageContainer}>
      <Container>
        <div className={styles.container}>
          <div>
            4 Rte de Maillofargueix, Bersac-Sur-Rivalier 87370
            <br />
            info@VueDuVallon.fr
          </div>
          <div className={styles.links}>
            <a
              href="https://www.booking.com/hotel/fr/vue-du-vallon.en-gb.html"
              target="_blank"
            >
              Booking.com
            </a>
            <a
              href="https://www.expedia.fr/en/Bersac-Sur-Rivalier-Hotels-Vue-Du-Vallon.h102855565.Hotel-Information"
              target="_blank"
            >
              Expedia
            </a>
            <a href="https://www.airbnb.fr/s/Bersac~sur~Rivalier--France/homes?place_id=ChIJe62VZ3lQ-UcRsJnnYJLTBQQ&refinement_paths%5B%5D=%2Fhomes&tab_id=home_tab&query=Bersac-sur-Rivalier%2C%20France&flexible_trip_lengths%5B%5D=one_week&channel=EXPLORE&ne_lat=46.080336562169215&ne_lng=1.4256610594062522&sw_lat=46.07862770242615&sw_lng=1.4232478546932157&zoom=18.857343325024658&zoom_level=18.857343325024658&monthly_start_date=2024-06-01&monthly_length=3&monthly_end_date=2024-09-01&price_filter_input_type=0&price_filter_num_nights=5&search_by_map=true">
              AirBnb
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
