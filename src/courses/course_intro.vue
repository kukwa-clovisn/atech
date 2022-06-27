<template>
  <div class="container">
    <header>
      <nav class="logo"><a href="/" class="link">Atech</a></nav>
      <nav class="links">
        <li>
          <a href="/course/user/profile" class="link">
            Bookmarks <span>{{ profile.savedCourses.length }}</span>
          </a>
        </li>
        <li class="beamerTrigger"><i class="fa-solid fa-bell"></i></li>

        <li>
          <a href="/course/user/profile" class="link"
            >subscriptions <span>{{ profile.subscriptions.length }}</span></a
          >
        </li>
        <li class="profile" @click="profile.dropdown = !profile.dropdown">
          <i class="fa-solid fa-caret-down"
            ><a class="me">{{ profile.name.split("")[0] }}</a></i
          >
        </li>
      </nav>
      <button @click="menuBtn = !menuBtn" class="menu-btn">
        <i class="fa-solid fa-bars"></i>
      </button>
    </header>
    <div class="menu-div" v-if="!menuBtn">
      <button class="close" @click="menuBtn = !menuBtn">&times;</button>
      <div class="profile-header">
        <div class="profile-flex">
          <span>{{ profile.name.split("")[0] }}</span>
          <div class="info">
            <h3>{{ profile.name }}</h3>
            <p>student at seven academy</p>
          </div>
        </div>
        <button @click="profile.dropdown = false">
          <router-link to="/course/user/profile" class="link"
            >edit profile</router-link
          >
        </button>
      </div>
      <hr />
      <ul>
        <li>
          <router-link to="/course/user/profile" class="link"
            ><i class="fa-regular fa-user"></i>account</router-link
          >
        </li>
        <li>
          <router-link to="/course" class="link"
            ><i class="fa-solid fa-book-bookmark"></i>courses</router-link
          >
        </li>
        <li>
          <router-link to="/course/user/profile" class="link">
            <i class="fa-regular fa-bookmark"></i> Bookmarks
            <span>{{ profile.savedCourses.length }}</span></router-link
          >
        </li>
        <li>
          <router-link to="/course/user/profile" class="link">
            <i class="fa-regular fa-square-plus"></i> subscriptions
            <span>{{ profile.subscriptions.length }}</span></router-link
          >
        </li>
        <li><i class="fa-solid fa-gear"></i>setting & privacy</li>
        <li><i class="fa-regular fa-question"></i>help</li>
        <li @click="logoutFunc()"><i class="fa-solid fa-ban"></i>logout</li>
      </ul>
    </div>
    <transition name="appear">
      <div class="profile-div" v-if="profile.dropdown">
        <button class="close" @click="profile.dropdown = !profile.dropdown">
          &times;
        </button>
        <div class="profile-header">
          <div class="profile-flex">
            <span>{{ profile.name.split("")[0] }}</span>
            <div class="info">
              <h3>{{ profile.name }}</h3>
              <p>student at seven academy</p>
            </div>
          </div>
          <button @click="profile.dropdown = false">
            <router-link to="/course/user/profile" class="link"
              >edit profile</router-link
            >
          </button>
        </div>
        <hr />
        <ul>
          <li>
            <router-link to="/course/user/profile" class="link"
              >account</router-link
            >
          </li>
          <li><router-link to="/course" class="link">courses</router-link></li>
          <li>setting & privacy</li>
          <li>help</li>
          <li @click="logoutFunc()">logout</li>
        </ul>
      </div>
    </transition>

    <router-view v-slot="{ Component }" class="router-view">
      <transition name="fade" appear="">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import axios from "axios";
