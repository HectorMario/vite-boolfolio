<script >
import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import LoadingPage from './components/LoadingPage.vue';

export default {
  name: 'App',
  components: {
    ProjectCard,
    LoadingPage
  },

  data() {
    return {
      myApi: 'http://localhost:8000',
      projects: [],
      currentPage: 1,
      lastPage: null,
      totalProjects: 0,
      loading: false,

    }
  },
  mounted() {
    this.getProject();
  },
  methods: {
    getProject(pageNumber = 1) {

      this.loading = true;

      axios
        .get(`${this.myApi}/api/projects`, {
          params: {
            page: pageNumber
          }
        })
        .then(resp => {
          this.projects = resp.data.results.data;
          this.currentPage = resp.data.results.current_page;
          this.lastPage = resp.data.results.last_page;
          this.totalProjects = resp.data.results.total;
          console.log(this.projects);
        })
        .finally(() => {
          this.loading = false;

        })
    }
  }
}

</script>

<template>
  <div class="container">
    <section v-if="!loading">
      <h1 class="text-center my-2 container ">Lista dei progetti :</h1>
      <div class="text-end my-2 container me-4">
        Trovati : {{ totalProjects }} progetti
      </div>

      <div class="row row-cols-4 gap-3">
        <div class="project col" v-for="project in projects" :key="project.id">
          <ProjectCard :myProject="project" />
        </div>
      </div>


      <!-- Handle pagination -->

      <nav class="my-5 d-flex justify-content-center" aria-label="Page navigation example">
        <ul class="pagination">

          <li class="page-item" :class="{ 'disable': currentPage === 1 }">
            <a class="page-link" href="#" @click.prevent="getProject(currentPage - 1)">Previous</a>
          </li>

          <li class="page-item" :class="{ 'active': pageNum === currentPage }"  v-for="pageNum in lastPage">
            <a class="page-link" href="#" @click.prevent="getProject(pageNum)">{{ pageNum }}</a>
          </li>

          <li class="page-item" :class="{ 'disable': currentPage === lastPage }">
            <a class="page-link" href="#" @click.prevent="getProject(currentPage + 1)">Next</a>
          </li>

        </ul>

      </nav>
      <!-- /Handle pagination -->

    </section>

    <!-- LoadingPage -->

    <section v-else>
      <LoadingPage />
    </section>

    <!--/ LoadingPage -->

  </div>
</template>



<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/variables" as *;


.project {
  width: calc(100% / 4 - 20px);
}
</style>