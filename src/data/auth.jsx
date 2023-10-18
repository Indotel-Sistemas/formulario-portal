import axios from "axios";
import { source } from "../App";

export const RegistrarUsuario = async (data) => {
    try {
        const res = await axios.post(`${source}/api/autenticacion/registrar`,data);
        return res;  
    } catch (error) {
      return error;   
    }
}

export const checkUsuario = async (data) => {
    try {
        const res = await axios.get(`${source}/api/autenticacion/checkusuario`,data)
        return res;
    } catch (error) {
        return error;
    }
}
export const login = async (data) => {
    try {
        const res = await axios.post(`${source}/api/autenticacion/login`,data)
        return res;
    } catch (error) {
        return error;
    }
}

export const changePassword = async (data) => {
    try {
        const res = await axios.post(`${source}/api/autenticacion/changePassword`,data)
        return res;
    } catch (error) {
        return error;
    }
}

export const getLicitacion = async () => {
    try {
        const res = await axios.get(`${source}/api/procesos`)
        return res;
    } catch (error) {
        return error;
    }
}

export const postOfertas = async (data) => {
    try {
        const res = await axios.post(`${source}/api/ofertas/add`,data)
        return res;
    } catch (error) {
        return error;
    }
}