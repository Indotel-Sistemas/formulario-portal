import { create } from "zustand";
import { deleteUsuarioOferta, getUsuarioOfertas } from "../data/ofertas";

export const useOfertasStore = create((set) => {


    return {
        // states
        ofertas: [],
        // methods
        getUsuarioOfertasStore: async(data) => {
            const res = await getUsuarioOfertas(data);
            if(res.status !== 200) return { status: res.response.status, msg: res.response.data.msg };
            set(({ofertas:res.data.data}))
            return {status: res.status}
        },
        deleteUsuarioOfertaFile: async(data) => {
            const res = await deleteUsuarioOferta(data);
            if(res.status !== 200) return { status: res.response.status, msg: res.response.data.msg };
            return {status: res.status}
        },
        // setLicitacion: (licitacion) => {
        //     set({ licitacion: {...licitacion} });
        // },
        cleanOfertas: () => {
            set({ofertas: []})
        }
    }
})