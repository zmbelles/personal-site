<!-- src/views/Home.vue -->
<template>
  <div>
    <div class="education">
      <p>{{ almaMater }}</p>
      <p>{{ degree }}</p>
      <p>GPA: {{ gpa }}</p>
      <img
        :src="require('@/assets/noctrl.jpeg')"
        alt="Alma Mater Logo"
        class="alma-mater-logo"
      />
    </div>
    <div class="about-me">
      <p>About Me</p>
      <p>{{ aboutMe }}</p>
      <p>
        GitHub:
        <a :href="githubProfile" target="_blank">zmbelles</a>
      </p>
    </div>
    <header>
      <h1>{{ fullName }}</h1>
      <img
        :src="require('@/assets/headshot.jpg')"
        alt="Headshot"
        class="headshot"
      />
      <h3>{{ currentJob.title }}</h3>
      <p>
        Current employer:
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
      almaMater: "North Central College",
      degree: "B.S. Computer Science",
      class: "Class of 2023",
      gpa: "3.23",
      fullName: "Zachary Belles",
      currentJob: {
        title: "Application Development Engineer",
        link: "https://solution-source.net/",
        company: "Solution Source",
      },
      aboutMe:
        "I started off as an Instrumental Music Education major in college but switched to Computer Science after two years. These two years of mine in Music have allowed me to see things in \
      ways that others are not able to. I pick up skills very quickly as I did with different instruments and always provide as much as possible to my team members when needed.",
      githubProfile: "https://github.com/zmbelles",
      projects: [
        {
          title: "Connect: The Social Media Hub",
          link: "connect-jcelaya775.vercel.app",
          description:
            "Connect with your Facebook, Instagram, and TikTok friends all in one place \nLanguages: Typescript, JavaScript\nFrameworks: MongoDB, Next.js, tailwind.css",
        },
        {
          title: "Inventory & Emplyee Database",
          link: "https://github.com/zmbelles/GroceryDB",
          description:
            "simulates a grocery store admin database that keeps track of the store's employees, inventory, discounts, shipment status, reward members, and departments.\nLanguages: \
            Java, MySQL",
        },
        // Add more projects as necessary
      ],
    };
  },
};
</script>

<style scoped>
body {
  font-family: "Helvetica", sans-serif;
  line-height: 1.6;
  color: #000000;
  background-color: #f0f2f5; /* Light gray */
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
}

.education {
  position: fixed;
  top: 80px;
  right: 20px;
  text-align: center;
  z-index: 100;
  background-color: #445e74; /* Blue */
  border: 2px #6487a6; /* Darker Blue */
  padding: 2rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: black; /* White */
}

.alma-mater-logo {
  width: 256px;
  height: auto;
  margin-bottom: 100px;
}

header {
  text-align: center;
  margin-bottom: 2rem;
  background-color: #d9e1e8; /* Lighter gray */
  padding: 1rem;
  border-radius: 10px;
}

h1,
h2,
h3 {
  color: #000000;
  font-weight: 500;
}

.headshot {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 1rem;
}

a {
  color: #6c63ff;
  text-decoration: none;
}

a:hover {
  color: #c9ada7;
}

main {
  background-color: #ffffff; /* White */
  border-radius: 10px;
  padding: 1rem;
}
.about-me {
  position: fixed;
  top: 120px;
  left: 20px;
  text-align: left;
  z-index: 100;
  background-color: #445e74; /* Blue */
  border: 2px #6487a6;
  padding: 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: #ffffff; /* White */
  max-width: 30%; /* Adjust this value according to your needs */
  word-wrap: break-word;
}
.projects-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}
</style>
