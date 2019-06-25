import path from 'path'

export const resolveRoot = (file) => {
  return path.resolve(path.resolve(__dirname, '../'), file)
}

export const getComponents = () => [
  'button',
  'card',
  'modal'
]