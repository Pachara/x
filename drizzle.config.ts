import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './server/db/schema.ts',
  out: './server/db/migrations',
  dialect: 'mysql',
  dbCredentials: {
    host: process.env.NUXT_DB_HOST || 'localhost',
    port: Number(process.env.NUXT_DB_PORT) || 3306,
    user: process.env.NUXT_DB_USER || 'root',
    password: process.env.NUXT_DB_PASSWORD || '',
    database: process.env.NUXT_DB_NAME || 'x',
  },
})
