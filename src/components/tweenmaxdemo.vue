/* eslint-disable */
<style>

#tweenmax {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

</style>

<template>

<div id="tweenMaxDemo">
    <input v-model.number="number" type="number" step="20">
    <p>{{ animatedNumber }}</p>
</div>

</template>

<script>

export default {
    data: function() {
        return {
            number: 0,
            tweenedNumber: 0
        }
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    watch: {
        number: function(newValue) {
            TweenLite.to(this.$data, 0.5, {
                tweenedNumber: newValue
            });
        }
    }
};

</script>
