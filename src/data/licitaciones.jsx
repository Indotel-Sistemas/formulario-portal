import axios from "axios";
import { source } from "../App";



export const getLicitaciones = async (data) => {
    try {
        const res = await axios.post(`${source}/api/procesos/procesosParticipacionUsuario`, data)
        return res;
    } catch (error) {
        return error;
    }
}