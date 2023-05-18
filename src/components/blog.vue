<template>
  <main>
    <div class="landing-page">
      <div class="blur"></div>
      <pageHeaderComponent />
      <div class="landing-page-content">
        <h1>Advanced Technology Academy</h1>
        <p>
          Be the first to get updated with our latest updates, changes and new
          developments.
        </p>
        <router-link to="/login">sign up</router-link>
      </div>

      <div class="animation">
        <div class="animate1"></div>
        <div class="animate2"></div>
      </div>
    </div>
    <navbar />
    <div class="section-1">
      <h1>Atech Blog</h1>
      <p>Get updated about us here!</p>

      <form>
        <h3>sign up for our newsletter and updates</h3>
        <div class="form-data">
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            required
          />
          <button type="submit">sign up</button>
        </div>
      </form>
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

<script setup>
import axios from "axios";
import { reactive, onMounted, ref } from "vue";
import Header from "./header.vue";
import Footer from "./footer.vue";
import navbar from "./navbar.vue";
import pageHeaderComponent from "./page-header-component.vue";

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
</script>

<style lang="scss" scoped>
$fallback: rgb(19, 37, 62);
$basecolor: #23426e;
main {
  .landing-page {
    height: fit-content;
    background: url(../assets/book.jpeg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .landing-page-content {
      width: 70vw;
      height: fit-content;
      padding-top: 30px;
      position: relative;

      h1 {
        font: 700 50px "Montserrat", "Poppins", sans-serif;
        padding: 30px 20px;
        color: white;
      }
      p {
        width: 80%;
        margin: 10px auto;
        padding: 10px;
        color: rgb(225, 225, 225);
        font: 400 19px/32px "Montserrat", "Poppins", sans-serif;
      }

      a {
        display: block;
        width: 300px;
        height: 60px;
        border-radius: 30px;
        margin: 20px auto;
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
      font: 600 50px "Nunito sans", "Poppins", sans-serif;
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
      padding: 10px;
      color: rgb(85, 93, 98);
    }

    form {
      width: fit-content;
      height: fit-content;
      padding: 10px;
      margin: 10px auto;

      h3 {
        text-transform: capitalize;
        padding: 20px;
        text-align: center;
        color: #e66581;
        font: 500 20px "Nunito Sans", sans-serif;
      }

      .form-data {
        width: 350px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border: 1px solid rgb(237, 233, 233);
        box-shadow: 0 0 16px 7px rgb(228, 228, 228);
        margin: 10px auto;
        border-radius: 5px;
        overflow: hidden;

        input {
          width: 75%;
          height: 100%;
          border: none;
          background: transparent;
          padding: 4px 10px;
          outline: none;
        }

        button {
          width: 25%;
          height: 100%;
          background: $basecolor;
          color: white;
          text-transform: uppercase;
          border: none;

          &:hover {
            background: #e66581;
            transform: none;
          }
        }
      }
    }

    .flex-div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      width: 90vw;
      gap: 20px;

      .flex-content {
        width: 30%;
        height: 380px;
        padding: 20px 10px;
        background: white;
        border-radius: 5px;
        transition: all 0.3s ease;
        box-shadow: 0 0 20px 10px rgb(226, 226, 226);

        .icon {
          width: 100px;
          height: 100px;
          border-radius: 100%;
          margin: 10px auto;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid rgb(215, 214, 214);

          i {
            font-size: 40px;
          }
        }

        h2 {
          text-transform: capitalize;
          font: 600 26px "Montserrat", "Nunito sans", "Poppins", sans-serif;
          color: $fallback;
        }

        p {
          color: $fallback;
          font: 400 17px/28px "Montserrat", "Nunito Sans", sans-serif;
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
          border: 1px solid #e66581;
          transform: translateY(-10px);

          .icon {
            border: 1px solid #e66581;

            i {
              color: #e66581;
            }
          }

          h2 {
            color: #e66581;
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
        padding: 20px;
        text-transform: capitalize;
        color: white;
      }

      p {
        padding: 20px 10px;
        line-height: 26px;
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
