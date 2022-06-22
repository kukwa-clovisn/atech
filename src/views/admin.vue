<template>
  <main :class="{ squeeze: shrink }">
    <header>
      <button class="profile-menu-button" @click="expandPage()" v-if="!shrink">
        <i class="fa-solid fa-bars"></i>
      </button>
      <h1 @click="dashboard()">Dash<span>board</span></h1>
      <div class="right-header">
        <button class="guide">
          <router-link to="/admin/guide" class="route"
            ><i class="fa-solid fa-circle-info"></i
          ></router-link>
        </button>
        <button class="create-course" @click="createCourse()">
          <i class="fa-regular fa-square-plus"></i>course
        </button>
        <nav class="large-screen-only">
          <span class="profile" @click="dashboard()">{{
            adminResponse.name.split("")[0]
          }}</span>
        </nav>
      </div>
    </header>
    <div class="profile-menu" v-if="shrink">
      <nav class="logo">
        <i class="fa-solid fa-bars" @click="shrinkPage()" v-if="shrink"></i>
        <span title="World of Technology and more"> Atech</span>
      </nav>
      <div class="profile-header" @click="dashboard()">
        <span>
          <img src="../assets/book.jpeg" alt="" />
        </span>
        <p :title="adminResponse.name + '\n' + adminResponse.email">
          {{ adminResponse.name }}<br />
          <i>{{ adminResponse.email }}</i>
        </p>
      </div>
      <div class="profile-items">
        <router-link to="/admin/blog" class="route">
          <li>
            <span><i class="fa-solid fa-pen"></i></span>
            <p>blog post</p>
          </li></router-link
        ><router-link to="/admin/email" class="route">
          <li>
            <span><i class="fa-solid fa-envelope"></i></span>
            <p>Email client</p>
          </li></router-link
        >

        <router-link
          to="/admin/dashboard"
          class="route"
          :class="{ active: active }"
          @click="createCourse()"
        >
          <li>
            <span><i class="fa-solid fa-square-plus"></i></span>
            <p>course</p>
          </li></router-link
        >
        <router-link to="/blog" class="route">
          <li>
            <span><i class="fa-solid fa-blog"></i></span>
            <p>view posts</p>
          </li>
        </router-link>
        <router-link to="/admin/course/courses/view" class="route">
          <li>
            <span><i class="fa-solid fa-book-open-reader"></i></span>
            <p>view courses</p>
          </li>
        </router-link>
        <router-link to="/admin/guide" class="route">
          <li>
            <span><i class="fa-solid fa-book-open-reader"></i></span>
            <p>Admin guide</p>
          </li>
        </router-link>
        <router-link to="/" class="small-screen-only route">
          <li>
            <span><i class="fa-solid fa-house"></i></span>
            <p>home</p>
          </li>
        </router-link>
      </div>
      <div class="profile-bottom">
        <router-link to="/admin/blog" class="route">
          <li>
            <span><i class="fa-solid fa-gear"></i></span>
            <p>setting</p>
          </li></router-link
        >
        <router-link to="/admin/blog" class="route">
          <li>
            <span><i class="fa-regular fa-message"></i></span>
            <p>feedback</p>
          </li></router-link
        >
        <router-link to="/" class="route">
          <li>
            <span><i class="fa-solid fa-power-off"></i></span>
            <p>log out</p>
          </li></router-link
        >
      </div>
    </div>
    <div class="authentication" v-if="auth">
      <form @submit.prevent="authAdmin()">
        <h1>Admin authentication</h1>
        <div class="auth">
          <label for="admin-name">name:</label>
          <input
            type="text"
            name="username"
            id="admin-name"
            v-model="admin.username"
            placeholder="Admin Name..."
            required
          />
        </div>
        <div class="auth">
          <label for="admin-email">admin email:</label>
          <input
            type="email"
            name="email"
            id="admin-email"
            v-model="admin.email"
            placeholder="Admin Email..."
            required
          />
        </div>
        <div class="auth">
          <label for="password">passcode:</label
          ><input
            type="password"
            name="password"
            id="passcode"
            v-model="admin.password"
            placeholder="Secret key..."
            required
          />
        </div>
        <div class="auth">
          <label for="course">course:</label>
          <select
            name="course"
            id="course"
            v-model="admin.course"
            placeholder="select admin course..."
            required
          >
            <option value="Cryptocurrency">Cryptocurrency</option>
            <option value="Forex">Forex</option>
            <option value="Design">Design</option>
            <option value="Web Development">Web Development</option>
            <option value="Blockchain">Blockchain</option>
            <option value="Music">Music</option>
          </select>
        </div>
        <button type="submit">access page</button>
        <div class="not-admin">
          <a href="/">i'm not an admin</a><a href="/">home</a>
        </div>
      </form>
      <div class="error" v-if="authError">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>error: {{ adminResponse.status }}</span>
      </div>
    </div>
    <router-view></router-view>
    <span class="to-landing-page reach"
      ><a href="/#contact" class="a"
        ><i class="fa-solid fa-person-circle-question"></i></a
    ></span>
  </main>
