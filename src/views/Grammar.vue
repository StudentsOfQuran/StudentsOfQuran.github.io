<template>
  <div class="container-fluid text-white p-5">
    <div class="row align-items-center text-center text-md-start">
      <div class="col-12 col-md-4 mb-4 mb-md-0">
        <h1 class="display-1 fw-bold">
          <i class="fa-solid fa-graduation-cap me-2"></i><i>Learn</i><br />the
          Quran
        </h1>
      </div>

      <div class="col-12 col-md-8">
        <p class="fs-1 fw-bold">
          Join me on a journey to learn the Quran, the compilation of the
          blessed words of Allah.
        </p>
      </div>
    </div>

    <router-link to="grammar-lessons/" class="btn btn-lg w-100">
      <i class="fa-solid fa-circle-info me-2"></i>Start Learning
    </router-link>

    <router-link
      to="#about"
      class="d-block text-center text-white"
      style="margin-top: 250px; margin-bottom: 50px"
    >
      <i class="fa-solid fa-angle-down fa-2xl"></i>
    </router-link>

    <h2 id="about">A Little Bit About the Quran</h2>

    <p class="lead fw-bold">(Add important info)</p>
  </div>
</template>

<style scoped>
.container-fluid {
  background-image: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),
    url("../assets/mohammad-husaini-9UZ8sOnrnrs-unsplash.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
