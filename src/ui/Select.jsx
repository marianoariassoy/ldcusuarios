const Select = ({ options, register, title }) => {
  return (
    <select
      className='select select-bordered w-full'
      {...register}
    >
      <option
        disabled
        selected
        value=''
      >
        {title}
      </option>
      {options.map((item, index) => {
        return (
          <option
            key={index}
            value={item.id}
          >
            {item.name}
          </option>
        )
      })}
    </select>
  )
}

export default Select
