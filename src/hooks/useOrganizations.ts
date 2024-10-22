import { useEffect, useState } from "react";
import { getOrganizations } from "../services/organizations/api";
import { Organization } from "./interfaces";

export const useOrganizations = () => {
    const [state, setState] = useState({
        data: [] as Organization[],
        isLoading: true,
        errors: null as unknown
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOrganizations();
                setState({
                    data,
                    isLoading: false,
                    errors: null
                });
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