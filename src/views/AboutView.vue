<template>
  <div class="background">
    <Navbar />
    <div class="hero">
      <div class="hero-content">
        <h1>Apie</h1>
      </div>
    </div>
    <Scroll />
  </div>
  <div class="about">
    <h2>Sveiki, aš esu Laurynas Daukša! Ką norėtum apie mane sužinoti?</h2>
    <div class="items">
      <div v-for="(item, index) in aboutItems" :key="item.title" class="item">
        <button class="bar" @click="toggleItem(index)">
          <h3>{{ item.title }}</h3>
          <font-awesome-icon icon="fa-solid fa-angle-down" class="icon" :class="{ rotated: openIndex === index }" />
        </button>
        <transition @enter="onEnter" @after-enter="onAfterEnter" @leave="onLeave" @after-leave="onAfterLeave">
          <div v-if="openIndex === index" class="item-body" v-html="renderMarkdown(item.body)"></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.hero-content {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75%;
  width: 75%;
}

.hero h1 {
  font-size: 5rem;
  text-align: center;
}

.about {
  min-height: 100vh;
  background: #e2dad0;
  color: #333;
}

.about h2 {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem 0;
}

.items {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.item {
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.025));
  border: 1px solid rgba(0, 0, 0, 0.2);
  corner-shape: bevel scoop;
  border-radius: 15px;
  width: 97%;
  margin: 0 auto;
}

.bar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: 0;
  color: inherit;
  cursor: pointer;
  padding: 0.75rem 1rem;
}

.item h3 {
  font-family: 'Gloria Hallelujah', cursive;
  font-size: 1.25rem;
  margin: 0;
}

.item .icon {
  font-size: 1.5rem;
  transition: transform 0.2s ease;
}

.item .icon.rotated {
  transform: rotate(-180deg);
}

.item-body {
  overflow: hidden;
  padding: 0 1rem 1rem;
  font-size: 1.2rem;
}

.item-body :deep(p) {
  margin: 0;
}

.item-body :deep(p + p) {
  margin-top: 0.6rem;
}

.item-body :deep(a) {
  text-decoration: underline;
  color: #333;
}

.item-body :deep(ul),
.item-body :deep(ol) {
  margin: 0.6rem 0 0;
  padding-left: 1.2rem;
}

.item-body :deep(code) {
  background: rgba(255, 255, 255, 0.08);
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
  font-family: 'Gloria Hallelujah', cursive;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'
import Scroll from '@/components/Scroll.vue'
import MarkdownIt from 'markdown-it'

const md = new MarkdownIt({
  html: false,
  linkify: true,
  breaks: true,
})

md.renderer.rules.link_open = (tokens, index, options, env, self) => {
  const token = tokens[index]
  const targetIndex = token.attrIndex('target')
  const relIndex = token.attrIndex('rel')

  if (targetIndex < 0) {
    token.attrPush(['target', '_blank'])
  } else {
    token.attrs[targetIndex][1] = '_blank'
  }

  if (relIndex < 0) {
    token.attrPush(['rel', 'noopener noreferrer'])
  } else {
    token.attrs[relIndex][1] = 'noopener noreferrer'
  }

  return self.renderToken(tokens, index, options)
}

export default {
  name: 'AboutView',
  components: {
    Navbar,
    Scroll,
  },
  data() {
    return {
      openIndex: null,
      aboutItems: [
        {
          title: 'Kas aš toks?',
          body: 'Aš esu **Laurynas Daukša**, dar žinomas kaip *Skirtingas*. Gimiau Lietuvoje, tiksliau, **Klaipėdoje**. Šiuo metu esu **mokinys**, besimokantis *programavimo*, *muzikos* ir kitų įdomių dalykų! Daugiausia laiko dabar skiriu mokslams, **kūrybai** ir programavimui (technologijoms). Mokausi **Klaipėdos Eduardo Balsio menų gimnazijoje** pasirinkęs muziką, tiksliau, *fortepijoną*.',
        },
        {
          title: 'Mano Istorija',
          body: '**2010-12-01** – Mano **gimimas**. Gimiau Klaipėdoje, Lietuvoje.\n\n**2023-09-01** – Pasikeitė fortepijono mokytoja į *nuostabią mokytoją*, kuri pakeitė mano požiūrį į grojimą.\n\n**2025-09-01** – Pradėjau lankyti **kompozicijos pamokas**, kas labai man padeda išreikšti save per muziką.\n\n**2025-11-25** – Susipažinau su *nauju žmogumi*. Ji man sugražino šviesą į gyvenimą.\n\n**2025-12-12** – **Pirmasis koncertas**, kuriame grojau savo kūrinį *"Audringas Lietus"*.\n\n**2026-02-12** – Vyko **Šimtadienis**, pirmą kartą renginyje sėdėjau apsuptas *įrenginių* ir turėjau juos valdyti.',
        },
        {
          title: 'Aš ir Muzika',
          body: 'Muzika yra didelė mano gyvenimo dalis. Įstojęs į **menų gimnaziją** pradėjau mokytis **fortepijono**. Iš pradžių nesisekė, bet išliko meilė **kūrybai**. Dabar daug geriau groju ir daug daugiau *kuriu*. Mano pirmasis kūrinys – **"Audringas Lietus"**.\n\nTaip pat **dainuoju**! Esmu *Balsinės choro* **bosas**. Galimai greitu metu **sukursiu dainą**...',
        },
        {
          title: 'Aš ir Kompiuteriai',
          body: '**Kompiuteriai** ir **programavimas** yra mano kita aistra. Esu su draugu **pastatęs kompiuterį**, bet labiau domiuosi kodu. Šiuo metu programuoju su **Kotlin**, kurdamas savo *Minecraft serverį*, taip pat mokausi **HTML** ir **CSS**.',
        },
        {
          title: 'Socialiniai Tinklai',
          body: '**YouTube**: [@laurynasdauksa](https://www.youtube.com/@laurynasdauksa)\n\n**Instagram**: [@dauksalaurynas](https://www.instagram.com/dauksalaurynas)\n\n**Facebook**: [@dauksalaurynas](https://www.facebook.com/dauksalaurynas)\n\n**Discord**: `@skirtingas`',
        },
      ],
    }
  },
  methods: {
    toggleItem(index) {
      this.openIndex = this.openIndex === index ? null : index
    },
    renderMarkdown(text) {
      return md.render(text)
    },
    onEnter(el) {
      el.style.height = '0'
      el.style.opacity = '0'
      el.style.overflow = 'hidden'
      el.style.transition = 'height 260ms ease, opacity 220ms ease'
      void el.offsetHeight
      el.style.height = `${el.scrollHeight}px`
      el.style.opacity = '1'
    },
    onAfterEnter(el) {
      el.style.height = 'auto'
      el.style.overflow = 'visible'
    },
    onLeave(el) {
      el.style.height = `${el.scrollHeight}px`
      el.style.opacity = '1'
      el.style.overflow = 'hidden'
      el.style.transition = 'height 220ms ease, opacity 180ms ease'
      void el.offsetHeight
      el.style.height = '0'
      el.style.opacity = '0'
    },
    onAfterLeave(el) {
      el.style.height = ''
      el.style.opacity = ''
      el.style.transition = ''
      el.style.overflow = ''
    },
  },
}
</script>
