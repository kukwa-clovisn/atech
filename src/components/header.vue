<template>
  <main>
    <header class="large-screen-header">
      <nav class="topNav">
        <div class="left-topNav">
          <a href="https://wa.link/geye6o" class="route"
            ><i class="fa-brands fa-whatsapp icon"></i> whatsapp</a
          >
        </div>
        <div class="right-topNav">
          <a href="/#contact">
            <i class="fa-solid fa-envelope icon"></i>
            email</a
          >
        </div>
      </nav>
      <nav class="bottom-nav">
        <div class="logo-nav" @click="toHome()">
          <h1>Atech</h1>
          <div class="logo-name">
            <span>Advanced</span><span>Tech</span><span>Acadmemy</span>
          </div>
        </div>
        <nav class="routes">
          <router-link to="#" class="route standard" @click="openDropdown()"
            >courses<i class="fa-solid fa-caret-right"></i
          ></router-link>
          <router-link to="/why-us" class="route standard" v-if="!showCourses"
            >why crypto?</router-link
          >
          <router-link to="/blog" class="route standard" v-if="!showCourses"
            >blog</router-link
          >
          <a href="/#contact" class="route standard" v-if="!showCourses"
            >contact</a
          >
          <router-link to="/login" class="route special" v-if="!showCourses"
            >sign in</router-link
          >
          <router-link to="/register" class="route register" v-if="!showCourses"
            >register</router-link
          >
          <div class="pagemodes" title="change page mode">
            <button
              class="mode"
              @click="
                colorMode = 'cafe';
                mode.light = true;
                mode.cafe = false;
              "
              v-if="mode.cafe"
            >
              <i class="fa-solid fa-mug-saucer"></i>
            </button>
            <button
              class="mode"
              @click="
                colorMode = 'light';
                mode.light = false;
                mode.cafe = true;
              "
              v-if="mode.light"
            >
              <i class="fa-solid fa-moon"></i>
            </button>
          </div>
        </nav>
        <transition name="fade">
          <div class="courses-list routes" v-if="showCourses">
            <ul>
              <li class="route">
                <a href="https://codingherald.herokuapp.com">apps</a>
              </li>

              <li class="route">
                <a href="/course/forex">forex trading</a>
              </li>
              <li class="route">
                <a href="/course/web">web developement</a>
              </li>
              <li class="route">
                <a href="/music/piano">piano lessons</a>
              </li>
            </ul>
            <span @click="openDropdown()" class="closeDropdown">&times;</span>
          </div>
        </transition>
      </nav>
    </header>
    <header class="small-screen-header" :class="{ active: onDropdown }">
      <nav class="topNav">
        <div class="left-topNav">
          <a href="/">
            <i class="fa-solid fa-phone icon"></i><br />
            +237682449347</a
          >
        </div>
        <div class="right-topNav">
          <a href="">
            <i class="fa-solid fa-envelope icon"></i><br />
            kukwaclovisngong3@gmail.com</a
          >
        </div>
      </nav>
      <nav class="bottom-nav" v-if="noDropdown">
        <div class="pagemodes" title="change page mode">
          <button
            class="mode"
            @click="
              colorMode = 'cafe';
              mode.light = true;
              mode.cafe = false;
            "
            v-if="mode.cafe"
          >
            <i class="fa-solid fa-mug-saucer"></i> cafe
          </button>
          <button
            class="mode"
            @click="
              colorMode = 'light';
              mode.light = false;
              mode.cafe = true;
            "
            v-if="mode.light"
          >
            <i class="fa-solid fa-moon"></i> light
          </button>
        </div>
        <div class="logo-nav" @click="toHome()">
          <h1>Atech</h1>
          <div class="logo-name">
            <span>Advanced</span><span>Tech</span><span>Acadmemy</span>
          </div>
        </div>

        <nav class="menu-bars">
          <button @click="menuFunction()">
            <i class="fa-solid fa-bars"></i>
          </button>
        </nav>
      </nav>
      <nav class="bottom-nav menu-nav" v-if="onDropdown">
        <div class="pagemodes" title="change page mode">
          <button
            class="mode"
            @click="
              colorMode = 'cafe';
              mode.light = true;
              mode.cafe = false;
            "
            v-if="mode.cafe"
          >
            <i class="fa-solid fa-mug-saucer"></i>cafe
          </button>
          <button
            class="mode"
            @click="
              colorMode = 'light';
              mode.light = false;
              mode.cafe = true;
            "
            v-if="mode.light"
          >
            <i class="fa-solid fa-moon"></i> light
          </button>
        </div>
        <div class="logo-nav" @click="toHome()">
          <h1>Atech</h1>
          <div class="logo-name">
            <span>Advanced</span><span>Tech</span><span>Acadmemy</span>
          </div>
        </div>
        <!-- 681958002 -->

        <nav class="menu-bars">
          <button @click="closeDropdown()">&times;</button>
        </nav>
      </nav>
      <transition name="fade">
        <nav class="menu-dropdown" v-if="onDropdown">
          <ul>
            <li>
              <a @click="openDropdown()"
                >courses <i class="fa-solid fa-caret-down"></i
              ></a>
            </li>
            <transition name="fade">
              <div class="courses-list" v-if="!showCourses">
                <h1>our courses and services</h1>
                <ul>
                  <li>
                    <a href="https://codingherald.herokuapp.com"
                      ><i class="fa-solid fa-chart-line"></i>apps</a
                    >
                  </li>
                  <li>
                    <a href="/course/forex"
                      ><i class="fa-solid fa-chart-line"></i>forex trading</a
                    >
                  </li>
                  <li>
                    <a href="/course/web"
                      ><i class="fa-solid fa-code"></i>web developement</a
                    >
                  </li>
                  <li>
                    <a href="/music/piano"
                      ><i class="fa-solid fa-music"></i>piano lessons</a
                    >
                  </li>
                </ul>
              </div>
            </transition>
            <li @click="engagements = !engagements">
              <a>engagements <i class="fa-solid fa-caret-down"></i></a>
            </li>
            <transition name="fade">
              <div class="courses-list" v-if="engagements">
                <h1>Be a part of our academy</h1>
                <ul>
                  <li><a href="/login">sign up</a></li>
                  <li><a href="/login">sign in</a></li>
                  <li><a href="/register">register</a></li>
                </ul>
              </div>
            </transition>

            <li><a href="/why-us">why crypto?</a></li>
            <li><a href="/blog">blog</a></li>
            <li><a href="/#contact">contact</a></li>
          </ul>
        </nav>
      </transition>
    </header>
  </main>
