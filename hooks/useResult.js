import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [result, setResult] = useState([])
    const [errorMessage, setErrorMessage] = useState('')
    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTerm,
                    location: 'İstanbul',
                    limit: 50
                },
            });
            setResult(response.data.businesses);
            setErrorMessage('');
        } catch (error) {
            setErrorMessage('Bağlantı hatası');
        }

    };
    useEffect(() => {
        searchAPI('Toast');
    }, []);

    return [searchAPI, result];
};