import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Menu from './Menu'
import Exit from './Exit'

const Header = () => {
  useEffect(() => {
    const logo = document.querySelector('.logo-main')
    window.onscroll = () => {
      if (window.scrollY > 0) {
        logo.classList.add('text-xs')
      } else {
        logo.classList.remove('text-xs')
      }
    }
  }, [])

  return (
    <header className='sticky top-0 z-40 mb-3 navbar w-full px-4 bg-base-100/80 backdrop-blur'>
      <div className='navbar-start'>
        <Exit />
      </div>
      <div className='navbar-center text-primary logo-main transition-all'>
        <Link to='/'>
          <img
            src='/assets/images/logo.png'
            alt='logo'
            className='h-20 w-auto'
          />
        </Link>
      </div>
      <div className='navbar-end'>
        <Menu />
      </div>
    </header>
  )
}

export default Header
