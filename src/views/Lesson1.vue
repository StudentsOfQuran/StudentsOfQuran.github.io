<script setup>
import Lesson1 from "../assets/lesson_1.jpeg";
</script>

<template>
  <div class="container-fluid bg-first-color text-white vh-100">
    <h1 class="p-3">Lesson 1 - Rights of the Quran on Us</h1>

    <p>
      Welcome to the first lesson! Below is the embedded Word document for the
      lesson. Alternatively, you are more than welcome to download the attached
      document.
    </p>

    <p>
      <a href="/11July2025_Notes.docx" download>Download Word document</a>
    </p>

    <div class="row align-items-center">
      <div class="col-12 col-md-6 mb-3 mb-md-0 d-block">
        <div class="ratio ratio-4x3">
          <iframe
            src="https://1drv.ms/w/c/272e78a51d256432/IQSreuNN_9YnSoY9mf5TVmPSAYqTAVq4jzv_i21zNwhqgvc"
            frameborder="0"
            >This is an embedded
            <a target="_blank" href="https://office.com">Microsoft Office</a>
            document, powered by
            <a target="_blank" href="https://office.com/webapps">Office</a
            >.</iframe
          >
        </div>
      </div>

      <div class="col-12 col-md-6 mb-3 mb-md-0">
        <div class="ratio ratio-4x3">
          <img class="img-fluid rounded" :src="Lesson1" alt="Lesson 1 image" />
        </div>
      </div>
    </div>
  </div>
</template>
