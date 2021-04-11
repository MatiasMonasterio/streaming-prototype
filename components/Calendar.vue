<template>
    <div>
        <NuxtLink :to="`/calendars/${ id }`" class="d-flex align-items-center text-decoration-none">
            <div class="border border-dark d-inline-block text-light">
                <div class="bg-dark px-3"><small>{{ month }}</small></div>
                <div class="text-center"><small>{{ day }}</small></div>
            </div>
            <div class="ml-2 d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-light">{{ genre }}</h6>
                <p class="mb-0 text-secondary">{{ start }} - {{ end }}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<script>
export default {
    name: 'CalendarComponent',
    props: {
        id: String,
        genre: String,
        start: String,
        end: String,
        day: String,
        month: String
    }
}
</script>