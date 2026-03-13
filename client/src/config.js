// client/src/config.js
// Centralized configuration for API endpoints

const getBaseUrl = () => {
    // Check if we're in production (Azure)
    if (process.env.NODE_ENV === 'production') {
        // In production, use relative URLs (same domain)
        return '';
    }
    // In development, use localhost
    return 'http://localhost:5000';
};

export const API_BASE_URL = getBaseUrl();
export const API_ENDPOINTS = {
    users: `${API_BASE_URL}/api/users`,
    products: `${API_BASE_URL}/api/products`,
    // Add other endpoints
};
