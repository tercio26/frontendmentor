<template>
  <section class="my-4 row">
    <article class="col-12 col-lg-8">
      <picture>
        <source :srcset="topNews.image" media="(min-width: 768px)">
        <source :srcset="topNews.imageMobile">
        <img class="img-responsive" :src="topNews.imageMobile" alt="top news" loading="lazy"/>
      </picture>

      <div class="row mt-3">
        <div class="col-12 col-lg-6">
          <h1 class="text-bold text-5xl text-dark">{{ topNews.title }}</h1>
        </div>
        <div class="col-12 col-lg-6">
          <p class="text-muted mb-3">{{ topNews.memo }}</p>

          <a class="btn btn-danger btn-hover-dark text-uppercase" href="">Read more</a>
        </div>
      </div>
    </article>

    <article class="col-12 col-lg-4">
      <div class="p-4 bg-dark ">
        <h3 class="text-warning text-3xl text-bold">New</h3>

        <div class="mt-5" v-for="(news, i) in newestNews">
          <a class="text-bold mb-1 text-white text-hover-warning d-block text-none" href="">{{ news.title }}</a>
          <p class="text-secondary">{{ news.memo }}</p>
          <hr class="mt-4" v-if="i < countNewestNews"/>
        </div>

      </div>
    </article>
  </section>

  <section class="row">
    <div class="col-12 col-lg-4" v-for="(news, i) in trendingNews">
      <div class="row">
        <div class="col-4">
          <img class="img-responsive img-cover img-center" :src="news.image" loading="lazy" alt=""/>
        </div>
        <div class="col-8">
          <div class="text-secondary text-bold text-3xl">{{ String(i + 1).padStart(2, '0') }}</div>
          <a class="text-bold d-block text-dark text-hover-warning text-none my-2" href="">{{ news.title }}</a>
          <p class="text-muted">{{ news.memo }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage",

  data() {
    return {
      topNews: {},
      newestNews: [],
      trendingNews: []
    }
  },

  computed: {
    countNewestNews() {
      return this.newestNews.length - 1
    }
  },

  created() {
    this.fetchTopNews()
    this.fetchNewestNews()
    this.fetchTrendingNews()
  },
  methods: {
    fetchTopNews() {
      this.topNews = {
        title: "The Bright Future of Web 3.0?",
        memo: "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?",
        image: "/images/image-web-3-desktop.jpg",
        imageMobile: "/images/image-web-3-mobile.jpg"
      }
    },
    fetchNewestNews() {
      this.newestNews = [
        {
          title: "Hydrogen VS Electric Cars",
          memo: "Will hydrogen-fueled cars ever catch up to EVs?"
        },
        {
          title: "The Downsides of AI Artistry",
          memo: "What are the possible adverse effects of on-demand AI image generation?"
        },
        {
          title: "Is VC Funding Drying Up?",
          memo: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
        }
      ]
    },
    fetchTrendingNews() {
      this.trendingNews = [
        {
          title: "Reviving Retro PCs",
          memo: "What happens when old PCs are given modern upgrades?",
          image: "/images/image-retro-pcs.jpg",
        },
        {
          title: "Top 10 Laptops of 2022",
          memo: "Our best picks for various needs and budgets.",
          image: "/images/image-top-laptops.jpg",
        },
        {
          title: "The Growth of Gaming",
          memo: "How the pandemic has sparked fresh opportunities.",
          image: "/images/image-gaming-growth.jpg",
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>