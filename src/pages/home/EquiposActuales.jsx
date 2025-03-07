import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/Item'
import Messages from '../../components/Messages'
import Aviso from '../../components/Aviso'

const CaptainEquipoActuales = ({ id }) => {
  const navigate = useNavigate()
  const { data, loading } = useFetch(`/captain/${id}/teams`)
  if (loading) return <Loader />
  if (data === null) return <Messages text='No tenes equipos capitaneados en la temporada actual 🥲' />

  const actual_season = 6
  let dataFiltered = []
  if (data) {
    dataFiltered = data.filter(item => item.season === actual_season)
  }
  if (dataFiltered.length === 0) return <Messages text='No tenes equipos capitaneados en la temporada actual 🥲' />

  return (
    <section className='fade-in flex flex-col gap-y-3'>
      <h1 className='text-sm font-semibold text-primary'>Tu equipo</h1>

      <div className='flex flex-col gap-y-3 bg-white/5 p-4 rounded-2xl shadow-lg'>
        <div className='flex flex-col text-sm'>
          {dataFiltered.map((item, index) => (
            <div
              key={index}
              className='py-2'
              onClick={() => handleClick(item.id)}
            >
              <Item
                title={item.name + ' ' + item.tournament_name}
                image={item.image}
                link={`/equipos/${item.id}`}
              />
            </div>
          ))}
        </div>
      </div>

      <Aviso text='Podes modificar las listas de buena fe hasta el 1 de marzo. ' />
    </section>
  )
}

export default CaptainEquipoActuales
