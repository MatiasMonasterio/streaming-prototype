<template>
    <div class="h-100 overflow-hidden">
        <div class="container">
            <h2 class="mb-sm-5 mb-1">Calendario</h2>
        </div>

        <div class="container row mx-auto">
            <div class="row mx-auto w-100 mb-4 d-sm-none">
                <button class="mr-1 flex-grow-1 btn btn-sm py-2"
                @click="toggleEvents(true)"
                :class="buttonClass( comingEvent )">
                    Próximos
                </button>
                <button class="ml-1 flex-grow-1 btn btn-sm py-2"
                @click="toggleEvents(false)"
                :class="buttonClass( !comingEvent )">
                    Pasados
                </button>
            </div>

            <div class="col-sm-6 px-0 d-none d-sm-flex flex-column align-items-start" :class="{'d-flex': comingEvent}">
                <div class="mb-2 d-none d-sm-block">
                    <h5 class="font-weight-bold d-inline-block">Eventos Próximos</h5>
                    <NuxtLink to="calendars/upcoming" class="text-secondary text-decoration-none"><small>Ver más</small></NuxtLink>
                </div>

                <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mb-2">
                    <div class="border border-dark d-inline-block text-light">
                        <div class="bg-dark px-3"><small>Feb</small></div>
                        <div class="text-center"><small>10</small></div>
                    </div>
                    <div class="ml-2">
                        <h6 class="mb-0 text-light">Techno</h6>
                        <p class="mb-0 text-secondary">20:00 - 22:00</p>
                    </div>
                </NuxtLink>

                <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mb-2">
                    <div class="border border-dark d-inline-block text-light">
                        <div class="bg-dark px-3"><small>Feb</small></div>
                        <div class="text-center"><small>10</small></div>
                    </div>
                    <div class="ml-2">
                        <h6 class="mb-0 text-light">Progressive</h6>
                        <p class="mb-0 text-secondary">20:00 - 22:00</p>
                    </div>
                </NuxtLink>

                <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mb-2">
                    <div class="border border-dark d-inline-block text-light">
                        <div class="bg-dark px-3"><small>Feb</small></div>
                        <div class="text-center"><small>10</small></div>
                    </div>
                    <div class="ml-2">
                        <h6 class="mb-0 text-light">Melodic Techno</h6>
                        <p class="mb-0 text-secondary">20:00 - 22:00</p>
                    </div>
                </NuxtLink>
            </div>
            <div class="col-sm-6 px-0 d-none d-sm-flex flex-column align-items-start" :class="{'d-flex': !comingEvent}">
                <div class="mb-2 d-none d-sm-block">
                    <h5 class="font-weight-bold d-inline-block">Eventos Pasados</h5>
                    <NuxtLink to="calendars/past" class="text-secondary text-decoration-none"><small>Ver más</small></NuxtLink>
                </div>

                <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mb-2">
                    <div class="border border-dark d-inline-block text-light">
                        <div class="bg-dark px-3"><small>Feb</small></div>
                        <div class="text-center"><small>10</small></div>
                    </div>
                    <div class="ml-2">
                        <h6 class="mb-0 text-light">Techno</h6>
                        <p class="mb-0 text-secondary">20:00 - 22:00</p>
                    </div>
                </NuxtLink>

                <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mb-2">
                    <div class="border border-dark d-inline-block text-light">
                        <div class="bg-dark px-3"><small>Feb</small></div>
                        <div class="text-center"><small>10</small></div>
                    </div>
                    <div class="ml-2">
                        <h6 class="mb-0 text-light">Progressive</h6>
                        <p class="mb-0 text-secondary">20:00 - 22:00</p>
                    </div>
                </NuxtLink>

                <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mb-2">
                    <div class="border border-dark d-inline-block text-light">
                        <div class="bg-dark px-3"><small>Feb</small></div>
                        <div class="text-center"><small>10</small></div>
                    </div>
                    <div class="ml-2">
                        <h6 class="mb-0 text-light">Melodic Techno</h6>
                        <p class="mb-0 text-secondary">20:00 - 22:00</p>
                    </div>
                </NuxtLink>

                <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none mb-2">
                    <div class="border border-dark d-inline-block text-light">
                        <div class="bg-dark px-3"><small>Feb</small></div>
                        <div class="text-center"><small>10</small></div>
                    </div>
                    <div class="ml-2">
                        <h6 class="mb-0 text-light">Melodic Techno</h6>
                        <p class="mb-0 text-secondary">20:00 - 22:00</p>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Calendar',
    data() {
        return {
            comingEvent: true
        }
    },
    methods: {
        toggleEvents( show ) {
            this.comingEvent = show
        },
        buttonClass( selected ) {
            if( selected ) return 'btn-dark'
            else return 'btn-outline-dark text-light'
        }
    }
}
</script>