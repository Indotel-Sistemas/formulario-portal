import { create } from "zustand";

// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";

export const useOferstasStore = create((set) => {
    return {
        // states
        ofertas: [],
        oferta: {},

        // methods
        getOfertas: async() => {

        },
        setOferta: (oferta) => {
            set({ oferta: {...oferta} });
        },
        cleanOferta: () => {
            set({oferta: {}})
        }
    }
})