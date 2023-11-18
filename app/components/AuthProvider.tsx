"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

export const AuthProvider = async ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
