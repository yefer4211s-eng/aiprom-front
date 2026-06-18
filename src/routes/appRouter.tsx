// import { createBrowserRouter, RouteObject } from 'react-router'
// import MainLayout from '@/layouts/MainLayout'
// import Home from '@/pages/Home'
// import Services from '@/pages/Services'
// import Projects from '@/pages/Projects'
// import About from '@/pages/About'
// import Contact from '@/pages/Contact'

// const routes: RouteObject[] = [
//   {
//     element: <MainLayout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/services',
//         element: <Services />,
//       },
//       {
//         path: '/projects',
//         element: <Projects />,
//       },
//       {
//         path: '/about',
//         element: <About />,
//       },
//       {
//         path: '/contact',
//         element: <Contact />,
//       },
//     ],
//   },
// ]

// const appRouter = createBrowserRouter(routes)

// export default appRouter


import { createHashRouter } from 'react-router'

import Home from '@/pages/Home'
import About from '@/pages/About'
import Contact from '@/pages/Contact'

const appRouter = createHashRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
])

export default appRouter