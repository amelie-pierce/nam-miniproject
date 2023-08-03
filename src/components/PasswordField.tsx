import React, { useState } from "react";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import { Control, Controller } from "react-hook-form";
import { FormHelperText, TextField, Typography } from "@mui/material";

interface PasswordFieldProps {
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

export default function PasswordField(props: PasswordFieldProps) {
  const { form, name, label, disabled } = props;
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  const error = form.formState.errors[name]?.message;

  return (
    <div>
      <Controller
        name={name}
        control={form.control}
        rules={{ required: "Please enter your password" }}
        render={({ field }) => {
          return (
            <TextField
              {...field}
              id={name}
              type={showPassword ? "text" : "password"}
              label={label}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={toggleShowPassword}
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              disabled={disabled}
              error={!!error}
            />
          );
        }}
      />
      {error && (
        <FormHelperText>
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        </FormHelperText>
      )}
    </div>
  );
}
