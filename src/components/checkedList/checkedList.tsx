import styles from './checkedList.module.scss';

interface Props {
  items: string[],
}

const CheckedList = ({ items }: Props) => {
  return <div className={styles.container}>
    <ul>
      {
        items.map(item => {
          return (
            <li key={item}>
              <span>✔</span>
              {item}
            </li>
          )
        })
      }
    </ul>
  </div>
}

export default CheckedList