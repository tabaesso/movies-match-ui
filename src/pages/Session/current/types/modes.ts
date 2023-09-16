import { Session } from '../../../../services/types/Session';
import { Mode } from '../enum/modes';

export interface ModesProps {
  onChangeMode: (mode: Mode) => void;
}

export type Modes = {
  [key: string]: JSX.Element;
}

export interface MovieGenresProps extends ModesProps {
  session?: Session;
}

export interface MovieVotesProps extends ModesProps {
  session?: Session;
}

export interface MovieSelectedProps extends ModesProps {
  session?: Session;
}

export interface WaitingApprovalProps extends ModesProps {
  session?: Session;
}

export interface MovieStreamingsProps {
  session?: Session;
}