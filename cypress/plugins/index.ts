import { startDevServer } from '@cypress/vite-dev-server'

export default (on, config) => {
  on('dev-server:start', options => startDevServer({ options }))

  return config
}
