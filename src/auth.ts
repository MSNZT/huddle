import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import Yandex from "next-auth/providers/yandex";
import { PrismaAdapter } from "@auth/prisma-adapter";
import z from "zod";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

const credentialsSchema = z.object({
  email: z.email(),
  password: z.string().min(6).max(32),
});

type User = z.infer<typeof credentialsSchema>;

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  adapter: PrismaAdapter({}),
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
        const { email, password } = raw as User;
        const parsed = credentialsSchema.safeParse(raw);

        if (!parsed.success) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) return null;

        const isEqualPassword = await bcrypt.compare(password, user.hashPassword);
        if (!isEqualPassword) return null;

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
  ],
});
