import { ValidationError } from 'joi';
import React from 'react';
import { Controller, FieldValues, FormProvider, Path, useForm, useWatch } from 'react-hook-form';
import { FormProps, InputProps } from './types';

function Form<T extends FieldValues>({
  schema,
  onSubmit,
  children,
  onFormValueChange,
  defaultValues,
  shouldUnregister = false,
  className = '',
}: React.PropsWithChildren<FormProps<T>>) {
  const formhooks = useForm<T>({ mode: 'onChange', shouldUnregister });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formhooks;

  const validate = React.useCallback(
    async (data: T) => {
      try {
        await schema.validateAsync(data, { abortEarly: false });
        return true;
      } catch (error) {
        if (error instanceof ValidationError) {
          const validationErrors: Record<string, string> = {};
          error.details.forEach((detail) => {
            const key = detail.path.join('.');
            validationErrors[key] = detail.message;
          });
          throw validationErrors;
        }
        throw error;
      }
    },
    [schema]
  );

  const onSubmitWrapper = React.useCallback(
    async (data: T) => {
      try {
        const isValid = await validate(data);
        if (isValid) {
          onSubmit(data);
        }
      } catch (validationErrors) {
        console.error(validationErrors);
      }
    },
    [validate, onSubmit]
  );

  const formValues = useWatch<T>({
    control,
    defaultValue: defaultValues,
  });

  React.useEffect(() => {
    if (onFormValueChange) onFormValueChange(formValues);
  }, [formValues, onFormValueChange]);

  return (
    <FormProvider {...formhooks}>
      <form onSubmit={handleSubmit(onSubmitWrapper)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;
