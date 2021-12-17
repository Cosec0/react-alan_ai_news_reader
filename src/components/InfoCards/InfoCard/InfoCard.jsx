import { Typography, Card, CardContent } from '@mui/material';

import useStyles from './styles';

const InfoCard = ({ cardHeight, cardDetails }) => {
    const classes = useStyles();

    return (
        <Card variant="outlined" sx={{ 
            backgroundColor: cardDetails.bgColor, 
            height: cardHeight || '10rem',
            minWidth: '10rem' 
            }}>
            <CardContent className={classes.card}>
                <Typography variant='h6' dangerouslySetInnerHTML={{ __html: cardDetails.header }}/>
                <Typography variant='body1' dangerouslySetInnerHTML={{ __html: cardDetails.body }}/> 
                <Typography variant='body2' dangerouslySetInnerHTML={{ __html: cardDetails.footer }}/>
            </CardContent>
        </Card>
  );
}

export default InfoCard;
