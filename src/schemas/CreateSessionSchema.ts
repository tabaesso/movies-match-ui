import { MEDIA_CATEGORIES } from './../constants';
import * as Yup from 'yup';

const createSessionSchema = Yup.object({
  name: Yup
    .string()
    .required('Nome da sessão é obrigatório'),
  category: Yup
    .mixed<MEDIA_CATEGORIES>()
    .oneOf(Object.values(MEDIA_CATEGORIES))
    .required('Categoria é obrigatória'),
});

export default createSessionSchema;