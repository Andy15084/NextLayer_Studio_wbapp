import { Kysely, PostgresDialect, sql } from 'kysely';
import { Pool } from 'pg';

// Database interface
export type Database = object;

// Create a connection pool
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Create a Kysely instance
export const db = new Kysely<Database>({
  dialect: new PostgresDialect({
    pool,
  }),
});

// Helper function to check database connection
export async function checkDatabaseConnection() {
  try {
    await sql`SELECT 1`.execute(db);
    console.log('Database connection successful');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
} 