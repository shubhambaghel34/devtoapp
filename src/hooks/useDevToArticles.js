import { useEffect, useState } from 'react';

export default function useDevToArticles() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        let active = true;

        const loadArticles = async () => {
            try {
                const response = await fetch('/api/articles/me/all');
                const contentType = response.headers.get('content-type') || '';
                if (!contentType.includes('application/json')) {
                    throw new Error(`Articles API returned a non-JSON response (HTTP ${response.status}).`);
                }
                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || `Request failed (${response.status})`);
                }
                if (!Array.isArray(data)) {
                    throw new Error('Unexpected response from the articles API.');
                }

                if (active) setArticles(data);
            } catch (requestError) {
                if (active) setError(requestError.message || 'Unable to load articles.');
            } finally {
                if (active) setLoading(false);
            }
        };

        loadArticles();
        return () => {
            active = false;
        };
    }, []);

    return { articles, loading, error };
}