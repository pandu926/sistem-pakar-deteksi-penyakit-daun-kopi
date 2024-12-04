import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import GitHub from "next-auth/providers/github";

// async function getUser(email: string, password: string): Promise<any> {
//   return {
//     id: 1,
//     name: "test user",
//     email: email,
//     password: password,
//   };
// }

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google, GitHub],
  pages: {
    signIn: "/auth/signin", // Halaman login custom (opsional)
    signOut: "/auth/signout", // Halaman logout custom (opsional)
    error: "/auth/error", // Halaman error (opsional)
    verifyRequest: "/auth/verify-request", // Untuk email magic link (opsional)
    newUser: "/dashboard", // Halaman setelah pengguna baru login pertama kali
  },
});
