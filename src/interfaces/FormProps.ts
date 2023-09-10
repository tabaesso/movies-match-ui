import { FunctionalComponent } from './FunctionalComponent';

export type GenericFormProps<TFormValues> = {
  data?: TFormValues;
  onSubmit: (values: TFormValues) => void;
}

export interface FormFC<TFormValues> extends FunctionalComponent<GenericFormProps<TFormValues>> {}
