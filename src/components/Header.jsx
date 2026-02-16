const Header = ({ title, subtitle = '', description = '', emoji = '' }) => {
  return (
    <header className='text-center flex flex-col'>
      {emoji && <div className='text-2xl'>{emoji}</div>}

      <div className='flex gap-x-2 justify-center text-lg px-6'>
        <h1 className='text-xl font-bold text-primary whitespace-nowrap'>{title}</h1>
        {subtitle && <span className='font-medium text-primary whitespace-nowrap'>{subtitle}</span>}
      </div>

      <div className='font-medium'>{description}</div>
    </header>
  )
}

export default Header
