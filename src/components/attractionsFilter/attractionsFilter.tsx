'use client'
import { Tag } from "@/components/attraction/attraction";
import Select from '../select/select';

interface Props {
  onChange
  val,
}

const options = Object.keys(Tag).map(t => ({ val: t, label: Tag[t] }));

const AttractionsFilter = ({ onChange, val }: Props) => {
  const setFilter = val => onChange(val);

  return (
    <Select
      onChange={({ target: { value } }) => setFilter(value === 'All' ? null : value)}
      label="Facility / Activity"
      val={val}
      showAll={true}
      options={options}
    >
    </Select>
  )
}

export default AttractionsFilter