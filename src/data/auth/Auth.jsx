import axios from "axios";

export const RegistrarUsuario = async (data) => {
    return await axios.post(`http://192.168.100.60:8066/api/autenticacion/registrar`,data).then((response) => {
        return response;
    }).catch(err => {
        return err;
    })
}