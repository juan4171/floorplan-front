import React, { useState, useEffect, forwardRef } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Slide, IconButton, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TransitionProps } from '@mui/material/transitions';
import { Project } from '../../hooks/interfaces';

interface Props {
    open: boolean;
    setOpen: (value: boolean) => void;
    project?: Project;
    onSave: (project: Project) => void;
    title: string;
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const BaseProjectModal: React.FC<Props> = ({ open, setOpen, project, onSave, title }) => {
    const [formState, setFormState] = useState<Project>({
        _id: '',
        organization: '',
        name: '',
        campos_dinamicos: {},
        createdAt: '',
        updatedAt: '',
        __v: 0
    });

    useEffect(() => {
        if (project) {
            setFormState(project);
        } else {
            setFormState({
                _id: '',
                organization: '',
                name: '',
                campos_dinamicos: {},
                createdAt: '',
                updatedAt: '',
                __v: 0
            });
        }
    }, [project]);

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        onSave(formState);
        window.location.reload();
        handleClose();
    };

    return (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="project-dialog-title"
        >
            <DialogTitle id="project-dialog-title">
                {title}
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
                
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default BaseProjectModal;