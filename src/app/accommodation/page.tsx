
import styles from "./accommodation.module.scss";
import RoomTable from "@/components/roomTableServerSide/roomTable";
import AccommodationSidePanel from "@/components/accommodationSidePanel/accomodationSidePanel";
import AccommodationTopPanel from "@/components/accommodationTopPanel/accomodationTopPanel";
import { rooms } from "@/constants/Rooms";

export default function accommodation() {
  return <div>
    <h1 className="text-center mt-5 mb-3">
      Vue Du Vallon - Accommodation
    </h1>
    <div className={styles.container}>
      <div className={styles.topPanel}>
        <AccommodationTopPanel />
      </div>
      <div className={styles.main}>
        {
          rooms.map(room => <RoomTable key={room.room} room={room} />)
        }
      </div>
      <div className={styles.features}>
        <AccommodationSidePanel />
      </div>
    </div>
  </div>
}
