// import React, { useState } from 'react'
import { useLicitacionesStore } from '../../store/licitaciones'
import '../../styles/licitacionesStyles.css'
import { swalError } from '../../helpers/sweetAlerts';
import { postOfertas } from '../../data/ofertas';
import { useAuthStore } from '../../store/auth';
import { useEffect } from 'react';
import { useOfertasStore } from '../../store/ofertas';
import { useState } from 'react';

export const LicitacionScreen = () => {

  const [licitacion] = useLicitacionesStore(store => [store.licitacion]);
  const [ofertas, getUsuarioOfertas] = useOfertasStore(store => [store.ofertas, store.getUsuarioOfertasStore])
  const [auth] = useAuthStore(store => [store.auth]);
  const [loading, setLoading] = useState(false)

  const getOfertasUsuario = async () => {
    setLoading(true);
    const res = await getUsuarioOfertas({ usuario: auth.usuario, idProceso: licitacion.ID });
    if (res.status !== 200) return swalError(res.msg);
    setLoading(false)
  }
  useEffect(() => {
    getOfertasUsuario()
  }, [])





  const handleSendForm = async (e) => {
    e.preventDefault();
    const fileInput = document.getElementById("files");
    if (fileInput.files.length === 0) return swalError('Ningún archivo seleccionado')
    if (fileInput.files.length > 2) return swalError('Excede el número de archivos. Volver a seleccionar')
    const formData = new FormData();

    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append("files", fileInput.files[i])
    }
    formData.append("usuario", auth.usuario)
    formData.append("idProceso", licitacion.ID)
    await postOfertas(formData)
  }

  if (loading) return <>Loading... </>

  return (
    <>
      <div className='licitacion_container'>
        <p className='licitacion_title'>{licitacion.NOMBRE}</p>
        <p className='licitacion_description'>{licitacion.DESCRIPCION}</p>
        {
          ofertas.length < 2 && (
            <form onSubmit={handleSendForm}>
              <div className='licitacion_files_input'>
                <input type='file' multiple id="files"
                // onChange={(e) => { setState(prevState => ({...prevState, files: e.target.value})) }}
                />
              </div>
              <button type='submit' className='btn btn-primary mt-5'>Enviar</button>
            </form>
          )
        }
        {
          ofertas.length !== 0 && (
            <div className='liciation_ofertas_cointainer'>
            <p>Posee los siguientes documentos:</p>
            {
              ofertas.map( oferta => (
                <div key={oferta.ID}>
                  {oferta.NOMBRE_ARCHIVO}
                </div>
              ))
            }
            {
              ofertas.length === 1 && (
                <small className='text-danger'> Aún le falta un documento por subir. Favor de proceder con la subida para completar la oferta.</small>
              )
            }
            </div>
          )
        }
      </div>
    </>
  )
}
