import { create } from "zustand";

// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";

export const useLicitacionesStore = create((set) => {
    return {
        // states
        licitaciones: [],
        licitacion: {},

        // methods
        getLicitaciones: async() => {

        },
        setLicitacion: (licitacion) => {
            set({ licitacion: {...licitacion} });
        },
        cleanLicitacion: () => {
            set({licitacion: {}})
        }
    }
})