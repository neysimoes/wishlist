import { Favorite } from '../icon'

const EmptyWishlist = () => (
  <div className="min-h-[500px] flex flex-row items-center content-center w-full">
    <div className="flex flex-col items-center w-full">
      <Favorite className="text-5xl mb-2" />{' '}
      <h1 className="text-2xl font-bold">Você ainda não possui itens salvos na sua Lista de Desejos.</h1>
    </div>
  </div>
)

export default EmptyWishlist
