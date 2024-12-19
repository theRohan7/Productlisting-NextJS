import axios from "axios";

const API_URL = 'https://dummyjson.com/products'


const getproducts = async (limit, skip = 0) => {
    const response = await axios.get(`${API_URL}?limit=${limit}&skip=${skip}`); 
    return response.data.products;
}

const getProductById = async (id) => {
    
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
}


export {
    getproducts,
    getProductById,
}