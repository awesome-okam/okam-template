<template>
    <import src="../../common/tpl/footer.tpl"/>
    <view class="home-wrap">
        <button plain class="hello-btn" @click="onHello">{{btnText}}</button>
        <view class="click-tip" if="clicked">You click me~</view>
    </view>
    <tpl is="page-footer"/>
</template>
<script>

export default {
    config: {
        title: 'Page Title'
    },

    data: {
        btnText: 'Hello',
        clicked: false
    },

    methods: {

        onHello() {
            this.$api.showToast({
                title: 'Hello',
                duration: 3000
            });

            this.clicked = true;
            this.btnText = 'You clicked';
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

    .hello-btn
        width: 846px
        height: 148px
        line-height: @height
        background: #fff
        text-align: center
        border-radius: 120px
        border: none

    .click-tip
        margin-top: 100px
        padding: 20px
        text-align: center
        color: red

</style>
