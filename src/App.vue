<script setup lang="ts">
import { computed, ref } from "vue";
import { marked } from "marked";
import DOMPurify from "dompurify";

// Build-time import of your repo's README.md.
// Any commit to README.md will be reflected on the website after the GitHub Pages workflow runs.
import readmeRaw from "../README.md?raw";

const markdown = ref<string>(readmeRaw);

// Marked options: keep it simple + predictable.
marked.setOptions({
  gfm: true,
  breaks: false
});

const html = computed(() => {
  const unsafe = marked.parse(markdown.value) as string;
  return DOMPurify.sanitize(unsafe, { USE_PROFILES: { html: true } });
});
</script>

<template>
  <div class="min-h-screen bg-base-200">
    <div class="navbar bg-base-100 shadow-sm">
      <div class="navbar-start">
        <a class="btn btn-ghost text-xl" href="./">welcome</a>
      </div>
      <div class="navbar-end">
        <a class="btn btn-sm btn-outline" href="https://github.com/" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </div>

    <main class="mx-auto max-w-4xl p-4">
      <div class="card bg-base-100 shadow">
        <div class="card-body">
          <div class="prose max-w-none" v-html="html"></div>
        </div>
      </div>

      <div class="mt-6 text-sm opacity-70">

      </div>
    </main>
  </div>
</template>
