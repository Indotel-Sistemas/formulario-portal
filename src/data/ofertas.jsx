import axios from "axios";
import { source } from "../App";



export const postOfertas = async (formData) => {
    try {
        const res = await axios.post(`${source}/api/ofertas/add`, formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            }
        )
        return res;
    } catch (error) {
        return error;

    }
}

export const getUsuarioOfertas = async (data) => {
    try {
        const res = await axios.post(`${source}/api/files/UserIdxFiles`, data)
        return res;
    } catch (error) {
        return error;
    }
}

export const deleteUsuarioOferta = async (data) => {
    try {
        const res = await axios.post(`${source}/api/files/deleteFile`, data)
        return res;
    } catch (error) {
        return error;
    }
}