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
    <div class="section-1">
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
    <div class="section-2">
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
    <!-- <div class="testimonials">
      <h1>Atech Testimonials</h1>
      <h2>what our clients say:</h2>
      <div class="users">
        <div class="user">
          <div class="img">
            <img src="../assets/p.jpg" alt="atech testimonials" />
          </div>
          <h2>user name here</h2>
          <h3>| advanced tech academy | proffession</h3>
          <p>
            user testimonils here Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore veniam adipisci id dolores eveniet hic
            ut reprehenderit? Illo, consequuntur temporibus.
          </p>
        </div>
        <div class="user">
          <div class="img">
            <img src="../assets/p.jpg" alt="atech testimonials" />
          </div>
          <h2>user name here</h2>
          <h3>| advanced tech academy | proffession</h3>
          <p>
            user testimonils here Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore veniam adipisci id dolores eveniet hic
            ut reprehenderit? Illo, consequuntur temporibus.
          </p>
        </div>
        <div class="user">
          <div class="img">
            <img src="../assets/p.jpg" alt="atech testimonials" />
          </div>
          <h2>user name here</h2>
          <h3>| advanced tech academy | proffession</h3>
          <p>
            user testimonils here Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore veniam adipisci id dolores eveniet hic
            ut reprehenderit? Illo, consequuntur temporibus.
          </p>
        </div>
        <div class="user">
          <div class="img">
            <img src="../assets/p.jpg" alt="atech testimonials" />
          </div>
          <h2>user name here</h2>
          <h3>| advanced tech academy | proffession</h3>
          <p>
            user testimonils here Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Inventore veniam adipisci id dolores eveniet hic
            ut reprehenderit? Illo, consequuntur temporibus.
          </p>
        </div>
      </div>
    </div> -->
    <div class="posts" id="posts">
      <header>
        <button @click="getPosts()">All Posts</button>
      </header>
      <h1>
        | Atech Daily | <span>{{ post.total }}posts</span>
      </h1>
      <transition name="appear">
        <form @submit.prevent="searchPosts()" class="research">
          <input
            type="search"
            name="search"
            id="search"
            v-model="post.title"
            @keypress="showSearch()"
            placeholder="Search by post heading...."
            required
          />
          <button type="submit">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </transition>
      <transition name="appear">
        <p class="search-p" v-show="post.open">search for "{{ post.title }}"</p>
      </transition>
      <transition name="appear">
        <div class="all-posts">
          <div class="post" v-for="post in post.postArr" :key="post.id">
            <div class="img">
              <img src="../assets/logo-white.jpg" alt="advanced tech academy" />
            </div>

            <h1 class="title">{{ post.title }}</h1>
            <h3 class="sub-title">|{{ post.subTitle }}|</h3>
            <p v-html="post.message"></p>
            <h5 class="tags">
              <span v-for="tag in post.tags" :key="tag.id">{{ tag }} |</span>
            </h5>
            <p class="author">{{ post.author }}</p>
          </div>
        </div>
      </transition>
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
import Header from "./header.vue";
import Footer from "./footer.vue";
export default {
  name: "Blog",
  components: {
    Header,
    Footer,
  },
  setup() {
    let animate = ref(false);
    const post = reactive({
      title: "",
      postArr: [],
      total: 0,
      open: false,
    });

    function getPosts() {
      axios("api/post")
        .then((res) => {
          post.postArr = res.data;
          post.total = post.postArr.length;
          post.title = "";
          post.open = false;
        })
        .catch((err) => err);
    }

    function showSearch() {
      if (post.title) {
        post.open = true;
      } else {
        post.open = false;
      }
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

          post.total = post.postArr.length;
        })
        .catch((err) => err);
    }

    return { post, animate, showSearch, searchPosts, getPosts };
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

  .testimonials {
    width: 97vw;
    height: fit-content;
    padding: 20px 10px;
    padding-bottom: 2px;
    margin: auto;
    margin-bottom: 5px;
    overflow: hidden;
    overflow-x: auto;
    .users {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: row;
      padding: 20px 10px;
      position: relative;
      margin: auto;
      gap: 20px;

      .user {
        width: 330px;
        min-height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 20px;
        border-radius: 5px;
        gap: 5px;
        background: $fallback;
        box-shadow: 0px 0px 3px 5px white, 0px 0px 3px 5px $fallback;

        .img {
          width: 150px;
          height: 150px;
          border-radius: 100%;
          overflow: hidden;
          margin: 0;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        h2 {
          font: 500 19px "Poppins", sans-serif;
          color: rgb(239, 239, 239);
          text-transform: capitalize;
        }
        h3 {
          font: 500 16px "Nunito Sans", sans-serif;
          color: mediumspringgreen;
        }
        p {
          font: 400 12px "Poppins", sans-serif;
          color: rgb(220, 218, 218);
          line-height: 25px;
        }
      }
    }
  }

  .posts {
    width: 97vw;
    height: fit-content;
    padding: 10px;
    background: $fallback;
    overflow: hidden;
    overflow-x: auto;
    border-radius: 6px;
    margin: 10px auto;
    header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px auto;

      button,
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        text-decoration: none;
        text-transform: capitalize;
        min-width: 100px;
        height: 40px;
        padding: 5px 15px;
        border: none;
        border-radius: 30px;
        background: white;
        font-weight: 600;

        color: $fallback;
        margin: 10px 20px;
      }
    }
    h1 {
      color: white;
      font-family: "Grand Hotel", cursive;

      span {
        font-size: 17px;
        color: mediumspringgreen;
      }
    }

    form {
      width: 400px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 10px;
      margin: 5px auto;
      background: white;

      input {
        width: 80%;
        height: 100%;
        outline: none;
        background: transparent;
        border: none;
        padding: 3px 5px 3px 15px;
      }
      button {
        width: 30%;
        height: 100%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
      }

      @media screen and (max-width: 450px) {
        width: 96vw;
      }
    }
    .search-p {
      color: rgb(202, 201, 201);
    }

    .all-posts {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 10px;
      .post {
        width: 330px;
        min-height: 450px;
        padding: 20px;
        margin: 20px auto;
        border-radius: 5px;
        background: rgb(244, 244, 244);
        box-shadow: 0 0 5px $fallback, 0 0 3px white;

        .img {
          width: 150px;
          height: 150px;
          border-radius: 100%;
          margin: auto;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .title {
          font: 600 20px "Poppins", sans-serif;
          text-transform: capitalize;
          color: rgba(230, 101, 129, 1);
        }

        .sub-title {
          font: 600 17px "Poppins", sans-serif;
          color: rgb(4, 158, 99);
          padding: 10px;
        }
        h5 {
          text-align: center;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          color: rgb(4, 158, 99);
          span {
            padding: 5px;
            white-space: pre-wrap;
          }
        }
        p {
          width: 97%;
          margin: auto;
          text-align: center;
          font-size: 14px;
        }
        .author {
          text-align: center;
          text-transform: capitalize;
          padding: 10px;
          font: 600 15px "Poppins", sans-serif;
        }

        @media screen and (max-width: 650px) {
          width: 90vw;
        }
      }
    }
  }
}
</style>
