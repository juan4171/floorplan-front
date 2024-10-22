import React from 'react';
import { Organization } from '../hooks/interfaces';
import BasicCard from './OrganizationCard';
import { List, ListItem } from '@mui/material';

interface Props {
    organizations: Organization[];
}

const OrganizationList: React.FC<Props> = ({ organizations }) => {
    return (
        <div>
            <h2>Organizations</h2>
            <List>
                {organizations.map(org => (
                    <ListItem key={org._id}>
                      <BasicCard organization={org}></BasicCard>
                    </ListItem>
                ))}
           </List>
        </div>
    );
};

export default OrganizationList;