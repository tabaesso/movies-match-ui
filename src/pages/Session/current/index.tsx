import React from 'react';
import { useParams } from 'react-router-dom';
import TitleGenres from './components/TitleGenres';
import { Mode } from './enum/modes';
import { Modes } from './types/modes';

const CurrentSession = () => {
  const { id } = useParams();
  const [mode, setMode] = React.useState<Mode>(Mode.TITLE_GENRE_SELECTION);

  const onChangeMode = (newMode: Mode) => {
    if (newMode === mode) return;
    
    setMode(newMode);
  };
  
  const modes: Modes = {
    [Mode.TITLE_GENRE_SELECTION]: <TitleGenres sessionId={id} onChangeMode={onChangeMode} />,
    [Mode.TITLE_SELECTION]: <></>,
    [Mode.STREAM_SELECTION]: <></>,
  };

  return (
    <>
      {modes[mode]}
    </>
  );
};

export default CurrentSession;