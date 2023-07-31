import React from "react";
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@mui/material/Button";
import InputField from "../../components/InputField";
import PasswordField from "../../components/PasswordField";
import Container from "@mui/material/Container";
import { Box, CssBaseline } from "@mui/material";

export interface FormData {
  identifier: string;
  password: string;
}

type SubmitFunction = SubmitHandler<FormData>;

interface LoginFormProps {
  onSubmit: SubmitFunction;
}

export default function LoginForm({ onSubmit }: LoginFormProps) {
  const form = useForm<FormData>({
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const handleSubmit: SubmitFunction = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  const { isSubmitting } = form.formState;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign In
        </Typography>

        <Box
          component="form"
          onSubmit={form.handleSubmit(handleSubmit)}
          noValidate
          sx={{ mt: 1 }}>
          <InputField name="identifier" label="Email" form={form} />
          <PasswordField name="password" label="Password" form={form} />

          <Button
            disabled={isSubmitting}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            size="large"
            sx={{ mt: 3, mb: 2 }}>
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
