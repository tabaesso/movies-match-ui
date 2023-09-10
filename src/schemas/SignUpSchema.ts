import * as Yup from 'yup';

const signUpSchema = Yup.object({
  name: Yup.string().required('Nome é obrigatório'),
  email: Yup
    .string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  password: Yup
    .string()
    .required('Senha é obrigatória'),
});

export default signUpSchema;