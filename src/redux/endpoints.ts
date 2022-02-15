const prefix = '/v1'
export default {
  prefix,
  global: {
    get: () => prefix + '/',
  },
}
