import { FastifyInstance } from 'fastify'
import productList from '../products'

export default async function (fastify: FastifyInstance) {
  fastify.get('/wishlist', async function (request) {
    const skus = ((request.query as { skus: string })?.skus || '').split(',')
    return productList.filter((item) => {
      return skus.includes(item.code)
    })
  })
}
