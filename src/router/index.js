import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AboutView from '@/views/AboutView.vue'
import CreationsView from '@/views/CreationsView.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Laurynas Daukša',
        description: 'Tik dar vienas paprastas žmogelis su dideliomis svajonėmis.',
        ogImage: '/assets/background.jpg',
      },
    },
    {
      path: '/apie',
      name: 'apie',
      component: AboutView,
      meta: {
        title: 'Laurynas Daukša | Apie',
        description: 'Tik dar vienas paprastas žmogelis su dideliomis svajonėmis.',
        ogImage: '/assets/background.jpg',
      },
    },
    {
      path: '/kuryba',
      name: 'kuryba',
      component: CreationsView,
      meta: {
        title: 'Laurynas Daukša | Kūryba',
        description: 'Tik dar vienas paprastas žmogelis su dideliomis svajonėmis.',
        ogImage: '/assets/background.jpg',
      },
    },
    {
      path: '/susisiekti',
      name: 'susisiekti',
      component: ContactView,
      meta: {
        title: 'Laurynas Daukša | Susisiekti',
        description: 'Tik dar vienas paprastas žmogelis su dideliomis svajonėmis.',
        ogImage: '/assets/background.jpg',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: 'Laurynas Daukša | Nerasta',
        description: 'Puslapis nerastas...',
        ogImage: '/assets/background.jpg',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  // Update title
  document.title = to.meta.title || 'Laurynas Daukša'

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]')
  if (!metaDescription) {
    metaDescription = document.createElement('meta')
    metaDescription.setAttribute('name', 'description')
    document.head.appendChild(metaDescription)
  }
  metaDescription.setAttribute('content', to.meta.description || '')

  // Update OG title
  let ogTitle = document.querySelector('meta[property="og:title"]')
  if (!ogTitle) {
    ogTitle = document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    document.head.appendChild(ogTitle)
  }
  ogTitle.setAttribute('content', to.meta.title || 'Laurynas Daukša')

  // Update OG description
  let ogDescription = document.querySelector('meta[property="og:description"]')
  if (!ogDescription) {
    ogDescription = document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    document.head.appendChild(ogDescription)
  }
  ogDescription.setAttribute('content', to.meta.description || '')

  // Update OG URL
  let ogUrl = document.querySelector('meta[property="og:url"]')
  if (!ogUrl) {
    ogUrl = document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    document.head.appendChild(ogUrl)
  }
  ogUrl.setAttribute('content', window.location.origin + to.path)

  // Update OG Image
  let ogImage = document.querySelector('meta[property="og:image"]')
  if (!ogImage) {
    ogImage = document.createElement('meta')
    ogImage.setAttribute('property', 'og:image')
    document.head.appendChild(ogImage)
  }
  ogImage.setAttribute('content', window.location.origin + (to.meta.ogImage || '/assets/bg.png'))

  next()
})

export default router
