import { useAuth } from '../context'

const Exit = () => {
  const { logout, isLoggedIn } = useAuth()
  if (!isLoggedIn) return null

  return (
    <button
      className='text-2xl'
      onClick={logout}
      title='Cerrar sesión'
    >
      👋
    </button>
  )
}

export default Exit
