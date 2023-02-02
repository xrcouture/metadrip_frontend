import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { Context } from './Context'
import HomePage from './Pages/Homepage'

const useAuth = () => {

  const { walletAddress } = useContext(Context)
  return walletAddress.length && localStorage.getItem("isConnected") === 'true'

}

const ProtectedRoutes = () => {

  const isAuth = useAuth()

  return isAuth ? <Outlet /> : <HomePage />
}

export default ProtectedRoutes