"use client";

import React from "react";

import { useAuth } from "@/contexts/AuthContextProvider";
import LoginForm, { FormData } from "./login-form";
import { loginUser } from "@/data/users";

export default function Login() {
  const { login } = useAuth();

  const handleSubmit = async (values: FormData) => {
    try {
      const { identifier, password } = values;
      const user = await loginUser(identifier, password);

      if (user) {
        return login(identifier, password);
      }

      return alert("Invalid credentials");
    } catch (error) {
      console.log("Failed to login", error);
    }
  };

  return <LoginForm onSubmit={handleSubmit} />;
}
