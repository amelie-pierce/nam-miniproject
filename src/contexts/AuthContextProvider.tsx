"use client";

import fakeUsers, { User } from "@/data/users";
import { useRouter } from "next/navigation";
import React, { createContext, useContext, useEffect, useState } from "react";

interface AuthContextProviderProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  isAuthenticated: boolean;
}

const AuthContextProvider = createContext<AuthContextProviderProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
  setUser: () => {},
  isAuthenticated: false,
});

export const useAuth = () => useContext(AuthContextProvider);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const loggedInUser = fakeUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (loggedInUser) {
      setUser(loggedInUser);
      localStorage.setItem("user", JSON.stringify(loggedInUser));
      setIsAuthenticated(true);
      router.push("/dashboard");
    } else {
      setUser(null);
    }
  };

  const logout = async () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    router.push("/login");
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContextProvider.Provider
      value={{ user, login, logout, setUser, isAuthenticated }}>
      {children}
    </AuthContextProvider.Provider>
  );
};
