import * as Yup from 'yup';

const joinSessionSchema = Yup.object({
  url: Yup
    .string()
    .required('Link da sessão é obrigatório'),
});

export default joinSessionSchema;