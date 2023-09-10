import React from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Form, Formik } from 'formik';
import { FormFC } from '../../interfaces/FormProps';
import signInSchema from '../../schemas/SignInSchema';

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
        <Form>
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
            placeholder="Password"
            type="password"
            error={errors.password}
          />
          <Button buttonType='primary' type="submit">Entrar</Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;