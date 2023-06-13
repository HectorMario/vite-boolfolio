<script >


export default {
  name: 'ProjectCard',
  props: {
    project: Object

  },
  data() {
    return {
      myApi: 'http://127.0.0.1:8000'

    }
  }

}
</script>

<template>
  <div class="container">
    <div class="card h-100">
      <img v-if="project.image" :src="`${myApi}/project_images/${project.image}`" class="card-img-top" :alt="project.title" />
      <div v-else>
        Nessuna immagine presente
      </div>
      <div class="card-body">
        <h5>{{ project.title }}</h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
</style>