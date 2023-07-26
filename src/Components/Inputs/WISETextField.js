import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { styled } from '@mui/material/styles';
import Icon from '../../Assets/icons';
import SelectInput from '@mui/material/Select/SelectInput';
import * as React from 'react';
import { useState, useEffect } from 'react';
import WISEField from './WISEField';

/*
props:
- multiline: boolean
- placeholder: string
- hasIcon: boolean
- input: state
- handleChange: function
- handleEnter: function
*/

export default function WISETextField({ multiline, placeholder, hasIcon, input, handleChange, handleEnter }) {
  
  return (
    <WISEField 
      fullWidth 
      multi={multiline}
      multiline={multiline} 
      rows={6} 
      placeholder={placeholder} 
      variant="outlined" 
      value={input}
      onChange={handleChange}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleEnter()
          e.preventDefault();
        }
      }}
      InputProps={ hasIcon ? {
        startAdornment: (
          <InputAdornment position="start">
            <Icon.Search style={{ width: '24px', height: '24px' }} />
          </InputAdornment>
        ),
      } : {}}/>
  )
}