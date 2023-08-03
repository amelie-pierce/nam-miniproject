import React from "react";
import { FormHelperText, TextField, Typography } from "@mui/material";
import { Control, Controller } from "react-hook-form";

interface InputFieldProps {
  form: {
    control: Control<any>;
    formState: {
      errors: any;
    };
  };
  name: string;
  label?: string;
  disabled?: boolean;
}

export default function InputField(props: InputFieldProps) {
  const { form, name, label, disabled } = props;

  const validateInput = (value: string) => {
    if (!value) {
      return "This field is required.";
    }

    // Validate email format using regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(value)) {
      return "Please enter a valid email address.";
    }

    return undefined;
  };

  const error = form.formState.errors[name]?.message;

  return (
    <div>
      <Controller
        control={form.control}
        name={name}
        rules={{ validate: validateInput }}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              fullWidth
              margin="normal"
              variant="outlined"
              label={label}
              disabled={disabled}
              error={!!error}
            />
          );
        }}
      />
      {error && (
        <FormHelperText>
          <Typography
            variant="body2"
            color="error"
            style={{ marginLeft: "15px" }}
          >
            {error}
          </Typography>
        </FormHelperText>
      )}
    </div>
  );
}
