import axios from "axios";
import { Data } from "../@types";

export const sendData = async (data: Data) => {
    try {
        await axios.post(`${import.meta.env.VITE_API_URL}/savedata`, data);
    } catch (error) {
        console.error(error);
    }
};

export const getData = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/getdata`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
