<template>
  <header class="overflow-hidden">
    <div id="top-bar" class="h-4 w-full bg-primary"></div>

    <nav
      id="nav"
      class="sm:px-10 mt-10 max-w-7xl mx-auto p-4 flex flex-wrap overflow-hidden  items-center justify-center sm:justify-between gap-5"
    >
      <h1 class="logo text-2xl text-white font-bold">
        ajjlal <span class="text-primary">ahmed.</span>
      </h1>
      <ul class="flex gap-8">
        <li>
          <g-link
            to="~/assets/ajjlal.pdf"
            download="Ajjlal_Ahmed_Resume"
            class="text-white font-medium capitalize"
            >resume</g-link
          >
        </li>
        <li>
          <a href="#contact" class="text-white font-medium  capitalize"
            >contact</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Nav",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped></style>
