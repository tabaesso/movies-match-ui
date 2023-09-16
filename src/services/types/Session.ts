import { MEDIA_CATEGORIES } from '../../constants';

export type Session = {
  id: string;
  name: string;
  isOpen: boolean;
  category: MEDIA_CATEGORIES;
}