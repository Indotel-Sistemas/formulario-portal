import React, { useEffect, useState } from 'react'
import { swalError } from '../../helpers/sweetAlerts';
import { RegistrarUsuario } from '../../data/auth';
// import { RegistrarUsuario, checkUsuario } from '../../data/auth/auth';
// import { swalError, swalLoading } from '../../helpers/sweetAlerts';



export const RegisterForm = () => {

  const [state, setState] = useState({
    usuario: "",
    empresa: "",
    password: "",
    consfirmpassword: "",
    //
    passwordInfo: false,
    validForm: false,


  })

  const handleValidation = () => {
    const invalidForm = { valid: false }
    if (Object.values(state).includes("")) return { ...invalidForm, msg: 'Es necesario llenar todos los campos' }

    if (state.empresa.length <= 5) return { ...invalidForm, msg: 'Ingrese un nombre de empresa valido' }


    if (state.usuario.length <= 3) return { ...invalidForm, msg: 'Ingrese un nombre de usuario valido' }

    if (state.password.length <= 6) return { ...invalidForm, msg: 'La contraseña debe contener mas de 6 caracteres' }


    if (!state.terminos) return { ...invalidForm, msg: 'Debe aceptar los terminos y condiciones para crear su cuenta' }


    return { valid: true }

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { valid, msg } = handleValidation();

    if (!valid) return swalError(msg);

    const res = await RegistrarUsuario(state);

    if (res.status !== 200) return swalError('Error creando el usuario')
    console.log(res)

  }


  const checkUsuario = async () => {
    const res = await checkUsuario({ usuario: state.usuario })
    console.log(res)

  }
  useEffect(() => {
    if (!state.usuario) return
    checkUsuario()
  }, [])




  return (
    <div className='login_container'>
      <div className='login_form'>
        <p className='auth_title'>Bienvenido</p>
        <form onSubmit={handleSubmit}>
          <div className="form_input-container">
            <label className="form_label" htmlFor='usuario'>Usuario</label>
            <input
              onChange={(e) => { setState(prevState => ({ ...prevState, usuario: e.target.value })) }}
              className='auth_input form-control' />
          </div>
          <div className="form_input-container">
            <label className="form_label mt-3" htmlFor='password'>Contraseña</label>
            <input
              onChange={(e) => { setState(prevState => ({ ...prevState, password: e.target.value })) }}
              type="password" className='auth_input form-control' />
          </div>

          <button className='btn btn-full btn-danger form_button'>Ingresar</button>

        </form>
      </div>
    </div>
  )
}
