<template>
  <Layout>
    <div id="scroll-bar">
      <Landing />
      <Projects />
    </div>
  </Layout>
</template>

<script>
import Landing from "../components/Landing.vue";
import Projects from "../components/Projects.vue";
export default {
  components: { Landing, Projects },
  metaInfo: {
    title: "Ajjlal Ahmed",
  },
};
</script>

<style></style>
