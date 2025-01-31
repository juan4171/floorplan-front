/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode, forwardRef } from 'react';
import { IconButton, Dialog, DialogActions, DialogContent, DialogTitle, Slide } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import classes from './classes'

interface Props {
    open: boolean
    setOpen: (value: boolean) => void
    content: ReactNode,
    title: string,
    actions: ReactNode,
    fullScreen?: boolean,
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    onClose?: () => void
    titleClasses?: any
    actionClasses?: any
    contentClasses?: any,
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = ({ open, setOpen, title, titleClasses = classes.title, contentClasses, actionClasses, content, actions, fullScreen, maxWidth, onClose }: Props) => {
    const handleClose = () => {
        setOpen(false)
        onClose && onClose()
    }

    return (
        <Dialog
            open={open}
            fullScreen={fullScreen}
            fullWidth
            maxWidth={maxWidth}
            TransitionComponent={Transition}
        >
            <DialogTitle sx={titleClasses}>
                {title}

                <IconButton onClick={handleClose}>
                    <CloseIcon sx={classes.iconClose} />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={contentClasses ?? {}}>
                {content}
            </DialogContent>

            <DialogActions sx={actionClasses ?? {}}>
                {actions}
            </DialogActions>
        </Dialog>
    );
};

export default Modal;