import { Info } from '../lib/icons'

const Aviso = ({ text }) => {
  return (
    <div className='text-secondary flex gap-x-2'>
      <span className='text-primary'>
        <Info />
      </span>
      <span> {text}</span>
    </div>
  )
}

export default Aviso
