<template>
  <b-container id="about" >
  <h1 > Check it</h1>
      <b-card-group deck>
          <b-card class="m-3" title="Responsive Development"
                 sub-title="Pretty Great"
                 v-b-popover.hover="'Woah hover'" >
                 <!--
                 <b-card class="back">
                 <p>content</p>
		                  </b-card>
                      -->
          </b-card>
          <b-card class="m-3" title="Responsive Development"
                 sub-title="Pretty Great"
                 v-b-popover.hover="'Woah hover'" >
          </b-card>
          <b-card class="m-3" title="Wireframing"
                 sub-title="Pretty Great"
                 v-b-popover.hover="'Woah hover'" >
          </b-card>
      </b-card-group>
      <b-card-group deck>
        <b-card title="Interaction Design"
             sub-title="Pretty Great"
             v-b-popover.hover="'Woah hover'" >
             </b-card>
          </b-card>
          <b-card title="Responsive Development"
                 sub-title="Pretty Great"
                 v-b-popover.hover="'Woah hover'" >
          </b-card>
          <b-card title="Wireframing"
                 sub-title="Pretty Great"
                 v-b-popover.hover="'Woah hover'" >
          </b-card>
      </b-card-group>

  </b-container>
</template>

<script>
export default {
  name: 'about'
}
</script>
<!-- styling for the component -->
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
  transition:ease-in-out 0.7s;
}
.card:hover {

background-color:#252628;
cursor:pointer;
border-color:white;
	transform: rotateX(360deg);

}

* front pane, placed above back */
.card:hover .front {
	z-index: 2;
	/* for firefox 31 */
	transform: rotateX(0deg);
}

/* back, initially hidden pane */
.card:hover .back {
	transform: rotateX(180deg);
}

.front, .back {
	backface-visibility: hidden;
	transition: 0.6s;
	transform-style: preserve-3d;
	top: 0;
	left: 0;
}
</style>
