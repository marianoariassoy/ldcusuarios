import Image from './Image'

const TitleRow = ({ image, title }) => {
  return (
    <div className='flex items-center gap-x-2 overflow-x-auto'>
      <div className='avatar'>
        <div className='w-10 rounded-full'>
          <Image
            src={image}
            alt={title}
          />
        </div>
      </div>
      <div>{title}</div>
    </div>
  )
}

export default TitleRow
