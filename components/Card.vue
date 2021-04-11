<template>
    <NuxtLink :to="returnPath" class="col-lg-2 col-md-3 col-sm-4 my-sm-5 px-sm-3 embed-responsive text-sm-center text-decoration-none">
        <div class="card-main py-3 px-sm-2 h-100 d-flex flex-column justify-content-center">
            <h4 class="text-light mb-1">{{ title }}</h4>
            <h6 class="text-secondary">{{ text }}</h6>
        </div>
    </NuxtLink>
</template>

<script>
export default {
    name: 'Card',
    props: {
        param: String,
        title: String,
        text: String,
        artist: { 
            type: Boolean,
            default: true
        }
    },
    computed: {
        returnPath() {
            if( this.artist ) return `/artists/${ this.param }`
            else return `/genres/${ this.param }`
        }
    }
}
</script>

<style lang="scss" scoped>
.card-main {
    &::before {
        content: '';
        position: absolute;
        height: 0rem;
        width: 0rem;
        right: 16px;
        bottom: 0;
        border-right: 2px solid rgba(128, 128, 128, 0);
        border-bottom: 2px solid rgba(128, 128, 128, 0);
        transition: all .2s;
    }

    &::after {
        content: '';
        position: absolute;
        height: 0rem;
        width: 0rem;
        left: 16px;
        top: 0;
        border-left: 2px solid rgba(128, 128, 128, 0);
        border-top: 2px solid rgba(128, 128, 128, 0);
        transition: all .2s;
    }
}

@media ( min-width: 576px ) {
    .card-main:hover::after {
        height: 6.5rem;
        width: 6.5rem;
        border-color:  #6c757d;
    }

    .card-main:hover::before {
        height: 6.5rem;
        width: 6.5rem;
        border-color: #6c757d;
    }
}
</style>