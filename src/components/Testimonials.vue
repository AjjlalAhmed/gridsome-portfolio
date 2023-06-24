<template>
  <div>
    <div id="testomonails" class="container max-w-7xl mx-auto mt-36 p-4">
      <div data-aos="fade-right">
        <h3 class="text-primary uppercase text-lg">
          Hmm, just a touch of boasting.
        </h3>
        <h1 class="text-white text-4xl font-bold mt-5 capitalize">
          Praise for My Work 🎉
        </h1>
      </div>
    </div>
    <section class="splide mt-10 " aria-label="Splide Basic HTML Example">
      <div class="splide__track">
        <ul class="splide__list">
          <li
            v-for="(item, index) in testimonials"
            :key="index"
            class="splide__slide max-w-md bg-secondary-light text-white p-5 rounded-2xl bg-opacity-50"
          >
            <div class="flex flex-col h-full justify-around">
              <div>
                <div class="flex items-center gap-20 justify-between w-full">
                  <div class="flex items-center gap-2">
                    <g-image
                      :src="
                        `https://purecatamphetamine.github.io/country-flag-icons/3x2/${item.reviewer_country_code.toUpperCase()}.svg`
                      "
                      alt=""
                      class="w-5 h-5"
                    />
                    <p class=" text-sm text-gray-400">
                      {{ item.reviewer_country_code }}
                    </p>
                  </div>
                  <div>
                    <g-image class="w-10" src="~/assets/icons/fiverr.svg" />
                  </div>
                </div>
                <p class="font-semibold text-lg pt-4">@{{ item.username }}</p>
                <p class="pt-2 text-sm">{{ item.comment }}</p>
              </div>
              <div class="flex gap-1 items-center mt-5">
                <svg
                  class=" cursor-pointer peer peer-hover:text-yellow-400 text-yellow-400 duration-100 "
                  width="23"
                  height="23"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  v-for="item in 5"
                  in
                  :key="item"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  ></path>
                </svg>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
import Splide from "@splidejs/splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

export default {
  name: "Testimonials",

  data() {
    return {
      testimonials: [
        {
          username: "frihauge",
          comment: "Must be a pro vue developer with this amount of expertise",
          reviewer_country_code: "DK",
        },
        {
          username: "nulllq",
          comment:
            "Ajjlal is a true legend and hard working developer. I keep going back to him, because of the effort and excellent job.",
          reviewer_country_code: "DK",
        },
        {
          username: "cam_erji12",
          comment:
            "This dude is absolutely awesome, he had to do so much in a short time and did it awesome!!! If you consider to order something from him do not hesitate! Would order again!!!!",
          reviewer_country_code: "CH",
        },
        {
          username: "whitebrand650",
          comment: "Very fast and professional. Recommended!",
          reviewer_country_code: "RO",
        },
        {
          username: "zmusad",
          comment: "Amazing individual, replies instantly and did everything I requested.",
          reviewer_country_code: "GB",
        },
        {
          username: "brianerdelyi",
          comment: "Very hardworking and motivated programmer. He was patient with ll my suggestions and feedback. I would hire again.",
          reviewer_country_code: "BM",
        },
        {
          username: "frihauge",
          comment: "Great again. Also Good tips for future development",
          reviewer_country_code: "DK",
        },
        {
          username: "frihauge",
          comment: "Very talented vue frontend dev",
          reviewer_country_code: "DK",
        },
        {
          username: "suh3yl",
          comment: "Best experience for quick fixes.",
          reviewer_country_code: "MV",
        },
        {
          username: "suh3yl",
          comment:
            "Super effective and a reliable team worker. Easy to communicate with and understands clients situation, is always ready to help.",
          reviewer_country_code: "MV",
        },
        {
          username: "suh3yl",
          comment:
            "Very friendly and indeed, provides quality and efficient work.",
          reviewer_country_code: "MV",
        },
        {
          username: "christianjmader",
          comment: "everything met our expectations.",
          reviewer_country_code: "DE",
        },
        {
          username: "suh3yl",
          comment: "Great at doing what’s required",
          reviewer_country_code: "MV",
        },
        {
          username: "suh3yl",
          comment:
            "Delivered the work perfectly much quicker than expected, with highly professional clean work.",
          reviewer_country_code: "MV",
        },
      ],
    };
  },

  mounted() {
    new Splide(".splide", {
      type: "loop",
      drag: "free",
      focus: "center",
      gap: 20,
      arrows: false,
      pagination: false,
      autoWidth: true,
      autoScroll: {
        speed: -1,
      },
    }).mount({ AutoScroll });
  },

  methods: {},
};
</script>

<style></style>
