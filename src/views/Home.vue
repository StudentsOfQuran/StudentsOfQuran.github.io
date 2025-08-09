<script setup>
import { onMounted, ref } from "vue";
import Quran from "../assets/quran.png";
import QuranLogo from "../assets/quran_logo.png";

let i = 0;
const text = "بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ";
const output = ref("");

function typewriter() {
  if (i < text.length) {
    output.value += text.charAt(i);
    ++i;
    setTimeout(typewriter, 150);
  }
}

onMounted(typewriter);
</script>

<template>
  <div class="container-fluid p-0">
    <div class="pt-5">
      <img
        :src="QuranLogo"
        class="border border-5 border-dark rounded-circle d-block mx-auto"
      />
    </div>

    <h1 class="display-1 text-arabic" style="margin-top: 8rem">
      {{ output }}
    </h1>
    <h1 class="display-1 m-5">Welcome</h1>
    <div class="col-md-6 mx-auto">
      <p class="lead text-center">
        This is my website where you can learn Pashto. I have created numerous
        lessons to help you on your journey toward mastering this truly
        beautiful language. Enjoy!
      </p>
      <div
        class="d-flex flex-column flex-md-row justify-content-center gap-4 m-5"
      >
        <router-link
          to="/grammar/"
          class="btn btn-lg flex-fill grammar"
          role="button"
          >Grammar</router-link
        >
        <router-link
          to="/tajweed/"
          class="btn btn-lg flex-fill tajweed"
          role="button"
          ><i class="fa-solid fa-book me-2"></i>Tajweed</router-link
        >
        <router-link to="/quizzes/" class="btn btn-lg flex-fill" role="button"
          >Quizzes</router-link
        >
      </div>
    </div>

    <div
      class="text-bg-dark overflow-hidden position-relative text-nowrap w-100"
    >
      <div class="marquee-slider">
        <span class="marquee-text">
          <h1 class="display-1 d-inline-block">
            Learn | Read | Speak | Teach |
          </h1>
        </span>
        <span class="marquee-text">
          <h1 class="display-1 d-inline-block">
            Learn | Read | Speak | Teach |
          </h1>
        </span>
      </div>
    </div>

    <div class="bg-first-color text-white p-3">
      <div class="col-md-6 mx-auto">
        <h1 class="display-1 mb-5">Grammar</h1>
        <p class="lead text-center">
          Delve into the true beauty of the Quran and its grammar.
        </p>
        <router-link
          to="/grammar/"
          class="btn btn-lg d-block grammar"
          role="button"
        >
          Take Me There
        </router-link>
      </div>
    </div>

    <div class="bg-second-color text-first-color p-3">
      <div class="col-md-6 mx-auto">
        <h1 class="display-1 mb-5">Tajweed</h1>
        <p class="lead text-center">
          Never mispronouce another word of the Quran again.
        </p>
        <router-link
          to="/tajweed/"
          class="btn btn-lg d-block tajweed"
          role="button"
          >Start Learning</router-link
        >
      </div>
    </div>

    <div class="bg-first-color text-white p-3">
      <h1 class="display-1 mb-5">Quizzes</h1>
      <div class="col-md-6 mx-auto">
        <p class="lead text-center">
          Test your knowledge with these carefully designed quizzes.
        </p>
        <router-link to="/quizzes/" class="btn btn-lg d-block" role="button"
          >Let's Go</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marqueeslide {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.grammar,
.tajweed {
  cursor: url("../assets/quran.png"), auto;
}

.container-fluid {
  background: linear-gradient(#9c783d, #57c785);
}

.marquee-slider {
  display: inline-block;
  white-space: nowrap;
  animation: marqueeslide 20s linear infinite;
  cursor: pointer;
}

.marquee-text {
  display: inline-block;
  white-space: nowrap;
  word-spacing: 25rem;
  margin-right: 25rem;
}
</style>
