<template>
    <section class="player">
        <video width="100%" height="100%" class="c-block" src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4"></video>
        <div class="player-ctrls c-fix">
            <progressbar></progressbar>
            <playpause></playpause>
            <fullscreen></fullscreen>
            <volume></volume>
        </div>
    </section>
</template>

<script>
    import Playpause from './controls/Playpause'
    import Progressbar from './controls/Progressbar'
    import Fullscreen from './controls/Fullscreen'
    import Volume from './controls/Volume'

    export default {
        name: 'player',
        components: {
            Playpause,
            Progressbar,
            Fullscreen,
            Volume
        }
    }
</script>

<style src="./assets/init.less" lang="less"></style>
<style src="./assets/public.less" lang="less"></style>
<style lang="less" scoped>
    .player {
        width: 90%;
        margin: 5% auto;
        position: relative;
        overflow: hidden;

        .player-ctrls {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.8);
        }
    }
</style>
