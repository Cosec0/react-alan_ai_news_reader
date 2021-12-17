import { Typography, Box } from '@mui/material';

import headerImage from '../../assets/images/header.jpg';
import useStyles from './styles';

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.header}>
            <img
                src={headerImage}
                alt="Header"
                loading="lazy"
                height="150rem"
                width="300rem"
            />
            <Typography variant='h3'>
                News Reader
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
                <b>Powered by Alan AI</b>
            </Typography>
        </Box>
    )
}

export default Header;
