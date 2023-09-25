import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashboardScreen } from '../components/dashboard/DashboardScreen'

export const AppRoutes = () => {
  return (
    <div className="auth__main">
      <Routes>
        <Route
          path="/"
          element={<DashboardScreen />}
        />
      </Routes>
    </div>
  )
}
