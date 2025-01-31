import { useEffect, useState } from "react";
import {
    createOrganization,
    updateOrganization,
} from "@/services/organizations/api";
import { Organization } from "../../../interface";
import Modal from "@/components/common/modal";
import ModalOrganizationActions from "./actions";
import ModalOrganizationContent from "./content";

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
    organization?: Organization;
    onAddOrganization: (organization: Organization) => void;
}

const emptyOrganization: Organization = {
    _id: "",
    name: "",
    direccion: "",
    contacto: "",
    users: [],
    createdAt: "",
    updatedAt: "",
};

const ModalOrganizacion = ({ open, setOpen, organization, onAddOrganization }: Props) => {
    const [organizationInfo, setOrganizationInfo] =
        useState<Organization>(emptyOrganization);

    useEffect(() => {
        setOrganizationInfo(organization ?? emptyOrganization);
    }, [organization, open]);

    const handleClose = () => {
        setOrganizationInfo(organization ?? emptyOrganization);
        setOpen(false);
    };

    const handleSendOrganization = async () => {
        try {
            if (organization && organization._id) {
                await updateOrganization(organization._id, organizationInfo);
            } else {
                const newUser = {
                    name: "Admin",
                    email: "juan@asd",
                    isAdmin: true
                };
                organizationInfo.users.push(newUser);
                const createdOrganization = await createOrganization(organizationInfo);
                onAddOrganization(createdOrganization);
            }
            handleClose();
        } catch (error) {
            console.error("Error saving organization:", error);
        }
    };

    return (
        <>
            <Modal
                title={
                    organization
                        ? "Editar organization"
                        : "Agregar organization"
                }
                open={open}
                setOpen={setOpen}
                onClose={handleClose}
                content={
                    <ModalOrganizationContent
                        organization={organizationInfo}
                        requestResponseMessage={""}
                        requestResponseLoading={false}
                        requestResponseError={""}
                        type={""}
                        setOrganization={setOrganizationInfo}
                    />
                }
                actions={
                    <ModalOrganizationActions
                        toolInfo={organizationInfo}
                        requestResponseMessage={""}
                        requestResponseLoading={false}
                        requestClose={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        onClick={handleSendOrganization}
                        onClose={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        type={organization ? 'edit' : 'add'}
                    />
                }
            />
        </>
    );
};

export default ModalOrganizacion;
