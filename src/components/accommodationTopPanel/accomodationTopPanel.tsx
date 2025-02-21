import styles from './accommodationTopPanel.module.scss';

export default function AccommodationTopPanel() {
  return <div className={styles.topPanel}>
    <img
      src="\shared\Vue du Vallon Chambres dHotes Bersac Sur Rivalier.jpg"
      alt="Vue du Vallon Chambres d'hôtes Bersac Sur Rivalier"
      className={styles.topPanelPic}
    />
    <img
      src="\shared\terrace\Chambres d'hôtes terrace photo 3.jpg"
      alt="Terrace"
      className={styles.topPanelPic}
    />
    <img
      src="\shared\pool.jpg"
      alt="swimming pool"
      className={styles.topPanelPic}
    />
    <img
      src="\shared\sun and beer.jpg"
      alt="swimming pool"
      className={styles.topPanelPic}
    />
    <img
      src="\shared\lounge\Chambres d'hôtes lounge photo 1.jpg"
      alt="swimming pool"
      className={styles.topPanelPic}
    />
  </div>
}
