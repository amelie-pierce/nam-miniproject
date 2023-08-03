import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FormHelperText, Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useEffect, useState } from "react";
import { Control, Controller } from "react-hook-form";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  const error = form.formState.errors[name]?.message;

  return (
    <FormControl fullWidth margin="normal" variant="outlined">
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <Controller
        name={name}
        control={form.control}
        rules={{ required: "Please enter your password" }}
        render={({ field }) => (
          <OutlinedInput
            {...field}
            id={name}
            type={showPassword ? "text" : "password"}
            label={label}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            disabled={disabled}
            error={!!error}
          />
        )}
      />
      {error && (
        <FormHelperText>
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        </FormHelperText>
      )}
    </FormControl>
  );
}
