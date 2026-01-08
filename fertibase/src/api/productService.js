import { api } from './api';

/**
 * Transform frontend product data to backend format
 * Main difference: techInfo uses 'key' in frontend but 'label' in backend
 */
const transformToBackend = (product) => {
    const transformed = { ...product };

    // Transform techInfo from {key, value} to {label, value}
    if (transformed.techInfo && Array.isArray(transformed.techInfo)) {
        transformed.techInfo = transformed.techInfo.map(info => ({
            label: info.key || info.label,
            value: info.value
        }));
    }

    // Remove frontend-only fields
    delete transformed.id; // Backend uses _id

    return transformed;
};

/**
 * Transform backend product data to frontend format
 */
const transformToFrontend = (product) => {
    const transformed = { ...product };

    // Use 'id' from backend virtual field or _id
    transformed.id = product.id || product._id;

    // Transform techInfo from {label, value} to {key, value}
    if (transformed.techInfo && Array.isArray(transformed.techInfo)) {
        transformed.techInfo = transformed.techInfo.map(info => ({
            key: info.label || info.key,
            value: info.value
        }));
    }

    return transformed;
};

/**
 * Product Service - All product-related API calls
 */
const productService = {
    /**
     * Get all products
     * @returns {Promise<Array>} - Array of products
     */
    async getAllProducts() {
        try {
            const response = await api.get('/products');

            // Handle different response structures
            const products = response.data || response.products || response;

            if (Array.isArray(products)) {
                return products.map(transformToFrontend);
            }

            return [];
        } catch (error) {
            console.error('Error fetching products:', error);
            throw error;
        }
    },

    /**
     * Get a single product by ID
     * @param {string} id - Product ID
     * @returns {Promise<Object>} - Product object
     */
    async getProductById(id) {
        try {
            const response = await api.get(`/products/${id}`);
            console.log('RAW API RESPONSE:', response); // DEBUG: Check raw payload
            const product = response.data || response.product || response;
            console.log('EXTRACTED PRODUCT DATA:', product); // DEBUG: Check extracted data
            return transformToFrontend(product);
        } catch (error) {
            console.error(`Error fetching product ${id}:`, error);
            throw error;
        }
    },

    /**
     * Create a new product
     * @param {Object} productData - Product data
     * @returns {Promise<Object>} - Created product
     */
    async createProduct(productData) {
        try {
            const transformedData = transformToBackend(productData);
            const response = await api.post('/products', transformedData);
            const product = response.data || response.product || response;
            return transformToFrontend(product);
        } catch (error) {
            console.error('Error creating product:', error);
            throw error;
        }
    },

    /**
     * Update an existing product
     * @param {string} id - Product ID
     * @param {Object} productData - Updated product data
     * @returns {Promise<Object>} - Updated product
     */
    async updateProduct(id, productData) {
        try {
            const transformedData = transformToBackend(productData);
            const response = await api.put(`/products/${id}`, transformedData);
            const product = response.data || response.product || response;
            return transformToFrontend(product);
        } catch (error) {
            console.error(`Error updating product ${id}:`, error);
            throw error;
        }
    },

    /**
     * Delete a product
     * @param {string} id - Product ID
     * @returns {Promise<Object>} - Deletion response
     */
    async deleteProduct(id) {
        try {
            const response = await api.delete(`/products/${id}`);
            return response;
        } catch (error) {
            console.error(`Error deleting product ${id}:`, error);
            throw error;
        }
    },
};

export default productService;
