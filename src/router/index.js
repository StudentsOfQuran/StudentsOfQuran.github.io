import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Grammar from "../views/Grammar.vue";
import GrammarLessons from "../views/GrammarLessons.vue";
import Lesson1 from "../views/Lesson1.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/grammar", component: Grammar },
  { path: "/grammar/grammar-lessons", component: GrammarLessons },
  { path: "/grammar/grammar-lessons/lesson-1", component: Lesson1 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
