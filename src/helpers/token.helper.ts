import Jwt from 'jsonwebtoken'
import { getConfig } from '../configs'
import type { JwtPayload } from 'jsonwebtoken'

type JwtToken = string | object | Buffer

const config = getConfig()

export const signAccessToken = async (data: JwtToken) => {
  return Jwt.sign(data, config.token.access.secret, {
    expiresIn: config.token.access.expiresIn,
  })
}

export const signRefreshToken = async (data: JwtToken) => {
  return Jwt.sign(data, config.token.refresh.secret, {
    expiresIn: config.token.refresh.expiresIn,
  })
}

export const signAccountVerificationToken = async (data: JwtToken) => {
  return Jwt.sign(data, config.token.accountVerification.secret, {
    expiresIn: config.token.accountVerification.expiresIn,
  })
}

export const verifyRefreshToken = async (refreshToken: string): Promise<JwtPayload> => {
  return Jwt.verify(refreshToken, config.token.refresh.secret) as JwtPayload
}

export const verifyAccountVerificationToken = async (
  verificationToken: string
): Promise<JwtPayload> => {
  return Jwt.verify(verificationToken, config.token.accountVerification.secret) as JwtPayload
}