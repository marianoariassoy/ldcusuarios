import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className='mx-auto px-4 max-w-3xl w-screen text-base-content'>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
