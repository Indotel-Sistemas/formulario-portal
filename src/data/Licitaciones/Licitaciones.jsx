import axios from "axios";



export const getLicitaciones = async () => {
    try {
        const res = await axios.get('http://192.168.100.60:8066/api/procesos')
        return res;
    } catch (error) {
        return error;
    }
}