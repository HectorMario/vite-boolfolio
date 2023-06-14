<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import LoadingPage from './LoadingPage.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'App',
  components: {
    ProjectCard,
    LoadingPage,
    Pagination
  },

  data() {
    return {
      myApi: 'http://localhost:8000',
      projects: [],
      datiArray: {
        currentPage: 1,
        lastPage: null,
      },
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
          console.log(resp);
          this.projects = resp.data.results.data;
          this.datiArray.currentPage = resp.data.results.current_page;
          this.datiArray.lastPage = resp.data.results.last_page;
          this.totalProjects = resp.data.results.total;
        })
        .finally(() => {
          this.loading = false;

        })
    }
  }
}

</script>

<template>
    <ul>
        <li>
            <router-link to="/">Home</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>

        </li>
        <li>
            <router-link to="/projects">Projects</router-link>
        </li>
    </ul>

    <section v-if="!loading">
      <h1 class="text-center my-2 container ">Lista dei progetti :</h1>
      <div class="text-end container project-number me-4">
        Trovati : {{ totalProjects }} progetti
      </div>

      <div class="row row-cols-4 gap-3">
        <div class="project col" v-for="project in projects" :key="project.id">
          <ProjectCard :myProject="project" />
        </div>
      </div>


      <!-- Handle pagination -->
      <Pagination :datiArray="datiArray" @dati="getProject" />
      <!-- /Handle pagination -->
    </section>


    <!-- LoadingPage -->

    <section v-else>
      <LoadingPage />
    </section>

</template>


<style lang="scss" scoped>

</style>