// TODO: TS
import { createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'
import routes from '@/config/routes'
import { PUBLIC_URL } from '@/config/enviroment'

const RoutesComponents = [
  { element: <Home />, errorElement: <NotFound />, path: routes.root }
]

const Router = createBrowserRouter(RoutesComponents, { basename: PUBLIC_URL })

export default Router