</template>

<script>
import { reactive, ref, onUpdated } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "Admin",
  setup() {
    const shrink = ref(true);
    const router = useRouter();
    const route = useRoute();
    let active = ref(false);

    const admin = reactive({
      username: "",
      email: "",
      password: "",
      course: "Design",
    });

    let adminResponse = reactive({
      name: "",
      email: "",
      status: "",
    });

    onUpdated(() => {
      console.log(route.params);
      if (route.params.course) {
        active.value = true;
        console.log("present");
      } else {
        active.value = false;
      }
    });

    const auth = ref(true);
    const authError = ref(false);

    const shrinkPage = () => {
      shrink.value = false;
    };

    const expandPage = () => {
      shrink.value = true;
    };

    async function authAdmin() {
      axios
        .post("/api/admin/auth", admin, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.statusText === "OK") {
            auth.value = false;
            adminResponse.name = res.data.username;
            adminResponse.email = res.data.email;
            localStorage.setItem("adminId", res.data.id);
            localStorage.setItem("courseId", res.data.course);
            router.push(`/admin/dashboard/course/${res.data.course}`);
          }
        })
        .catch((err) => {
          auth.value = true;
          authError.value = true;
          adminResponse.status = err.response.data.msg;
          setTimeout(post_error, 3000);
        });

      admin.username = "";
      admin.email = "";
      admin.password = "";
    }

    function post_error() {
      authError.value = false;
    }

    function createCourse() {
      router.push(
        `/admin/dashboard/course/${localStorage.getItem("courseId")}`
      );
    }

    function dashboard() {
      router.push("/admin/dashboard");
    }

    return {
      active,
      admin,
      auth,
      authError,
      shrink,
      adminResponse,
      shrinkPage,
      expandPage,
      authAdmin,
      createCourse,
      dashboard,
    };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
$col: #3d566f;
$adminCol: rgb(21, 55, 101);

