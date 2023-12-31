import * as Yup from 'yup';

const signInSchema = Yup.object({
  email: Yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: Yup
    .string()
    .required('Senha é obrigatória'),
});

export default signInSchema;