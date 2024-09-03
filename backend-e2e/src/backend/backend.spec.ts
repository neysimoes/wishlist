import axios from 'axios'
import productsList from '../../__mock__/productsList'

describe('GET /product', () => {
  it('should respond with a list of products', async () => {
    const res = await axios.get(`/products`)

    expect(res.status).toBe(200)
    expect(res.data).toEqual(productsList)
  })
})

describe('GET /wishlist', () => {
  it('should respond with a list of products filter by "code" when called with "skus" query', async () => {
    const res = await axios.get(`/wishlist?skus=D22-2077-006,3R2-0087-240-02`)

    expect(res.status).toBe(200)
    expect(res.data).toEqual([
      {
        code: 'D22-2077-006',
        name: 'Tênis Nike Revolution 7 Feminino - Preto+Branco',
        available: true,
        visible: true,
        details: {
          name: 'Tênis Nike Revolution 7 Feminino - Preto+Branco',
          description:
            'Carregamos o Revolution 7 com o tipo de amortecimento e suporte macio que pode mudar o seu mundo de corrida. Elegante como sempre, confortvel quando a borracha encontra a estrada e performtico para o ritmo desejado, uma evoluo de um favorito dos fs que oferece uma conduo macia e suave.',
        },
        fullPriceInCents: '39999',
        salePriceInCents: '30399',
        rating: 4.5,
        image:
          'https://static.netshoes.com.br/produtos/tenis-nike-revolution-7-feminino/26/JD8-6363-026/JD8-6363-026_zoom1.jpg?ts=1708096757?ims=544x',
        stockAvailable: true,
      },
      {
        code: '3R2-0087-240-02',
        name: 'Kit 4 Camiseta Masculina Segunda Pele Proteção Solar UV Térmica Praia Manga Longa Blusa Camisa - Cinza+Azul',
        available: false,
        visible: true,
        details: {
          name: 'Kit 4 Camiseta Masculina Segunda Pele Proteção Solar UV Térmica Praia Manga Longa Blusa Camisa - Cinza+Azul',
          description:
            'As camisetas proteção UV masculina da Dellas, são produzidas em 100% Poliéster, permitindo movimentos mais intensos, e por um maior tempo de forma confortável. Elas se ajustam perfeitamente ao corpo, podendo ser usadas como segunda pele.',
        },
        fullPriceInCents: '20000',
        salePriceInCents: '8690',
        rating: 3.5,
        image:
          'https://static.netshoes.com.br/produtos/kit-4-camiseta-masculina-segunda-pele-protecao-solar-uv-termica-praia-manga-longa-blusa-camisa/40/3R2-0087-240/3R2-0087-240_zoom1.jpg?ts=1690411979?ims=544x',
        stockAvailable: false,
      },
    ])
  })
  })

  it('should respond with a list of products filter by "code" when called without "skus" query', async () => {
    const res = await axios.get(`/wishlist?skus=`)

    expect(res.status).toBe(200)
    expect(res.data).toEqual([])
  })
})
