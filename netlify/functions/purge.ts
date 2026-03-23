import { type Config, purgeCache } from '@netlify/functions'

export default async function() {
  await purgeCache({
    tags: ['contentful-routes']
  })

  return new Response(null, {
    status: 204
  })
}

export const config: Config = {
  path: '/api/purge'
}