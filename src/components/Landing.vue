<template>
  <div class="container max-w-7xl mx-auto mt-36 p-4 ">
    <div class=" max-w-3xl">
      <h1
        id="title"
        class=" text-4xl font-Playfair  font-bold sm:text-5xl lg:text-6xl text-text "
      >
        Web development virtuoso, turning
        <span class="text-primary ">ideas into digital</span> masterpieces.
      </h1>
      <div id="action-btn" class="mt-24">
        <a
          href="/#projects"
          class="uppercase tracking-wide text-lg text-white relative after:transition-all after:block after:w-[50%] after:h-0.5 after:bg-primary after:absolute after:-bottom-2 after:hover:w-full"
        >
          View Projects
        </a>
      </div>
    </div>

    <div class="flex items-end justify-end mt-36">
      <ul id="socials" class="flex items-center gap-5">
        <li>
          <a target="_blank" href="http://github.com/AjjlalAhmed"
            ><g-image src="~/assets/icons/github.svg" width="24" height="24"
          /></a>
        </li>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/ajjlalahmed/"
            ><g-image src="~/assets/icons/linkedin.svg" width="24" height="24"
          /></a>
        </li>
        <li>
          <a target="_blank" href="https://www.fiverr.com/ajjlal_ahmed">
            <g-image src="~/assets/icons/fiverr.svg" width="56" height="56"
          /></a>
        </li>
      </ul>
    </div>

    <div data-aos="fade-up" class="max-w-lg mt-48">
      <p class="text-white">
        Greetings, unknown acquaintance! 👋 I go by the name of Ajjlal Ahmed,
        and I am a full-stack developer driven by a fervor for crafting digital
        solutions that enhance people's everyday experiences.
      </p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.text-animation {
  animation: appearText 3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

@keyframes appearText {
  from {
    transform: translateY(-150%);
  }
  to {
    transform: translateY(0px);
  }
}
</style>
