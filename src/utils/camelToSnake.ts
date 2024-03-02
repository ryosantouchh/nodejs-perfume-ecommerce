function camelToSnake(camelCaseString: string): string {
  return camelCaseString.replace(
    /[A-Z]/g,
    (letter) => `_${letter.toLowerCase()}`
  )
}

export default camelToSnake
