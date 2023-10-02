import React from 'react'
import { useLicitacionesStore } from '../../store/licitaciones'

export const LicitacionScreen = () => {

  const [ licitacion ] = useLicitacionesStore( store => [ store.licitacion ] );
  console.log(licitacion)
  return (
    <div>LicitacionScreen</div>
  )
}
