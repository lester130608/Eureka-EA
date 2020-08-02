<template>
    <div class="svg-animated">
        <lottie :options="defaultOptions" :height="heightSvg" :width="widthSvg" v-on:animCreated="handleAnimation"/>
    </div>
</template>

<script>
    import Lottie from 'vue-lottie';


    export default {
        name: 'SvgAnimated',
        components: {
            'lottie': Lottie
        },
        props: ['svg','height','width'],
        data() {
            // console.log('SVG---> ',this.svg)
            return {
                defaultOptions: {animationData: this.svg.default,autoplay: true,renderer: 'svg'},
                animationSpeed: 1,
                heightSvg:this.height,
                widthSvg:this.width
            }
        },
        methods: {
            handleAnimation: function (anim) {
                this.anim = anim;
            },

            stop: function () {
                this.anim.stop();
            },

            play: function () {
                this.anim.play();
            },

            pause: function () {
                this.anim.pause();
            },

        }
    }
</script>
