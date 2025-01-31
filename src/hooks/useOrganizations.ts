import { useEffect, useState } from "react";
import { getOrganizations } from "../services/organizations/api";
import { Organization } from "./interfaces";

interface State {
    data: Organization[];
    isLoading: boolean;
    errors: unknown;
}

export const useOrganizations = () => {
    const [state, setState] = useState<State>({
        data: [],
        isLoading: true,
        errors: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data: Organization[] = await getOrganizations();
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