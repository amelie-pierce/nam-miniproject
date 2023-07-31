"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import LoginForm, { FormData } from "./login-form";
import { loginUser } from "@/data/users";

interface LoginProps {
  onSubmit: (values: FormData) => Promise<void>;
}

export default function Login(props: LoginProps) {
  const router = useRouter();
  const { setUser } = useAuth();

  const handleSubmit = async (values: FormData) => {
    const { onSubmit } = props;
    try {
      const { identifier, password } = values;
      const user = await loginUser(identifier, password);

      if (user) {
        setUser(user);
        if (onSubmit) {
          await onSubmit(values);
        }
        router.push("/dashboard");
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.log("Failed to login", error);
    }
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}
