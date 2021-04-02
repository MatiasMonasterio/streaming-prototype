<template>
    <div class="w-100 fixed-bottom py-3 z-index" id="player" :class="{'d-none': loginPage}">
        <div class="container row mx-auto justify-content-start">
            <button class="bg-dark border-0 rounded-circle p-2 text-secondary"
            @click="playToggle">
                <svg xmlns="http://www.w3.org/2000/svg"
                width="2rem"
                height="2rem"
                fill="currentColor"
                class="bi bi-play-fill"
                viewBox="0 0 16 16"
                :class="{'d-none': play}">
                    <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" 
                width="2rem" 
                height="2rem" 
                fill="currentColor" 
                class="bi bi-pause" 
                viewBox="0 0 16 16"
                :class="{'d-none': !play}">
                    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                </svg>
            </button>

            <div class="text-left mx-2 d-flex flex-column justify-content-center">
                <NuxtLink to="/artists/black-monkey" class="text-decoration-none text-light">Black Monkeys</NuxtLink>
                <small><NuxtLink to="/genres/techno" class="text-decoration-none text-secondary">Techno</NuxtLink></small>
            </div>
        </div>

        <audio src="/audio/test-audio.mp3" type="audio/mpeg" controls loop id="audio"
        @play="playerToggle" @pause="playerToggle" class="d-none">
        </audio>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Player',
    data() {
        return {
            play: false,
        }
    },
    computed: {
        ...mapState(['loginPage'])
    },
    methods: {
        playerToggle() {
            const bodyElement = document.querySelector('body')
            const bodyClass = bodyElement.classList
            this.play = !this.play

            if( this.play ) bodyClass.add('visual')
            else bodyClass.remove('visual')
        },
        playToggle() {
            if( audio.paused ) audio.play()
            else audio.pause()
        },
        baseAssets( filePath ) {
            const baseUrl = this.$router
            console.log( window )
            return `${ baseUrl }${ filePath }`
        }
    }
}
</script>