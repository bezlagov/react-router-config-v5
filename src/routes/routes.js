import { AboutPage, ContactPage, ErrorPage, HomePage, ShopPage } from "../Views/views";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/about",
    component: AboutPage
  },
  {
    path: "/shop",
    component: ShopPage
  },
  {
    path: "/contacts",
    component: ContactPage
  },
  {
    path: "*",
    component: ErrorPage
  },
];

