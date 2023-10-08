import React from 'react';
import { FormFC } from '../../../interfaces/FormProps';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import signUpSchema from '../../../schemas/SignUpSchema';
import FormikForm from '../../FormikForm';
import Input from '../../Input';
import { JustifyRow } from '../../styles';
import Button from '../../Button';

export interface SignUpValues {
  name: string;
  email: string;
  password: string;
}

const SignUpForm: FormFC<SignUpValues> = (props) => {
  const {
    onSubmit,
  } = props;

  const navigate = useNavigate();

  const handleSubmit = (values: SignUpValues) => {
    onSubmit(values);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {({ errors }) => (
        <FormikForm>
          <Input
            id="name"
            name="name"
            placeholder="Nome"
            type="name"
            error={errors.name}
          />
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
          <JustifyRow>
            <Button buttontype='secondary' type="button" onClick={() => navigate('/')}>Voltar</Button>
            <Button buttontype='primary' type="submit">Criar</Button>
          </JustifyRow>
        </FormikForm>
      )}
    </Formik>
  );
};

export default SignUpForm;