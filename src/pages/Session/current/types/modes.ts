import { Mode } from '../enum/modes';

export interface ModesProps {
  onChangeMode: (mode: Mode) => void;
}

export type Modes = {
  [key: string]: JSX.Element;
}

export interface TitleGenresProps extends ModesProps {
  sessionId?: string;
}

export interface TitleVotesProps extends ModesProps {
  sessionId?: string;
}