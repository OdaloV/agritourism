import { Pool } from 'pg';

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'harvesthostdb',
  user: 'postgres',
  password: 'kokomelon2025',
});

export default pool;