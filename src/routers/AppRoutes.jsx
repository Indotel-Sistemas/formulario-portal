import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { OfertaScreen } from '../components/ofertas/OfertaScreen'

export const AppRoutes = () => {

  
  return (
    <div className="auth__main">
      <Routes>
        <Route
          path="/"
          element={<DashboardScreen />}
        />
        <Route
          path="/oferta"
          element={<OfertaScreen />}
        />
      </Routes>
    </div>
  )
}
