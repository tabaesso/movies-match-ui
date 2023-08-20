import React from 'react';
import { WaitingApprovalProps } from '../../types/modes';
import LoadingOverlay from '../../../../../components/LoadingOverlay';
import { Mode } from '../../enum/modes';

const WaitingApproval = ({ sessionId, onChangeMode }: WaitingApprovalProps) => {
  console.log(sessionId);
  const [isLoading, setIsLoading] = React.useState(true);

  // just a simulation for loading time
  // todo: after admin approval -> redirect to movie selected page -> onChangeMode(Mode.MOVIE_SELECTED);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  React.useEffect(() => {
    if (!isLoading) {
      onChangeMode(Mode.STREAM_SELECTION);
    }
  }, [isLoading, onChangeMode]);

  return (
    <LoadingOverlay message="Aguardando a aprovação do administrador da sessão..." isLoading={isLoading}/>
  );
};

export default WaitingApproval;