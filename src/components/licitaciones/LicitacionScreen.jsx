import React from 'react'
import { useLicitacionesStore } from '../../store/licitaciones'
import '../../styles/licitacionesStyles.css'

export const LicitacionScreen = () => {

  const [ licitacion ] = useLicitacionesStore( store => [ store.licitacion ] );
  console.log(licitacion)


  return (
    <>
      <div className='licitacion_container'>
        <p className='licitacion_title'>{licitacion.NOMBRE}</p>
        <p className='licitacion_description'>{licitacion.DESCRIPCION}</p>
        <input type='file' multiple/>
      </div>
    </>
  )
}
