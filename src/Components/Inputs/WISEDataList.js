import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { styled } from '@mui/material/styles';
import Icon from '../../Assets/icons';

/*
props:
- placeholder: string
- hasIcon: boolean
- handleClick: function
- items: JSON object
*/

export default function WISEDataList({ placeholder, hasIcon, handleClick, items }) {
    const WISEField = styled(TextField) ({
        '& .MuiOutlinedInput-root': {
            minHeight: '50px',
            paddingLeft: '10px',
            '& fieldset': {
              borderColor: 'var(--space-cadet)',
              borderRadius: '10px',
              borderWidth: '2px',
            },
            '&:hover fieldset': {
              borderColor: 'var(--oxford-blue)',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'var(--oxford-blue)',
            },
            '& input, textarea': {
                fontFamily: 'Inter-Regular',
                fontSize: '20px',
                paddingLeft: '0px',
                color: 'var(--space-cadet)',
            },
        },
    })

    return (
        <Autocomplete
        freeSolo
        disableClearable
        options={items}
        getOptionLabel={(option) => option.name}
        renderOption={(props, option, state) => {
            return(
                <Box 
                component="li" 
                sx={{ borderTop: '1px solid var(--rhythm)', 
                        height: '50px',
                        fontFamily: 'Inter-Regular',
                        fontSize: '20px',
                        color: 'var(--space-cadet)',
                        '&:hover': {
                          backgroundColor: 'var(--french-blue-sky) !important',
                          color: 'var(--oxford-blue) !important'
                        },
                        '&:active': {
                          backgroundColor: 'var(--glaucous) !important',
                          color: 'var(--oxford-blue) !important'
                        },}} 
                {...props}>
                    {option.name}
                </Box>
            )
        }}
        renderInput={(params) => <WISEField {...params} variant="outlined" placeholder={placeholder} InputProps={ hasIcon ? {
            ...params.InputProps,
            endAdornment: (
              <InputAdornment position="end">
                <button style={{ border: "none", background: "none" }} onClick={handleClick}>
                  <Icon.Add style={{ width: '24px', height: '24px' }} />
                </button>
              </InputAdornment>
            )
          } : {...params.InputProps}}/>}
        PaperComponent={({ children }) => (
            <Paper style={{ borderRadius: "10px" }}>{children}</Paper>
          )}
        />
    )
}