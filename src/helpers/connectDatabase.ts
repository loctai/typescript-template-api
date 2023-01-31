import mongoose from 'mongoose'
import { getConfig } from '../configs'
import { logger } from '../utils/logger'

const config = getConfig()


let isConnected: mongoose.ConnectionStates

export const connectDatabase = async () => {
  try {
    if (isConnected) {
      logger.info('connected using cached db')
      return Promise.resolve()
    }

    mongoose.set('strictQuery', false);

    const connection = await mongoose.connect(config.database.dbUrl, {
      keepAlive: true,
      dbName: config.database.dbName,
    })

    isConnected = connection.connections[0].readyState

    logger.info('connected using new db connection')

    return isConnected
  } catch (error) {
    logger.error('database connection failed.', error)
  }
}
