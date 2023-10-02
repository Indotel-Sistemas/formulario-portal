import React from 'react'
import { useOferstasStore } from '../../store/ofertas'

export const OfertaScreen = () => {

  const [ oferta ] = useOferstasStore( store => [ store.oferta ] );
  console.log(oferta)
  return (
    <div>OfertaScreen</div>
  )
}
