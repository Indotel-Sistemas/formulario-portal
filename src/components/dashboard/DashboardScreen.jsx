import OfertasScreen from '../ofertas/OfertasScreen'
import { swalClose } from '../../helpers/sweetAlerts'

export const DashboardScreen = () => {
  swalClose();
  return (
    <div className='dashboard_container'>
      <OfertasScreen />
    </div>

  )
}
