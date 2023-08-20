import { Mode } from '../enum/modes';

export interface ModesProps {
  onChangeMode: (mode: Mode) => void;
}

export type Modes = {
  [key: string]: JSX.Element;
}

export interface MovieGenresProps extends ModesProps {
  sessionId?: string;
}

export interface MovieVotesProps extends ModesProps {
  sessionId?: string;
}

export interface MovieSelectedProps extends ModesProps {
  sessionId?: string;
}

export interface WaitingApprovalProps extends ModesProps {
  sessionId?: string;
}

export interface MovieStreamingsProps {
  sessionId?: string;
}