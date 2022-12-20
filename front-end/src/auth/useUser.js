import { useState, useEffect } from 'react';
import { useToken } from './useToken';
import { Buffer } from 'buffer';

export const useUser = () => {
    const [token] = useToken();

    const getPayloadFromToken = token => {
        const encodedPayload = token.split('.')[1];
        return JSON.parse(Buffer.from(encodedPayload, 'base64'));
    }

    const [user, setUser] = useState(() => {
        if (!token) return null;
        return getPayloadFromToken(token);
    })

    useEffect(() => {
        if(!user) setUser(null);
        else setUser(getPayloadFromToken(token));
    }, [token]);

    return user;
}