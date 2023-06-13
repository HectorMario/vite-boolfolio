<script >


export default {
  name: 'ProjectCard',
  props: {
    project: Object

  },
  data() {
    return {
      myApi: 'http://localhost:8000', //funziona cn entrambi server php


    }
  }

}
</script>

<template>
    <div class="card d-flex flex-column justify-content-between">
      <figure v-if="project.image">
        <img :src="`${myApi}/storage/${project.image}`" class="card-img-top" :alt="project.title" />
      </figure>
      <div v-else class="d-flex align-items-center justify-content-center">
        <p> Nessuna immagine presente </p>
      </div>
      <div class="card-body ">
        <h6 class="my-2"><span>Titolo:</span> {{ project.title }}</h6>
        <h6 class="my-2"><span>Descrizione:</span> {{ project.content }}</h6>
        <!-- <p>{{ project.type }}</p> -->
      </div>
    </div>
</template>

<style lang="scss" scoped>
.card{
  background-color:rgb(10 10 10 / 75%);
  height: 500px;
  .card-body{
    flex: none;
  }
}
p,span{
  color: red;
  font-size: 1.3rem;
}
</style>