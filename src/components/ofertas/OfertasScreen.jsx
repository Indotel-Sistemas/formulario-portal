import React from 'react'
import '../../styles/ofertas.css'

const OfertasScreen = () => {

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


    return (
        <div className='ofertas_container'>
            <p className='title'>Ofertas</p>
            {
                ofertas.map((oferta) => (
                    <div key={oferta.title} className='oferta'>
                        <div className='oferta_title'>
                            <p>{oferta.title}</p>
                            <div className={oferta.isActive? 'oferta_status_active':'oferta_status_inactive'}></div>
                        </div>
                        <p>{oferta.description}</p>
                        <button className='btn btn-primary w-100' disabled={!oferta.isActive}>Ver oferta</button>
                    </div>
                ))
            }
        </div>
    )
}

export default OfertasScreen
