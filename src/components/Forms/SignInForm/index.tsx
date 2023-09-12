import React from 'react';
import { FormFC } from '../../../interfaces/FormProps';
import { Formik } from 'formik';
import signInSchema from '../../../schemas/SignInSchema';
import FormikForm from '../../FormikForm';
import Input from '../../Input';
import Button from '../../Button';

export interface SignInValues {
  email: string;
  password: string;
}

const SignInForm: FormFC<SignInValues> = (props) => {
  const {
    onSubmit,
  } = props;

  const handleSubmit = (values: SignInValues) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={signInSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {({ errors }) => (
        <FormikForm>
          <Input
            id="email"
            name="email"
            placeholder="E-mail"
            type="email"
            error={errors.email}
          />
          <Input
            id="password"
            name="password"
            placeholder="Senha"
            type="password"
            error={errors.password}
          />
          <Button
            buttonType='primary'
            type="submit"
          >
            Entrar
          </Button>
        </FormikForm>
      )}
    </Formik>
  );
};

export default SignInForm;