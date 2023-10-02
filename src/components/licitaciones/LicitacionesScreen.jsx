import { useNavigate } from 'react-router-dom'
import { useLicitacionesStore } from '../../store/licitaciones'
import '../../styles/licitacionesStyles.css'
import { useEffect } from 'react'

const LicitacionesScreen = () => {
    const navigate = useNavigate()
    const [ setLicitacion, cleanLicitacion ] = useLicitacionesStore( store => [store.setLicitacion, store.cleanLicitacion] )
    const licitaciones = [
        {
            title: 'licitacion TAL',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry`,
            isActive: true,
        },
        {
            title: 'licitacion TALaaaaa',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry`,
            isActive: false,
        }
    ]

    const handleOpenlicitacion = (licitacion) => {
        setLicitacion(licitacion)
        navigate('/licitacion')
    }
    useEffect(() => {
        cleanLicitacion()
    }, [])
    
    return (
        <div className='licitaciones_main'>
            <p className='title'>Licitaciones</p>
            <div className='licitaciones_container'>
                {
                    licitaciones.map((licitacion) => (
                        <div key={licitacion.title} className='licitacion'>
                            <div className='licitacion_title'>
                                <p>{licitacion.title}</p>
                                <div className={licitacion.isActive ? 'licitacion_status_active' : 'licitacion_status_inactive'}></div>
                            </div>
                            <p className='licitacion_description'>{licitacion.description}</p>
                            <button
                                onClick={() => { handleOpenlicitacion(licitacion)}}
                                className='btn btn-primary w-100' disabled={!licitacion.isActive}>Ver licitacion</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LicitacionesScreen
