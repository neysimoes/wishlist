import { FastifyInstance } from 'fastify'
import productList from '../products'

export default async function (fastify: FastifyInstance) {
  fastify.get('/products', async function () {
    return productList
  })
}
