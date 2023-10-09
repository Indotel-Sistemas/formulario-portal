import { create } from "zustand";
import { login } from "../data/auth";

// import { signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { auth } from "../firebase/firebase";

export const useAuthStore = create((set) => {
    return {
        auth: { usuario: "", empresa: "" },

        login: async (data) => {
            try {
                const res = await login(data);
                if(res.status !== 200) return { status: res.response.status, msg: res.response.data.msg };
                
                set(state => ({ auth: { ...state.auth, ...res.data['data_usuario'] } }));
                window.sessionStorage.setItem('auth', JSON.stringify(res.data['data_usuario']))
                return { status: res.status, msg: res.data.msg }
                
            } catch (error) {
                // return { status: error.code, msg: res.data.msg }
            }
        },
        checkLoginSesion: () => {
            const sesion = JSON.parse(window.sessionStorage.getItem('auth'))
            if(!sesion) return;
            set(state => ({ auth: { ...state.auth, ...sesion} }));


        }
        // logout: async () => {
        //     return signOut(auth).then(() => {
        //         set(({ auth: { uid: "", name: "", type: "", email: "" } }))
        //         return { status: 200, msg: '[Signed out] succesfull' }
        //     })
        //         .catch((error) => {
        //             return { status: error.code, error: error.message }
        //         });
        // },
        // authStateChange: (data) => {
        //     set(state => ({ auth: { ...state.auth, ...data } }))
        // }
    }
})