import React from 'react'
import { AppRouter } from './routers/AppRouter';

// export const source = 'http://localhost:8066';
export const source = 'http://192.168.100.61:8067'; //server production local
// const source = 'http://192.168.100.60:8066'; //server desarrollo local

export const App = () => {
  return (
    <AppRouter />
  )
}
