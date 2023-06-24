<template>
  <div id="projects" class="container max-w-7xl mx-auto mt-36 p-4">
    <div data-aos="fade-right">
      <h3 class="text-primary uppercase text-lg">Feature Projects</h3>
      <h1 class="text-white text-4xl font-bold mt-5">
        Stuff I’ve Worked On 📁
      </h1>
    </div>

    <div class="mt-14 flex flex-col gap-8">
      <div data-aos="fade-up" v-for="item in project" :key="item.id">
        <h1 class="text-white text-xl font-semibold capitalize">
          {{ item.title }}<span class="text-primary">.</span>
        </h1>
        <p class="text-gray-300 mt-2">{{ item.desc }}</p>
        <ul class="flex gap-5 flex-wrap items-center py-2">
          <li
            class="uppercase border border-primary rounded-sm p-2 text-white"
            v-for="stack in item.stack"
            :key="stack"
            
          >
            {{ stack }}
          </li>
        </ul>
        <span class="bg-gray-700 h-0.5 mt-2 w-full block"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",

  data() {
    return {
      project: [
        {
          id: 1,
          title: "4Clout",
          siteLink: "https://4clout.ch/",
          githubLink: "",
          stack: ["11ty", "html", "css", "scss", "javascript"],
          class:
            "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary to-green-300",
          desc:
            "4clout KLG as social media management offers a full service offer. From concept to content production and management of various social media platforms including community management. In addition, we work closely with selected freelancers who create a diverse range of photo and video productions.",
        },
        {
          id: 2,
          title: "the white brand",
          siteLink: "https://thewhitebrand.ro/",
          githubLink: "",
          stack: ["html", "css", "scss", "javascript"],
          class:
            "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary to-green-300",
          desc:
            "HVIDROOM part of STUDIOUL ALB, creates the personalized image of your brand using the most advanced software and hardware technologies. We operate with a large scale of businesses from small local businesses to large corporation collaborations, delivering Video/Graphic/Photo/Animation/VFX content. We will assist you in revealing the better part of your company to your public",
        },
        {
          id: 3,
          title: "URL shortener",
          siteLink: "https://urlshorteneraj.herokuapp.com/",
          githubLink: "https://github.com/AjjlalAhmed/urlShorten",
          stack: ["node", "expres", "mongodb", "javascript"],
          class:
            "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary to-green-300",
          desc:
            "A HTTP service to short the URL with the limit count on how many times that shorten URL can be used. This project is made using NodeJS ExpressJS and MongoDB.",
        },
        {
          id: 4,
          title: "Public remote jobs",
          siteLink: "https://urlshorteneraj.herokuapp.com/",
          githubLink: "https://github.com/AjjlalAhmed/remote-jobs",
          stack: ["node", "expres", "mongodb", "javascript"],
          class:
            "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary to-green-300",
          desc:
            "Its fetech job posting from other's site by scrapinig their content with the help of node, express, puppeteer, node-html-parser and sqlite.",
        },
        {
          id: 5,
          title: "Qr-code scanner",
          siteLink: "http://qr-code-scanner-eight.vercel.app/",
          githubLink: "https://github.com/AjjlalAhmed/qr-code-scanner",
          stack: ["vue", "html", "css", "javascript"],
          class:
            "bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary to-green-300",
          desc: "Basic Qr-code scanner build using vue js",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped></style>
