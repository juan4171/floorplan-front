import { Box, Typography } from "@mui/material";
import classes from './classes'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import LoaderBox from "@/components/common/loaders/box";

interface Props {
    open: boolean
    loading: boolean
    isError: boolean
    textSuccess: string
    textError: string
}

const ResponseModal = ({ open, loading, isError, textSuccess, textError }: Props) => {
    return (
        <Box sx={open ? classes.root : classes.hidden}>
            {
                loading ?
                    <LoaderBox text="Procesando..." />
                    :
                    isError ?
                        <>
                            <SentimentVeryDissatisfiedIcon sx={classes.iconError} />

                            <Typography sx={classes.titleError}>
                                ¡Ocurrió un error!
                            </Typography>

                            <Typography sx={classes.textError}>
                                {textError}
                            </Typography>
                        </>
                        :
                        <>
                            <SentimentSatisfiedAltIcon sx={classes.iconSuccess} />

                            <Typography sx={classes.titleSuccess}>
                                ¡Felicitaciones!
                            </Typography>

                            <Typography sx={classes.textSuccess}>
                                {textSuccess}
                            </Typography>
                        </>
            }
        </Box>
    );
};

export default ResponseModal;