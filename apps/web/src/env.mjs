import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    // Server-side variables
  },
  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with `VITE_`.
   */
  client: {
    VITE_APP_TITLE: z.string().default('Portfolio'),
    VITE_STRAPI_URL: z.string().url().default('http://localhost:1337'),
    VITE_STRAPI_API_TOKEN: z.string().optional(),
  },
  /**
   * You can't destruct `process.env` as a regular object in the Next.js runtimes. If you need to
   * destructure env variables, you must use `processEnv`.
   */
  runtimeEnv: {
    VITE_APP_TITLE: process.env.VITE_APP_TITLE,
    VITE_STRAPI_URL: process.env.VITE_STRAPI_URL,
    VITE_STRAPI_API_TOKEN: process.env.VITE_STRAPI_API_TOKEN,
  },
  /**
   * Run `build` when the env file is missing or invalid. This is useful for CI/CD.
   */
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
})
