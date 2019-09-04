import Videos from "./components/Homepage/ListVideo/video";

const routes = {
    path: '/',
    component: App,
    indexRoute: { component: Home },
    childRoutes: [
      { path: 'video', component: Videos }
    ]
  }
  
  render(<Router history={history} routes={routes} />, document.body)