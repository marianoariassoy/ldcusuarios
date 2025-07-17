const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='p-6 text-sm items-center justify-center flex flex-col text-secondary mt-6'>
      <div>
        <span className='font-bold'>Liga de Capitanes Usuarios Clausura 2025</span>
      </div>
      <div className='flex gap-x-1 items-center justify-center flex-wrap'>
        <span>
          <a
            href='mailto:hola@ligadecapitanes.com.ar'
            className='hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            hola@ligadecapitanes.com.ar
          </a>
        </span>
        <span> - </span>
        <span>Hecho con ❤︎ en {year}</span>
      </div>
    </footer>
  )
}

export default Footer
