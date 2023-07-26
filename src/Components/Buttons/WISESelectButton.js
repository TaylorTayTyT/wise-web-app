import style from '../../Styles/button.module.css';

import {Switch, Checkbox, FormControlLabel} from '@material-ui/core';
// import { useNeonCheckboxStyles } from '@mui-treasury/styles/checkbox/neon'

import { styled } from '@mui/material/styles';

export default function WISESelectButton(props) {
    const btnClass = ` ${style[props.type]} `;
    if (props.type === 'switch') {
        const WiseSwitch = styled((props) => (
            <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
          ))(({ theme }) => ({
            width: 80,
            height: 40,
            padding: 0,
            borderRadius: 40 / 2,
            border: 'solid #11224D',
            borderWidth:2,
            '& .MuiSwitch-switchBase': {
                
              padding: 0,
              margin: 2,
              transitionDuration: '300ms',
              '&.Mui-checked': {
                
                transform: 'translateX(40px)',
                color: '#11224D',
                '& + .MuiSwitch-track': {
                  backgroundColor: theme.palette.mode === 'dark' ? '#5B84C4' : '#5B84C4',
                  opacity: 1,
                  border: 0,
                },
                '&.Mui-disabled + .MuiSwitch-track': {
                  opacity: 0.5,
                  
                },
              },
              '&.Mui-focusVisible .MuiSwitch-thumb': {
                color: '#11224D',
                border: '6px solid #11224D',
              },
              '&.Mui-disabled .MuiSwitch-thumb': {
                color:'#11224D',
              },
              '&.Mui-disabled + .MuiSwitch-track': {
                
                opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
              },
            },
            '& .MuiSwitch-thumb': {
              boxSizing: 'border-box',
              width: 40,
              height: 40,
              transform: 'translateY(-4px) translateX(-4px)',
            },

            '& .MuiSwitch-track': {
              borderRadius: 40 / 2,
              backgroundColor: theme.palette.mode === 'light' ? '#FFFFFF' : '#FFFFFF',
              opacity: 1,
              transition: theme.transitions.create(['background-color'], {
                duration: 500,
              }),
            },
          }));
        return (
            <WiseSwitch style={{  color: "#11224D" }}></WiseSwitch>
        )
    } else if (props.type === 'checkbox') {
        return (
            <label class={btnClass}>
                <input type="checkbox"></input>
            </label>
        )
    } else if (props.type === 'radio') {
        const radioBtnName = props.name;
        return (
            <label className={btnClass}>
                <input type="radio" name = {radioBtnName}></input>
                <span className={`${style.checkmark}`}></span>
            </label>
        )
    }
}