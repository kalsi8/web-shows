import Home from '../views/Pages/Home'

export default [
  {
    path: '/:showName?',
    component: Home,
    name: 'Home',
    id: 'home_page',
    exact: false
  }
]
