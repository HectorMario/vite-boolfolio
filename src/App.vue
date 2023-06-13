<script >
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard
  },

  data() {
    return {
      myApi: 'http://localhost:8000',
      projects: []

    }
  },
  mounted() {
    this.getProject();
  },
  methods: {
    getProject() {
      axios.get(`${this.myApi}/api/projects`).then(resp => {
          this.projects = resp.data.results;
          console.log(this.projects);
        })
    }
  }
}

</script>

<template>
  <div class="container">
    <div class="row row-cols-4 gap-3">
      <div class="project col" v-for="project in projects" :key="project.id">
        <ProjectCard :project="project" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;


.project{
  width: calc(100% / 4 - 20px);
  // height: 300px;
}

h6{
  color: green;
}

</style>