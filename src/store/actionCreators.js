const getToken = async () => {
    const url = 'https://dev.profescipta.co.id/so-api/token';
    const username = 'admin';
    const password = 'admin';
    const grant_type = 'client_credentials';
    const client_id = 'profes-api';
    const client_secret = 'P@ssw0rd';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'username': username,
                'password': password,
                'grant_type': grant_type,
                'client_id': client_id,
                'client_secret': client_secret
            })
        });

        if (!response.ok) {
            throw new Error('Failed to retrieve access token. HTTP status: ' + response.status);
        }

        const responseData = await response.json();
        return responseData.access_token;
    } catch (error) {
        throw new Error('Failed to retrieve access token: ' + error.message);
    }
};

export const fetchOrders = () => {
    return async dispatch => {
        try {
            const token = await getToken();
            console.log('Token:', token);  // Log the token to check if it's retrieved successfully

            const response = await fetch('https://dev.profescipta.co.id/so-api/Order/GetOrderList', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch orders. HTTP status: ' + response.status);
            }

            const responseData = await response.json();
            dispatch({ type: 'orders/get', payload: responseData });
        } catch (err) {
            console.error('Error fetching orders:', err);
        }
    };
};
