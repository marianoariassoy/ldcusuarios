const Textarea = ({ register, placeholder }) => {
  return (
    <textarea
      className='w-full border border-black h-28 p-2 rounded-none'
      placeholder={placeholder}
      {...register}
    ></textarea>
  )
}

export default Textarea
