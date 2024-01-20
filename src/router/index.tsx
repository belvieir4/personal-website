import MainView from 'MainView';
import Home from 'pages/Home';
import Ebanx from 'pages/projects/ebanx/Ebanx';
import Project01 from 'pages/projects/Project01';

import { Router, Route, RootRoute } from '@tanstack/react-router';

const rootRoute = new RootRoute({
  component: MainView,
});

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const ebanx = new Route({
  getParentRoute: () => rootRoute,
  beforeLoad: () => ({
    title: 'Automated Refund Status Flow',
  }),
  path: '/project/ebanx',
  component: Ebanx,
});

const routeTree = rootRoute.addChildren([indexRoute, ebanx]);

const router = new Router({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
