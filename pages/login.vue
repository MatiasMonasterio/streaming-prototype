<template>
    <div class="container d-flex h-100 justify-content-center align-items-center text-center">
        <div class="col-md-6 col-lg-4 col-10">
            <img src="../static/img/logo.svg" alt="logo" class="mx-auto mb-5 w-50">
            <p class="mb-5">It is a long established fact that a reader will be distracted</p>

            <button class="btn w-100 my-1 btn-dark">Iniciar con Google</button>
            <button class="btn w-100 my-1 btn-outline-dark text-light">Iniciar con Facebook</button>

            <p class="text-secondary">
                <small>It is a long established fact that a reader will be distracted</small>
            </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'Login',
    methods: {
        ...mapActions(['inLoginPageAction'])
    },
    mounted() {
        this.inLoginPageAction( true )
        const bodyElement = document.querySelector('body')
        this.body = bodyElement.classList
        this.body.add('login-bg')
    },
    beforeDestroy() {
        this.inLoginPageAction( false )
        this.body.remove('login-bg')
    }
}
</script>

<style>
.login-bg {
    background-image: none;
}
</style>