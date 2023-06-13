<template>
  <div class="container max-w-7xl mx-auto mt-36 p-4 ">
    <div class="lg:max-w-lg xl:max-w-3xl">
      <h1
        class="text-2xl font-Playfair  font-bold md:text-4xl lg:text-6xl text-text "
      >
        Web development virtuoso, turning
        <span class="text-primary">ideas into digital</span> masterpieces.
      </h1>
      <div class="mt-24">
        <g-link
          class="uppercase tracking-wide text-lg text-white relative after:transition-all after:block after:w-[50%] after:h-0.5 after:bg-primary after:absolute after:-bottom-2 after:hover:w-full"
        >
          View Projects
        </g-link>
      </div>
    </div>

    <div class="flex items-end justify-end mt-36">
      <ul class="flex items-center gap-5">
        <li>
          <g-image src="~/assets/icons/github.svg" width="24" height="24" />
        </li>
        <li>
          <g-image src="~/assets/icons/linkedin.svg" width="24" height="24" />
        </li>
        <li>
          <g-image src="~/assets/icons/fiverr.svg" width="56" height="56" />
        </li>
      </ul>
    </div>

    <div class="max-w-lg mt-48">
      <p class="text-white">
        Greetings, unknown acquaintance! 👋 I go by the name of Ajjlal Ahmed,
        and I am a full-stack developer driven by a fervor for crafting digital
        solutions that enhance people's everyday experiences.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Landing",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
