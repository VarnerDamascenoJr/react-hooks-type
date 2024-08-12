import {zod, ZodType} from 'zod';


type formData = {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  password: string;
  confirmPassword: string;
}
const FormValidationModelWithZod = () => {

  const schema: ZodType<formData> = z.object({
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

  return(
  <form style={{display:'flex', flexDirection:'column',alignContent: 'center', justifyContent: 'center', gap:'20px'}}>
      <label>First Name:</label>
      <input type='text'/>
      <label>Last Name:</label>
      <input type='text'/>
      <label>Email:</label>
      <input type='email'/>
      <label>Age:</label>
      <input type='number'/>
      <label>Password:</label>
      <input type='password'/>
      <label>Confirm Password:</label>
      <input type='password'/>
      <button type='submit'>Send</button>
  </form>
  )
}

export default FormValidationModelWithZod;
