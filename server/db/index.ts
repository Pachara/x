import { drizzle } from 'drizzle-orm/mysql2'
import mysql from 'mysql2/promise'
import * as schema from './schema'

let _db: ReturnType<typeof drizzle> | null = null

export function useDB() {
  if (_db) return _db

  const config = useRuntimeConfig()

  const pool = mysql.createPool({
    host: config.dbHost || 'localhost',
    port: Number(config.dbPort) || 3306,
    user: config.dbUser || 'root',
    password: config.dbPassword || '',
    database: config.dbName || 'x',
  })

  _db = drizzle(pool, { schema, mode: 'default' })
  return _db
}
