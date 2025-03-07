import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { BeatLoader } from 'react-spinners'
import { Input, Button } from '../../ui'
import { texts } from '../../lib/data'
import Error from './Error'
import Messages from '../../components/Messages'

const index = () => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const token = searchParams.get('token')

  if (!token) return <Messages text='Token invalido' />

  const [sending, setSending] = useState(false)
  const [sended, setSended] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    setSending(true)
    try {
      const response = await axios.post('https://api.ligadecapitanes.com.ar/users/resetpassword', data)
      if (response.data.success) {
        setSended(true)
        setSending(false)
        setError('')
      } else {
        setError(response.data.message)
        setSending(false)
      }
    } catch (error) {
      setError(error)
      setSending(false)
    }
  }

  const password = watch('password', '')

  return (
    <section>
      <div className='flex flex-col gap-y-6'>
        {!sended ? (
          <div className='text-center text-sm px-12'>Restablecé tu contraseña.</div>
        ) : (
          <Messages text='Tu contraseña ha sido restablecida 👍' />
        )}

        <div className='w-full max-w-md m-auto'>
          {error && <Messages text={error} />}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={sended ? 'hidden' : ''}
          >
            <div className='form-control'>
              <Input
                type='password'
                title='Contraseña'
                placeholder='contraseña'
                register={register('password', {
                  required: texts.required,
                  validate: value => value.length > 4 || 'La longitud debe ser mayor a 4 caracteres'
                })}
              />
              {errors.password && <Error text={errors.password.message} />}
            </div>
            <div className='form-control'>
              <Input
                type='password'
                title='Repetir contraseña'
                placeholder='contraseña'
                register={register('confirmPassword', {
                  required: texts.required,
                  validate: value => value === password || 'Las contraseñas no coinciden'
                })}
              />
              {errors.confirmPassword && <Error text={errors.confirmPassword.message} />}
            </div>

            <div className='form-control mt-6 flex items-center justify-center'>
              {sending ? (
                <div className='mt-6'>
                  <BeatLoader />
                </div>
              ) : (
                <Button>Restablecer</Button>
              )}
            </div>
            <input
              type='hidden'
              value={token}
              {...register('token')}
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default index
