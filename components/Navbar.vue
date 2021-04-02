<template>
   <nav class="fixed-top w-100 pt-4 pb-2" id="navButton">
       <div class="container">
           <button class="navbar__button bg-transparent border-0 text-secondary z-index" @click="navbarToggle">
                <svg xmlns="http://www.w3.org/2000/svg"
                width="2.5rem"
                height="2.5rem"
                fill="currentColor"
                class="bi bi-filter"
                viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
       </div>

       <div class="navbar-menu position-absolute w-100 vh-100 top-0 no-index pb-2" id="navContent" :class="{'d-none': !showNavbar}">
           <div class="container mt-2 d-flex flex-wrap flex-column flex-sm-row justify-content-start h-100">
               <ul class="list-inline d-flex flex-column mb-sm-0 mb-4">
                    <h5><li class="mr-auto" @click="navbarToggle"><NuxtLink to="/" class="text-light text-decoration-none py-1 d-inline-block">Inicio</NuxtLink></li></h5>
                    <h5><li class="mr-auto" @click="navbarToggle"><NuxtLink to="/artists" class="text-light text-decoration-none py-1 d-inline-block">Artistas</NuxtLink></li></h5>
                    <h5><li class="mr-auto" @click="navbarToggle"><NuxtLink to="/genres" class="text-light text-decoration-none py-1 d-inline-block">Generos</NuxtLink></li></h5>
                    <h5><li class="mr-auto" @click="navbarToggle"><NuxtLink to="/calendars" class="text-light text-decoration-none py-1 d-inline-block">Calendario</NuxtLink></li></h5>
                </ul>

                <ul class="w-100 ml-sm-auto w-sm-auto mb-auto list-inline d-flex flex-column">
                    <h6 class="font-weight-normal"><li @click="navbarToggle"><NuxtLink to="/search" class="text-secondary text-decoration-none">Buscar</NuxtLink></li></h6>
                    <h6 class="font-weight-normal"><li @click="navbarToggle"><NuxtLink to="/login" class="text-secondary text-decoration-none">Login</NuxtLink></li></h6>
                </ul>

                <ul class="list-inline w-100 mt-auto d-flex justify-content-end">
                    <li @click="navbarToggle"><NuxtLink to="/search" class="text-light text-decoration-none p-2">Facebook</NuxtLink></li>
                    <li @click="navbarToggle"><NuxtLink to="/login" class="text-light text-decoration-none p-2">Instagram</NuxtLink></li>
                    <li @click="navbarToggle"><NuxtLink to="/login" class="text-light text-decoration-none p-2">Mixcloud</NuxtLink></li>
                </ul>
           </div>
       </div>
    </nav> 
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'Navbar',
    data() {
        return {
            showNavbar: false
        }
    },
    methods: {
        getPaddingTop() {
            const navButon = document.querySelector('#navButton') as HTMLElement
            const navContent = document.querySelector('#navContent') as HTMLElement
            // const playerContent = document.querySelector('#player') as HTMLElement

            const paddingTop = navButon?.clientHeight
            // const paddingBottom = playerContent?.clientHeight

            navContent.style.paddingTop = `${ paddingTop }px`
            // navContent.style.paddingBottom = `${ paddingBottom }px`
        },
        navbarToggle() {
            this.showNavbar = !this.showNavbar
        }
    },
    mounted() {
        this.getPaddingTop()
    }
})
</script>

<style>
@media (min-width: 576px) {
    .w-sm-auto {
        width: auto !important;
    }
}
.navbar-menu {
    background-color: #1b1b1b;
}
</style>