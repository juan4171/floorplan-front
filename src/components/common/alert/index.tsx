import { Snackbar, IconButton, Alert } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
    open: boolean
    onClose?: () => void
    message: string
    color?: "error" | "success" | "warning"
    positionVertical?: 'bottom' | 'top'
    positionHorizontal?: 'left' | 'right' | 'center'
    variant?: "filled" | "standard" | "outlined"
}

const AlertMessage = ({ open, onClose, message, color, variant, positionVertical, positionHorizontal }: Props) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={4000}
            onClose={onClose}
            anchorOrigin={{ vertical: positionVertical ? positionVertical : 'bottom', horizontal: positionHorizontal ? positionHorizontal : 'left' }}
            action={
                onClose &&
                <IconButton
                    onClick={onClose}
                >
                    <CloseIcon fontSize="small" />
                </IconButton>
            }
        >
            <Alert
                onClose={onClose}
                severity={color}
                variant={variant ? variant : "filled"}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default AlertMessage;