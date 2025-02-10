import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Messages from '../../components/Messages'
import Series from './Series'
import Aviso from '../../components/Aviso'

const SeriesPorCargar = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/series`)
  if (loading) return <Loader />
  if (!data) return <Messages text='No tenes series por cargar 👍' />

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <div className='flex flex-col bg-base-200 p-4 rounded-lg shadow-lg'>
        <h1 className='text-sm font-medium text-primary'>Próximas series</h1>
        <Series data={data} />
      </div>

      <Aviso
        emoji=''
        text='En caso de que tu equipo resulte ganador, deberás cargar los resultados correspondientes.'
      />
    </section>
  )
}

export default SeriesPorCargar
