import { createBrowserRouter } from 'react-router-dom'

import Home, { homeLoader } from './routes/Home'
import Wishlist, { wishlistLoader } from './routes/Wishlist'
import Root from './routes/Root'

const app = createBrowserRouter([
  {
    element: <Root />,
    handle: {
      crumb: 'Home',
    },
    children: [
      {
        path: '/',
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
        loader: wishlistLoader,
        handle: {
          crumb: 'Wishlist',
        },
      },
    ],
  },
])

export default app
