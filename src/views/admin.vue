<template>
  <main :class="{ squeeze: shrink, 'dark-mode': dark }" class="light-mode">
    <header>
      <button class="profile-menu-button" @click="expandPage()" v-if="!shrink">
        <i class="fa-solid fa-bars"></i>
      </button>
      <h1 @click="dashboard()">Dash<span>board</span></h1>
      <button
        class="mode"
        title="Toggle Mode"
        :class="{ switchMode: dark }"
        @click="dark = !dark"
      >
        <span></span>
      </button>
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
        <span class="span">
          <img src="../assets/book.jpeg" alt="" />
        </span>
        <p :title="adminResponse.name + '\n' + adminResponse.email">
          {{ adminResponse.name }}<br />
          <span class="profile-email">{{ adminResponse.email }}</span>
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
          to="/admin/dashboard/course/course"
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
            <span><i class="fa-solid fa-circle-info"></i></span>
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
import { reactive, ref, onMounted, onUpdated } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "Admin",
  setup() {
    const shrink = ref(true);
    const router = useRouter();
    const route = useRoute();
    let active = ref(false);
    let dark = ref(true);
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

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
    onMounted(() => {
      axios("/api/color/admin")
        .then((res) => {
          if (res.statusText === "OK") {
            localStorage.setItem("colormode", res.data);
          }
        })
        .catch((err) => console.log(err));
    }),
      onUpdated(() => {
        if (route.params.course) {
          active.value = true;
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
        .post("/api/admin/auth", admin, config)
        .then((res) => {
          if (res.statusText === "OK") {
            console.log(res);
            auth.value = false;
            adminResponse.name = res.data.username;
            adminResponse.email = res.data.email;
            localStorage.setItem("adminId", res.data.id);
            localStorage.setItem("courseId", res.data.course);
            router.push(`/admin/dashboard`);
          }
        })
        .catch((err) => {
          auth.value = true;
          authError.value = true;
          if (err.response.data) {
            adminResponse.status = err.response.data.msg;
          } else {
            adminResponse.status = "Something went wrong. Access Denied";
          }

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
      dark,
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
$randomColor: rgba(230, 101, 129, 1);

$primaryColor: #072e54;
$secondaryColor: rgb(215, 214, 214);
$tertiaryColor: #194e82;
$textColor1: white;
$textColor2: whitesmoke;
$baseColor: rgba(230, 101, 129, 1);
$misc: rgb(232, 232, 232);
$fallback: teal;

::-webkit-scrollbar {
  width: 10px;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb {
  border-radius: 30px;
}

main {
  width: 100vw;
  min-height: 100vh;
  padding-top: 16vh;
  overflow-x: hidden;

  header {
    width: 100%;
    height: 12vh;
    padding: 0 50px;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    .mode {
      width: 50px;
      height: 20px;
      border-radius: 10px;
      border: 1px solid $tertiaryColor;
      background: rgb(232, 232, 232);
      background: $primaryColor;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 2px;

      span {
        height: 20px;
        width: 20px;
        border-radius: 100%;
        background: $tertiaryColor;
      }
    }
    .mode.switchMode {
      background: white;
      border: none;
      position: relative;

      span {
        position: absolute;
        right: 80%;
        top: 0;
        background: rgb(206, 205, 205);
        animation: switch 1s 1 linear alternate forwards;
      }

      @keyframes switch {
        to {
          right: 0;
        }
      }
    }

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
      }
    }

    h1 {
      font: 600 28px "Comic Neue", cursive;
      cursor: pointer;
    }

    .right-header {
      width: 45%;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .guide {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      background: transparent;

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
        }
      }
    }

    .create-course {
      width: 100px;
      height: 50px;
      border-radius: 3px;
      border: none;

      i {
        font-size: 24px;
      }
    }

    nav .profile {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
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
      cursor: pointer;

      .span {
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
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 20px;
        .profile-email {
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

      .route {
        text-decoration: none;
        width: 100%;
        text-transform: capitalize;
        text-align: left;

        li {
          list-style-type: none;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          width: 100%;
          margin: 0 auto;
          height: 50px;
          cursor: pointer;

          span {
            width: 28%;
            display: flex;
            justify-content: center;
            align-items: center;
            i {
              font-size: 20px;
            }
          }
          p {
            text-align: left;
            width: 70%;
          }

          @media screen and (max-width: 1000px) {
            span i,
            p {
              font-size: 12px;
            }
          }
        }

        &.router-link-exact-active {
          li {
            border-left: 5px solid $baseColor;
          }
        }
      }

      .small-screen-only {
        display: none;
      }

      .route.active {
        li {
          border-left: 5px solid $baseColor;
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
    background: #072e54;
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

      h1 {
        color: rgb(47, 47, 47);
      }

      .auth {
        width: 100%;
        height: 55px;
        margin: 20px auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        label {
          text-transform: capitalize;
          text-align: left;
          width: 30%;
          font: 600 18px "Nunito Sans", sans-serif;
          color: rgb(67, 67, 67);
        }
        input,
        select {
          width: 75%;
          height: 100%;
          border: none;
          outline: none;
          background: whitesmoke;
          color: rgb(63, 63, 63);
          font-weight: 500;
          font-size: 16px;
          padding: 3px 10px;
          border-radius: 3px;
          box-shadow: 0 3px 2px 1px rgb(207, 206, 206);
        }
      }
      button {
        width: 100%;
        padding: 0 10px;
        height: 50px;
        margin: 10px auto;
        background: $randomColor;
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
          color: rgb(99, 98, 98);
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

main.light-mode {
  background: rgb(243, 243, 243);

  ::-webkit-scrollbar-thumb {
    background: rgb(174, 173, 173);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  i,
  .route {
    color: rgb(105, 104, 104);
  }
  .profile-items {
    border-bottom: 1px solid rgb(232, 232, 232);
  }

  .route li:hover {
    border-left: 6px solid $baseColor;
    background: rgb(232, 232, 232);
  }
  header {
    background: white;
    border-bottom: 1px solid rgb(232, 232, 232);
    h1 span {
      color: $baseColor;
    }
    .create-course {
      background: rgb(232, 232, 232);
      i {
        color: $randomColor;
      }
    }
    nav .profile {
      background: $primaryColor;
      color: white;
    }
  }

  .profile-menu {
    border-right: 1px solid rgb(232, 232, 232);
  }

  .profile-header:hover {
    background: rgb(232, 232, 232);
    border-left: 5px solid $baseColor;
  }

  input,
  select,
  .route.active {
    background: rgb(232, 232, 232);
  }

  h1 span,
  .create-course i,
  .route.router-link-exact-active li i,
  .route.router-link-exact-active li p,
  .route.active i,
  .route.active p {
    color: $baseColor;
  }

  .route.router-link-exact-active li {
    background: rgb(232, 232, 232);
  }

  .profile-menu,
  .profile-header {
    background: white;
    border-bottom: 1px solid rgb(232, 232, 232);
  }
}

main.dark-mode {
  background: $tertiaryColor;

  ::-webkit-scrollbar-thumb {
    background: $tertiaryColor;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  span,
  i,
  .route {
    color: whitesmoke;
  }
  .route.router-link-exact-active li {
    background: $tertiaryColor;
  }
  .profile-items {
    border-bottom: 1px solid $tertiaryColor;
  }

  .route li:hover {
    border-left: 5px solid $baseColor;
    background: $tertiaryColor;
  }
  header {
    background: $primaryColor;
    border-bottom: 1px solid $tertiaryColor;
    h1 span {
      color: $baseColor;
    }
    .create-course {
      background: $tertiaryColor;
      color: $textColor2;
      i {
        color: $baseColor;
      }
    }
    nav .profile {
      background: $misc;
      color: $primaryColor;
    }
  }
  .profile-header {
    border-bottom: 1px solid $tertiaryColor;
  }
  .profile-menu {
    border-right: 2px solid $primaryColor;
  }

  .profile-header:hover {
    background: $tertiaryColor;
    border-left: 5px solid $baseColor;
  }

  input,
  select,
  .route.active {
    background: $tertiaryColor;
  }

  h1 span,
  .create-course i,
  .route.router-link-exact-active li i,
  .route.router-link-exact-active li p,
  .route.active i,
  .route.active p {
    color: $baseColor;
  }

  .profile-menu,
  .profile-header {
    background: $primaryColor;
  }
}
</style>
