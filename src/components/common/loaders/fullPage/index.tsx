import { Backdrop, Typography } from '@mui/material';
import './styles.css'
import logo from '@/assets/images/logos/logo-floorplan.png'
import classes from './classes'

interface Props {
    open: boolean
    text?: string
}

const LoaderFullPage = ({ open, text }: Props) => {
    return (
        <Backdrop
            sx={classes.backdrop}
            open={open}
        >
            <img src={logo} alt="FloorPlan Cargando..." className='imgLoaderFullPage' />

            {
                text &&
                <Typography>
                    {text}
                </Typography>
            }
        </Backdrop>
    );
}

export default LoaderFullPage