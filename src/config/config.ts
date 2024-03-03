import { Dialect } from 'sequelize'
import fs from 'fs'
import path from 'path'

type config = {
  username: string
  password: string
  database: string
  host: string
  dialect: Dialect
  models: string
  migrations: string
  port: number
}

const config: Record<string, config> = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'db',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT as Dialect,
    models: 'src/models',
    migrations: 'migrations',
    port: 3306,
  },
}

const filePath = path.join('config', 'config.json')
fs.writeFileSync(filePath, JSON.stringify(config, null, 2))
export default config
