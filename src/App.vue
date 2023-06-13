<script >
import ProjectCard from './components/ProjectCard.vue';

export default {
  name: 'App',
  components: {
    ProjectCard
  },
  
  data() {
    return {
      Projects: []
    }
  }
}

</script>

<template>
  <div class="container">
    <ProjectCard />
  </div>
</template>

<style lang="scss">
@use "./style/general.scss" as *;
</style>