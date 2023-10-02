import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { auth, db } from '../firebase/firebase';
// import { doc, getDoc } from 'firebase/firestore';

// import { onAuthStateChanged } from 'firebase/auth';
// import { useAuthStore } from '../store/auth';
// import { useDataStore, } from '../store/data';
// import { getData, setData } from '../actions/data';
// import { swalClose, swalError } from '../helpers/sweetAlerts';

// import { PrivateRoutes } from './PrivateRoutes';
// import { PublicRoutes } from './PublicRoutes';
// import { DashboardRoutes } from './DashboardRoutes';
// import { LoadingScreen } from '../components/ui/LoadingScreen';


// import { AuthRoutes } from './AuthRoutes';
import { PublicRoutes } from './PublicRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { AppRoutes } from './AppRoutes';
import { AuthRoutes } from './AuthRoutes';
import { useAuthStore } from '../store/auth';


export const AppRouter = () => {
  
  // const [setDataStore, setColeccionStore] = useDataStore(state => [state.setDataStore, state.setColeccionStore]);
  const [ checkLoginSesion ] = useAuthStore( store => [store.checkLoginSesion] );
  
  useEffect(() => {
    checkLoginSesion();
  }, [])
  
  // const [checkingAuth, setCheckingAuth] = useState(true);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const [authStateChange] = useAuthStore(state => [state.authStateChange])


  // useEffect(() => {
  //     // Verifica el estado de autenticación del usuario
  //     onAuthStateChanged(auth, async (user) => {
  //         if (user?.uid) {
  //             // Información de autenticación del usuario
  //             const Usuario = await getDoc(doc(db, "Usuarios", user.uid));
  //             const { Id: uid, Tipo: type, Nombre: name, Email: email } = Usuario.data();
  //             authStateChange({ type, name, email, uid })

  //             // Información de negocio del usuario
  //             const res = await getData({ usuarioId: uid, usuarioTipo: type });
  //             if (res?.status !== 200) return swalError('Error al cargar datos');
  //             setData({ usuarioTipo: type, data: res.data, setDataStore, setColeccionStore })

  //             setIsLoggedIn(true);
  //         } else {
  //             setIsLoggedIn(false);
  //         }
  //         setCheckingAuth(false);
  //     })
  // }, [setCheckingAuth, setIsLoggedIn])
  // if (checkingAuth) {
  //     return <LoadingScreen />;
  // }
  // swalClose();
  // if(!isLoggedIn) return;
  return (
    <div className='home'>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/*" element={
            <PublicRoutes>
              <AuthRoutes />
            </PublicRoutes>
          } />

          <Route path="/*" element={
            <PrivateRoutes>
              <AppRoutes />
            </PrivateRoutes>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}