import styles from './roomTable.module.scss';
import CheckedList from "../checkedList/checkedList";
import Icon from '@mdi/react';
import { mdiAccountOutline } from '@mdi/js';
import Beds from '@/components/beds/beds';
import RoomPhotos from "@/components/roomPhotos/roomPhotos";

export default async function roomTable({ room }) {
  return <div>
    <div className={room.pricePerNight ? styles.prices : styles.noPrices}>
      <div className={styles.price}>

        {room.pricePerNight && room.pricePerNight === room.totalPrice && <h4>Price Per Night €{room.pricePerNight}</h4>}
        {room.pricePerNight && room.pricePerNight !== room.totalPrice && <>
          <h4>Price €{room.totalPrice}</h4>
          <div>Price Per Night €{room.pricePerNight}</div>
        </>
        }
      </div>
      <div className={styles.room} >
        <h3>{room.roomType}</h3>
      </div>
      <div className={styles.roomfeatures}>

        <div className="pb2" >
          <Beds type="Double" count={room.beds.double} />
          <Beds type="Single" count={room.beds.single} />
          <Beds type="Bunk" count={room.beds.bunk} />
        </div>

        <div className="pb2">
          Max Occupancy: &nbsp;
          <span className={styles.highlightSpan}>
            {
              room.beds.single + ((room.beds.bunk + room.beds.double) * 2)
            }
            &nbsp;*
            <Icon path={mdiAccountOutline}
              title="User Profile"
              size={1}
            />
          </span>
        </div>

        <CheckedList items={room.features} />
      </div>
      <div className={styles.photos}>
        {
          ['main', 'bath', 'view'].map(type => (
            <RoomPhotos
              key={type}
              count={room.photos[type]}
              type={type}
              room={room.room}
            />
          ))
        }
      </div>
    </div>
  </div >
}