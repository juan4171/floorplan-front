import { Box, Button, Tooltip } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import InfoIcon from '@mui/icons-material/Info';
import classes from './classes'
import { Organization } from "../../../interface";

interface Props {
    toolInfo: Organization
    requestResponseMessage: string
    requestResponseLoading: boolean
    requestClose: () => void
    onClick: () => void
    onClose: () => void
    type: string
}

const ModalOrganizationActions = ({ toolInfo, onClick, requestResponseLoading, requestResponseMessage, requestClose, onClose, type }: Props) => {
    return (
        <Box>
            {
                requestResponseMessage !== '' ?
                    <Button
                        variant="contained"
                        onClick={requestResponseMessage === 'fulfilled' ? onClose : requestClose}
                        disabled={requestResponseLoading}
                    >
                        Cerrar
                    </Button>
                    :
                    <Box sx={classes.boxInfoSuggest}>
                        <Tooltip title={'Se necesita completar el nombre de la organizacion para poder agregarla'}>
                            <InfoIcon color="info" />
                        </Tooltip>

                        <Button
                            variant="contained"
                            startIcon={<SendIcon />}
                            disabled={toolInfo.name === '' || requestResponseLoading}
                            onClick={onClick}
                        >
                            {
                                type === 'add' ? 'Agregar Organizacion' : 'Modificar Organizacion'
                            }
                        </Button>
                    </Box>
            }
        </Box>
    );
};

export default ModalOrganizationActions;