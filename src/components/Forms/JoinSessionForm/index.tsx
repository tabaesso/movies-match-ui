import React from 'react';
import Button from '../../Button';
import Input from '../../Input';
import { Formik } from 'formik';
import FormikForm from '../../FormikForm';
import { FormFC } from '../../../interfaces/FormProps';
import joinSessionSchema from '../../../schemas/JoinSessionSchema';

export interface JoinSessionValues {
  url: string;
}

const JoinSessionForm: FormFC<JoinSessionValues> = (props) => {
  const { onSubmit } = props;

  const handleSubmit = (values: JoinSessionValues) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{
        url: '',
      }}
      validationSchema={joinSessionSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {({ errors }) => (
        <FormikForm>
          <span>Insira o link da sessão</span>
          <Input
            id="url"
            name="url"
            type="text"
            placeholder='Link da sessão'
            error={errors.url}
          />
          <Button buttonType='primary' type='submit'>Acessar</Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default JoinSessionForm;