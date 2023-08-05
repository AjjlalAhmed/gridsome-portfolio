<template>
  <div class="layout bg-secondary">
    <Nav />
    <slot />
  </div>
</template>

<script>
import AOS from "aos"
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
  data() {
    return {};
  },

  mounted() {
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
