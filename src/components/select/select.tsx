import React from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

type props = {
  label?: string;
  classes?: string
  onChange: (val) => void;
  val: string | number | null;
  showAll?: boolean;
  options: {
    label: string;
    val: string | number | null;
  }[]
}

const ddl = ({ onChange, val, showAll, options = [], label = '' }: props) => {
  const handleChange = v => onChange(!v ? null : v);

  const menuOption = ({ val, label }, index) => <MenuItem key={`${index}`} value={val}>
    {label}
  </MenuItem>

  return (
    <FormControl fullWidth>
      <InputLabel id={label.replace(' ', '')}>
        {label}
      </InputLabel>
      <Select
        labelId={label.replace(' ', '')}
        id={label.replace(' ', '')}
        value={val === null ? "" : val}
        label={label}
        onChange={handleChange}
      >
        {showAll && (<MenuItem value={0}>All</MenuItem>)}
        {options.map((opt, i) => menuOption(opt, i))
        }

        {/* <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem> */}
      </Select>
    </FormControl>
  )
}
export default ddl;
