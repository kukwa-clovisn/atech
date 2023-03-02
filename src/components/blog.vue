<template>
  <main>
    <div class="landing-page">
      <header>
        <div class="logo">
          <div class="logo-img">logo</div>
        </div>
        <div class="routes">
          <div class="route"><router-link to="/">Home</router-link></div>
          <div class="route"><router-link to="/about">about</router-link></div>
          <div class="route"><router-link to="/">why-us</router-link></div>
          <div class="route"><router-link to="/">contact</router-link></div>
        </div>
        <div class="logins">
          <div class="route"><router-link to="/login">signin</router-link></div>
          <div class="route">
            <router-link to="/register">register</router-link>
          </div>
        </div>
      </header>
      <div class="landing-page-content">
        <h1>Advanced Technology Academy</h1>
        <p>
          Be the first to get updated with our latest updates, changes and new
          developments.
        </p>
        <router-link to="/signup">sign up</router-link>
      </div>
      <div class="animation">
        <div class="animate1"></div>
        <div class="animate2"></div>
      </div>
    </div>
    <div class="section-1">
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
$basecolor: #23426e;
main {
  .landing-page {
    height: fit-content;
    background: rgb(239, 239, 239);

    header {
      width: 100vw;
      height: 14vh;
      background: linear-gradient(to bottom left, $fallback, $basecolor);
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        width: 15vw;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }

      .routes,
      .logins {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .route {
          a {
            color: white;
            text-decoration: none;
            text-transform: capitalize;
            font-size: 13px;
          }
        }
      }

      .logins {
        width: 35%;
      }
    }

    .landing-page-content {
      width: 70vw;
      height: fit-content;
      padding: 10px;
      margin: 20px auto;
      margin-top: 25vh;

      h1 {
        font-size: 40px;
        padding: 30px 20px;
      }
      p {
        width: 80%;
        margin: 0 auto;
        padding: 5px;
      }

      a {
        display: block;
        width: 300px;
        height: 60px;
        border-radius: 30px;
        margin: 5px auto;
        color: white;
        background: linear-gradient(to bottom left, $fallback, $basecolor);

        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: uppercase;
      }
    }
  }

  .section-1 {
    width: 100vw;
    min-height: 100vh;
    background: rgb(241, 241, 241);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 40px 5px;

    h1 {
      padding: 20px;
      font: 500 50px "Nunito sans", "Poppins", sans-serif;
      color: $fallback;
      text-transform: capitalize;
      padding-top: 50px;

      @media screen and (max-width: 400px) {
        font-size: 35px;
      }
    }
    p {
      width: 80%;
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
        width: 30%;
        height: fit-content;
        border-radius: 3px;
        margin: 4px;
        background: inherit;

        .icon {
          width: 100px;
          height: 100px;
          border-radius: 100%;
          margin: 10px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          // background: rgb(182, 189, 196);
          border: 1px solid rgb(215, 214, 214);

          i {
            font-size: 40px;
          }
        }

        h2 {
          text-transform: capitalize;
          font: 600 26px "Nunito sans", "Poppins", sans-serif;
          color: $fallback;
        }

        p {
          color: $fallback;
          font-size: 15px;
        }

        @media screen and(max-width: 1250px) {
          width: 30%;

          @media screen and (max-width: 935px) {
            width: 90%;
            margin: 20px auto;
          }
        }

        &:hover {
          cursor: pointer;
          box-shadow: 0 0 2px 1px rgb(215, 214, 214);
          transform: scale(1.1);
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
    background: $fallback;
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
    width: 100vw;
    height: fit-content;
    padding: 10px;
    background: $fallback;
    overflow: hidden;
    overflow-x: auto;
    margin: 0 auto;
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
