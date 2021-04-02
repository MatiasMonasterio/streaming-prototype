<template>
    <div class="h-100 overflow-hidden">
        <div class="container row mx-auto mb-sm-4 mb-3">
            <form class="col-sm-6 px-0" @submit="sendParam">
                <input type="search" name="search"
                class="w-100 bg-transparent text-light input-search"
                placeholder="Buscar..."
                autocomplete="off"
                v-model="inputSearch"
                id="search">
            </form>
        </div>

        <div class="container row mx-auto mb-4 d-sm-none">
            <button class="btn btn-sm flex-grow-1 mr-1"
            @click="setGroup('artists')"
            :class="setButton('artists')">
                Artistas
            </button>
            <button class="btn btn-sm flex-grow-1 mx-1"
            @click="setGroup('streams')"
            :class="setButton('streams')">
                Streams
            </button>
            <button class="btn btn-sm flex-grow-1 ml-1"
            @click="setGroup('events')"
            :class="setButton('events')">
                Eventos
            </button>
        </div>

        <div class="container row mx-auto" :class="{'d-none': !inputSearch}">
            <div class="col-12 px-0 mb-5 overflow-hidden d-none d-sm-block" 
            :class="{'d-block': showGroup('events')}">
                <div class="mb-2 d-none d-sm-block">
                    <h5 class="font-weight-bold d-inline-block">Eventos</h5>
                    <a href="" class="text-secondary text-decoration-none"><small>Ver más</small></a>
                </div>

                <div class="d-flex flex-column flex-sm-row">
                    <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mr-5 mb-sm-0 mb-2">
                        <div class="border border-dark d-inline-block text-light">
                            <div class="bg-dark px-3"><small>Feb</small></div>
                            <div class="text-center"><small>10</small></div>
                        </div>
                        <div class="ml-2">
                            <h6 class="mb-0 text-light">Techno</h6>
                            <p class="mb-0 text-secondary">20:00 - 22:00</p>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mr-5 mb-sm-0 mb-2">
                        <div class="border border-dark d-inline-block text-light">
                            <div class="bg-dark px-3"><small>Feb</small></div>
                            <div class="text-center"><small>10</small></div>
                        </div>
                        <div class="ml-2">
                            <h6 class="mb-0 text-light">Progressive</h6>
                            <p class="mb-0 text-secondary">20:00 - 22:00</p>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mr-5 mb-sm-0 mb-2">
                        <div class="border border-dark d-inline-block text-light">
                            <div class="bg-dark px-3"><small>Feb</small></div>
                            <div class="text-center"><small>10</small></div>
                        </div>
                        <div class="ml-2">
                            <h6 class="mb-0 text-light">Techno</h6>
                            <p class="mb-0 text-secondary">20:00 - 22:00</p>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mr-5 mb-sm-0 mb-2">
                        <div class="border border-dark d-inline-block text-light">
                            <div class="bg-dark px-3"><small>Feb</small></div>
                            <div class="text-center"><small>10</small></div>
                        </div>
                        <div class="ml-2">
                            <h6 class="mb-0 text-light">Techno</h6>
                            <p class="mb-0 text-secondary">20:00 - 22:00</p>
                        </div>
                    </NuxtLink>
                </div>
            </div>

            <div class="col-sm-6 px-0 d-none d-sm-block"
            :class="{'d-block': showGroup('artists')}">
                <div class="mb-2 d-none d-sm-block">
                    <h5 class="font-weight-bold d-inline-block">Artistas</h5>
                    <a href="" class="text-secondary text-decoration-none"><small>Ver más</small></a>
                </div>

                <div class="d-flex flex-column align-items-start">
                    <NuxtLink to="/artists/1" class="text-decoration-none mb-2">
                        <div class="h-100 d-flex flex-column justify-content-center">
                            <h4 class="text-light mb-1">Black Monkeys</h4>
                            <h6 class="text-secondary">Techno</h6>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/artists/1" class="text-decoration-none mb-2">
                        <div class="h-100 d-flex flex-column justify-content-center">
                            <h4 class="text-light mb-1">M4 Hat</h4>
                            <h6 class="text-secondary">Techno</h6>
                        </div>
                    </NuxtLink>

                    <NuxtLink to="/artists/1" class="text-decoration-none mb-2">
                    <div class="h-100 d-flex flex-column justify-content-center">
                        <h4 class="text-light mb-1">Maceo Plex</h4>
                        <h6 class="text-secondary">Techno</h6>
                    </div>
                    </NuxtLink>

                    <NuxtLink to="/artists/1" class="text-decoration-none mb-2">
                        <div class="h-100 d-flex flex-column justify-content-center">
                            <h4 class="text-light mb-1">Anna</h4>
                            <h6 class="text-secondary">Techno</h6>
                        </div>
                    </NuxtLink>
                </div>
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block"
            :class="{'d-block': showGroup('streams')}">
                <div class="mb-2 d-none d-sm-block">
                    <h5 class="font-weight-bold d-inline-block">Streams</h5>
                    <a href="" class="text-secondary text-decoration-none"><small>Ver más</small></a>
                </div>

                <div>
                    DEFINIR
                </div>
            </div>
        </div>

        <div class="d-none justify-content-center align-items-center w-100 h-100" :class="{'d-flex': !inputSearch}">
            <div class="col-lg-4 col-md-5 col-sm-8 mx-auto text-center">
                <p class="text-secondary pb-5">Buscar artistas, eventos próximos y streams pasados en nuestro repertorio</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'search',
    data() {
        return {
            groupToShow: 'artists',
            inputSearch: ''
        } 
    },
    methods: {
        getParam() {
            this.inputSearch = this.$route.params.query
        },
        sendParam(e) {
            e.preventDefault()
            this.$router.replace({params:  {query: this.inputSearch}})
        },
        setGroup( group ) {
            this.groupToShow = group
        },
        showGroup( group ) {
            if( this.groupToShow === group ) return true
            else return false
        },
        setButton( group ) {
            if( this.groupToShow === group ) return 'btn-dark'
            else return 'btn-outline-dark text-light'
        }
    },
    mounted() {
        this.getParam()
    }
}
</script>

<style scoped>
.input-search {
    border: none;
    border-bottom: 2px solid #343a40;
    transition: all .2s;
}

.input-search:focus {
    border: none;
    border-bottom: 2px solid #6c757d;
    outline: none;
}
</style>