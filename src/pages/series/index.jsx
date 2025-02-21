import { useParams, Navigate, Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import { useAuth } from '../../context'
import Messages from '../../components/Messages'
import Header from '../../components/Header'
import Image from '../../components/Image'
import Serie from './Serie'
import URL from './URL'

const index = () => {
  const { userData, isLoggedIn } = useAuth()
  if (!isLoggedIn) return <Navigate to='/home' />
  const { id } = useParams()
  const { data, loading } = useFetch(`/captain/${userData.id}/series/${id}`)
  const { data: matches, loading: loadingMatches } = useFetch(`/series/${id}/matches`)
  if (loading) return <Loader />
  if (data === null) return <Messages text='No se encontro esta serie 🥲' />

  return (
    <section className='fade-in flex flex-col gap-y-6'>
      <Header
        title={`${data.date} ${data.hour}`}
        description={data.tournament_name}
      />

      <header className='flex gap-x-4 w-full max-w-xs m-auto'>
        <div className='flex flex-1 flex-col gap-y-2 items-center'>
          <div className='rounded-full overflow-hidden w-20'>
            <Image
              src={data.home_image}
              alt={data.home_name}
            />
          </div>
          <div className='text-center text-sm'>
            <h1 className='text-primary font-semibold'>{data.home_name}</h1>
            <span className='text-secondary'>Local</span>
          </div>
        </div>
        <div className='text-xl pt-12'>⚡</div>
        <div className='flex flex-1 flex-col gap-y-2 items-center'>
          <div className='rounded-full overflow-hidden w-20'>
            <Image
              src={data.away_image}
              alt={data.away_name}
            />
          </div>
          <div className='text-center text-sm'>
            <h1 className='text-primary font-semibold'>{data.away_name}</h1>
            <span className='text-secondary'>Visitante</span>
          </div>
        </div>
      </header>

      {loadingMatches ? (
        <Loader />
      ) : (
        data &&
        matches &&
        matches
          .filter(match => match.status === 'Pendiente')
          .map(match => {
            return (
              <Serie
                serie={data}
                match={match}
                key={match.id}
              />
            )
          })
      )}

      <URL url={`https://ligadecapitanes.com.ar/series/${id}`} />

      <div className='flex justify-center'>
        <Link
          className='btn w-full max-w-xs text-sm px-6'
          to='/home'
        >
          👈 Volver
        </Link>
      </div>
    </section>
  )
}

export default index
