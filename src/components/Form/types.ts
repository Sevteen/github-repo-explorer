import { TextFieldProps } from '@mui/material';
import Joi from 'joi';
import { ReactNode } from 'react';
import { DeepPartialSkipArrayKey, FieldValues } from 'react-hook-form';

export type FormProps<T extends FieldValues> = {
  defaultValues?: DeepPartialSkipArrayKey<T>;
  onSubmit: (data: T) => void;
  schema: Joi.ObjectSchema<T>;
  children: ReactNode[];
  onFormValueChange?: (formData: FieldValues) => void;
  shouldUnregister?: boolean;
  className?: string;
};

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type TextInputProps = TextFieldProps;
