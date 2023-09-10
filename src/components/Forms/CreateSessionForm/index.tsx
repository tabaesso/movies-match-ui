import React from 'react';
import { JustifyRow } from '../../styles';
import Button from '../../Button';
import Input from '../../Input';

export interface CreateSessionObject {
  type?: 'movie' | 'series';
  name?: string;
}

interface Props {
  values?: CreateSessionObject;
  onSubmit: (values: CreateSessionObject) => void;
}

const CreateSessionForm = (props: Props) => {
  const { values, onSubmit } = props;

  const [createdSession, setCreateSession] = React.useState<CreateSessionObject | undefined>(values);

  const handleSubmit = () => {
    if (createdSession?.name && createdSession?.type) {
      onSubmit(createdSession);
    }
  };

  return (
    <>
      <span>Selecione qual o tipo de mídia deseja assistir:</span>
      <JustifyRow>
        <Button
          selected={createdSession?.type === 'movie'}
          buttonType='primary'
          onClick={() => setCreateSession({ ...createdSession, type: 'movie'})}
        >
          Filme
        </Button>
        <Button
          selected={createdSession?.type === 'series'}
          buttonType='primary'
          onClick={() => setCreateSession({ ...createdSession, type: 'series'})}
        >
          Série
        </Button>
      </JustifyRow>
      <span>Qual o nome da sua sessão?</span>
      <Input type="text" placeholder='Nome' value={createdSession?.name} onChange={(e) => setCreateSession({ ...createdSession, name: e.target.value })} />
      <Button buttonType='primary' onClick={handleSubmit}>Criar sessão</Button>
    </>
  );
};

export default CreateSessionForm;