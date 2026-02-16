const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className='p-6 items-center justify-center flex flex-col text-secondary mt-6'>
      <div>
        <span className='font-bold'>Liga de Capitanes {year}</span>
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
      </div>
    </footer>
  )
}

export default Footer
