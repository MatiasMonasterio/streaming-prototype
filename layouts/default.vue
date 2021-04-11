<template>
  <div>
    <div :class="{ 'main-content': bgNoIndex }">
      <Navbar />
      <div class="position-fixed top-0 w-100 text-light h-100" id="mainContainer">
          <Nuxt />
      </div>
      <Player />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navbar from '@/components/Navbar'
import Player from '@/components/Player'

export default {
  name: 'Layout',
  components: {
    Player,
    Navbar
  },
  methods: {
    eventsResize() {
      window.addEventListener('resize', () => {
        this.defineMarginContainer()
      })
    },
    defineMarginContainer() {
      const navButon = document.querySelector('#navButton')
      const mainContainer = document.querySelector('#mainContainer')
      const playerContent = document.querySelector('#player')

      const marginTop = navButon?.clientHeight
      const marginBottom = playerContent?.clientHeight
      const viewportHieght = window.innerHeight

      mainContainer.style.marginTop = `${ marginTop }px`
      mainContainer.style.marginBottom = `${ marginBottom }px`
      mainContainer.style.maxHeight = `${ viewportHieght - (marginTop + marginBottom) }px`
    }
  },
  computed: {
    ...mapState(['bgNoIndex'])
  },
  beforeMount() {
    this.defineMarginContainer()
  },
  mounted() {
    this.eventsResize();
  }
}
</script>

<style lang="scss">

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

body {
  font-family: 'Inter', sans-serif;
  background-color: #1A1C1E;
  background-image: url('../static/img/logo.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10rem;
  width: 100%;
  height: 100vh;
}

.top-0 {
    top: 0;
}
.z-index {
    z-index: 1;
}
.no-index {
    z-index: -1;
}
.z-index-2{
  z-index: 2;
}

.main-content {
  background-color: rgba(26, 28, 30, .9);
  width: 100%;
  height: 100vh;
}

.visual {
  background-image: url('../static/img/visuals/ezgif.com-gif-maker(2).webp');
  background-size: cover;
}

@media (min-width: 1400px) {
  .container {
    max-width: 1400px;
  }
}

.dark-scroll {
  &::-webkit-scrollbar {
    width: 2px;
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6c757d;
  }
}
</style>
