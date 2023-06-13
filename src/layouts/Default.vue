<template>
  <div class="layout bg-secondary">
    <Nav />
    <slot />
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
  data() {
    return {};
  },

  mounted() {},

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
