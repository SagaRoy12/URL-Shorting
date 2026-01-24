import axiosInstance from '../utility/axiosInstance';

export const getUserUrlsFrontend = async () => {
    try {
        const { data } = await axiosInstance.post('/api/user/urls');
             
        return data.allUrls.reverse() || [];

    } catch (error) {
        console.error('Error fetching user URLs:', error);
        // Return empty array instead of throwing error for better UX
        return [];
    }
};

export const deleteUrl = async (id) => {
    const response = await axiosInstance.delete(`/api/user/urls/${id}`);
    return response.data;
};

