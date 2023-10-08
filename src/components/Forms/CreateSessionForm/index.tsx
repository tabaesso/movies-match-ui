import React from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { Formik } from 'formik';
import createSessionSchema from '../../../schemas/CreateSessionSchema';
import { MEDIA_CATEGORIES } from '../../../constants';
import RadioButtonGroup from '../../RadioButtonGroup';
import FormikForm from '../../FormikForm';
import { FormFC } from '../../../interfaces/FormProps';

export interface CreateSessionValues {
  category: string;
  name: string;
}

const CreateSessionForm: FormFC<CreateSessionValues> = (props) => {
  const { onSubmit } = props;

  const categories = [
    {
      value: MEDIA_CATEGORIES.MOVIES,
      label: 'Filme',
    },
    {
      value: MEDIA_CATEGORIES.SERIES,
      label: 'Série',
    }
  ];

  const handleSubmit = (values: CreateSessionValues) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        category: '',
      }}
      validationSchema={createSessionSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {({ errors }) => (
        <FormikForm>
          <span>Selecione qual o tipo de mídia deseja assistir:</span>
          <RadioButtonGroup
            name="category"
            groups={categories}
            error={errors.category}
          />
          <span>Qual o nome da sua sessão?</span>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder='Nome'
            error={errors.name}
          />
          <Button buttontype='primary' type="submit">Criar sessão</Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default CreateSessionForm;