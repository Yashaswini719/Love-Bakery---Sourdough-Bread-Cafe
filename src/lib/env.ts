import { z } from "zod";

const publicSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
});

const publicEnv = publicSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
});

export const env = {
  public: {
    siteUrl: publicEnv.NEXT_PUBLIC_SITE_URL.replace(/\/$/, ""),
  },
} as const;
