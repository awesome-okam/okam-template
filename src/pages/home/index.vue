<template>
    <view class="home-wrap">
        <import src="../../common/tpl/footer.tpl"/>
        <hello :from="from" @hello="handleHello"></hello>
        <view class="click-tip" if="clicked">You click me~</view>
        <tpl is="page-footer"/>
    </view>
</template>
<script>
import Hello from '../../components/Hello';

export default {
    config: {
        title: 'Page Title',

        /* eslint-disable fecs-camelcase */
        _quickEnv: {
            data: 'private'
        }
    },

    components: {
        Hello
    },

    data: {
        btnText: 'Hello',
        clicked: false,
        from: 'HomePage'
    },

    methods: {
        handleHello(e) {
            this.clicked = true;
            this.btnText = 'You clicked';
            this.$api.showToast({
                title: 'Received Hello',
                duration: 3000
            });
        }
    }
};
</script>
<style lang="stylus">
@require '../../common/css/variable.styl'
@require '../../common/css/mixin.styl'

@media not quick
    .home-wrap
        height: 100vh
        padding: 100px
        box-sizing: border-box
        background-color: #ddd

        .click-tip
            margin-top: 100px
            padding: 20px
            text-align: center
            color: #ff0000

@media quick
    .home-wrap
        padding: 100px
        background-color: #ddd
        flex-direction: column
        align-items: center

        .click-tip
            margin-top: 100px
            padding: 20px
            text-align: center
            >text
                color: #ff0000
</style>
