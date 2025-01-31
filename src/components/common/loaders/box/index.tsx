import { Box, Typography } from '@mui/material';
import logo from '@/assets/images/icons/logo-floorplan.png'
import classes from './classes'
import './styles.css'

interface Props {
    text?: string
}

const LoaderBox = ({ text }: Props) => {
    return (
        <Box sx={classes.root}>
            <img src={logo} alt="Floor Plan" className='imgLoaderBox' />

            {
                text &&
                <Typography sx={classes.text}>{text}</Typography>
            }
        </Box>
    );
};

export default LoaderBox;