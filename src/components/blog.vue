<template>
  <main>
    <div class="landing-page">
      <div class="blur"></div>
      <Header />
      <div class="animation">
        <div class="animate1"></div>
        <div class="animate2"></div>
      </div>
      <div class="title">
        <transition name="move-in">
          <h1 v-if="animate">
            Advanced <br />
            Tech Academy
          </h1>
        </transition>
        <transition name="appear">
          <p v-if="animate">
            Read the latest updates, research, and articles by our team
          </p>
        </transition>
        <transition name="refresh">
          <div class="intro-btn" v-if="animate">
            <router-link to="/login" class="start-btn">sign up</router-link>
          </div>
        </transition>
        <transition name="appear">
          <form @submit.prevent="searchPosts()" class="research" v-if="animate">
            <input
              type="search"
              name="search"
              id="search"
              v-model="post.title"
              placeholder="Search...."
              required
            />
            <button type="submit">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </transition>
      </div>
    </div>
    <div class="section-1" v-if="post.open">
      <h1>Advanced crypto & forex trading community blog</h1>
      <p>
        Here we update our latest news titles and all that has to do with our
        academy. stay tunned and follow us even on our social media platforms to
        find out what we have in store for you!
      </p>
      <div class="flex-div">
        <div class="flex-content">
          <div class="icon">
            <i class="fa-solid fa-chart-line"></i>
          </div>
          <h2>recent news update</h2>
          <p>We upload recent and valid news here as often as possible.</p>
        </div>
        <div class="flex-content">
          <div class="icon">
            <i class="fa-solid fa-diagram-project"></i>
          </div>
          <h2>bond</h2>
          <p>
            We upload news and updates from reliable sources. We are linked to
            sources that provide valid and reliable information in addition to
            our research and studies.
          </p>
        </div>
        <div class="flex-content">
          <div class="icon">
            <i class="fa-solid fa-earth-oceania"></i>
          </div>
          <h2>our news update</h2>
          <p>
            We're international, we're worldwide we aren't limited to a certain
            area as long as what we have is of value we bring it to you.
          </p>
        </div>
      </div>
    </div>
    <div class="section-2" v-if="post.open">
      <section>
        <h2>want to get life changing updates??</h2>
        <p>
          sign up and register to our academy and get the most of what you want.
          We offer learning and mentorship services and do so excellently well.
          <br />
          Don't wait for tomorrow
        </p>
        <button><a href="/login">start now!</a></button>
      </section>
    </div>
    <div class="posts" id="posts">
      <header>
        <a href="/blog">return</a> <button @click="getPosts()">All Posts</button
        ><button @click="searchPosts()">Filter Post(s)</button>
      </header>
      <div class="post" v-for="post in post.postArr" :key="post.id">
        <h1 class="title">{{ post.title }}</h1>
        <h3 class="sub-title">{{ post.subTitle }}</h3>
        <p v-html="post.message"></p>
        <h5 class="tags">
          <span v-for="tag in post.tags" :key="tag.id">#{{ tag }}</span>
        </h5>
        <p class="author">author:{{ post.author }}</p>
      </div>
    </div>
    <span class="to-landing-page reach"
      ><a href="/#contact" class="a"
        ><i class="fa-solid fa-person-circle-question"></i></a
    ></span>
    <Footer />
  </main>
</template>

