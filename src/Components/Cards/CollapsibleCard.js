import * as React from 'react';
import { Card, CardHeader, CardContent, Collapse, Paper } from '@mui/material';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import Icon from '../../Assets/icons';

/*
props:
header - header text (String)
content - content of card (Component)
hasButton - (Boolean)
*/
export default function CollapsibleCard(props) {

    const mobile = useMediaQuery('(max-width:480px)')
    const [expanded, setExpanded] = React.useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded);
    }

    const Expand = styled((props) => {
        const { expand, ...other } = props;
        return (
            <IconButton {...other} style={{ marginRight: mobile ? '0px' : '20px', backgroundColor: 'var(--space-cadet)' }} onClick={handleExpandClick} aria-label="click to toggle">
                <Icon.Caret style={{ color: 'white' }}/>
            </IconButton>
        );
      })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
      }))

    return (
        <Card style={{ 
            width: '100%', 
            borderRadius: mobile ? '10px' : '30px',
            paddingTop: mobile ? '0px' : '20px',
            paddingBottom: (props.hasButton && expanded) ? '0px' : (mobile ? '0px' : '20px') }} 
            elevation={4} >
            <CardHeader
                action={
                    <Expand expand={expanded} />
                }
                title={props.header}
                titleTypographyProps={{ 
                    fontSize: mobile ? '24px' : '36px', 
                    fontFamily: mobile ? 'Inter-Bold' : 'Inter-SemiBold', 
                    color: 'var(--space-cadet)',
                    paddingLeft: mobile ? '0px' : '20px' }}
            />
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent style={{ padding: '0' }}>
                    {props.content}
                </CardContent>
            </Collapse>
        </Card>
    )
}