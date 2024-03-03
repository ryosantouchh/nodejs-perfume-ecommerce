import { z } from 'zod'

export const userAddressSchema = z.object({
  address: z.string().optional(),
  subDistrict: z.string().optional(),
  district: z.string().optional(),
  country: z.string().optional(),
  postalCode: z.string().optional(),
})

export const userInfoSchema = z.object({
  userId: z.string(),
  username: z.string(),
  password: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
})

export const userSchema = userInfoSchema.merge(userAddressSchema)

export const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
})

// ##### Schema Validate #####
export const userRegisterSchema = z.object({
  body: userInfoSchema.omit({ userId: true }),
})

export const userLoginSchema = z.object({
  body: loginSchema,
})

export const updateUserReqSchema = z.object({
  params: userInfoSchema.partial().pick({ userId: true }),
  body: userSchema
    .partial()
    .omit({ userId: true, username: true, password: true }),
})
