import React from 'react';
import { Container, Content } from './styles';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';

const CreateSession = () => {
  const [selectedTitle, setSelectTitle] = React.useState<string | undefined>(undefined);

  return (
    <Container>
      <Link to='/home'>Voltar</Link>
      <Content>
        <div>
          <Button buttonType='primary' onClick={() => setSelectTitle('movie')}>Filme</Button>
          <Button buttonType='primary' onClick={() => setSelectTitle('series')}>Série</Button>
        </div>
        {selectedTitle && (
          <>
            <h3>Compartilhe o link com seus amigos!</h3>
            <input type="text" value="https://www.youtube.com/watch?v=dQw4w9WgXcQ" readOnly />
            <h4>Entraram na sessão:</h4>
            <ul>
              <li>Usuário 1</li>
              <li>Usuário 2</li>
              <li>Usuário 3</li>
            </ul>
            <Button buttonType='primary'>Começar!</Button>
          </>
        )}
      </Content>
    </Container>
  );
};

export default CreateSession;