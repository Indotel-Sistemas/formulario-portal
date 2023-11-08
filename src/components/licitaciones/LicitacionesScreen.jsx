import { useNavigate } from 'react-router-dom'
import { useLicitacionesStore } from '../../store/licitaciones'
import '../../styles/licitacionesStyles.css'
import { useEffect, useState } from 'react'
import { useAuthStore } from '../../store/auth'
import { swalClose, swalError, swalLoading } from '../../helpers/sweetAlerts'

const LicitacionesScreen = () => {
    const navigate = useNavigate();
    const [auth] = useAuthStore(store => [store.auth])
    const [licitaciones, setLicitacion, cleanLicitacion, getLicitacionesStore] = useLicitacionesStore(store =>
        [store.licitaciones,
        store.setLicitacion,
        store.cleanLicitacion,
        store.getLicitaciones]);
        const [loading, setLoading] = useState(false)

    const handleOpenlicitacion = (licitacion) => {
        setLicitacion(licitacion)
        navigate('/licitacion')
    }

    const getLicitaciones = async() => {
        setLoading(true); swalLoading();
        const res =await getLicitacionesStore({ usuario: auth.usuario });
        if (res.status !== 200) return swalError(res.msg);
        setLoading(false); swalClose();
        
    }
    useEffect(() => {
        cleanLicitacion();
        if(!!licitaciones.length) return;
        getLicitaciones();
    }, [])

    if(loading && !licitaciones.length) return <>Loading...</>

    return (
        <div className='licitaciones_main'>
            <p className='title'>Licitaciones</p>
            <hr />
            <div className='licitaciones_container'>
                {
                    !!licitaciones.length ? (
                        <>{
                            licitaciones.map((licitacion) => (
                                <div key={licitacion.NOMBRE} className='licitacion'>
                                    <div className='licitacion_title'>
                                        <p>{licitacion.NOMBRE}</p>
                                        <div className={licitacion.STATUS ? 'licitacion_status_active' : 'licitacion_status_inactive'}></div>
                                    </div>
                                    <p className='licitacion_description'>{licitacion.DESCRIPCION}.</p>
                                    <button
                                        onClick={() => { handleOpenlicitacion(licitacion) }}
                                        className='btn btn-primary w-100' disabled={!licitacion.STATUS}>Ver licitación</button>
                                </div>
                            ))
                        }</>
                    ) : (
                        <>
                            <p>No exiten licitaciones actualmente.</p>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default LicitacionesScreen
