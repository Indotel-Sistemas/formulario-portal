import React from 'react'

export const RegisterForm = () => {
  return (
    <>
 <div  className='login_container'>
    <div className='login_form'>
      <p className='auth_title'>Registre su empresa</p>
      <form>
        <label className="form_label" htmlFor='empresa'>Empresa (Razón Social)</label>
        <input className='auth_input form-control'/>

        <label className="form_label mt-3" htmlFor='password'>Usuario</label>
        <input type="text" className='auth_input form-control'/>


        <label className="form_label mt-3" htmlFor='password'>Contraseña</label>
        <input type="password" className='auth_input form-control'/>

        <div className="form-check mt-3">
          <input className="form-check-input mt-2" type="checkbox" value="" id="flexCheckDefault"/>
          <label className="form-check-label ml-2" for="flexCheckDefault">
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
