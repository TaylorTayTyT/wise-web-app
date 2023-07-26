import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const WISEField = styled(TextField) (({ multi }) => ({
    '& .MuiOutlinedInput-root': {
        minHeight: multi ? '150px' : '50px',
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
  }));

export default WISEField;