import React from 'react';
import { FunctionalComponent } from '../../interfaces/FunctionalComponent';
import { Field } from 'formik';
import { Container } from './styles';

interface Radio {
  value: string;
  label: string;
}

interface Props {
  name: string;
  groups: Radio[];
  error?: string;
}

const RadioButtonGroup: FunctionalComponent<Props> = (props) => {
  const {
    name,
    groups,
    error,
  } = props;

  return (
    <Container>
      {groups.map((group) => (
        <label>
          <Field type="radio" name={name} value={group.value} />
          {group.label}
        </label>
      ))}
      {error && <div className='error'>{error}</div>}
    </Container>
  );
};

export default RadioButtonGroup;