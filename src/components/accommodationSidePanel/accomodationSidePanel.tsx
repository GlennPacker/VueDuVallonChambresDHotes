import CheckedList from "@/components/checkedList/checkedList";
import styles from './accommodationSidePanel.module.scss';

const accommodationFeatureList = [
  'Continental breakfast included',
  'Outdoor & indoor dining areas',
  'Great Views',
  'Hot Tub (time of year dependant)',
  'Free WiFi',
  'Free toiletries',
  'Streaming service (Netflix e.t.c)',
  'Basketball and net',
  'Tea/Coffee Facilities',
  'Fan',
  'Kettle',
  'Hairdryer',
  'Towels',
  'Socket near the bed',
  'Heating',

  'Cot available on request',
  `Children's high chair`,
];

const sharedList = [
  'Pool',
  'Lounge',
  'Terrace',
]


export default function AccommodationSidePanel() {
  return <>
    <div className={styles.bigItems}>
      <CheckedList items={sharedList} />
    </div>
    <CheckedList items={accommodationFeatureList} />
  </>
}
