import { useState, useEffect } from "react";
import API from "../API";

export const useActorFetch = (personId) => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchActor = async () => {
            try {
                setLoading(true);
                setError(false);

                const details = await API.fetchActorDetails(personId);
                const credits = await API.fetchActorCredits(personId);
                setState({
                    ...details,
                    ...credits
                });
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        };
        fetchActor();
    }, [personId]);

    return { state, loading, error };
}; 