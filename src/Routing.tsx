import { createBrowserRouter } from 'react-router-dom'
import routes from '@/config/setting/routes'
import { PUBLIC_URL } from '@/config/setting/enviroment'
import Home from '@/pages/Home'
import NotFound from '@/pages/NotFound'

const RoutesComponents = [
  {
    element: <Home />,
    errorElement: <NotFound />,
    path: routes.root
  }
]

const Routing = createBrowserRouter(RoutesComponents, {
  basename: PUBLIC_URL
})

export default Routing
