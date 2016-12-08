<template>
    <section class="player">
        <video
            ref="video"
            width="100%" height="100%" class="c-block"
            src="http://nettuts.s3.amazonaws.com/763_sammyJSIntro/trailer_test.mp4">
        </video>
        <div class="player-ctrls c-fix">
            <progressbar></progressbar>
            <playpause
                @play="play"
                @pause="pause">
            </playpause>
            <fullscreen
                @requestFull="requestFull"
                @cancelFull="cancelFull">
            </fullscreen>
            <volume
                @deVolume="deVolume"
                @inVolume="inVolume">
            </volume>
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
        },
        methods: {
            play () {
                this.$refs.video.play()
            },
            pause () {
                this.$refs.video.pause()
            },
            deVolume () {
                var video = this.$refs.video
                if (video.volume < 0.2) {
                    video.volume = 0
                } else {
                    video.volume -= 0.1
                }
            },
            inVolume () {
                var video = this.$refs.video
                if (video.volume > 0.8) {
                    video.volume = 1
                } else {
                    video.volume += 0.1
                }
            },
            requestFull () {
                console.log('requestFull')
            },
            cancelFull () {
                console.log('cancelFull')
            }
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
