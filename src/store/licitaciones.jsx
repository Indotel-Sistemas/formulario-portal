import { create } from "zustand";
import {getLicitaciones} from '../data/licitaciones'
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";

export const useLicitacionesStore = create((set) => {


    return {
        // states
        licitaciones: [],
        licitacion: {},

        // methods
        getLicitaciones: async(data) => {
            const res = await getLicitaciones(data);
            if(res.status !== 200) return { status: res.response.status, msg: res.response.data.msg };
            set(({licitaciones:res.data}))
            return {status:200}
        },
        setLicitacion: (licitacion) => {
            set({ licitacion: {...licitacion} });
        },
        cleanLicitacion: () => {
            set({licitacion: {}})
        }
    }
})