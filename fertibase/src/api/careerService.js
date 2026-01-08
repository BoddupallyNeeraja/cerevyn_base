import { api } from './api';

/**
 * Transform backend career data to frontend format
 */
const transformToFrontend = (career) => {
    const transformed = { ...career };
    // Use 'id' from backend or fallback to '_id'
    transformed.id = career.id || career._id;
    return transformed;
};

/**
 * Career Service - All career-related API calls
 */
const careerService = {
    /**
     * Get all careers
     * @returns {Promise<Array>} - Array of career listings
     */
    async getCareers() {
        try {
            const response = await api.get('/Careers');
            // Handle different response structures if necessary
            const careers = response.data || response.careers || response;

            if (Array.isArray(careers)) {
                return careers.map(transformToFrontend);
            }
            return [];
        } catch (error) {
            console.error('Error fetching careers:', error);
            throw error;
        }
    },

    /**
     * Get a single job by ID
     * @param {string} id - Job ID
     * @returns {Promise<Object>} - Job object
     */
    async getJobById(id) {
        try {
            const response = await api.get(`/Careers/${id}`);
            const job = response.data || response.job || response;
            return transformToFrontend(job);
        } catch (error) {
            console.error(`Error fetching job ${id}:`, error);
            throw error;
        }
    },
};

export default careerService;
