<template>
  <f7-app v-bind="f7params" >
      <f7-navbar>
          <Searchbar/>
      </f7-navbar>
      <!-- Your main view, should have "view-main" class -->
      <f7-view
          browser-history
          browser-history-separator="#"
          main
      ></f7-view>
  </f7-app>
</template>
<script setup>
import routes from '../js/routes.js';
import Searchbar from "@/components/Searchbar.vue";

const f7params = {
  name: 'SellerClientApp', // App name
  theme: 'aurora', // Automatic theme detection

  // App routes
  routes,
  view: {
      animate: false
  },
  // Register service worker (only on production build)
  serviceWorker: process.env.NODE_ENV === 'production' ? {
      path: '/service-worker.js'
  } : {}
};
</script>