const Aviso = ({ text, emoji }) => {
  return (
    <div className='text-secondary text-sm flex gap-x-2'>
      <span>{emoji}</span>
      <span> {text}</span>
    </div>
  )
}

export default Aviso
