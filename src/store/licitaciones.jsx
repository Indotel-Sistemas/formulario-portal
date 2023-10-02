import { create } from "zustand";
import {getLicitaciones} from '../data/Licitaciones/Licitaciones'
// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";

export const useLicitacionesStore = create((set) => {


    return {
        // states
        licitaciones: [],
        licitacion: {},

        // methods
        getLicitaciones: async() => {
            const res = await getLicitaciones();
            if(res.status !== 200) return { status: res.response.status, msg: res.response.data.msg };
            
            set(({licitaciones:res.data}))
        },
        setLicitacion: (licitacion) => {
            set({ licitacion: {...licitacion} });
        },
        cleanLicitacion: () => {
            set({licitacion: {}})
        }
    }
})