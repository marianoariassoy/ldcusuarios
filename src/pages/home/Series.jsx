import { useNavigate } from 'react-router-dom'
import Item from '../../components/ItemSmall'

const Fixture = ({ data }) => {
  const navigate = useNavigate()

  const handleClick = id => {
    navigate(`/series/${id}`)
  }

  return (
    <div className='overflow-x-auto text-sm'>
      <table className='table w-full mb-3'>
        <thead>
          <tr>
            <th scope='col'>Fecha</th>
            <th scope='col'>Hora</th>
            <th scope='col'>Local</th>
            <th scope='col'>Visitante</th>
            <th scope='col'>Torneo</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr
              className='hover:bg-base-100 cursor-pointer'
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <td scope='row'>
                <div className='flex gap-x-2 items-center'>
                  <span className='font-medium text-primary'>{item.date}</span>
                </div>
              </td>
              <td>{item.hour}</td>
              <td>
                <Item
                  title={item.home_name}
                  image={item.home_image}
                />
              </td>
              <td>
                <Item
                  title={item.away_name}
                  image={item.away_image}
                />
              </td>
              <td>{item.tournament_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Fixture
