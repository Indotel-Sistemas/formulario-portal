import axios from "axios";

export const RegistrarUsuario = async (data) => {
    try {
        const res = await axios.post(`http://192.168.100.60:8066/api/autenticacion/registrar`,data);
        return res;  
    } catch (error) {
      return error;   
    }
}

export const checkUsuario = async (data) => {
    try {
        const res = await axios.get('http://192.168.100.60:8066/api/autenticacion/checkusuario',data)
        return res;
    } catch (error) {
        return error;
    }
}
export const login = async (data) => {
    try {
        const res = await axios.post('http://192.168.100.60:8066/api/autenticacion/login',data)
        return res;
    } catch (error) {
        return error;
    }
}

export const getLicitacion = async () => {
    try {
        const res = await axios.get('http://192.168.100.60:8066/api/procesos')
        return res;
    } catch (error) {
        return error;
    }
}