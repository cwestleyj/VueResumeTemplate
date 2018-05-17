<template>
  <div class="hello">
  <b-jumbotron >

   <b-row align-h="center">
   <b-col md-8 sm-10 lg-12 xl-12>
   <h1>Clinton Jones UX Developer for hire</h1>
   </b-col>
   </b-row>

      <b-row align-v="center">
        <b-col sm-6>
        <b-img height="200" rounded="circle"  src="static/headshotforweb.jpg" alt="Media Aside" />
        </b-col>
        <b-col sm-6 >
        Hey There. My name is Clinton. I tell stories with web design.
        </b-col>
      </b-row>
  </b-jumbotron>
  <h1> {{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'If you see this you are not totally dumb'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
