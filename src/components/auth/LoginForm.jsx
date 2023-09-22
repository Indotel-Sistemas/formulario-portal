import React from 'react'

export const LoginForm = () => {
  return (
    <>
    <div  className='login_container'>
    <div className='login_form'>
      <p className='auth_title'>Bienvenido</p>
      <form>
        <label className="form_label" htmlFor='usuario'>Usuario</label>
        <input className='auth_input form-control'/>

        <label className="form_label mt-3" htmlFor='password'>Contraseña</label>
        <input type="password" className='auth_input form-control'/>

        <button className='btn btn-danger mt-4'>Ingresar</button>

      </form>
    </div>
    </div>

    </>
  )
}
