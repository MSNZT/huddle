import NextAuth, { type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Yandex from "next-auth/providers/yandex";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { z } from "zod";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(32),
});

export const authConfig = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },

  providers: [
    Yandex,
    Google,
    Credentials({
      name: "Email & Password",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(raw) {
        const parsed = credentialsSchema.safeParse(raw);
        if (!parsed.success) return null;
        const { email, password } = parsed.data;

        const user = await prisma.user.findUnique({ where: { email } });
        if (!user || !user.hashPassword) return null;

        // ДИНАМИЧЕСКИЙ импорт bcryptjs — чтобы лишний код не утягивался куда не надо
        const { compare } = await import("bcryptjs");
        const ok = await compare(password, user.hashPassword);
        if (!ok) return null;

        return { id: user.id, email: user.email, name: user.name ?? undefined };
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = (user as any).id;
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.userId) (session.user as any).id = String(token.userId);
      if (token?.name) session.user.name = token.name as string;
      return session;
    },
  },
} satisfies NextAuthConfig;

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
