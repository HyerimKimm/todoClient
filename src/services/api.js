import axios from 'axios';
const rootUrl = 'http://localhost:4000';

export const getAllDataService = async () => {
    const url = `${rootUrl}/AllData`
    const response = await axios.get(url);
    return response;
}