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

        <div class="container row flex-column mx-auto mb-5">
            <div class="col-md-7 px-0">
                <p class="artist-description mb-2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa molestiae 
                    reiciendis error ducimus nemo quam eaque minus vel accusamus similique! Sed 
                    quisquam perferendis earum suscipit id! Tempora incidunt veniam quae!
                </p>
            </div>

            <div>
                <Facebook height="1.1rem" class="mr-1" url="https://www.facebook.com/matias.m.monasterio/"/>
                <Instagram height="1.1rem" class="mr-1" url="https://www.instagram.com/matiasmonas/"/>
                <Mixcloud height="1rem" class="mr-1" url="https://www.mixcloud.com/matias-m-monasterio/"/>
                <Soundcloud height=".85rem" class="mr-1" url="https://soundcloud.com/matias-m-monasterio"/>
                <Youtube height="1rem" class="mr-1" url="https://www.youtube.com/channel/UCEK6kiMqrSp6uSdwYMffUzQ"/>
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
            

                <Calendar id="1" genre="Techno" 
                start="20:00" end="22:00" day="10" 
                month="Feb" />
            </div>
        </div>
    </div>
</template>

<script>
import Calendar from '@/components/Calendar'
import Facebook from '@/components/icons/Facebook'
import Instagram from '@/components/icons/Instagram'
import Mixcloud from '@/components/icons/Mixcloud'
import Soundcloud from '@/components/icons/Soundcloud'
import Youtube from '@/components/icons/Youtube'

export default {
    name: 'Artist',
    components: { Calendar, Facebook, Instagram, Mixcloud, Soundcloud, Youtube },
    head() {
        return {
            link: [
                { rel: 'preconnect', href: 'https://firebasestorage.googleapis.com/' },
                { rel: 'dns-prefetch', href: 'https://firebasestorage.googleapis.com/' }
            ]
        }
    },
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

<style lang="scss">
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