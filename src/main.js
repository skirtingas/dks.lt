import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './global.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faBrain, faArrowDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(faEnvelope, faBrain, faFacebook, faInstagram, faYoutube, faArrowDown, faAngleDown)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)
app.use(router)
app.mount('#app')