<script>
import axios from "axios";
import { reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Header from "./header.vue";
import Footer from "./footer.vue";
export default {
  name: "Blog",
  components: {
    Header,
    Footer,
  },
  setup() {
    const router = useRouter();
    let animate = ref(false);
    const post = reactive({
      title: "",
      postArr: [],
      open: true,
    });

    function getPosts() {
      axios("api/post")
        .then((res) => {
          post.postArr = res.data;
        })
        .catch((err) => console.log(err.status));
    }

    onMounted(() => {
      getPosts();

      setTimeout(() => {
        animate.value = true;
      }, 500);
    });

    function searchPosts() {
      axios("api/post/" + `${post.title}`)
        .then((res) => {
          post.postArr = res.data;
          post.open = false;
        })
        .catch((err) => console.log(res));
      post.title = "";
      router.push("#posts");
    }

    return { post, animate, searchPosts, getPosts };
  },
};
</script>

<style lang="scss" scoped>
$fallback: rgb(19, 37, 62);
main {
  .landing-page {
    background: url(../assets/learn-b.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: fit-content;

    .blur {
      height: 100% !important;
      bottom: 0;
    }

    .title {
      h1 {
        padding: 25px 0;
        padding-bottom: 10px;
        width: 95%;
        margin: auto;
      }
      p {
        padding: 10px;
        width: 90vw;
        margin: auto;
        color: rgb(222, 221, 221);
        font: 600 27px "Poppins", sans-serif;
      }

      .research {
        width: 70vw;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;

        input {
          width: 80%;
          height: 100%;
          border: none;
          outline: none;
          border-radius: 30px 0 0 30px;
          padding: 3px 0 3px 20px;
        }
        button {
          width: 20%;
          height: 100%;
          margin: 0;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
          border-radius: 0 30px 30px 0;
          padding: 3px 0 3px 0;

          &:hover {
            transform: none;
          }

          i {
            font-size: 23px;
          }
        }

        @media screen and (max-width: 550px) {
          width: 90vw;
          margin-top: 40px;
        }
      }
    }
  }

  .section-1 {
    width: 100vw;
    min-height: 100vh;
    background: $fallback;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 5px;

    h1 {
      padding: 10px;
      font: 500 50px "Nunito sans", "Poppins", sans-serif;
      font-family: "Jacques Francois Shadow", cursive;
      color: white;
      text-transform: capitalize;
      padding-top: 50px;

      @media screen and (max-width: 400px) {
        font-size: 35px;
      }
    }
    p {
      width: 97%;
      font-family: "Noto sans", "Poppins", sans-serif;
      margin: auto;
      line-height: 23px;
      padding: 20px 10px;
      color: rgb(166, 193, 206);
    }

    .flex-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 90vw;

      .flex-content {
        width: 350px;
        height: 400px;
        border-radius: 5px;
        margin: 10px;
        padding: 20px;
        background: rgb(22, 46, 76);

        .icon {
          width: 100px;
          height: 100px;
          border-radius: 100%;
          margin: 10px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(182, 189, 196);

          i {
            font-size: 40px;
          }
        }

        h2 {
          text-transform: capitalize;
          font: 600 30px "Nunito sans", "Poppins", sans-serif;
          color: white;
        }

        p {
          padding: 10px;
          color: rgb(194, 194, 194);
        }

        @media screen and(max-width: 1250px) {
          width: 400px;

          @media screen and (max-width: 935px) {
            width: 90%;
            margin: 20px auto;
          }
        }
      }
    }
  }

  .section-2 {
    width: 100vw;
    height: 80vh;
    background: $fallback;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    section {
      width: 60vw;
      height: fit-content;

      h2 {
        font: 600 25px "Poppins", sans-serif;
        padding: 10px;
        color: white;
      }

      p {
        padding: 10px;
        color: rgb(189, 187, 187);
      }
      button {
        width: 250px;
        height: 50px;
        border: none;
        margin: 10px auto;
        border-radius: 5px;
        background: rgb(123, 159, 221);

        a {
          color: $fallback;
          text-decoration: none;
          text-transform: capitalize;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font: 500 19px "Poppins", sans-serif;
        }
      }
      @media screen and (max-width: 768px) {
        width: 100vw;
      }
    }

    @media screen and (max-width: 768px) {
      width: 97vw;
    }
  }

  .posts {
    width: 100%;
    height: fit-content;
    padding: 3px;
    background: $fallback;

    header {
      display: flex;
      justify-content: center;
      align-items: center;

      button,
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        text-transform: capitalize;
        width: 100px;
        height: 40px;
        border: none;
        border-radius: 3px;
        background: white;
        color: $fallback;
        margin: 10px 20px;
      }
    }

    .post {
      width: 97%;
      height: fit-content;
      padding: 25px;
      margin: 10px auto;
      border-radius: 5px;
      background: rgb(244, 244, 244);

      .title {
        font: 800 35px "Nunito sans", sans-serif;
        text-transform: capitalize;
        padding: 10px;

        @media screen and (max-width: 700px) {
          font-size: 25px;
        }
      }

      .sub-title {
        font: 500 18px "Poppins", sans-serif;
      }
      h5 {
        text-align: left;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        span {
          padding: 5px;
          white-space: pre-wrap;
        }
      }
      p {
        text-align: left;
      }
      .author {
        text-align: left;
        text-transform: uppercase;
        padding: 10px;
        font: 600 15px "Poppins", sans-serif;
      }

      @media screen and (max-width: 650px) {
        width: 98%;
      }
    }
  }
}
</style>
