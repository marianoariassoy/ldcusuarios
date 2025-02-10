import { useEffect, useState } from 'react'

const ImageComponent = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true)

  if (!src) return <div className='h-full w-full bg-white/10'></div>

  useEffect(() => {
    const image = new Image()
    image.src = src
    image.onload = () => {
      setIsLoading(false)
    }
  }, [src])

  return isLoading ? (
    <div className='h-full w-full'>
      <div className='h-full w-full bg-white/10 animate-pulse'></div>
    </div>
  ) : (
    <img
      src={src}
      alt={alt}
      className='h-full w-full object-cover object-center fade-in'
    />
  )
}

export default ImageComponent
