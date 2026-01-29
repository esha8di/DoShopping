import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue"
import ProductDetails from "../views/ProductDetails.vue"
import MyProducts from "../views/MyProducts.vue"
import Myfav from "../views/Myfav.vue"
import NoApp from "../views/NoApp.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/myproducts", component: MyProducts },
  { path: "/myfav", component: Myfav },
  { path: "/productdetails/:id", component: ProductDetails },
  { path: "/noApp", component: NoApp },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
