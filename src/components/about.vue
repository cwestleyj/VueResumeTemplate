<style>

#About {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.card {
    transform-style: preserve-3d;
    transition: ease-in-out 0.3s;
}

.card:hover {
    background-color: #252628;
    cursor: pointer;
    border-color: white;
}

* front pane,
placed above back */ .card:hover .front {
    z-index: 2;
    /* for firefox 31 */
    transform: rotateX(0deg);
    display: none;
}


/* back, initially hidden pane */

.card:hover .back {
    transform: rotateX(90deg);
}

.front,
.back {
    backface-visibility: hidden;
    transition: 0.6s;
    transform-style: preserve-3d;
    top: 0;
    left: 0;
}

.active {
    color: yellow;
}

</style>

<template>

<b-container id="about">
    <!-- <h1> Projects</h1>
    <p>click a card to populate projects</p> -->

    <h1> Skills</h1>
    <!-- <p>click a card to populate projects</p> -->



    <b-card-group deck>
        <b-card  class="m-3" title="Responsive Development" sub-title="Pretty Great">
        </b-card>
        <b-card class="m-3" title="Bootstrap" sub-title="3 & 4 - bootstrap vue is my new favorite">
        </b-card>
        <b-card class="m-3" title="Wireframing" sub-title="Pretty Great">
        </b-card>
    </b-card-group>
    <b-card-group deck>
        <b-card title="Interaction Design" sub-title="Pretty Great">
        </b-card>
        </b-card>
        <b-card title="WordPress Dev" sub-title="Template design, custom plugins, theme dev, you name it." >
        </b-card>
        <b-card title="Wireframing" sub-title="Pretty Great" >
        </b-card>
    </b-card-group>

</b-container>

</template>

<script>

export default {
    name: 'about',

    methods: {
        greet: function(event) {
            alert('Hello!');
        }
    }
}

</script>
