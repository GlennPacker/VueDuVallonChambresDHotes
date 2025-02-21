import styles from "./accommodation.module.scss";
import RoomTable from "@/components/roomTable/roomTable";
import AccommodationSidePanel from "@/components/accommodationSidePanel/accomodationSidePanel";
import AccommodationTopPanel from "@/components/accommodationTopPanel/accomodationTopPanel";

const rooms = [{
  room: 1,
  roomType: "Twin/Triple",
  beds: {
    single: 3,
    double: 0,
    bunk: 0
  },
  photos: {
    main: 3,
    bath: 1,
    view: 2,
  },
  features: [
    'Private en suite bathroom',
    'Mountain view'
  ],
}, {
  room: 2,
  roomType: "Double",
  beds: {
    single: 0,
    double: 1,
    bunk: 0
  },
  photos: {
    main: 3,
    bath: 1,
    view: 2,
  },
  features: [
    'Private en suite bathroom',
    'Mountain view',
    'Cot available'
  ],
}, {
  room: 3,
  roomType: "Family Room",
  beds: {
    single: 0,
    double: 1,
    bunk: 1
  },
  features: [
    'Private bathroom',
    'Garden view',
    'Cot available'
  ],
  photos: {
    main: 4,
    bath: 2,
    view: 2,
  },
}, {
  room: 4,
  roomType: "Double Room",
  beds: {
    single: 0,
    double: 1,
    bunk: 0
  },
  features: [
    'Private bathroom',
    'Garden view',
    'Cot available'
  ],
  photos: {
    main: 3,
    bath: 2,
    view: 2,
  },
}, {
  room: 5,
  roomType: "Luxury Family Room",
  beds: {
    single: 1,
    double: 1,
    bunk: 1
  },
  features: [
    'Private en suite bathroom',
    'Garden view',
    'Bigger Bathroom',
    'Bigger Bedroom',
    'Armchairs',
    'Cot available'
  ],
  photos: {
    main: 4,
    bath: 2,
    view: 3,
  },
}]

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

// export default accommodation;