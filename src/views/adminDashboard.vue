<template>
  <div class="dashboard" :class="{ dark: mode.dark, gray: mode.gray }">
    <h1>Dashboard</h1>
    <div class="right-dashboard">
      <div class="profile">
        <div class="img">
          <img src="../assets/book.jpeg" alt="" />
        </div>
        <div class="info">
          <h2>{{ response.name }}</h2>
          <p>{{ response.email }}</p>
          <button>edit profile</button>
          <p>Choose color mode<i class="fa-regular fa-hand-point-down"></i></p>
          <div class="page-modes">
            <button
              class="page-mode light"
              :class="{ active: mode.light }"
              @click="pagemode('light')"
              title="Light mode"
            >
              <span
                ><i class="fa-solid fa-power-off off"></i
                ><i class="fa-solid fa-bahai"></i
              ></span>
            </button>
            <button
              class="page-mode dark"
              :class="{ active: mode.dark }"
              @click="pagemode('dark')"
              title="Dark mode"
            >
              <span
                ><i class="fa-solid fa-power-off off"></i
                ><i class="fa-solid fa-bahai"></i
              ></span>
            </button>
            <button
              class="page-mode gray"
              :class="{ active: mode.gray }"
              @click="pagemode('gray')"
              title="Gray mode"
            >
              <span
                ><i class="fa-solid fa-power-off off"></i
                ><i class="fa-solid fa-bahai"></i
              ></span>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="left-dashboard">
      <div class="content">
        <button>
          <router-link
            to="/admin/dashboard/course/course"
            class="route"
            @click="createCourse()"
            ><i class="fa-solid fa-square-plus"></i>create a course</router-link
          >
        </button>

        <button>
          <router-link to="/admin/blog" class="route"
            ><i class="fa-solid fa-pen"></i>write a post</router-link
          >
        </button>

        <button>
          <router-link to="/admin/email" class="route"
            ><i class="fa-solid fa-envelope"></i>email client(s)</router-link
          >
        </button>

        <button>
          <router-link to="/admin/course/courses/view" class="route">
            <i class="fa-solid fa-book-open-reader"></i>Analytics</router-link
          >
        </button>

        <button>
          <router-link to="/admin/guide" class="route"
            ><i class="fa-solid fa-circle-info"></i>admin guide</router-link
          >
        </button>
        <button>
          <router-link to="/admin/feedback" class="route"
            ><i class="fa-solid fa-message"></i>feedback</router-link
          >
        </button>
        <button>
          <router-link to="/" class="route"
            ><i class="fa-solid fa-power-off"></i>log out</router-link
          >
        </button>
      </div>
      <div class="left-content-main">
        <div class="img">
          <img src="../assets/mtn-computer.png" alt="" />
        </div>
        <div class="analytics">
          <h2>analytics</h2>
          <h4>Courses:</h4>
          <ul>
            <li v-for="(course, index) in response.data" :key="index">
              <p>{{ course }}</p>
              <p>{{ index }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { computed, onMounted, reactive } from "vue";
import axios from "axios";
export default {
  name: "AdminDashboard",
  setup() {
    const router = useRouter();
    const store = useStore();

    let response = reactive({
      name: "",
      email: "",
      data: [],
    });

    const mode = computed(() => store.state.mode);

    function pagemode(mode) {
      store.dispatch("pagemode", mode);
    }

    onMounted(() => {
      axios(`api/admin/getAdmin/${localStorage.getItem("adminId")}`)
        .then((res) => {
          localStorage.setItem("admin", res.data.username);
          response.data = res.data.course;
          response.name = res.data.username;
          response.email = res.data.email;
        })
        .catch((err) => err);
    });

    function createCourse() {
      router.push(
        `/admin/dashboard/course/${localStorage.getItem("courseId")}`
      );
    }

    return { response, mode, createCourse, pagemode };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: white;
$secondaryColor: #072e54;
$tertiaryColor: rgb(3, 122, 59);
$col1: white;
$col2: rgb(232, 232, 232);
$fallback: teal;
$baseColor: rgba(230, 101, 129, 1);
$text: rgb(84, 84, 84);

.dashboard {
  width: 100%;
  height: fit-content;

  h1 {
    width: 95%;
    margin: auto;
    text-align: left;
    padding: 20px;
    font-family: "Nunito Sans", sans-serif;
    color: rgb(41, 42, 44);
  }
  .right-dashboard {
    width: 80%;
    margin: auto;
    border-radius: 3px;
    height: fit-content;
    background: transparent;

    .profile {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;

      .img {
        width: 250px;
        height: 250px;
        border-radius: 100%;
        overflow: hidden;

        img {
          height: 100%;
          width: auto;
          cursor: pointer;
        }
      }

      .info {
        width: fit-content;
        height: fit-content;
        padding-left: 10px;
        h2,
        p {
          color: $col2;
          font-family: "Nunito Sans", sans-serif;
          text-align: left;
          color: $text;
        }
        button {
          width: 200px;
          height: 40px;
          background: rgb(141, 140, 140);
          color: $col2;
          border: none;
          border-radius: 3px;
          display: block;
          margin: 10px 0;
        }

        .page-modes {
          width: 90%;
          height: fit-content;
          margin: 10px auto;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;

          .page-mode {
            width: 40px;
            height: 40px;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            background: rgb(215, 214, 214);
            border: none;
            border-radius: 100%;
            padding: 2px;
            span {
              width: 100%;
              height: 100%;
              border-radius: 100%;
              background: white;
              display: flex;
              justify-content: center;
              align-items: center;

              i {
                font-size: 24px;
                display: none;
              }
              .off {
                font-size: 100%;
                display: block;
              }
            }
          }
        }

        .page-mode.dark {
          background: $secondaryColor;
          span {
            background: #194e82;
            box-shadow: 0 0 1px 1px #194e82;
          }
        }
        .page-mode.gray {
          background: rgb(27, 182, 99);
          span {
            background: $tertiaryColor;
            box-shadow: 0 0 1px 1px rgb(27, 182, 99);
          }
        }
        .page-mode.active {
          position: relative;
          order: 1;
          width: 40px;
          height: 40px;
          border-radius: 100%;
          animation: mode 2s infinite linear forwards;
          span {
            width: 100%;
            height: 100%;
            box-shadow: none;

            i {
              display: block;
              color: rgba(230, 101, 129, 1);
            }
            .off {
              display: none;
            }
          }
        }
        @keyframes mode {
          to {
            transform: rotateZ(360deg);
          }
        }
      }
      @media screen and (max-width: 635px) {
        flex-direction: column;
      }
    }
  }
  .left-dashboard {
    width: 95%;
    height: fit-content;
    padding: 0 10px;
    margin: 20px auto;

    .content {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      button {
        min-width: 210px;
        height: 55px;
        border: none;
        border-radius: 4px;
        margin: 10px;
        background: rgb(215, 214, 214);

        .route {
          text-decoration: none;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: $text;
        }

        i {
          color: $text;
          padding-right: 5px;
          font-size: 21px;
        }
      }
      @media screen and (max-width: 490px) {
        button {
          width: 95%;
        }
      }
    }
    .left-content-main {
      width: 100%;
      height: fit-content;

      .img {
        width: 100%;
        img {
          width: auto;
          height: 200px;
        }
      }
      h2 {
        text-align: left;
        text-transform: capitalize;
        padding: 10px;
        color: $text;
      }
      h4 {
        text-align: left;
        width: 90%;
        margin: auto;
        padding: 10px;
        color: $text;
      }
      ul {
        width: 95%;
        margin: 10px auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        li {
          background: rgb(215, 214, 214);
          list-style-type: none;
          width: 200px;
          height: 100px;
          margin: 10px;
          padding: 10px;
          border-radius: 5px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          align-items: center;
          flex-direction: column;

          p {
            color: $text;
          }
        }
        @media screen and (max-width: 490px) {
          width: 100%;
          li {
            width: 95%;
          }
        }
      }
    }
  }
}

.dashboard.dark,
.dashboard.gray {
  h1 {
    color: $primaryColor;
  }

  .right-dashboard .profile .info {
    h2,
    p {
      color: $col2;
    }

    button {
      background: $col2;
      color: $text;
    }
  }

  .left-dashboard .left-content-main {
    h2,
    h3,
    h4 {
      color: $col2;
    }
  }
}
</style>