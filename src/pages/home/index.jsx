import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import EquiposActuales from './EquiposActuales'
import { useAuth } from '../../context'
import Header from '../../components/Header'
import SeriesPorCargar from './SeriesPorCargar'

const Home = () => {
  const navigate = useNavigate()
  const { userData, isLoggedIn } = useAuth()

  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
  }, [isLoggedIn])

  if (isLoggedIn)
    return (
      <section className='fade-in flex flex-col gap-y-6'>
        <Header
          title={`¡Hola ${userData.name.split(' ')[0]}! `}
          emoji='🙂'
        />

        <div className='text-sm'>
          👋 Bienvenido a tu nuevo panel de control para capitanes. Desde acá podrás ver tus series y equipos para
          gestionar.
        </div>

        <SeriesPorCargar id={userData.id} />
        <EquiposActuales id={userData.id} />
      </section>
    )
}

export default Home
