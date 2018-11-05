<template>
    <import src="../../common/tpl/footer.tpl"/>
    <view class="home-wrap">
        <hello :from="from" @hello="handleHello"></hello>
        <view class="click-tip" if="clicked">You click me~</view>
    </view>
    <tpl is="page-footer"/>
</template>
<script>
import Hello from '../../components/Hello';

export default {
    config: {
        title: 'Page Title'
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

.home-wrap
    padding: 100px
    height: 100vh
    box-sizing: border-box
    background: #ddd

    .click-tip
        margin-top: 100px
        padding: 20px
        text-align: center
        color: red

</style>
