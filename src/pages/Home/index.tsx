import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button';
import * as S from './styles';
import useAuth from '../../hooks/useAuth';

const Home: React.FC = () => {
  const { signOut, user } = useAuth();

  const navigate = useNavigate();

  const handleLogout = React.useCallback(() => {
    signOut();
    navigate('/');
  }, [navigate, signOut]);
  
  return (
    <S.PageContainer>
      <h2 style={{ color: '#FFF' }}>O que vamos assistir hoje, {user.name}?</h2>
      <S.ButtonContainer>
        <Button buttontype='primary' onClick={() => navigate('/create-session')}>Criar sessão</Button>
        <Button buttontype='primary' onClick={() => navigate('/join-session')}>Entrar em uma sessão</Button>
        <Button buttontype='primary' onClick={() => navigate('/rate')}>Avaliar filmes assistidos</Button>
      </S.ButtonContainer>
      <S.ContentWrapper>
        <S.RankingContainer>
          <S.RankingTitle>Ranking de filmes</S.RankingTitle>
          <ul>
            <li>1º - Filme 1 | Nota 9/10</li>
            <li>2º - Filme 2 | Nota 8/10</li>
            <li>3º - Filme 3 | Nota 6.8/10</li>
            <li>4º - Filme 4 | Nota 6/10</li>
            <li>5º - Filme 5 | Nota 5/10</li>
          </ul>
        </S.RankingContainer>
        <S.RankingContainer>
          <S.RankingTitle>Ranking de séries</S.RankingTitle>
          <ul>
            <li>1º - Filme 1 | Nota 9/10</li>
            <li>2º - Filme 2 | Nota 8/10</li>
            <li>3º - Filme 3 | Nota 6.8/10</li>
            <li>4º - Filme 4 | Nota 6/10</li>
            <li>5º - Filme 5 | Nota 5/10</li>
          </ul>
        </S.RankingContainer>
      </S.ContentWrapper>
      <div>
        <Button buttontype='secondary' onClick={handleLogout}>Sair</Button>
      </div>
    </S.PageContainer>
  );
};

export default Home;