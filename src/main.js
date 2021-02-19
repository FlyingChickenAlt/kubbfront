// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import DefaultLayout from '~/layouts/Default.vue'



import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  library.add(faUserSecret, faEye, faEyeSlash)
  Vue.component('font-awesome-icon', FontAwesomeIcon)     


}