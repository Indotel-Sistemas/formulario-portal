import { useState } from 'react'
import { useAuthStore } from '../../store/auth'
import { swalCargando, swalError, swalLoading } from '../../helpers/sweetAlerts';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [login] = useAuthStore(store => [store.login]);

  const [state, setState] = useState({
    usuario: '',
    password: ''
  })

  const hadleLogin = async (e) => {
    e.preventDefault();
    if (Object.values(state).includes("")) return swalError('Complete todos los campos');

    swalLoading();
    const response = await login({ usuario: state.usuario, password: state.password })
    if (response.status !== 200) return swalError(response.msg);



  }
  return (
    <>
      <div className='login_container'>
        <div className='login_form'>
          <p className='auth_title'>Bienvenido</p>
          <form onSubmit={hadleLogin}>
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

            <button className='btn btn-danger form_button'>Ingresar</button>

          </form>
        </div>
      </div>

    </>
  )
}
