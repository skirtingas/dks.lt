import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import AboutView from '@/views/AboutView.vue'
import CreationsView from '@/views/CreationsView.vue'
import ContactView from '@/views/ContactView.vue'

const SITE_NAME = 'Laurynas Daukša'
const DEFAULT_DESCRIPTION = 'Laurynas Daukša - muzikos kūrėjas ir programuotojas iš Klaipėdos.'
const DEFAULT_IMAGE = '/assets/background.jpg'

function upsertMeta(selector, attributes) {
  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    Object.entries(attributes.create || {}).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }

  Object.entries(attributes.set || {}).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function upsertLink(selector, attributes) {
  let element = document.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    Object.entries(attributes.create || {}).forEach(([key, value]) => {
      element.setAttribute(key, value)
    })
    document.head.appendChild(element)
  }

  Object.entries(attributes.set || {}).forEach(([key, value]) => {
    element.setAttribute(key, value)
  })
}

function buildAbsoluteUrl(path) {
  return new URL(path, window.location.origin).toString()
}

function applySeo(meta = {}, fullPath = '/') {
  const title = meta.title || SITE_NAME
  const description = meta.description || DEFAULT_DESCRIPTION
  const image = buildAbsoluteUrl(meta.ogImage || DEFAULT_IMAGE)
  const canonical = buildAbsoluteUrl(fullPath || '/')
  const robots = meta.robots || 'index,follow'
  const type = meta.ogType || 'website'
  const imageAlt = meta.ogImageAlt || `${SITE_NAME} svetainės fonas`

  document.title = title
  document.documentElement.lang = 'lt'

  upsertMeta('meta[name="description"]', {
    create: { name: 'description' },
    set: { content: description },
  })

  upsertMeta('meta[name="robots"]', {
    create: { name: 'robots' },
    set: { content: robots },
  })

  upsertMeta('meta[name="theme-color"]', {
    create: { name: 'theme-color' },
    set: { content: meta.themeColor || '#000000' },
  })

  upsertLink('link[rel="canonical"]', {
    create: { rel: 'canonical' },
    set: { href: canonical },
  })

  upsertMeta('meta[property="og:site_name"]', {
    create: { property: 'og:site_name' },
    set: { content: SITE_NAME },
  })

  upsertMeta('meta[property="og:locale"]', {
    create: { property: 'og:locale' },
    set: { content: 'lt_LT' },
  })

  upsertMeta('meta[property="og:type"]', {
    create: { property: 'og:type' },
    set: { content: type },
  })

  upsertMeta('meta[property="og:title"]', {
    create: { property: 'og:title' },
    set: { content: title },
  })

  upsertMeta('meta[property="og:description"]', {
    create: { property: 'og:description' },
    set: { content: description },
  })

  upsertMeta('meta[property="og:url"]', {
    create: { property: 'og:url' },
    set: { content: canonical },
  })

  upsertMeta('meta[property="og:image"]', {
    create: { property: 'og:image' },
    set: { content: image },
  })

  upsertMeta('meta[property="og:image:alt"]', {
    create: { property: 'og:image:alt' },
    set: { content: imageAlt },
  })

  upsertMeta('meta[name="twitter:card"]', {
    create: { name: 'twitter:card' },
    set: { content: meta.twitterCard || 'summary_large_image' },
  })

  upsertMeta('meta[name="twitter:title"]', {
    create: { name: 'twitter:title' },
    set: { content: title },
  })

  upsertMeta('meta[name="twitter:description"]', {
    create: { name: 'twitter:description' },
    set: { content: description },
  })

  upsertMeta('meta[name="twitter:image"]', {
    create: { name: 'twitter:image' },
    set: { content: image },
  })

  upsertMeta('meta[name="twitter:image:alt"]', {
    create: { name: 'twitter:image:alt' },
    set: { content: imageAlt },
  })
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Laurynas Daukša | Pradžia',
        description: 'Laurynas Daukša - muzikos kūrėjas ir programuotojas iš Klaipėdos.',
        ogImage: '/assets/background.jpg',
      },
    },
    {
      path: '/apie',
      name: 'apie',
      component: AboutView,
      meta: {
        title: 'Laurynas Daukša | Apie',
        description:
          'Sužinok daugiau apie Lauryną Daukšą: kūryba, muzika, programavimas, istorija ir socialiniai tinklai.',
        ogImage: '/assets/background.jpg',
      },
    },
    {
      path: '/kuryba',
      name: 'kuryba',
      component: CreationsView,
      meta: {
        title: 'Laurynas Daukša | Kūryba',
        description:
          'Kūriniai fortepijonui ir projektai, kuriuos kuria Laurynas Daukša. Peržiūrėk natas ir būsimas kompozicijas.',
        ogImage: '/assets/background.jpg',
      },
    },
    {
      path: '/susisiekti',
      name: 'susisiekti',
      component: ContactView,
      meta: {
        title: 'Laurynas Daukša | Susisiekti',
        description: 'Susisiek su Laurynu Daukša el. paštu arba socialiniuose tinkluose.',
        ogImage: '/assets/background.jpg',
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView,
      meta: {
        title: 'Laurynas Daukša | Nerasta',
        description: 'Puslapis nerastas. Grįžk į Lauryno Daukšos svetainę ir naršyk toliau.',
        ogImage: '/assets/background.jpg',
        robots: 'noindex,nofollow',
        ogType: 'article',
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  applySeo(to.meta, to.fullPath)

  next()
})

export default router
