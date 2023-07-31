"use client";

import React, { createContext, useState, useContext } from "react";
import fakeUsers, { User } from "@/data/users";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
  setUser: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const login = async (email: string, password: string) => {
    const loggedInUser = fakeUsers.find(
      (user) => user.email === email && user.password === password
    );

    if (loggedInUser) {
      setUser(loggedInUser);
      router.push("/dashboard");
    } else {
      setUser(null);
    }
  };

  const logout = async () => {
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
