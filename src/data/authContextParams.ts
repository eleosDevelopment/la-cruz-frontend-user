// src/contexts/authContextDefinition.ts
import { createContext } from "react";
import type { User } from "firebase/auth";

export interface AuthContextType {
  loginEmail: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  userFrb: User | null | undefined;
  loader: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
