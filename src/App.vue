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
      projects: []

    }
  },
  mounted() {
    this.getProject();
  },
  methods: {
    getProject() {
      axios
        .get(`${this.myApi}/api/projects`)
        .then(resp => {
          this.projects = resp.data.results;
        })
    }
  }
}

</script>

<template>
  <div class="container">
    <div class="col" v-for="project in projects" :key="project.id">
      <ProjectCard :project="projects" />
    </div>
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>