/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Grid, TextField, Typography } from '@mui/material';
import classes from './classes';
import { ChangeEvent, useEffect, useState } from 'react';
import ResponseModal from '@/components/common/responseModal';
import { Organization } from '../../../interface';

interface Props {
    organization: Organization;
    requestResponseMessage: string;
    requestResponseLoading: boolean;
    requestResponseError: string;
    type: string;
    setOrganization: (value: Organization) => void;
}

const ModalOrganizationContent = ({
    organization,
    setOrganization,
    requestResponseMessage,
    requestResponseLoading,
    requestResponseError,
    type,
}: Props) => {
    const [nombreActual, setNombreActual] = useState(organization.name);
    const { name, direccion, contacto } = organization;

    useEffect(() => {
        setNombreActual(organization.name);
    }, [organization.name]);

    const handleChange = (type: string) => (event: ChangeEvent<HTMLInputElement>) => {
        const data = {
            ...organization,
        };

        if (type === 'name') {
            data.name = event.target.value;
        }

        if (type === 'direccion') {
            data.direccion = event.target.value;
        }

        if (type === 'contacto') {
            data.contacto = event.target.value;
        }

        setOrganization(data);
    };

    return (
        <Box sx={classes.containerContent}>
            <Typography sx={classes.textContent}>
                {type === 'add'
                    ? 'A continuación podés cargar los datos de una nueva organización.'
                    : `Modificá los datos de ${nombreActual.toUpperCase()}.`}
            </Typography>

            <Grid container spacing={2}>
                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        label={`Nombre de la organización ${type === 'add' ? 'nueva' : ''}`}
                        value={name}
                        onChange={handleChange('name')}
                        size="small"
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        label={`Dirección de la organización ${type === 'add' ? 'nueva' : ''}`}
                        value={direccion}
                        onChange={handleChange('direccion')}
                        size="small"
                    />
                </Grid>

                <Grid item md={6} xs={12}>
                    <TextField
                        fullWidth
                        label="Contacto"
                        value={contacto}
                        onChange={handleChange('contacto')}
                        size="small"
                    />
                </Grid>
            </Grid>

            <ResponseModal
                open={requestResponseMessage !== ''}
                loading={requestResponseLoading}
                isError={requestResponseMessage === 'rejected'}
                textSuccess={
                    type === 'add'
                        ? 'Se añadió su organización correctamente'
                        : 'Se modificó su organización correctamente'
                }
                textError={requestResponseError}
            />
        </Box>
    );
};

export default ModalOrganizationContent;