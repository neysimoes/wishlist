import { RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

import app from './app/app'

createRoot(document.getElementById('root') as HTMLElement).render(<RouterProvider router={app} />)
