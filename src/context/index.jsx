import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { jwtDecode } from 'jwt-decode'

const AuthContext = createContext()
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState({})

  const login = token => {
    Cookies.set('token', token, { expires: 3 })
    const decode = jwtDecode(token)
    setUserData(decode)
    setIsLoggedIn(true)
  }

  const logout = () => {
    setIsLoggedIn(false)
    setUserData({})
    Cookies.remove('token')
  }

  useEffect(() => {
    const token = Cookies.get('token')
    if (token) {
      login(token)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, userData, setUserData }}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
