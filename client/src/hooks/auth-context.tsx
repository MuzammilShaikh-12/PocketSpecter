"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { api } from "@/lib/api";
import { User } from "@/lib/types";

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => Promise<void>;
  refreshAuth: () => Promise<void>;
}

const AuthContext = createContext<
  AuthContextType | undefined
>(undefined);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] =
    useState<User | null>(null);
  const [loading, setLoading] =
    useState(true);
  const [error, setError] = useState<
    string | null
  >(null);

  const checkAuth = async () => {
    try {
      setLoading(true);
      setError(null);

      const response =
        await api.checkAuthStatus();

      if (
        response.authenticated &&
        response.user
      ) {
        setUser(response.user);
      } else {
        setUser(null);
      }
    } catch (err) {
      console.error(
        "Auth check failed:",
        err
      );
      setError(
        "Failed to check authentication"
      );
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = () => {
    window.location.href =
      api.getGoogleAuthUrl();
  };

  const logout = async () => {
    try {
      await api.logout();
      setUser(null);
      window.location.href = "/landing";
    } catch (err) {
      console.error(
        "Logout failed:",
        err
      );
      setError("Failed to logout");
    }
  };

  const refreshAuth = async () => {
    await checkAuth();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        isAuthenticated: !!user,
        login,
        logout,
        refreshAuth,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

// INTERNAL hook used by use-auth.ts

export function useAuthContext() {
  const context = useContext(
    AuthContext
  );
  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }
  return context;
}
