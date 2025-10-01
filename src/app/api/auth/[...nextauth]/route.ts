import NextAuth from "next-auth";
import { authConfig } from "@/auth";
export const runtime = "nodejs";
export const { GET, POST } = NextAuth(authConfig) as any;
