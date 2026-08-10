const fs = require('fs');
const path = require('path');

const target = process.argv[2]; // 'sqlite' or 'postgres'
const schemaPath = path.join(__dirname, 'apps', 'server', 'prisma', 'schema.prisma');
const envPath = path.join(__dirname, 'apps', 'server', '.env');

if (target !== 'sqlite' && target !== 'postgres') {
  console.error("Usage: node switch-db.js [sqlite|postgres]");
  process.exit(1);
}

if (!fs.existsSync(schemaPath)) {
  console.error("Prisma schema file not found at:", schemaPath);
  process.exit(1);
}
if (!fs.existsSync(envPath)) {
  console.error("Environment file not found at:", envPath);
  process.exit(1);
}

let schema = fs.readFileSync(schemaPath, 'utf8');
let env = fs.readFileSync(envPath, 'utf8');

if (target === 'sqlite') {
  schema = schema.replace(/provider\s*=\s*"postgresql"/, 'provider = "sqlite"');
  env = env.replace(/DATABASE_URL\s*=\s*".*"/, 'DATABASE_URL="file:./dev.db"');
  console.log("Configured Prisma schema and env for SQLite.");
} else {
  schema = schema.replace(/provider\s*=\s*"sqlite"/, 'provider = "postgresql"');
  env = env.replace(/DATABASE_URL\s*=\s*".*"/, 'DATABASE_URL="postgresql://postgres:postgres@localhost:5432/typearena?schema=public"');
  console.log("Configured Prisma schema and env for PostgreSQL.");
}

fs.writeFileSync(schemaPath, schema, 'utf8');
fs.writeFileSync(envPath, env, 'utf8');
console.log("Done.");
