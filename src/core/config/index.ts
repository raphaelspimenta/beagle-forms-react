export const env = process.env.APP_ENV

export const environments = {
  mock: {
    beagleUrl: 'http://localhost:3001',
  },
  production: {
    beagleUrl: 'https://thawing-earth-73776.herokuapp.com',
  },
}
// @ts-ignore
export const getCurrentEnvConfig = () => environments[env] || environments.production
