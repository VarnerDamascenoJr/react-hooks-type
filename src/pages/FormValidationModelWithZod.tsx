import {z, ZodType} from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}
const FormValidationModelWithZod = () => {

  const schema: ZodType<FormData> = z.object({
    firstName: z.string().min(3).max(30),
    lastName: z.string().min(3).max(30),
    email: z.string().email(),
    age: z.number().min(18).max(80),
    password: z.string().min(5).max(20),
    confirmPassword: z.string().min(5).max(20),
  }).refine((data)=> data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ['confirmPassword'],
  })

  const { register, handleSubmit, formState:{errors}} = useForm<FormData>({resolver: zodResolver(schema)})
const handleSubmitData =(data: FormData)=> {
  console.log('Its worked', data)
}

const errosStyle ={
  fontSize: '12px',
  color: 'red',
}
  return(
  <form style={{display:'flex', flexDirection:'column',alignContent: 'center', justifyContent: 'center', gap:'20px'}}
  onSubmit={handleSubmit(handleSubmitData)}
  >
      <label>First Name:</label>
      <input type='text' {...register('firstName')}/>
      {errors.firstName && <span style={errosStyle} >{errors.firstName.message}</span>}
      <label>Last Name:</label>
      <input type='text' {...register('lastName')}/>
      {errors.lastName && <span style={errosStyle} >{errors.lastName.message}</span>}
      <label>Email:</label>
      <input type='email' {...register('email')}/>
      {errors.email && <span style={errosStyle} >{errors.email.message}</span>}
      <label>Age:</label>
      <input type='number' {...register('age', {valueAsNumber: true})}/>
      {errors.age && <span style={errosStyle} >{errors.age.message}</span>}
      <label>Password:</label>
      <input type='password' {...register('password')}/>
      {errors.password && <span style={errosStyle} >{errors.password.message}</span>}
      <label>Confirm Password:</label>
      <input type='password' {...register('confirmPassword')}/>
      {errors.confirmPassword && <span style={errosStyle} >{errors.confirmPassword.message}</span>}
      <button type='submit'>Send</button>
  </form>
  )
}

export default FormValidationModelWithZod;
