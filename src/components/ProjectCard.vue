<script >


export default {
  name: 'ProjectCard',
  props: {
    myProject: Object

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
    <figure v-if="myProject.image">
      <img :src="`${myApi}/storage/${myProject.image}`" class="card-img-top" :alt="myProject.title" />
    </figure>
    <div v-else class="d-flex align-items-center justify-content-center">
      <p> Nessuna immagine presente </p>
    </div>
    <div class="card-body ">
      <h6 class="my-2"><span>Titolo:</span> {{ myProject.title }}</h6>
      <h6 class="my-2"><span>Descrizione:</span> {{ myProject.content }}</h6>
      <!-- <p>{{ project.type }}</p> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  background-color: rgb(10 10 10 / 75%);
  height: 500px;

  .card-body {
    flex: none;
  }

  h6 {
    color: green;
  }

  p{
    color: orange;
    font-size: 1.3rem;

  }

  span {
    color: red;
    font-size: 1.3rem;
  }
}</style>