import { reactive, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "Course_intro",
  setup() {
    const router = useRouter();
    let profile = reactive({
      name: "",
      email: "",
      subscriptions: [],
      savedCourses: [],
      dropdown: false,
    });

    let menuBtn = ref(false);

    function checkToken() {
      axios("api/token")
        .then((res) => {
          console.log(res);
          profile.name = res.data.username;
          profile.subscriptions = res.data.subscription;
          profile.savedCourses = res.data.course;
        })
        .catch((err) => {
          router.push("/login");
        });
    }

    onMounted(() => {
      checkToken();
    });

    function logoutFunc() {
      localStorage.setItem("accessToken", "");
      router.push("/");
    }

    return { profile, menuBtn, logoutFunc };
  },
};
</script>
<style lang="scss" scoped>
header {
  width: 100%;
  padding: 0 20px;
  height: 10vh;
  background: #13253e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  .link {
    text-decoration: none;
    color: white;
  }

  .logo {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
      font-size: 30px;
      font-family: "Comic Neue", "Grand Hotel", cursive;
    }
  }

  .links {
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;

    li {
      max-height: 100%;
      color: white;
      text-transform: capitalize;
      position: relative;

      span {
        width: 13px;
        height: 13px;
        border-radius: 100%;
        background: red;
        color: white;
        font-size: 7px;
        position: absolute;
        top: 3%;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .profile {
      width: fit-content;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;

      i {
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        cursor: pointer;
        .me {
          width: 30px;
          height: 30px;
          border-radius: 100%;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: "Poppins", sans-serif;
        }
      }
    }
  }

  .menu-btn {
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    i {
      color: white;
      font-size: 30px;
    }
  }
  @media screen and (max-width: 500px) {
    flex-direction: row-reverse;

    .logo {
      width: 85%;
    }
    .links {
      display: none;
    }
    .menu-btn {
      display: flex;
    }
  }
}

.profile-div,
.menu-div {
  width: 300px;
  height: fit-content;
  border-radius: 8px;
  background: white;
  box-shadow: 0 0 1px 1px rgb(228, 228, 228);
  position: fixed;
  top: 10vh;
  right: 5%;
  z-index: 1;

  .close {
    width: 30px;
    height: 30px;
    border: 1px solid rgb(229, 228, 228);
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1%;
    right: 3%;
    font-size: 20px;
    color: rgb(59, 59, 59);
    color: white;
    background: rgba(230, 101, 129, 1);
  }

  .profile-header {
    width: 100%;
    height: fit-content;

    .profile-flex {
      width: 100%;
      height: 90px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      span {
        width: 70px;
        height: 70px;
        background: teal;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 28px;
        cursor: pointer;
      }
      .info {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;

        h3,
        p {
          text-align: left;
          width: 98%;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        p {
          font-size: 12px;
        }

        @media screen and (max-width: 500px) {
          width: 60%;
        }
      }
    }

    button {
      width: 90%;
      height: 30px;
      background: teal;
      border: none;

      border-radius: 30px;
      margin: 5px auto;

      .link {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        text-decoration: none;
        color: white;
      }
    }
  }
  hr {
    background: rgb(240, 240, 240);
  }
  ul {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-direction: column;
    list-style: none;

    li {
      width: 100%;
      height: 40px;
      padding-left: 20px;
      cursor: pointer;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-transform: capitalize;

      .link {
        text-decoration: none;
        color: #2c3e50;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      }
      i {
        width: 10%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      &:hover {
        background: whitesmoke;
      }

      @media screen and (max-width: 500px) {
        height: 50px;
      }
    }
  }
}
.menu-div {
  display: none;

  .profile-header {
    background: whitesmoke;
    .profile-flex {
      .info {
        width: 70%;
      }
    }
  }
  li {
    position: relative;
    span {
      width: 13px;
      height: 13px;
      border-radius: 100%;
      background: red;
      color: white;
      font-size: 7px;
      position: absolute;
      top: 3%;
      left: 8%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 500px) {
    display: block;
    width: 100vw;
    right: 0;
    border-radius: 0;
  }
}
.profile-div {
  @media screen and (max-width: 500px) {
    display: none;
  }
}

.router-view {
  position: absolute;
  top: 10vh;
  left: 0;
}
</style>