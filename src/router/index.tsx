import MainView from 'MainView';
import Home from 'pages/Home';
import Ebanx from 'pages/projects/ebanx/Ebanx';
import Catho from 'pages/projects/catho/Catho';

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

const catho = new Route({
  getParentRoute: () => rootRoute,
  beforeLoad: () => ({
    title: 'Redesigning the mobile app experience',
  }),
  path: '/project/catho',
  component: Catho,
});

const routeTree = rootRoute.addChildren([indexRoute, ebanx, catho]);

const router = new Router({
  routeTree,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
