import * as path from 'path'
import { startDevServer } from '@cypress/vite-dev-server'

export default (on, config) => {
  on('dev-server:start', options => {
    return startDevServer({
      options,
      viteConfig: {
        configFile: path.resolve(__dirname, '..', '..', 'vite.config.ts'),
      },
    })
  })
}
