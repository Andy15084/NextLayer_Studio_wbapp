import { Kysely, PostgresDialect } from 'kysely';
import { Pool } from 'pg';

// Database interface
export interface Database {
  // Add your table definitions here
  // Example:
  // users: {
  //   id: number;
  //   name: string;
  //   email: string;
  //   created_at: Date;
  // }
}

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
    await db.executeQuery('SELECT 1');
    console.log('Database connection successful');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
} 