<!-- src/views/Home.vue -->
<template>
  <div>
    <header>
      <h1>{{ fullName }}</h1>
      <img
        :src="require('@/assets/headshot.jpg')"
        alt="Headshot"
        class="headshot"
      />
      <h3>{{ currentJob.title }}</h3>
      <p>
        <a :href="currentJob.link" target="_blank">{{ currentJob.company }}</a>
      </p>
    </header>

    <main>
      <section id="projects">
        <h2>Projects</h2>
        <div class="projects-container">
          <Project
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
          />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Project from "@/components/ProjectComponent.vue";

export default {
  components: {
    Project,
  },
  data() {
    return {
      fullName: "Zachary Belles",
      currentJob: {
        title: "Application Development Engineer",
        link: "https://solution-source.net/",
        company: "Solution Source",
      },
      projects: [
        {
          title: "Project 1",
          link: "https://project1.example.com",
          description: "Description for Project 1.",
        },
        {
          title: "Project 2",
          link: "https://project2.example.com",
          description: "Description for Project 2.",
        },
        // Add more projects as necessary
      ],
    };
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

.headshot {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
