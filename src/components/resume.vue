<style scoped>

h1,
h2 {
    font-weight: normal;
}

h5 {
  text-align: center;
  margin-bottom:0;
  color:white;
  font-weight: bold;
  border-bottom: 3px solid white;
}

.vid {}

ul {

    padding: 0;
    color:white;
    display:flex;
    flex-direction: column;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.sideBar {
    background-color:#35353a;
    height: 100%;
}

.content {
    height: 100%;
}
.top {color:white;text-align:center;}

.collapse {
  visibility: hidden;
}
.collapse.show {
  visibility: visible;
  display: block;
}
.collapsing {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition-property: height, visibility;
  transition-property: height, visibility;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
  -webkit-transition-timing-function: ease;
  transition-timing-function: ease;
}
.collapsing.width {
  -webkit-transition-property: width, visibility;
  transition-property: width, visibility;
  width: 0;
  height: auto;
}
hr {
  color:white;
  background-color:white;

}


@media screen and (max-width: 992px) {
    h5 {

        text-align: left;
        padding-left:0.3em;
    }
}
/* Small Devices, Tablets */
@media only screen and (max-width : 768px) {

}

/* Extra Small Devices, Phones */
@media only screen and (max-width : 480px) {

}

/* Custom, iPhone Retina */
@media only screen and (max-width : 320px) {

}

</style>

<template>

<!-- container div tag -->
<div class="hello">

    <b-jumbotron class="mb-0 mx-auto">
        <b-row>
            <b-col class="text-center">
                <h1>Clinton Jones UX Developer for hire</h1>
            </b-col>
        </b-row>
        <b-row>
            <b-col class="align-middle " lg="12">
                <b-img class="rounded mx-auto d-block" height="200" rounded="circle" src="static/headshotforweb.jpg" alt="Media Aside" />
                <section class="text-center mt-2">
                    <p>Hey There. My name is Clinton. tell stories with web design. </p>
                    <b-btn>Veteran</b-btn>
                    <b-btn>UX/UI front end dev</b-btn>
                    <b-btn>best friends with all dogs</b-btn>
                </section>
            </b-col>
        </b-row>
    </b-jumbotron>

    <!-- fluid container start -->
    <b-container fluid class="content">
        <!-- row right begin -->

        <b-row>
          <!-- begin collapse tag -->
                <!-- <b-collapse v-model="showCollapse" id="collapse4"> -->
            <b-col class="p-0 m-0" lg="2" >
                <div class="sideBar">
                  <section class="top">
                    <h1 >UX/UI Resume</h1>
                    <h6> Powered by Vue.js!</h6>
                    <h5>Links</h5>
                  </section>
                    <ul>
                        <li><a href="westleyj.com" target="_blank" title="WestleyJ Designs LLC- My freelance WordPress portfolio & Home site">Portfolio Site</a></li>
                        <li><a href="westleyj.com" target="_blank" title="My GitHub account - my version control savior. ">GitHub</a></li>
                        <li><a href="westleyj.com" target="_blank" title="My LinkedIn Account">LinkedIn</a></li>
                        <li><a href="westleyj.com" target="_blank" title="My CodePen profile & playground">CodePen</a></li>
                    </ul>
                    <h5> Soft Skills</h5>
                    <ul>
                        <li v-for="sSkill in sSkills">
                            {{sSkill.msg}}
                        </li>
                    </ul>
                    <h5> Hard Skills</h5>
                    <ul>
                        <li v-for="hSkill in hSkills">
                            {{hSkill.msg}}
                        </li>
                    </ul>
                    <h5> Proficient Languages</h5>
                    <ul>
                        <li v-for="lang in langs">
                            {{lang.msg}}
                        </li>
                    </ul>
                    <h5> Proficient Frameworks</h5>
                    <ul>
                        <li v-for="fmwrk in fmwrks">
                            {{fmwrk.msg}}
                        </li>
                    </ul>


              </div>
              </b-col>
                <!-- end sidebar -->
              <!-- </b-collapse>
              <b-btn @click="showCollapse = !showCollapse"
                       :class="showCollapse ? 'collapsed' : null"
                       aria-controls="collapse4"
                       :aria-expanded="showCollapse ? 'true' : 'false'">
                  Toggle Collapse
                </b-btn> -->
              <!-- ending collapse tag -->

            </b-col>
            <b-col lg="10">
                <h1> {{msg}}</h1>
                <b-row>
                    <b-col>
                        <p>Highly motivated self starter and livelong learner looking for interaction design roles in front end development. Seeking mentor focused open collaboration cultures working on teams as a front end engineer using moder n Javascript
                            libraries like React/Vue/Angular. Training to become full stack engineer in 3-5 years. Willing to relocate across continental US with spouse</p>
                    </b-col>
                </b-row>
                <section>
                    <b-row>
                        <b-col>
                            <h4 class="float-left"> Freelance Web Developer <br/> <a href="westleyj.com" target="_blank" title="Visit WestleyJ.com in a new tab." rel="nofollow"> WestleyJ Designs LLC</a></h4>
                            <h4 class="float-right"> Sept-July</h4>
                        </b-col>
                    </b-row>
                    <hr/>
                    <b-row>
                        <b-col>
                            <li>Worked on wide range of projects developing over 10+ sites for B2C companies in telecommunications, esports, & LGBTQ content publications</li>
                            <li>Responsible for full redesign of rivernetworks.com which led to 47% increase in new users, 41% increase in new sessions and a 38% reduction in bounce rate. Led AdWords/Facebook marketing campaigns which resulted in 300%+ increase
                                in traffic</li>
                            <li>Built from scratch esports WordPress theme for local collegiate esports organization with over 200+ members : https://www.iupui.edu/~esports/</li>
                            <li>Led web development campaign responsible for over 55+ signups to a local esports tournament. See: https://www.iupui.edu/~esports/HSI/</li>
                        </b-col>
                    </b-row>
                </section>
                <hr/>

                <section>
                    <b-row>
                        <b-col>
                            <h4 class="float-left"> Senior Graphic Designer <br/> Indiana Purdue University Indianapolis</h4>
                            <h4 class="float-right">Sept. 2014 - Dec. 2016</h4>
                        </b-col>
                    </b-row>
                    <hr/>
                    <b-row>
                        <b-col>
                            <li>Worked with IU employees and students on a client-designer basis to develop advertising, digital content, branding, event promotion, and print materials using Adobe Creative Suite</li>
                            <li>Worked with over 25+ unique student organizations designing branding documents, event advertising, & multimedia presentations</li>
                            <li>Worked on a creative team with 6 team members in a collaborative enviroment encouraging open critique and dialog about graphic design projects</li>
                        </b-col>
                    </b-row>
                </section>
                <hr/>
                <section>
                    <b-row>
                        <b-col>
                            <h4 class="float-left"> Motor Transport Sergeant <br/>1438th Trans Co.</h4>
                            <h4 class="float-right">Sept. 2014 - Dec. 2016</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <li>Worked with IU employees and students on a client-designer basis to develop advertising, digital content, branding, event promotion, and print materials using Adobe Creative Suite</li>
                            <li>Worked with over 25+ unique student organizations designing branding documents, event advertising, & multimedia presentations</li>
                            <li>Worked on a creative team with 6 team members in a collaborative enviroment encouraging open critique and dialog about graphic design projects</li>
                        </b-col>
                    </b-row>
                </section>
                <hr/>

            </b-col>
            <!-- end content -->
        </b-row>
    </b-container>
    <!-- end content fluid -->

</div>
<!-- end container div -->

</template>

<script>

export default {
    name: 'resume',
    data() {
        return {
          showCollapse: true,
            msg: 'Seeking front end/UX roles in US',
            // skills obj array
            sSkills: [{
                msg: 'Leadership'
            }, {
                msg: 'Mentoring'
            }, {
                msg: 'Resilience'
            }, {
                msg: 'Peer to Peer training'
            }],
            // hskills  obj array
            hSkills: [{
                msg: 'Node Package Manager'
            }, {
                msg: 'GitHub Version Control'
            }, {
                msg: 'Adobe Illustrator'
            }, {
                msg: 'Adobe InDesign'
            }, {
                msg: 'Responsive Grid Design'
            }, {
                msg: 'UX testing and review'
            }, {
                msg: 'Usability engineering'
            }],
            // langs obj array
            langs: [{
                msg: 'HTML 5'
            }, {
                msg: 'CSS/SASS/LESS'
            }, {
                msg: 'Javascript/ES6'
            }, {
                msg: 'PHP'
            }, {
                msg: 'MySQL'
            }, ],
            // framework array obj
            fmwrks: [{
                msg: 'BootstrapVue/Bootstrap 4'
            }, {
                msg: 'Vue.js'
            }, {
                msg: 'Angular'
            }, {
                msg: 'WordPress'
            }, {
                msg: 'Nuxt.js'
            }, {
                msg: 'Webpack'
            }, {
                msg: 'Babel'
            }],

        }
    }
}

</script>
