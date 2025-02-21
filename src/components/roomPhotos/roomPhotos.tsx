import styles from './roomPhotos.module.scss';

interface props {
  count: number;
  type: string;
  room: number
}

export default function roomPhotos({ count, type, room }: props) {
  return Array.from(Array((count || 1)).keys()).map(i => (
    <img
      key={`room {room} photo ${type}${i}`}
      src={`\\rooms\\${room}\\${type[0]}${i + 1}.jpg`}
      alt={`room ${room} photo`}
      className={styles.photo}
    />
  ))
}