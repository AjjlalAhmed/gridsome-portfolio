// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import "~/assets/app.css";
import "~/assets/main.css";
import Scrollbar from 'smooth-scrollbar';



export default function(Vue, { router, head, isClient }) {
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap",
  });
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Scrollbar.init(document.querySelector('#app'));
}
