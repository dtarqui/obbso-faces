import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/employee/:employ",
    name: "Employee",
    component: () => import("../views/Employee.vue"),
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      } else {
        next("/login");
      }
    },
    props: true,
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("../views/Account.vue"),
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue"),
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/clients",
    name: "Clients",
    component: () => import("../views/Clients.vue"),
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/discounts",
    name: "Discounts",
    component: () => import("../views/Discounts.vue"),
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/apps",
    name: "Apps",
    component: () => import("../views/IntegratedApps.vue"),
    beforeEnter(to, from, next) {
      if (store.getters.isLoggedIn) {
        next();
        return;
      } else {
        next("/login");
      }
    },
  },
  {
    path: "/login/:error?",
    name: "Login",
    component: () => import("../views/Login.vue"),
    props: true,
    beforeEnter(to, from, next) {
      if (!store.getters.isLoggedIn) {
        next();
        return;
      }
      next("/");
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
    // beforeEnter(to, from, next) {
    //   if (store.state.user) {
    //     next();
    //   } else {
    //     next("/login");
    //   }
    // },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  saveScrollPosition: true,
});

export default router;
