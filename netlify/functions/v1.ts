import { version } from 'node:process'

export async function handler() {
  return {
    body: version,
    headers: {
      'content-type': 'text/plain'
    },
    statusCode: 200
  }
}
