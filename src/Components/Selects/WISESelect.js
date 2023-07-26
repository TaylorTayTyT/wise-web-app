import * as React from 'react';
import style from "../../Styles/button.module.css";
import {Select, MenuItem, FormControl } from "@mui/material";
import Icon from "../../Assets/icons.js";

/*
props:
- items: dictonary
- title: string
- ko: boolean
- selected: state
- handleChange: function 
*/

export default function WISESelect(props) {
  const MenuProps = {
    PaperProps: {
      style: {
        borderRadius: "10px",
        marginLeft: "-16px",
      },
    }}
  

  return (
    <FormControl fullWidth>
      <Select
        displayEmpty
        defaultValue=""
        disableunderline="true"
        sx={{
          backgroundColor: props.ko ? "var(--french-blue-sky)" : "var(--space-cadet)",
          color: props.ko ? "var(--space-cadet)" : "white",
          '&:hover, &:active': {
            backgroundColor: props.ko ? "var(--glaucous)" : "var(--oxford-blue)",
          },
          "& .MuiSelect-icon": { color: props.ko ? "var(--space-cadet)" : "white", top: 10, right: 10 },
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
        IconComponent={Icon.Caret}
        className={`${style.select}`}
        MenuProps={MenuProps}
        value={props.selected}
        onChange={props.handleChange}
      >
        <MenuItem 
          value=""
          sx={{
            display: 'none'
            }}>
          {props.title}
        </MenuItem>
        {props.items.map((item) => (
          <MenuItem 
            value={item.value}
            sx={{
              color: "var(--space-cadet)", 
              fontFamily:"Inter-Regular", 
              fontSize: "20px", 
              borderTop: '1px solid var(--rhythm)'
              }}>
            {item.name}
          </MenuItem>
        ))
        }
      </Select>
    </FormControl>
  );
}
