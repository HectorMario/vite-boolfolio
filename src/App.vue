<script >

</script>

<template>
  <div class="container">
    <routerView />
    <!--/ LoadingPage -->
  </div>
</template>



<style lang="scss">
@use "./style/general.scss" as *;
@use "./style/partials/variables" as *;

section {
  color: rgb(153, 253, 13);

  .project-number {
    color: #e56729;
    font-size: 1.2rem;
    margin: 50px;
    padding-right: 90px;
  }
}

.project {
  width: calc(100% / 4 - 20px);
}
</style>