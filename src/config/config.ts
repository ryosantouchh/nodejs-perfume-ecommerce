import { Dialect } from 'sequelize'

type config = {
  username: string
  password: string
  database: string
  host: string
  dialect: Dialect
  models: string
}

const config: Record<string, config> = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'db',
    host: process.env.DB_HOST || 'localhost',
    dialect: process.env.DB_DIALECT as Dialect,
    models: 'src/entities',
  },
}

export default config
