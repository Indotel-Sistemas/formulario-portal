import Swal from 'sweetalert2';


export const swalError = ( mensaje = '' ) => {
    setTimeout(() => { // Evita que se cierre al cerra el Appointment modal
        Swal.fire({
            text: mensaje,
            width: 450,
            icon:'error',
            confirmButtonColor: '#A21421',
        })
    }, 500);
}

export const swalCargando = () => {
    return Swal.fire({
        title:'Cargando...',
        text: 'Espere unos segundos...',
        width: 450,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })
}

export const swalLoading = () => {
    return Swal.fire({
        title:'Cargando...',
        width: 200,
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading()
        }
    })
}

export const swalExitoso = (text) => {
    setTimeout(() => { // Evita que se cierre al cerra el Appointment modal
        return Swal.fire({
            text,
            width: 450,
            icon:'success',
        })
    }, 250);
}

export const swalConfirmation = (titulo, pregunta) => {
    return Swal.fire({
        icon: 'info',
        title:titulo,
        text: pregunta,
        showCancelButton: true,
        cancelButtonColor:'rgba(248, 146, 29, 0.877)',
        confirmButtonText: `Aceptar`,
        confirmButtonColor: '#218838',
      }).then((result) => {

        if (result.isConfirmed) {
          return true
        }else{
            return false;
        }
      })
}

export const swalEliminar = (titulo, pregunta) => {
    return Swal.fire({
        icon: 'warning',
        title:titulo,
        text: pregunta,
        showCancelButton: true,
        confirmButtonText: `Eliminar`,
        cancelButtonText: `Cancelar`,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
      }).then((result) => {

        if (result.isConfirmed) {
          return true
        }else{
            return false;
        }
      })
}

export const swalClose = () => {
    return Swal.close();
}


export const swalInfo = (msg, buttonText) => {
    return Swal.fire({
        icon: 'info',
        text: msg,
        showCancelButton: false,
        confirmButtonText: buttonText,
        confirmButtonColor: '#218838',
      }).then((result) => {
        return result
    })
}

export const swalShowImage = (url) =>{
    return Swal.fire({
        imageUrl: url,
        allowOutsideClick: false,
      })
}