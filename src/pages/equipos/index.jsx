import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useAuth } from '../../context'
import Integrantes from './Integrantes'
import Messages from '../../components/Messages'

const IndexIntegrantes = () => {
  const { userData, isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) navigate('/login')
  }, [isLoggedIn])

  const { id } = useParams()
  const { data, loading } = useFetch(`/captain/${userData.id}/teams/${id}`)

  if (loading) return <Loader />
  if (data === null) return <Messages text='No se encontro el equipo' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <header className='flex flex-col gap-y-2 items-center'>
        <div className='text-center'>
          <h1 className='font-bold text-xl text-primary'>{data.name}</h1>
          <h2 className='font-medium'>{data.tournament_name}</h2>
        </div>
      </header>

      <Integrantes
        id_team={id}
        id_captain={userData.id}
        id_season={data.season_id}
      />
    </section>
  )
}

export default IndexIntegrantes
