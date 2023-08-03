"use client";

import React, { createContext, useState, useContext } from "react";
import { User } from "@/data/users";
import { useRouter } from "next/navigation";
import { setCookie, deleteCookie } from "cookies-next";

interface AuthContextProviderProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContextProvider = createContext<AuthContextProviderProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
});

export const useAuth = () => useContext(AuthContextProvider);

export const AuthProvider: React.FC<{
  children: React.ReactNode;
  defaultUser: User;
}> = ({ children, defaultUser }) => {
  const [user, setUser] = useState<User | null>(defaultUser);

  const router = useRouter();

  const login = async (email: string, password: string) => {
    const user = {
      email,
      password,
    };

    setUser(user);
    setCookie("user", user);
    router.push("/dashboard");
  };

  const logout = async () => {
    deleteCookie("user");
    setTimeout(() => setUser(null), 500);
    router.push("/");
  };

  return (
    <AuthContextProvider.Provider value={{ user, login, logout }}>
      {children}
    </AuthContextProvider.Provider>
  );
};
