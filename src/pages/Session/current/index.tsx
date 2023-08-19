import React from 'react';
import { useParams } from 'react-router-dom';
import { Mode } from './enum/modes';
import { Modes } from './types/modes';
import TitleGenres from './components/TitleGenres';
import TitleVotes from './components/TitleVotes';

const CurrentSession = () => {
  const { id } = useParams();
  const [mode, setMode] = React.useState<Mode>(Mode.TITLE_GENRE_SELECTION);

  const onChangeMode = (newMode: Mode) => {
    if (newMode === mode) return;
    
    setMode(newMode);
  };
  
  const modes: Modes = {
    [Mode.TITLE_GENRE_SELECTION]: <TitleGenres sessionId={id} onChangeMode={onChangeMode} />,
    [Mode.TITLE_SELECTION]: <TitleVotes sessionId={id} onChangeMode={onChangeMode} />,
    [Mode.STREAM_SELECTION]: <></>,
  };

  return (
    <>
      {modes[mode]}
    </>
  );
};

export default CurrentSession;