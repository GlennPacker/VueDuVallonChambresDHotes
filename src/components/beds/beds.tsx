import styles from './beds.module.scss';
import Icon from '@mdi/react';
import { mdiBedSingleOutline, mdiBedDoubleOutline, mdiBunkBedOutline } from '@mdi/js';

interface props {
  type: string,
  count: number
}

export default function beds({ type, count }: props) {
  if (count === 0) return '';

  return <div>
    {`${type} Bed${count > 1 ? 's' : ''}: `}

    <span className={styles.highlightSpan}>
      {count > 1 ? `${count} * ` : ''}
    </span>

    {
      type === 'Single' && <Icon path={mdiBedSingleOutline}
        title="Single Bed"
        size={1}
      />
    }
    {
      type === 'Double' && <Icon path={mdiBedDoubleOutline}
        title="Double Bed"
        size={1}
      />
    }
    {
      type === 'Bunk' && <Icon path={mdiBunkBedOutline}
        title="Bunk Bed"
        size={1}
      />
    }
  </div>
}