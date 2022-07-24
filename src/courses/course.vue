<template>
  <div
    class="container"
    :class="{
      'light-mode': storeMode.light,
      'dark-mode': storeMode.dark,
      'cafe-mode': storeMode.cafe,
    }"
  >
    <div class="courses" v-if="!response.showCourse">
      <div class="course-container">
        <router-link to="/course" class="btn-courses"> Course page</router-link>
        <h2>{{ response.course }} courses</h2>
        <ul>
          <li v-for="(course, index) in response.courses" :key="index">
            <span class="course-number">{{ index + 1 }}</span>

            <p class="title">{{ course.title }}</p>
            <p class="intro">{{ course.intro }}</p>
            <button @click="getCourse(course._id, course.name)">
              start course
            </button>
            <footer>By: {{ course.author }}</footer>
          </li>
        </ul>
      </div>
      <div
        class="description-container"
        v-if="desc.course || desc.bookmrk || desc.subs"
      >
        <transition name="appear">
          <div class="content" v-if="desc.course">
            <span class="close" @click="desc.course = false">&times;</span>
            <h3><i class="fa-solid fa-book-open"></i>Courses</h3>
            <p>
              <a>{{ response.courses.length }}</a> Courses
            </p>
          </div>
        </transition>
        <transition name="appear">
          <div class="content" v-if="desc.bookmrk">
            <span class="close" @click="desc.bookmrk = false">&times;</span>
            <h3><i class="fa-regular fa-star"></i>Boomark</h3>
            <p>
              Save some courses to study later. You can also find those courses
              in your profile
            </p>
          </div>
        </transition>
        <transition name="appear">
          <div class="content" v-if="desc.subs">
            <span class="close" @click="desc.subs = false">&times;</span>
            <h3><i class="fa-regular fa-bookmark"></i>Subscriptions</h3>
            <p>
              Register for courses to be able to study them. You can find a list
              of your registered courses in your profile
            </p>
          </div>
        </transition>
      </div>
    </div>
    <div
      id="tutorial"
      :class="{ 'light-mode': mode.light, 'gray-mode': mode.gray }"
      v-if="response.showCourse"
    >
      <div class="tutorial-common">
        <button @click="allCourses()" class="btn-courses">
          see all courses
        </button>
        <h1 class="course-name">{{ response.data.name }}</h1>
        <div class="logo">
          <img src="../assets/logo-white.jpg" alt="" />
        </div>
        <h2>Advanced Tech Academy</h2>
        <h2 v-html="response.data.title" class="course-title"></h2>
        <h4>By: {{ response.data.author }}</h4>
        <p v-html="response.data.intro" class="intro"></p>
      </div>

      <ul>
        <h3>tutorial objectives:</h3>
        <li
          v-for="(objective, index) in response.data.objectives"
          :key="objective"
        >
          <span>{{ index + 1 }}</span
          ><a v-html="objective"></a>
        </li>
      </ul>

      <div v-html="response.data.course"></div>
      <div v-html="response.data.firstdescription"></div>
      <div class="videos">
        <div
          class="video"
          v-for="(video, index) in response.data.firstvideolist"
          :key="index"
          v-html="video"
        ></div>
      </div>

      <div v-html="response.data.description"></div>
      <div class="videos">
        <div
          class="video"
          v-for="(video, index) in response.data.secondvideolist"
          :key="index"
          v-html="video"
        ></div>
      </div>

      <div v-html="response.data.seconddescription"></div>
      <div class="videos">
        <div
          class="video"
          v-for="(video, index) in response.data.thirdvideolist"
          :key="index"
          v-html="video"
        ></div>
      </div>

      <div class="video" v-html="response.data.conclusion"></div>
      <div class="feedback">
        <button
          :disabled="response.liked"
          :class="{ active: response.liked }"
          class="like"
          title="I like this course"
          @click="
            setLike(response.data._id, response.data.name, response.data.title)
          "
        >
          <i class="fa-solid fa-thumbs-up like" v-if="response.liked"></i
          ><i class="fa-regular fa-thumbs-up" v-if="!response.liked"></i>
          <span>like</span>
        </button>
        <button
          :disabled="response.disliked"
          :class="{ active: response.disliked }"
          class="dislike"
          title="I Don't like this course"
          @click="
            setDislike(
              response.data._id,
              response.data.name,
              response.data.title
            )
          "
        >
          <i
            class="fa-solid fa-thumbs-down dislike"
            v-if="response.disliked"
          ></i
          ><i class="fa-regular fa-thumbs-down" v-if="!response.disliked"></i>
          <span>Dislike</span>
        </button>
        <button
          :disabled="response.bookmarked"
          @click="
            bookmarkFunc(
              response.data._id,
              response.data.name,
              response.data.title
            )
          "
          :class="{ active: response.bookmarked }"
        >
          <i
            class="fa-solid fa-bookmark"
            title="Added to Bookmarks"
            v-if="response.bookmarked"
          ></i>
          <i
            class="fa-regular fa-bookmark"
            title="Save to study later"
            v-if="!response.bookmarked"
          ></i
          ><span> save as Bookmark</span>
        </button>
      </div>
      <Contact :id="response.data._id" :name="response.data.name" />
      <footer>&copy;Atech2022</footer>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Contact from "../components/contact.vue";
