<!-- src/components/Project.vue -->
<template>
  <div class="project">
    <h3>{{ project.title }}</h3>
    <a :href="project.link" target="_blank">View Project</a>
    <p>{{ project.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.project {
  width: 300px;
  background-color: #f8f8f8;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
</style>
