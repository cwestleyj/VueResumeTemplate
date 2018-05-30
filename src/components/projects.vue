<script>
import Vue from 'vue'
</script>


<div id="projects">
    <p v-show="isNinja">invisible</p>
    <p v-show="isNinja">Here I am </p>
    <button v-on:click="isNinja = !isNinja">Toggle</button>
</div>

<script>

new Vue ({
    name:'projects',
    el:'#projects',
    data: {
        isNinja: true
    }

})

</script>