import { reactive, onMounted, computed } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import { useColorMode } from "@vueuse/core";
export default {
  components: { Contact },
  name: "Course",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const store = useStore();

    const storeMode = computed(() => store.state.course_mode);
    let response = reactive({
      data: [],
      title: "",
      course: "",
      videoUrl: "",
      description: "",
      objectives: [],
      courses: [],
      bookmarks: [],
      showCourse: false,
      bookmarked: false,
      liked: false,
      disliked: false,
    });

    let desc = reactive({
      course: true,
      subs: true,
      bookmrk: true,
    });

    function allCourses() {
      response.showCourse = false;
      axios(`/api/user/course/all/${localStorage.getItem("courseId")}`, {
        headers: { private: false },
      })
        .then((res) => {
          if (res.statusText === "OK") {
            route.params.course = localStorage.getItem("courseId");
            response.courses = res.data;
            response.course = route.params.course;
          } else {
            router.push("/login");
          }
        })
        .catch((err) => {
          router.push("/login");
          return err;
        });
    }

    onMounted(() => {
      axios(`api/signup/subscription/${route.params.course}`)
        .then((res) => {
          if (res.statusText === "OK") {
            allCourses();
          }
        })
        .catch((err) => {
          router.push("/course");
        });
    });

    function bookmarkFunc(courseId, name, title) {
      axios
        .post(`/api/user/status/${name}`, {
          id: courseId,
          bookmarked: true,
          name: `${localStorage.getItem("userId")}`,
          data: new Date(),
          title: title,
        })
        .then((res) => {
          if (res.statusText === "OK") {
            response.bookmarked = true;
          }
        });
    }

    function getCourse(id, name) {
      axios(`api/user/course/${id}`, { headers: { coursename: name } })
        .then((res) => {
          response.showCourse = true;
          response.data = res.data;
          response.bookmarked = false;
          response.liked = false;
          response.disliked = false;

          let viewArr = response.data.views.map(
            (view) => view.name === localStorage.getItem("userId")
          );
          if (!viewArr.includes(true) || !viewArr.length) {
            axios
              .post(`api/user/status/${response.data.name}`, {
                name: `${localStorage.getItem("userId")}`,
                viewed: true,
                id: response.data._id,
                title: response.data.title,
              })
              .then((res) => res)
              .catch((err) => err);
          }

          if (response.data.Bookmarks.length >= 1) {
            for (let i = 0; i < response.data.Bookmarks.length; i++) {
              if (
                response.data.Bookmarks[i].name ===
                localStorage.getItem("userId")
              ) {
                response.bookmarked = true;
              }
            }
          }

          if (response.data.likes.length >= 1) {
            for (let i = 0; i < response.data.likes.length; i++) {
              if (
                response.data.likes[i].name === localStorage.getItem("userId")
              ) {
                response.liked = true;
              }
            }
          }

          if (response.data.dislikes.length >= 1) {
            for (let i = 0; i < response.data.dislikes.length; i++) {
              if (
                response.data.dislikes[i].name ===
                localStorage.getItem("userId")
              ) {
                response.disliked = true;
              }
            }
          }
        })
        .catch((err) => err);
    }

    let user = localStorage.getItem("userId");
    function setLike(id, course, title) {
      axios
        .post(`api/user/status/${course}`, {
          name: user,
          id,
          title,
          like: true,
        })
        .then((res) => {
          response.liked = true;
        })
        .catch((err) => err);
    }

    function setDislike(id, course, title) {
      axios
        .post(`api/user/status/${course}`, {
          name: user,
          id,
          title,
          dislike: true,
        })
        .then((res) => {
          if (res.statusText === "OK") {
            response.disliked = true;
          }
        })
        .catch((err) => err);
    }

    const colorMode = useColorMode({
      attribute: "class",
      modes: {
        // custom colors
        dim: "dim",
        cafe: "cafe",
        dark: "dark",
        light: "light",
      },
    });

    const mode = reactive({
      light: false,
      cafe: true,
    });

    return {
      response,
      desc,
      mode,
      colorMode,
      storeMode,
      mode,
      bookmarkFunc,
      getCourse,
      allCourses,
      setLike,
      setDislike,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  .courses {
    width: 100%;
    height: fit-content;
    background: rgb(241, 242, 244);
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;

    .course-container {
      width: 65%;
      height: fit-content;
      h2 {
        width: 90%;
        height: 100px;
        margin: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-transform: capitalize;
        font: 700 23px "Nunito Sans", sans-serif;
        color: rgb(34, 34, 34);
      }
      ul {
        width: 100%;
        height: fit-content;
        list-style: none;

        li {
          width: 100%;
          height: fit-content;
          padding: 10px 0;
          background: white;
          box-shadow: 0 0 2px 2px rgb(241, 242, 244);
          border-radius: 10px;
          margin: 20px auto;
          position: relative;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;
          box-shadow: 0 0 1px 1px rgb(225, 105, 7);

          .course-number,
          .course-bookmark {
            position: absolute;
            top: -2%;
            left: -1%;
            width: 20px;
            height: 20px;
            border-radius: 100%;
            background: rgb(225, 105, 7);
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 9px;
          }
          .course-bookmark {
            left: 97%;
            top: 1%;
            background: transparent;

            i {
              color: #2d4a76;
              font-size: 25px;
              cursor: pointer;
            }
          }
          p {
            text-transform: capitalize;
            font: 600 17px "Poppins", sans-serif;
            padding: 5px;
          }
          .title {
            color: rgb(225, 105, 7);
          }
          .intro {
            font-size: 12px;
            color: rgb(133, 131, 131);
            color: #3d5272;
            font-family: "Poppins", sans-serif;
          }
          button {
            width: 200px;
            height: 35px;
            margin: 5px auto;
            border: none;
            border-radius: 30px;
            background: #2d4a76;
            color: white;
          }
        }
      }
    }

    .description-container {
      width: 23%;
      height: fit-content;
      padding-top: 50px;

      .content {
        width: 100%;
        height: fit-content;
        background: white;
        padding: 20px;
        position: relative;
        border-radius: 10px;
        margin: 20px auto;

        span {
          position: absolute;
          top: 1%;
          right: 5%;
          font-size: 20px;
          cursor: pointer;
        }

        h3 {
          text-align: left;
          padding: 10px;
        }
        p {
          font-size: 13px;
          a {
            color: rgb(225, 105, 7);
            font-size: 17px;
          }
        }
      }
    }

    @media screen and (max-width: 900px) {
      height: fit-content;
      flex-direction: column;

      .course-container,
      .description-container {
        width: 95%;
        margin: auto;
      }

      @media screen and (max-width: 400px) {
        .course-container {
          ul {
            height: fit-content;
            p {
              font-size: 15px;
            }
            .course-bookmark {
              left: 95%;
            }
          }
        }
      }
    }
  }
  .btn-courses {
    width: max-content;
    height: 35px;
    padding: 0 10px;
    border-radius: 5px;
    margin: 10px;
    background: #418ce4;
    color: white;
    text-decoration: none;
    text-transform: capitalize;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
  footer {
    background: transparent;
    font-family: "Grand Hotel", sans-serif;
  }
}

.container.dark-mode {
  .courses {
    background: linear-gradient(to top, rgb(8, 58, 88), #13253e);

    h2 {
      color: white;
    }

    .course-container {
      ul {
        li {
          background: rgb(8, 58, 88);
          box-shadow: 0 0 3px #102441;

          .title {
            color: rgb(255, 128, 24);
          }

          .intro {
            color: rgb(218, 217, 217);
          }
          footer {
            color: rgb(147, 145, 145);
          }
        }
      }
    }
    .description-container {
      .content {
        background: rgb(8, 58, 88);
        box-shadow: 0 0 3px #102441;

        span {
          color: white;
        }

        h3 {
          color: white;
        }

        p {
          color: rgb(174, 174, 174);
          a {
            color: rgb(225, 105, 7);
          }
        }
      }
    }
  }
}
</style>