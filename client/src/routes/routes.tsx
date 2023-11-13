import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Signin from '../pages/signin/Signin'
import Register from '../pages/signup/Register'
import UnAuthGuard from '../Guards/UnAuthGuard'
import Dashboard from '../pages/dasboard/Dashboard'
import AuthGuard from '../Guards/AuthGuard'

const AppRoutes:any = () => {
  return (
    <Routes>
      <Route path={'/auth/login'} element={<UnAuthGuard><Signin /></UnAuthGuard>} />
      <Route path={'/auth/register'} element={<UnAuthGuard><Register /></UnAuthGuard>} />
      <Route path={'/dashboard'} element={<AuthGuard><Dashboard /></AuthGuard>} />
      <Route path={'*'} element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}

export default AppRoutes