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

                <Calendar id="1" genre="Techno" start="20:00" end="22:00" day="10" month="Feb" class="mb-2"/>
                <Calendar id="1" genre="Progressive" start="20:00" end="22:00" day="10" month="Feb" class="mb-2"/>
                <Calendar id="1" genre="Melodic Techno" start="20:00" end="22:00" day="10" month="Feb" class="mb-2"/>
            </div>

            <div class="col-sm-6 px-0 d-none d-sm-flex flex-column align-items-start" :class="{'d-flex': !comingEvent}">
                <div class="mb-2 d-none d-sm-block">
                    <h5 class="font-weight-bold d-inline-block">Eventos Pasados</h5>
                    <NuxtLink to="calendars/past" class="text-secondary text-decoration-none"><small>Ver más</small></NuxtLink>
                </div>

                <Calendar id="1" genre="Techno" start="20:00" end="22:00" day="10" month="Feb" class="mb-2"/>
                <Calendar id="1" genre="Progressive" start="20:00" end="22:00" day="10" month="Feb" class="mb-2"/>
                <Calendar id="1" genre="Melodic Techno" start="20:00" end="22:00" day="10" month="Feb" class="mb-2"/>
                <Calendar id="1" genre="Melodic Techno" start="20:00" end="22:00" day="10" month="Feb" class="mb-2"/>
            </div>
        </div>
    </div>
</template>

<script>
import Calendar from '@/components/Calendar'

export default {
    name: 'CalendarPage',
    components: { Calendar },
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