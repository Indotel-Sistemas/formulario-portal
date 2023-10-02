import { useNavigate } from 'react-router-dom'
import { useOferstasStore } from '../../store/ofertas'
import '../../styles/ofertas.css'
import { useEffect } from 'react'

const OfertasScreen = () => {
    const navigate = useNavigate()
    const [ setOferta, cleanOferta ] = useOferstasStore( store => [store.setOferta, store.cleanOferta] )
    const ofertas = [
        {
            title: 'OFERTA TAL',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry`,
            isActive: true,
        },
        {
            title: 'OFERTA TALaaaaa',
            description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry`,
            isActive: false,
        }
    ]

    const handleOpenOferta = (oferta) => {
        setOferta(oferta)
        navigate('/oferta')
    }
    useEffect(() => {
        cleanOferta()
    }, [])
    
    return (
        <div className='ofertas_main'>
            <p className='title'>Ofertas</p>
            <div className='ofertas_container'>
                {
                    ofertas.map((oferta) => (
                        <div key={oferta.title} className='oferta'>
                            <div className='oferta_title'>
                                <p>{oferta.title}</p>
                                <div className={oferta.isActive ? 'oferta_status_active' : 'oferta_status_inactive'}></div>
                            </div>
                            <p className='oferta_description'>{oferta.description}</p>
                            <button
                                onClick={() => { handleOpenOferta(oferta)}}
                                className='btn btn-primary w-100' disabled={!oferta.isActive}>Ver oferta</button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OfertasScreen
