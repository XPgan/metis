<template>
    <section class="video">
        <video width="100%" height="100%" src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"></video>
        <div class="video-ctrls">
            <playpause></playpause>
            <progressbar></progressbar>
            <volume></volume>
            <fullscreen></fullscreen>
        </div>
    </section>
</template>

<script>
    import Playpause from './controls/Playpause'
    import Progressbar from './controls/Progressbar'
    import Volume from './controls/Volume'
    import Fullscreen from './controls/Fullscreen'

    export default {
        name: 'app',
        components: {
            Playpause,
            Progressbar,
            Volume,
            Fullscreen
        }
    }
</script>

<style lang="less" scoped>
    .video {
        width: 80%;
        margin: 50px auto;
        position: relative;

        .video-ctrls {
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
</style>
