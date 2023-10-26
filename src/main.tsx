import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Providers } from './providers/index.tsx'
import Character from './pages/Character.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/character/:id',
    element: <Character />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  </React.StrictMode>
)
