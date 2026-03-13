// client/src/services/api.js
import { API_ENDPOINTS } from '../config';

export const fetchUsers = async () => {
    try {
        const response = await fetch(API_ENDPOINTS.users);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
};
