import { Link } from 'react-router-dom'
import { useAuth } from '../context'
import Image from '../components/Image'

const Menu = () => {
  const { isLoggedIn, userData } = useAuth()
  if (!isLoggedIn) return null

  return (
    <Link to='/'>
      <div className='w-14 h-14 rounded-full overflow-hidden'>
        <Image
          src={userData.image}
          alt={userData.name}
        />
      </div>
    </Link>
  )
}

export default Menu
