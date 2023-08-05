<template>
  <Layout>
    <div class="sm:px-10" >
      <Landing />
      <Projects />
      <Testimonials />
      <MoreAboueMe />
      <Contact  />
    </div>
  </Layout>
</template>

<script>
import Landing from "../components/Landing.vue";
import MoreAboueMe from "../components/MoreAboueMe.vue";
import Projects from "../components/Projects.vue";
import Testimonials from "../components/Testimonials.vue";
import Contact from "../components/Contact.vue";
export default {
  components: { Landing, Projects, Testimonials, MoreAboueMe, Contact },
  metaInfo: {
    title: "Ajjlal Ahmed",
  },
};
</script>

<style></style>
