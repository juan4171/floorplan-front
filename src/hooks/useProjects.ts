import { useEffect, useState } from "react";
import { getProjects, getProjectsByOrganization } from "../services/projects/api";
import { Project } from "./interfaces";

export const useProjects = (organization:string) => {
    const [state, setState] = useState({
        data: [] as Project[],
        isLoading: true,
        errors: null as unknown
    });


    const seleccionarData = async () => {
        if (organization !== "") {
            const data = await getProjectsByOrganization(organization);
            setState({
                data,
                isLoading: false,
                errors: null
            });
        } else {
            const data = await getProjects();
            setState({
                data,
                isLoading: false,
                errors: null
            });
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                seleccionarData();
            } catch (error) {
                setState({
                    data: [],
                    isLoading: false,
                    errors: error
                });
            }
        };

        fetchData();
    }, []);

    return state;
};