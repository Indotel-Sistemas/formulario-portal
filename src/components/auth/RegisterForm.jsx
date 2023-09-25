import React, { useState } from 'react'
import { RegistrarUsuario } from '../../data/auth/auth';
import { swalError, swalLoading } from '../../helpers/sweetAlerts';



export const RegisterForm = () => {

  const [state, setState] = useState({
    usuario:"",
    empresa:"",
    password:"",
    terminos:false,
    //
    passwordInfo:false

})


const handleSubmit = async (e) => {
  e.preventDefault();

  if(Object.values(state).includes("")) return swalError('Es necesario llenar todos los campos');
  if(state.empresa.length <= 5) return swalError("Ingrese un nombre de empresa valido")
  if(state.usuario.length <= 3) return swalError("Ingrese un nombre de usuario valido")
  if(state.password.length <= 6) return swalError("La contraseña debe contener mas de 6 caracteres")
  if(!state.terminos) return swalError("Debe aceptar los terminos y condiciones para crear su cuenta");



  const res = await RegistrarUsuario(state);

  if(res.status !== 200) return swalError('error')
  console.log(res)

}


  
  return (
    <>
 <div  className='login_container'>
    <div className='login_form'>
      <p className='auth_title'>Registre su empresa</p>
      <form onSubmit={handleSubmit}>
        <label className="form_label" htmlFor='empresa'>Empresa (Razón Social)</label>
        <input className='auth_input form-control' onChange={(e) => setState(prevState => ({...prevState , empresa:e.target.value}))}/>

        <label className="form_label mt-3" htmlFor='password'>Usuario</label>
        <input type="text" className='auth_input form-control' onChange={(e) => setState(prevState => ({...prevState , usuario:e.target.value}))}/>


        <label className="form_label mt-3" htmlFor='password'>Contraseña</label>
        <input type="password" className='auth_input form-control' 
        onBlur={(e) => setState(prevState => ({...prevState , passwordInfo:false}))}
        onFocus={(e) => setState(prevState => ({...prevState , passwordInfo:true}))} 
        onChange={(e) => setState(prevState => ({...prevState , password:e.target.value}))}/>
        {state.passwordInfo && ( 
          <small className='text-info'>La contraseña debe contener mas de 6 caracteres.</small>
        )}
        <div className="form-check mt-3">
          <input className="form-check-input mt-2" type="checkbox" checked={state.terminos}
           id="flexCheckDefault" onChange={() => setState(prevState => ({...prevState , terminos:!prevState.terminos}))}/>
          <label className="form-check-label ml-2" htmlFor="flexCheckDefault">
            Acepto los terminos y condiciones
          </label>
        </div>
        <button className='btn btn-danger mt-4'>Registrar</button>

      </form>
    </div>
    </div>


    </>
  )
}
