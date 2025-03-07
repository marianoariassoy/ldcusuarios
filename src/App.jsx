import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Login from './pages/login'
import Home from './pages/home'
import Equipos from './pages/equipos'
import Series from './pages/series'
import RecuperarPassword from './pages/recuperar-password'
import RestablecerPassword from './pages/recuperar-password/RestablecerPassword'
import PageNotFound from './pages/PageNotFound'

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<Login />}
          />
          <Route
            path='/login'
            element={<Login />}
          />
          <Route
            path='/home'
            element={<Home />}
          />
          <Route
            path='/equipos/:id'
            element={<Equipos />}
          />
          <Route
            path='/series/:id'
            element={<Series />}
          />
          <Route
            path='/recuperar-password'
            element={<RecuperarPassword />}
          />
          <Route
            path='/restablecer-password'
            element={<RestablecerPassword />}
          />

          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
