<template>
    <section
        ref="player"
        :class="fullscreen"
        class="player">
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
        data () {
            return {
                player: null,
                video: null,
                fullscreen: ''
            }
        },
        mounted () {
            this.player = this.$refs.player
            this.video = this.$refs.video
        },
        methods: {
            play () {
                this.video.play()
            },
            pause () {
                this.video.pause()
            },
            deVolume () {
                if (this.video.volume < 0.1) {
                    this.video.volume = 0
                } else {
                    this.video.volume -= 0.1
                }
            },
            inVolume () {
                if (this.video.volume > 0.9) {
                    this.video.volume = 1
                } else {
                    this.video.volume += 0.1
                }
            },
            requestFull () {
                this.fullscreen = 'fullscreen'
            },
            cancelFull () {
                this.fullscreen = ''
            }
        }
    }
</script>

<style src="./assets/init.less" lang="less"></style>
<style src="./assets/public.less" lang="less"></style>
<style lang="less" scoped>
    .player {
        width: 60%;
        margin: 5% auto;
        box-shadow: 2px 2px 5px #ccc;
        position: relative;
        overflow: hidden;

        .player-ctrls {
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            background-color: rgba(255, 255, 255, 0.8);
        }
        &.fullscreen {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            background-color: #000;
        }
    }
</style>