</template>

<script>
import { useColorMode } from "@vueuse/core";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
export default {
  name: "Header",
  setup() {
    const router = useRouter();
    let onDropdown = ref(false);
    let noDropdown = ref(true);
    let dropRoute = ref(true);
    let showCourses = ref(false);
    let engagements = ref(true);

    function menuFunction() {
      onDropdown.value = true;
      noDropdown.value = false;
      dropRoute.value = true;
    }

    function closeDropdown() {
      onDropdown.value = false;
      noDropdown.value = true;
      showCourses.value = false;
    }

    function openDropdown() {
      showCourses.value = !showCourses.value;
      dropRoute.value = !dropRoute.value;
    }

    function toHome() {
      router.push("/");
    }

    const colorMode = useColorMode({
      attribute: "class",
      modes: {
        // custom colors
        dim: "dim",
        cafe: "cafe",
      },
    });

    const mode = reactive({
      light: false,
      cafe: true,
    });
    return {
      dropRoute,
      onDropdown,
      noDropdown,
      showCourses,
      mode,
      colorMode,
      engagements,
      menuFunction,
      closeDropdown,
      openDropdown,
      toHome,
    };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$fallback: rgb(19, 37, 62);

.fade-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.primary-btn {
  width: 150px;
  height: 45px;
  border: none;
  background: rgba(218, 121, 121, 1);
  border-radius: 3px;
  display: block;

  .homeBtn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: capitalize;
    font: 700 20px "Poppins", sans-serif;
    text-decoration: none;
  }
}

header {
  width: 100vw;
  margin: 0;
  height: fit-content;
  position: relative;
  overflow-x: hidden;
  z-index: 1;
  .topNav {
    max-width: 100vw;
    height: 7vh;
    background: $fallback;
    background: linear-gradient(to top, rgb(20, 92, 125), #13253e);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    position: relative;
    overflow: hidden;

    a {
      flex-basis: 1;
      height: 100%;
      width: fit-content;
      padding: 5px 10px;
      color: rgb(228, 228, 228);
      text-decoration: none;
      font-size: 7px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;

      i {
        margin-right: 5px;
      }

      &:hover {
        background: linear-gradient(to bottom right, #3774c9, #2d548a);
      }
    }
  }
  .bottom-nav {
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: transparent;
    position: relative;
    nav {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      height: 100%;
      padding: 0;
    }

    .logo-nav {
      width: 25%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      h1 {
        text-transform: uppercase;
        font: 600 30px "Nunito Sans", sans-serif;
        background: linear-gradient(to bottom left, rgb(28, 160, 222), #0c1725);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        border-right: 2px solid rgb(20, 81, 109);
        padding-right: 10px;
        margin-right: 4px;
      }
      .logo-name {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding-left: 10px;
        border-left: 2px solid #1a3862;

        span {
          width: 100%;
          text-align: left;
          font: 400 12px "Nunito Sans";
          color: rgb(213, 213, 213);
          opacity: 0.8;
        }
      }

      @media screen and (max-width: 500px) {
        h1 {
          font-size: 19px;
        }

        .logo-name span {
          font-size: 9px;
        }
      }
    }
    .routes {
      width: 60%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .route {
        flex-basis: 1;
        padding: 0 7px;
        height: 70%;
        display: flex;
        width: max-content;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        text-decoration: none;
        color: white;
        font-size: 12px;
        font-weight: 500;
        position: relative;

        i {
          color: white;
          padding-left: 2px;
        }
      }

      .route.standard {
        &::before {
          content: "";
          width: 100%;
          height: 3px;
          position: absolute;
          bottom: 0;
          left: 0;
          border-radius: 30px 0 0 30px;
          background: rgb(186, 186, 186);
          display: none;
        }
        &::after {
          content: "";
          width: 100%;
          height: 3px;
          position: absolute;
          bottom: 0;
          right: 0;
          border-radius: 0 30px 30px 0;
          background: white;
          display: none;
        }
        &:hover {
          animation: coloring 1s 1 linear alternate forwards;
          &::before {
            display: block;
            animation: hovering 0.3s 1 linear alternate forwards;
          }
          &::after {
            display: block;
            animation: hovering 0.3s 1 linear alternate forwards;
          }
        }
      }

      @keyframes hovering {
        from {
          width: 0;
        }
        to {
          width: 100%;
          // background: rgb(213, 246, 254);
        }
      }
      @keyframes coloring {
        to {
          color: rgb(186, 239, 250);
        }
      }
      .route.special {
        color: #36c5fe;
        &:hover {
          border: none;
        }
      }
      .route.register {
        width: max-content;
        padding: 0 15px;

        background: linear-gradient(to bottom left, rgb(28, 160, 222), #101e32);
        border-radius: 7px;
        &:hover {
          border: none;
          box-shadow: none;
        }
      }
      .pagemodes {
        width: max-content;
        height: 60%;
        border-radius: 3px;
        padding: 0 5px;
        margin: 0 10px;
        background: linear-gradient(to bottom left, rgb(28, 160, 222), #0c1725);

        .mode {
          width: 100%;
          height: 100%;
          border: none;
          color: white;
          background: transparent;
          i {
            color: white;
            padding: 0 2px;
          }
        }
      }
    }
    .courses-list {
      width: 100%;
      height: fit-content;
      background: transparent;
      // position: absolute;
      bottom: -200%;
      top: 0;
      left: 0;
      z-index: 1;

      .closeDropdown {
        width: 80px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 27px;
        color: rgb(93, 171, 208);
        cursor: pointer;
        transition: all 0.5s ease;
        margin-top: 6px;

        &:hover {
          color: white;
        }
      }

      h1 {
        padding: 5px;
        color: $SecondaryColor;
        text-transform: capitalize;
        font: 600 15px "Poppins", sans-serif;
      }

      ul {
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        li {
          list-style-type: none;
          height: 100%;
          cursor: pointer;
          flex-basis: 1;
          flex-grow: 0.5;

          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-transform: capitalize;
            font: 600 11px "Poppins", sans-serif;
            color: white;

            i {
              padding-right: 5px;
              font-size: 19px;
              color: $SecondaryColor;
            }
            &:hover {
              box-shadow: none;
              border-bottom: 1px solid rgb(181, 179, 179);
            }
          }

          &::before {
            content: "";
            width: 100%;
            height: 3px;
            position: absolute;
            bottom: 0;
            left: 0;
            border-radius: 30px 0 0 30px;
            background: rgb(186, 186, 186);
            display: none;
          }
          &::after {
            content: "";
            width: 100%;
            height: 3px;
            position: absolute;
            bottom: 0;
            right: 0;
            border-radius: 0 30px 30px 0;
            background: white;
            display: none;
          }
          &:hover {
            animation: coloring 1s 1 linear alternate forwards;
            &::before {
              display: block;
              animation: hovering 0.3s 1 linear alternate forwards;
            }
            &::after {
              display: block;
              animation: hovering 0.3s 1 linear alternate forwards;
            }
          }
        }
      }
    }

    .large-screen-course-list.courses-list {
      width: fit-content;
      height: fit-content;
      padding: 10px;
      padding-right: 20px;

      ul li {
        height: 40px;
        a {
          color: white;
          font-size: 10px;
        }
      }
    }
  }
  .menu-nav {
    width: 90vw;
    margin: auto;
  }
}

.small-screen-header {
  display: none;
}

.large-screen-header {
  @media screen and (max-width: 917px) {
    display: none;
  }
}
.small-screen-header {
  @media screen and (max-width: 917px) {
    display: block;

    .bottom-nav {
      width: 95%;
      margin: 0 auto;
      padding: 0 10px;
      position: relative;
      justify-content: space-between;
      flex-direction: row-reverse;

      .logo-nav {
        width: 50%;
      }

      .pagemodes {
        width: 20%;
        height: 70%;
        border-radius: 3px;
        padding: 0 5px;
        margin: 0 10px;
        background: linear-gradient(to bottom left, rgb(28, 160, 222), #0c1725);
        background: rgba(230, 101, 129, 1);
        display: flex;
        justify-content: center;
        align-items: center;

        .mode {
          width: 100%;
          height: 100%;
          border: none;
          color: white;
          background: transparent;
          font-size: 12px;
          i {
            color: white;
            padding: 0 2px;
            font-size: 15px;
          }
        }

        @media screen and (max-width: 450px) {
          display: none;
        }
      }

      .menu-bars {
        width: 100px;
        font-size: 15px;
      }

      button {
        box-shadow: 3px 3px;
        width: 100px;
        height: 50px;
        background: transparent;
        border: none;
        font-size: 40px;
        color: white;
        box-shadow: none;

        i {
          color: white;
          font-size: 25px;
        }
      }
    }

    .menu-dropdown {
      width: 360px;
      height: 83vh;
      padding: 20px 10px;

      background: rgb(7, 40, 67);
      border-radius: 0 7px 7px 0;

      ul {
        width: 100%;
        height: 100%;
        margin-top: 7px;
        overflow: hidden;
        overflow-y: auto;

        li {
          list-style-type: none;
          width: 96%;
          height: 50px;
          margin: auto;
          padding: 10px;
          position: relative;

          a {
            text-decoration: none;
            text-transform: capitalize;
            color: $primaryColor;
            width: 100%;
            font: 14px 400 "Nunito Sans", sans-serif !important;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;

            i {
              padding-left: 3px;
            }
          }
        }

        .courses-list {
          width: 85%;
          height: fit-content;

          h1 {
            font-size: 14px;
          }
          ul {
            width: 100%;
            height: fit-content;

            li {
              width: 100%;
              height: 40px;
              border-radius: 10px;
              margin: 5px auto;
              background: rgb(11, 50, 83);

              a {
                font-size: 13px;
              }
            }
          }
        }
      }
    }
    .courses-list {
      width: 90%;
      margin-left: 10%;
      h1 {
        color: rgb(115, 169, 195);
      }

      ul {
        li i {
          padding-right: 20px;
          color: $SecondaryColor;
          color: rgb(29, 135, 184);
        }
      }
    }
  }
}
.small-screen-header.active {
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(5, 30, 52);
  .topNav,
  .bottom-nav {
    background: transparent;
  }
}
</style>
