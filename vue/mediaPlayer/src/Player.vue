<template>
    <section class="player">
        <video width="100%" height="100%" src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"></video>
        <div class="player-ctrls">
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
        name: 'player',
        components: {
            Playpause,
            Progressbar,
            Volume,
            Fullscreen
        }
    }
</script>

<style lang="less" scoped>
    .player {
        width: 80%;
        margin: 50px auto;
        position: relative;

        .player-ctrls {
            position: absolute;
            left: 0;
            bottom: 0;
        }
    }
</style>
