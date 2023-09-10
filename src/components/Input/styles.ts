import { Field } from 'formik';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 10px;

  .error {
    color: red;
    font-size: 12px;
  }
`;

export const InputField = styled(Field)`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;