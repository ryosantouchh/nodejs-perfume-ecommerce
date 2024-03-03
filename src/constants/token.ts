import type { Secret } from 'jsonwebtoken'

export const JWT_ACCESS_SECRET_KEY = process.env.JWT_ACCESS_SECRET_KEY as Secret
export const JWT_REFRESH_SECRET_KEY = process.env
  .JWT_REFRESH_SECRET_KEY as Secret

export const TOKEN_EXPIRE = {
  MIN_15: 60 * 15,
  DAY_3: 60 * 60 * 24 * 3,
}
