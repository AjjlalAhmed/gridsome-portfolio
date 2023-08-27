<template>
  <div :class="load ? '' : 'opacity-0'" class="layout bg-secondary">
    <Nav />
    <slot />
  </div>
</template>

<script>
import AOS from "aos";
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
  data: function() {
    return {
      load: 0,
    };
  },
  mounted() {
    const tl = gsap.timeline();
    this.load = true;
    tl.from("#top-bar", {
      x: "100%",
      duration: 1,
    })
      .from("#nav", {
        opacity: 0,
        y: 20,
      })
      .from("#title", {
        opacity: 0,
        y: "20",
        scale: 1.3,
        duration: 1,
      })
      .from("#action-btn", { opacity: 0, y: 50 })
      .from("#socials", { opacity: 0, y: 50 });
    AOS.init();
  },
  methods: {},
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style></style>
