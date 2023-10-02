import { swalClose } from '../../helpers/sweetAlerts'
import LicitacionesScreen from '../licitaciones/LicitacionesScreen';

export const DashboardScreen = () => {
  swalClose();
  return (
    <div className='dashboard_container'>
      <LicitacionesScreen />
    </div>

  )
}
