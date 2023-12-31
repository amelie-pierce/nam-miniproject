"use client";

import { useAuth } from "@/contexts/AuthContextProvider";
import { loginUser } from "@/data/users";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import LoginForm, { FormData } from "./login-form";

interface LoginProps {
  onSubmit: (values: FormData) => Promise<void>;
}

export default function Login(props: LoginProps) {
  const router = useRouter();
  const { setUser, isAuthenticated, login, logout } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (values: FormData) => {
    const { onSubmit } = props;
    try {
      const { identifier, password } = values;
      const user = await loginUser(identifier, password);

      if (user) {
        login(identifier, password);
        setUser(user);
        if (onSubmit) {
          await onSubmit(values);
        }
        router.push("/dashboard");
      } else {
        logout();
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
