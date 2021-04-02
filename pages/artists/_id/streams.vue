<template>
    <div class="h-100 overflow-hidden">
        <div class="container">
            <h2>Streams</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Strems',
    beforeMount() {
        const bodyElement = document.querySelector('body')
        this.body = bodyElement.classList
        this.body.add('artist-bg')
    },
    beforeDestroy() {
        this.body.remove('artist-bg')
    }
}
</script>