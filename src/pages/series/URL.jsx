import toast, { Toaster } from 'react-hot-toast'
import Aviso from '../../components/Aviso'

const URL = ({ url }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        toast.success('El Link se copio al portapapeles', {
          position: 'bottom-right',
          className: 'text-sm bg-base-300 text-white',
          duration: 4000
        })
      })
      .catch(err => {
        toast.error('Error al copiar el texto', {
          position: 'bottom-right',
          className: 'text-sm bg-base-300 text-white',
          duration: 4000
        })
      })
  }

  return (
    <div className='flex flex-col gap-y-3'>
      <Aviso
        text='Copiá el link para compartir la serie en el grupo de capitanes:'
        emoji='🔗'
      />

      <div className='text-white bg-primary rounded-lg p-4 text-xs flex items-center justify-between gap-x-2'>
        <span>{url}</span>
        <button
          onClick={handleCopy}
          className='hover:text-black'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 448 512'
            className='h-4 w-4'
            fill='currentColor'
          >
            <path d='M384 336l-192 0c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l140.1 0L400 115.9 400 320c0 8.8-7.2 16-16 16zM192 384l192 0c35.3 0 64-28.7 64-64l0-204.1c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1L192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-32-48 0 0 32c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-256c0-8.8 7.2-16 16-16l32 0 0-48-32 0z' />
          </svg>
        </button>
      </div>
      <Toaster />
    </div>
  )
}

export default URL
