<template>
    <div class="h-100 overflow-hidden mt-1">
        <div class="container mb-4">
            <h4 class="mb-0">Black Monkey</h4>
            <span class="text-secondary">
                <small>
                    <NuxtLink to="/genres/techno" class="text-decoration-none text-secondary">Techno</NuxtLink> /
                    <NuxtLink to="/genres/tech-house" class="text-decoration-none text-secondary">Tech House</NuxtLink> /
                    <NuxtLink to="/genres/minimal-techno" class="text-decoration-none text-secondary">Minimal Techno</NuxtLink>
                </small> 
            </span>
        </div>

        <div class="container row mx-auto mb-4">
            <div class="col-md-7 px-0">
                <p class="artist-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestiae 
                    reiciendis error ducimus nemo quam eaque minus vel accusamus similique! Sed 
                    quisquam perferendis earum suscipit id! Tempora incidunt veniam quae!
                </p>
            </div>
        </div>

        <div class="container row mx-auto">
            <div class="col-md-6 px-0 d-none d-sm-block">
                <div class="mb-2">
                    <h5 class="font-weight-bold d-inline-block">Streams</h5>
                    <NuxtLink to="1/streams" class="text-secondary text-decoration-none"><small>Ver más</small></NuxtLink>
                </div>
            </div>
            <div class="col-md-6 px-0 d-flex flex-column align-items-start">
                <div class="mb-2">
                    <h5 class="font-weight-bold d-inline-block">Eventos</h5>
                    <NuxtLink to="1/events" class="text-secondary text-decoration-none"><small>Ver más</small></NuxtLink>
                </div>
            

                <NuxtLink to="/calendars/1" class="d-flex align-items-center text-decoration-none">
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
    </div>
</template>

<script>
export default {
    name: 'Artist',
    data() {
        return {
            body: ''
        }
    },
    mounted() {
        const bodyElement = document.querySelector('body')
        this.body = bodyElement.classList
        this.body.add('artist-bg')
    },
    beforeDestroy() {
        this.body.remove('artist-bg')
    }
}
</script>

<style scoped>
.artist-bg {
    background-image: url('https://firebasestorage.googleapis.com/v0/b/photofirebase-2982a.appspot.com/o/eu.jpeg?alt=media&token=37eb4708-fb72-4d38-a8b4-9f7dfe74c713');
    background-position: center;
    background-size: cover;
}
.artist-description {
    overflow: hidden;
    display: -webkit-box;
    display: -moz-box;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
}
</style>