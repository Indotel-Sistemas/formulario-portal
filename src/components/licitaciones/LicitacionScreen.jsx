// import React, { useState } from 'react'
import { useLicitacionesStore } from '../../store/licitaciones'
import '../../styles/licitacionesStyles.css'
import { swalClose, swalEliminar, swalError, swalExitoso, swalInfo, swalLoading } from '../../helpers/sweetAlerts';
import { postOfertas } from '../../data/ofertas';
import { useAuthStore } from '../../store/auth';
import { useEffect } from 'react';
import { useOfertasStore } from '../../store/ofertas';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const LicitacionScreen = () => {

  const [licitacion] = useLicitacionesStore(store => [store.licitacion]);
  const [ofertas, getUsuarioOfertas, deleteUsuarioOfertaFile] = useOfertasStore(store => [store.ofertas, store.getUsuarioOfertasStore, store.deleteUsuarioOfertaFile])
  const [auth] = useAuthStore(store => [store.auth]);
  const [loading, setLoading] = useState(false);
  const [terminos, setTerminos] = useState(false);

  const getOfertasUsuario = async () => {
    setLoading(true); swalLoading();
    const res = await getUsuarioOfertas({ usuario: auth.usuario, idProceso: licitacion.ID });
    if (res.status !== 200) return swalError(res.msg);
    setTimeout(() => {
      swalClose(); setLoading(false);
    }, 200);
  }
  useEffect(() => {
    if (!Object.keys(licitacion).length) return;
    getOfertasUsuario()
  }, [])

  const handleSendForm = async (e) => {
    const goodFileExtensions = ['zip', 'rar'];
    let validFileExtention = true;

    e.preventDefault();
    const fileInput = document.getElementById("files");
    if (fileInput.files.length === 0) return swalError('Ningún archivo seleccionado')
    if (!terminos) return swalError('En necesario aceptar los términos y condiciones');
    // if (fileInput.files.length > 2) return swalError('Excede el número de archivos. Volver a seleccionar');

    const formData = new FormData();
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append("files", fileInput.files[i], `${auth.empresa}-${licitacion.ID}-${fileInput.files[i].name}`);

      const extension = fileInput.files[i].name.split('.')[1].trim().toLowerCase();
      if (ofertas.map(oferta => oferta.NOMBRE_ARCHIVO.replace(`${auth.empresa}-${licitacion.ID}-`, "")).includes(fileInput.files[i].name)) return swalError('Ya existe un archivo con este nombre. Favor cambiar el nombre o el archivo a subir')
      if (!(goodFileExtensions.includes(extension))) validFileExtention = false;
    }

    formData.append("usuario", auth.usuario)
    formData.append("idProceso", licitacion.ID);

    if (!validFileExtention) return swalError('Los archivos deben ser de extensión ZIP o RAR');
    swalLoading();
    const res = await postOfertas(formData);
    if (res.status !== 200) return swalError('Error al subir los archivos.');
    swalExitoso('Archivo/s subido/s exitosamente');
    setTimeout(() => {
      getOfertasUsuario();
    }, 2000);
  }

  const handleEliminar = async (oferta) => {

    const respuesta = await swalEliminar('Eliminar Archivo', "El archivo se eliminará de forma definitiva ¿Desea hacerlo?");
    if (!respuesta) return;
    swalLoading();
    const res = await deleteUsuarioOfertaFile({ fileIdx: oferta.IDX_ARCHIVO });
    if (res.status !== 200) return swalError('Error al eliminar archivo.');
    swalExitoso('Archivo eliminado');
    setTimeout(() => {
      getOfertasUsuario();
    }, 2000);


  }
  const handleShowInfo = () => {
    const mensaje = `Al presentar esta oferta, se aceptan todos los términos y condiciones del pliego de condiciones generales que regirán la licitación pública internacional para el otorgamiento de concesiones y las licencias vinculadas para la prestación de servicios públicos portador y finales de telefonía e internet, a través de la explotación de frecuencias radioeléctricas dentro de las bandas de 698-806 MHz y 3300-3600 MHz en todo el territorio nacional (INDOTEL/LPI-001-2023).`
    swalInfo(mensaje, 'Cerrar');
  }

  if (loading) return <>Loading... </>

  return (
    <>
      <div className='licitacion_container'>
        <div className='licitacion_title_container'>
          <p className='licitacion_title'>{licitacion.NOMBRE}</p>
          <div>
            <small className='text-muted'>{licitacion.NOMBRE}</small> <Link to={'/'} style={{ textDecoration: 'none' }}><small className='text-muted'>/ Licitaciones</small></Link>
          </div>
        </div>
        <hr />
        <p className='licitacion_description mb-4'>{licitacion.DESCRIPCION}.</p>
        <form onSubmit={handleSendForm}>
          <div className='licitacion_files_input'>
            <input type='file' multiple id="files" />
          </div>
          {/* Check */}
          <div className="form-check mt-3 d-flex align-items-center">
            <input
              className="form-check-input mt-2"
              type="checkbox"
              checked={terminos}
              id="flexCheckDefault"
              onChange={() => setTerminos(!terminos)}
            />


            <small className="form-check-label ml-2" htmlFor="flexCheckDefault">
              Acepto los <span className='text-info cursor' onClick={handleShowInfo}>Términos y condiciones</span>
            </small>
          </div>
          {/* button */}
          <div className='mt-3 mb-5'>
            <button type='submit' className='btn btn-primary'>Enviar</button>
            <Link to={'/'}>
              <button className='btn btn-warning ml-4'>Volver</button>
            </Link>
          </div>
        </form>
        {
          ofertas.length !== 0 && (
            <div className='liciation_ofertas_cointainer'>
              <hr />
              <small className='text-info'>La oferta debe tener al menos un documento o carpeta de Oferta Técnica y un documento o carpeta de Oferta Económica.</small>
              <p className='mt-3'>Posee los siguientes documentos:</p>
              <table className="table table-striped col-6">
                <tbody>
                  {
                    ofertas.map(oferta => (
                      <tr key={oferta.ID}>
                        <th scope="row">{oferta.NOMBRE_ARCHIVO.replace(`${auth.empresa}-${licitacion.ID}-`, '')} </th>
                        <td className='text-center'>
                          <small className='text-danger cursor'
                            onClick={() => { handleEliminar(oferta) }}
                          >Eliminar</small>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          )
        }
        {
          ofertas.length === 2 && (
            <Link to={'/'}>
              <button className='btn btn-warning '>Volver</button>
            </Link>
          )
        }
      </div>
    </>
  )
}
