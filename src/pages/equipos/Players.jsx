import { useState, useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import Loader from '../../components/Loader'
import Item from '../../components/ItemSmall'

const Players = ({ addToTeam }) => {
  const { data, loading } = useFetch(`/players`)
  const [players, setPlayers] = useState([])
  const [filterText, setFilterText] = useState('')

  useEffect(() => {
    setPlayers(data)
  }, [data])

  if (loading) return <Loader />

  const handleFilterChange = event => {
    setFilterText(event.target.value)
  }

  const addPlayer = player => {
    addToTeam(player)
    setPlayers(players.filter(item => item.id !== player.id))
  }

  const filteredPlayers = filterText
    ? players.filter(player => player.name.toLowerCase().includes(filterText.toLowerCase()))
    : []

  return (
    <div className='flex flex-col gap-y-6 mt-3'>
      <h1 className='text-primary text-sm text-center font-semibold'>☝️ Agregar jugadores</h1>
      <input
        type='text'
        placeholder='Buscar por nombre o apellido'
        value={filterText}
        onChange={handleFilterChange}
        className='input input-bordered w-full text-sm max-w-md m-auto'
      />

      <div className='overflow-x-auto text-sm'>
        <table className='table w-full rounded-none mb-3'>
          <tbody>
            {filteredPlayers.map(item => (
              <tr key={item.id}>
                <td>
                  <Item
                    image={item.image}
                    title={item.name}
                  />
                </td>
                <td align='right'>
                  <button onClick={() => addPlayer(item)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 512 512'
                      fill='currentColor'
                      className='w-4 h-4 hover:text-primary'
                    >
                      <path d='M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z' />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Players
