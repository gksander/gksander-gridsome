// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";
import GksSectionTitle from "~/components/GksSectionTitle";
import "./styles/global.css";
require("typeface-raleway");

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("GksSectionTitle", GksSectionTitle);
}
