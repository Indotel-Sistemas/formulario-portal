import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'
import { LicitacionScreen } from '../components/licitaciones/LicitacionScreen'

export const AppRoutes = () => {

  
  return (
    <div className="auth__main">
      <Routes>
        <Route
          path="/"
          element={<DashboardScreen />}
        />
        <Route
          path="/licitacion"
          element={<LicitacionScreen />}
        />
      </Routes>
    </div>
  )
}
