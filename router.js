import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// call api --> returl all list domain
import FakeAPI from './api/fake-api';
const api = new FakeAPI();

let vm = '';
if (process.client) {
  const host = window.location.hostname;
  switch (host) {
    case 'nuxtdemo.epmt.com.vn':
      vm = 'TH1024'
      break;
    case 'nuxtdemo1.epmt.com.vn':
      vm = 'TH1025'
      break
    default:
      vm = 'TH1025'
      break
  }
}

console.log(api.getCodeWeb());
const ds = api.getCodeWeb();
console.log(ds);
const data_api = {
  templateId: ds,
  domainName: "vnworkd01"
}

export function createRouter(ssrContext, createDefaultRouter, routerOptions) {
  const options = routerOptions ? routerOptions : createDefaultRouter(ssrContext).options
  let routesDirectory = data_api.templateId
  let newRoutes = options.routes

  function isUnderDirectory(route, directory) {
    const path = route.path
    return path === '/' + directory || path.startsWith('/' + directory + '/')
  }

  if (routesDirectory) {
    newRoutes = options.routes
      .filter((route) => {
        return isUnderDirectory(route, routesDirectory) // remove routes from other directories
      })
      .map((route) => {
        if (isUnderDirectory(route, routesDirectory)) { // remove directory from path and name
          return {
            ...route,
            path: route.path.substr(routesDirectory.length + 7) || '/',
            name: route.name.substr(routesDirectory.length + 7) || 'index'
          }
        }
        return route
      })
  }

  return new Router({
    ...options,
    routes: newRoutes
  })
}