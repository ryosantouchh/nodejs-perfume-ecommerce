import { ErrorObject, StatusCodeEnum } from '@types'

type ErrorGeneratorParams = {
  message: string
  statusCode: StatusCodeEnum
}

export const ErrorGenerator = ({
  message,
  statusCode,
}: ErrorGeneratorParams) => {
  const error = new Error(message) as ErrorObject
  error.statusCode = statusCode

  return error
}
