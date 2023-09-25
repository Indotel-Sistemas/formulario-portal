import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthScreen } from '../components/auth/AuthScreen'

export const AppRoutes = () => {

  
  return (
    <div className="auth__main">
      <Routes>
        <Route
          path="/"
          element={<AuthScreen />}
        />
      </Routes>
    </div>
  )
}
