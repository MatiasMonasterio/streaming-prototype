<template>
    <div class="h-100 overflow-hidden">
        <div class="container">
            <h2>Generos</h2>
        </div>

        <div class="overflow-auto dark-scroll h-100">
            <div class="container row mx-auto mb-5">
                <Card param="techno" title="Techno" text="22 Artistas" :artist="false"/>
                <Card param="hard-techno" title="Hard Techno" text="22 Artistas" :artist="false"/>
                <Card param="techn-house" title="Tech House" text="22 Artistas" :artist="false"/>
                <Card param="melodic-techno" title="Melodic Techno" text="22 Artistas" :artist="false"/>
                <Card param="minimal" title="Minimal" text="22 Artistas" :artist="false"/>
                <Card param="minimal-techno" title="Minimal Techno" text="22 Artistas" :artist="false"/>
                <Card param="house" title="House" text="22 Artistas" :artist="false"/>
                <Card param="drum-bass" title="Drum & Bass" text="22 Artistas" :artist="false"/>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card'

export default {
    name: 'genres',
    components: { Card }
}
</script>