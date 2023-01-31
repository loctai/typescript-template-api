import type { Config } from '../interfaces/config.interface'

export const productionConfig: Config = {
  env: 'production',
  server: {
    host: '0.0.0.0',
    port: Number(process.env.PORT) || 80,
  },
  database: {
    dbName: process.env.DB_NAME,
    dbUrl: process.env.DB_URL,
  },
  cors: {
    origin: 'my-domain.com',
    credentials: true,
  },
  log: {
    format: 'tiny',
    level: 'info',
  },
  token: {
    access: {
      secret: process.env.TOKEN_SECRET,
      expiresIn: process.env.TOKEN_EXPIRATION,
    },
    refresh: {
      secret: process.env.REFRESH_SECRET,
      expiresIn: process.env.REFRESH_EXPIRATION,
    },
    accountVerification: {
      secret: process.env.ACCOUNT_SECRET,
      expiresIn: process.env.ACCOUNT_EXPIRATION,
    },
  },
}
