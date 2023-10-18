import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { swalError, swalLoading } from '../../helpers/sweetAlerts';
import { useAuthStore } from '../../store/auth';
// import { RegistrarUsuario, checkUsuario } from '../../data/auth/auth';
// import { swalError, swalLoading } from '../../helpers/sweetAlerts';



export const RegisterForm = () => {
  const navigate = useNavigate();

  const [changePassword, login] = useAuthStore(store => [store.changePassword, store.login]);
  const [state, setState] = useState({
    usuario: "",
    givenPassword: "",
    newPassword: "",
    // terminos: false,
    //
    passwordInfo: false,
    validForm: false,
  })

  const handleValidation = () => {
    const invalidForm = { valid: false };
    if (Object.values(state).includes("")) return { ...invalidForm, msg: 'Es necesario llenar todos los campos' };
    if (state.newPassword.length < 6) return { ...invalidForm, msg: 'La contraseña debe contener mas de 6 caracteres' };
    // if (state.empresa.length <= 5) return { ...invalidForm, msg: 'Ingrese un nombre de empresa valido' }
    // if (state.usuario.length <= 3) return { ...invalidForm, msg: 'Ingrese un nombre de usuario valido' }
    // if (!state.terminos) return { ...invalidForm, msg: 'Debe aceptar los terminos y condiciones para crear su cuenta' }

    return { valid: true }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { valid, msg } = handleValidation();

    if (!valid) return swalError(msg);

    swalLoading();
    const res = await changePassword({ usuario: state.usuario, currentPassword: state.givenPassword, newPassword: state.newPassword });
    if (res.status !== 200) return swalError('Error completando el registro')

    const response = await login({ usuario: state.usuario, password: state.newPassword })
    if (response.status !== 200) return swalError(response.msg);
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
    <>
      <div className='login_container'>
        <div className='login_form'>
          <p className='auth_title'>Completar registro</p>
          <form onSubmit={handleSubmit}>
            <label className="form_label" htmlFor='usuario'>Usuario</label>
            <input
              className='auth_input form-control'
              onChange={(e) => setState(prevState => ({ ...prevState, usuario: e.target.value }))}
            />

            <div>
              <label className="form_label mt-3" htmlFor='password'>Contraseña otorgada</label>
              <input type="password" className='auth_input form-control' onChange={(e) => setState(prevState => ({ ...prevState, givenPassword: e.target.value }))} />
            </div>

            <div className='form_input-container'>
              <label className="form_label mt-3" htmlFor='password'>Contraseña nueva</label>
              <input type="password" className='auth_input form-control'
                onBlur={() => setState(prevState => ({ ...prevState, passwordInfo: false }))}
                onFocus={() => setState(prevState => ({ ...prevState, passwordInfo: true }))}
                onChange={(e) => setState(prevState => ({ ...prevState, newPassword: e.target.value }))} />
              {state.passwordInfo && (
                <small className='text-info'>La contraseña debe contener mas de 6 caracteres.</small>
              )}
            </div>

            {/* <div className="form-check mt-3 d-flex align-items-center">
              <input className="form-check-input mt-2" type="checkbox" checked={state.terminos}
                id="flexCheckDefault" onChange={() => setState(prevState => ({ ...prevState, terminos: !prevState.terminos }))} />


              <small className="form-check-label ml-2" htmlFor="flexCheckDefault">
                Acepto los terminos y condiciones
              </small>
            </div> */}
            <button className='btn btn-danger mt-5 btn-full'>Registrar</button>
            <div className='text-center mt-3 text-info'>
              <small>¿Ya tienes cuenta? <b className='cursor' onClick={() => { navigate('/auth/login') }}>Ingresa</b></small>
            </div>

          </form>
        </div>
      </div>


    </>
  )
}