::-webkit-scrollbar {
  width: 10px;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb {
  background: rgb(177, 176, 176);
  border-radius: 30px;
}

main {
  width: 100vw;
  min-height: 100vh;
  background: rgb(249, 249, 249);
  padding-top: 16vh;
  overflow-x: hidden;

  header {
    width: 100%;
    height: 12vh;
    padding: 0 50px;
    background: white;
    border-bottom: 2px solid whitesmoke;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    .profile-menu-button {
      width: 50px;
      height: 50px;
      border-radius: 1px 0 0 1px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin: 0;
      background: transparent;
      z-index: 1;
      animation: slice-in 0.3s linear forwards;

      i {
        font-size: 27px;
        color: rgb(73, 73, 73);
      }
    }

    h1 {
      font: 600 28px "Comic Neue", cursive;
      cursor: pointer;
      span {
        color: tomato;
      }
    }

    .right-header {
      width: 30%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .guide {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background: whitesmoke;

      border: none;

      .route {
        width: 100%;
        height: 100%;
        border-radius: 100%;
        display: flex;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        i {
          font-size: 25px;
          color: rgb(97, 97, 97);
        }
      }
    }

    .create-course {
      width: 100px;
      height: 50px;
      border-radius: 3px;
      border: none;
      background: whitesmoke;

      i {
        color: tomato;
        font-size: 24px;
      }
    }

    nav .profile {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $baseColor;
      color: white;
      border-radius: 100%;
      font: 500 16px "Poppins", sans-serif;
      text-transform: capitalize;
      cursor: pointer;
    }

    @media screen and (max-width: 500px) {
      padding: 0 10px;
      flex-direction: row-reverse;
      .large-screen-only {
        display: none;
      }
      .logo span {
        font-size: 15px;
      }
    }
  }

  .profile-menu {
    width: 19vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: white;
    box-shadow: 0 3px 2px 1px rgb(220, 219, 219);
    animation: slide-in 0.2s 1 linear alternate forwards;

    .logo {
      width: 100%;
      height: 12vh;
      border-radius: 0 0 10px 10px;
      cursor: pointer;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      i {
        font-size: 23px;
        padding: 0;
        margin: 0;
      }
      span {
        display: flex;
        padding: 10px;
        color: rgb(105, 104, 104) e;
        font: 700 20px "Comic Neue", cursive;
      }
    }

    .profile-header {
      width: 100%;
      height: 27vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 5px 0;
      background: white;

      span {
        width: 90px;
        height: 90px;
        display: flex;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        cursor: pointer;

        img {
          width: auto;
          height: 100%;
          cursor: pointer;
        }
      }
      p {
        width: 95%;
        padding-left: 10px;
        font: 700 15px "Nunito Sans", sans-serif;
        color: rgb(105, 104, 104);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 30px;
        i {
          font-size: 12px;
        }
      }
    }

    .profile-items,
    .profile-bottom {
      width: 100%;
      height: 42vh;
      overflow: scroll;
      overflow-x: hidden;
      border-bottom: 1px solid rgb(195, 194, 194);

      .route {
        text-decoration: none;
        width: 100%;
        text-transform: capitalize;
        text-align: left;
        color: rgb(123, 122, 122);

        &.router-link-exact-active {
          i {
            color: tomato;
          }
          p {
            color: tomato;
          }
        }
      }

      .route.active {
        i {
          color: tomato;
        }
        p {
          color: tomato;
        }
      }

      .small-screen-only {
        display: none;
      }

      li {
        list-style-type: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        margin: 5px auto;
        height: 45px;
        cursor: pointer;

        span {
          width: 28%;
          display: flex;
          justify-content: center;
          align-items: center;
          i {
            font-size: 20px;
            color: rgb(111, 110, 110);
          }
        }
        p {
          text-align: left;
          width: 70%;
          color: rgb(112, 110, 110);
        }

        &:hover {
          background: whitesmoke;
          border-left: 5px solid tomato;
        }

        @media screen and (max-width: 1000px) {
          span i,
          p {
            font-size: 12px;
          }
        }
      }

      @media screen and (max-width: 500px) {
        .small-screen-only {
          display: flex;
        }
      }
    }

    .profile-bottom {
      height: 17vh;
      border-bottom: none;
      .route {
        li {
          height: 35px;
        }
      }
    }

    @media screen and (max-width: 770px) {
      position: relative;
      left: 0;
      width: 100%;
      height: fit-content;
      padding: 15px;
    }
  }

  @keyframes slide-in {
    from {
      left: -400px;
    }
    to {
      left: 0;
    }
  }

  .authentication {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 0;
    background: $fallback;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
      width: 550px;
      height: fit-content;
      background: white;
      border-radius: 5px;
      padding: 20px;

      .auth {
        width: 100%;
        height: 50px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        label {
          text-transform: capitalize;
          text-align: left;
          width: 30%;
          color: $col;
        }
        input,
        select {
          width: 70%;
          height: 100%;
          border: none;
          outline: none;
          background: whitesmoke;
          color: $col;
          padding: 3px 10px;
          border-radius: 3px;
        }
      }

      p {
        color: red;
      }
      button {
        width: 100%;
        padding: 0 10px;
        height: 50px;
        margin: 10px auto;
        background: $SecondaryColor;
        color: white;
        text-transform: capitalize;
        border: none;
        border-radius: 3px;
      }

      .not-admin {
        width: 100%;
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
          text-decoration: none;
          text-transform: capitalize;
          color: $col;
          font: 500 13px "Poppins", sans-serif;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      @media screen and (max-width: 570px) {
        width: 98%;
        margin: 0;
        .auth {
          height: fit-content;
          flex-direction: column;

          label,
          input,
          select {
            width: 100%;
            height: 35%;
          }
          input,
          select {
            height: 60px;
          }
        }
      }
    }

    .error {
      width: fit-content;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: $SecondaryColor;
      border-radius: 4px;
      padding: 20px;
      position: fixed;
      left: 40vw;
      top: 25vh;
      z-index: 1;
      animation: pop 1s linear alternate forwards;

      i {
        font-size: 30px;
        margin-right: 10px;
        color: white;
      }

      span {
        color: white;
      }
    }

    @keyframes pop {
      from {
        top: 10vh;
      }
      to {
        top: 25vh;
      }
    }
  }
}

main.squeeze {
  width: 81vw;
  float: right;
  header {
    width: 81%;
  }

  @media screen and (max-width: 770px) {
    width: 100vw;

    header {
      width: 100%;
    }
  }
}
</style>
