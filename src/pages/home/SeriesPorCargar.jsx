import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Series from './Series'
import Aviso from '../../components/Aviso'

const SeriesPorCargar = ({ id }) => {
  const { data, loading } = useFetch(`/captain/${id}/series`)
  if (loading) return <Loader />
  if (!data) return null

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='text-sm font-semibold text-primary'>Próxima serie</h1>

      <div className='flex flex-col bg-white/5 p-4 rounded-2xl shadow-lg'>
        <Series data={data} />
      </div>

      <Aviso text='En caso de que tu equipo resulte ganador, deberás cargar los resultados correspondientes.' />
    </section>
  )
}

export default SeriesPorCargar
