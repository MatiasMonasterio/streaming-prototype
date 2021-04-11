<template>
   <nav class="fixed-top w-100 pt-4 pb-2" id="navButton">
       <div class="container">
           <button class="navbar__button bg-transparent px-0 border-0 text-light z-index" @click="navbarToggle">
                <svg xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-filter fadeInUp animated"
                :class="{'d-none': showNavbar }"
                viewBox="0 0 16 16">
                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-x fadeInUp animated"
                :class="{'d-none': !showNavbar }"
                viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </button>
       </div>

       <div class="navbar-menu position-absolute w-100 vh-100 top-0 no-index pb-2 fadeIn animated" id="navContent" :class="{'d-none': !showNavbar}">
           <div class="container mt-2 d-flex flex-wrap flex-column flex-sm-row justify-content-start h-100">
               <ul class="list-inline d-flex flex-column mb-sm-0 mb-4">
                    <h5 class="mb-0 mb-sm-1"><li class="mr-auto" @click="navbarToggle"><NuxtLink to="/" class="text-light text-decoration-none py-1 d-inline-block">Inicio</NuxtLink></li></h5>
                    <h5 class="mb-0 mb-sm-1"><li class="mr-auto" @click="navbarToggle"><NuxtLink to="/artists" class="text-light text-decoration-none py-1 d-inline-block">Artistas</NuxtLink></li></h5>
                    <h5 class="mb-0 mb-sm-1"><li class="mr-auto" @click="navbarToggle"><NuxtLink to="/genres" class="text-light text-decoration-none py-1 d-inline-block">Generos</NuxtLink></li></h5>
                    <h5 class="mb-0 mb-sm-1"><li class="mr-auto" @click="navbarToggle"><NuxtLink to="/calendars" class="text-light text-decoration-none py-1 d-inline-block">Calendario</NuxtLink></li></h5>
                </ul>

                <ul class="w-100 ml-sm-auto w-sm-auto mb-auto list-inline d-flex flex-column">
                    <h6 class="font-weight-normal"><li><NuxtLink @click.native="navbarToggle" to="/search" class="text-secondary text-decoration-none">Buscar</NuxtLink></li></h6>
                    <h6 class="font-weight-normal"><li><NuxtLink @click.native="navbarToggle" to="/login" class="text-secondary text-decoration-none">Login</NuxtLink></li></h6>
                </ul>

                <ul class="list-inline w-100 mt-auto d-flex justify-content-end">
                    <li class="mr-2">
                        <Facebook height="1.1rem"
                        url="https://www.facebook.com/matias.m.monasterio/"/>
                    </li>
                    <li class="mr-2">
                        <Instagram height="1.1rem"
                        url="https://www.instagram.com/matiasmonas/"/>
                    </li>
                    <li class="mr-2">
                        <Mixcloud height="1.1rem"
                        url="https://www.mixcloud.com/matias-m-monasterio/"/>
                    </li>
                </ul>
           </div>
       </div>
    </nav> 
</template>

<script>
import Vue from 'vue'
import Facebook from '@/components/icons/Facebook'
import Instagram from '@/components/icons/Instagram'
import Mixcloud from '@/components/icons/Mixcloud'

export default Vue.extend({
    name: 'Navbar',
    components: { Facebook, Instagram, Mixcloud },
    data() {
        return {
            showNavbar: false
        }
    },
    methods: {
        getPaddingTop() {
            const navButon = document.querySelector('#navButton')
            const navContent = document.querySelector('#navContent')
            // const playerContent = document.querySelector('#player') as HTMLElement

            const paddingTop = navButon?.clientHeight
            // const paddingBottom = playerContent?.clientHeight

            navContent.style.paddingTop = `${ paddingTop }px`
            // navContent.style.paddingBottom = `${ paddingBottom }px`
        },
        navbarToggle() {
            this.showNavbar = !this.showNavbar
        },
        detectEventBackPage() {
            window.addEventListener('popstate', () => {
                if( this.showNavbar === true ) {
                    this.navbarToggle()
                    // history.go(1)
                    return
                }
            })
        }
    },
    mounted() {
        this.getPaddingTop()
        this.detectEventBackPage()
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
    background-color: #1A1C1E;
}
.navbar__button {
    margin-right: -1rem;
}
</style>