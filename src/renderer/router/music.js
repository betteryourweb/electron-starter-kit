import MusicLibrary from '@/pages/music/Library'
import utils from '@/lib/utils'
import _ from 'lodash'

const tmp = [
  MusicLibrary
]
const routes = []

_.each(tmp, route => {
  const myRoute = {}
  myRoute.name = route.name
  myRoute.path = utils.camelCaseToPath(route.name)
  myRoute.component = route
  routes.push(myRoute)
})
export default routes
