<template>
    <a :href="url" target="_blank">
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 65.6 38.7" style="enable-background:new 0 0 65.6 38.7;" xml:space="preserve"
        fill="#f8f9fa" :width="width" :height="height">
        <g>
            <path class="st0" d="M26.2,34.7c-4.6,0-9.3,0-13.9,0c-6.5,0-11.2-4-11.9-10.6c-0.5-4.9,2-10,8.5-12c0.9-0.3,1.4-0.6,1.8-1.5
                c3.5-7.4,10-11.1,17.8-10.2C35.5,1.1,41.2,6.4,42.9,14c0.3,1.4,1.3,1.8,2.3,2.3c6.6,3.4,7.6,11,2.2,16c-1.8,1.6-4,2.4-6.4,2.4
                C36.1,34.7,31.2,34.7,26.2,34.7z M25.6,30.5c5.8,0,10.5,0,15.2,0c2.4,0,4.3-1.2,5.3-3.5c0.9-2,0.2-3.8-0.9-5.4
                c-0.4-0.6-1-1.1-1.7-1.1c-0.9,0.1-0.6,1-0.7,1.5c-0.4,1.7-1.4,2.5-3,1.9c-1.6-0.5-1.6-1.8-1.2-3.2c1.5-5.6-0.8-11.3-5.8-14.3
                c-5-3-11.1-2.2-15.3,2c-2.8,2.8-2.8,3,0.3,5.1c1.4,1,3.9,1.8,2.5,4.2c-1.5,2.5-3.2,0.5-4.7-0.4c-2.4-1.5-5.6-1.4-7.9,0.2
                C5.3,19,4.1,22,4.9,24.9c0.7,2.7,2.4,4.6,5.4,5.1C15.7,31,21.2,30.1,25.6,30.5z"/>
            <path class="st0" d="M65.3,25c-0.4,4.1-1,8.2-3.4,11.7c-0.8,1.2-1.8,2.2-3.2,1.4c-1.6-0.8-1.3-2.2-0.5-3.6
                c3.6-6.5,3.5-12.9-0.2-19.3c-0.8-1.4-0.6-2.6,0.8-3.4c1.4-0.8,2.3,0.1,3,1.2C64.1,16.7,64.9,20.7,65.3,25z"/>
            <path class="st0" d="M57.8,25.1c0.3,2.9-0.8,5.6-2.2,8.3c-0.8,1.5-2,1.7-3.3,1.1c-1.3-0.6-1.3-1.8-0.6-3c2.5-4.2,2.5-8.5,0-12.7
                c-0.8-1.3-0.7-2.6,0.8-3.4c1.4-0.7,2.3,0.1,3,1.3C57.1,19.2,58,22,57.8,25.1z"/>
        </g>
        </svg>
    </a>
</template>

<script>
export default {
    name: 'Mixcloud',
    props: {
        url: String,
        width: String,
        height: String,
    }
}
</script>