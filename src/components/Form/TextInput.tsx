import { TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import { TextInputProps } from './types';

export default function TextInput(props: TextInputProps) {
  const ctx = useFormContext();
  const { name, label, ...rest } = props;

  function renderField({ field }) {
    return (
      <TextField
        inputProps={{ ...props.inputProps }}
        InputLabelProps={{ shrink: true }}
        name={name}
        label={label}
        // helperText={error ? error.message.replace(name, args.label) : null}
        // helperText={
        //   <div className="d-flex justify-content-between">
        //     <span style={{ flex: '1 1 auto' }}>{!error ? args.helperText : errorMessage}</span>
        //     <span className="text-right" style={{ flex: '1 1 auto' }}>
        //       {inputProps.maxLength && `${field.value.length}/${inputProps.maxLength}`}
        //     </span>
        //   </div>
        // }
        {...rest}
        {...field}
      />
    );
  }

  return <Controller name={name} control={ctx.control} render={renderField} />;
}
