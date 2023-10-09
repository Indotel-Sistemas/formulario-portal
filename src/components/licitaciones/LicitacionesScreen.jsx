import { useNavigate } from 'react-router-dom'
import { useLicitacionesStore } from '../../store/licitaciones'
import '../../styles/licitacionesStyles.css'
import { useEffect } from 'react'
import { useAuthStore } from '../../store/auth'

const LicitacionesScreen = () => {
    const navigate = useNavigate();
    const [auth] = useAuthStore(store => [store.auth])
    const [licitaciones, setLicitacion, cleanLicitacion, getLicitaciones] = useLicitacionesStore(store =>
        [store.licitaciones,
        store.setLicitacion,
        store.cleanLicitacion,
        store.getLicitaciones])

    const handleOpenlicitacion = (licitacion) => {
        setLicitacion(licitacion)
        navigate('/licitacion')
    }
    useEffect(() => {
        getLicitaciones({usuario: auth.usuario});
        cleanLicitacion()
    }, [])

    return (
        <div className='licitaciones_main'>
            <p className='title'>Licitaciones</p>
            <div className='licitaciones_container'>
                {
                    licitaciones.map((licitacion) => (
                        <div key={licitacion.NOMBRE} className='licitacion'>
                            <div className='licitacion_title'>
                                <p>{licitacion.NOMBRE}</p>
                                <div className={licitacion.STATUS ? 'licitacion_status_active' : 'licitacion_status_inactive'}></div>
                            </div>
                            <p className='licitacion_description'>{licitacion.DESCRIPCION}</p>
                            <button
                                onClick={() => { handleOpenlicitacion(licitacion) }}
                                className='btn btn-primary w-100' disabled={!licitacion.STATUS}>Ver licitación</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LicitacionesScreen
