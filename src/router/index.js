import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue"
import ProductDetails from "../views/ProductDetails.vue"
import MyProducts from "../views/MyProducts.vue"

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/myproducts", component: MyProducts },
  { path: "/productdetails/:id", component: ProductDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
