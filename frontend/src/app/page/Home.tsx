import ProductCard from '../component/ProductCard'
const productData = {
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
}

const Home = () => (
  <div className="px-5 grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-6">
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
    <ProductCard product={productData} />
  </div>
)

export default Home
