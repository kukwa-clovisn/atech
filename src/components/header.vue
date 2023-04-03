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
          <router-link
            to="#"
            class="route standard"
            @mouseenter="openDropdown()"
            >courses<i class="fa-solid fa-caret-down"></i
          ></router-link>
          <router-link
            to="#"
            class="route standard effect"
            @mouseenter="displayMentor()"
            @mouseleave="hideMentor()"
            >Mentorship<i class="fa-solid fa-caret-down"></i>
          </router-link>
          <transition name="fade">
            <div class="mentor" v-if="showMentor">
              <h1>Atech Mentorship</h1>
              <p>
                Sign up for our mentorship program to join our community and get
                one on one lessons tutorials and trainings. You will also get to
                join our live sessions and programs, In Forex you'll have the
                chance to join live market chart analysis on weekly basis and
                more.
              </p>
            </div>
          </transition>
          <router-link to="/why-us" class="route standard"
            >why crypto?</router-link
          >
          <router-link to="/blog" class="route standard">blog</router-link>
          <a href="/#contact" class="route standard">contact</a>
          <router-link to="/login" class="route special">sign in</router-link>
          <router-link to="/register" class="route register"
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
      </nav>
      <transition name="fade">
        <div class="courses-exp routes" v-if="showCourses">
          <nav class="header bottom-nav">
            <div class="logo-nav" @click="toHome()">
              <h1>Atech</h1>
              <div class="logo-name">
                <span>Advanced</span><span>Tech</span><span>Acadmemy</span>
              </div>
            </div>
            <nav class="routes">
              <router-link to="/why-us" class="route standard"
                >why crypto?</router-link
              >
              <router-link
                to="#"
                class="route standard"
                @mouseenter="displayMentor()"
                @mouseleave="hideMentor()"
                >Mentorship<i class="fa-solid fa-caret-down"></i
              ></router-link>
              <router-link to="/blog" class="route standard">blog</router-link>
              <a href="/#contact" class="route standard">contact</a>
              <router-link to="/login" class="route special register"
                >log in</router-link
              >
              <router-link to="/login" class="route register"
                >sign up</router-link
              >
              <span @click="openDropdown()" class="route">&times;</span>
            </nav>
          </nav>
          <div class="blur" @click="showCourses = false">
            <transition name="appear">
              <div class="blur-container" v-show="course.app">
                <h1>Get to use our applications</h1>
                <p>
                  we have a good number of applications ready and set for you to
                  use them daily and improve you knowledge while learning
                  online. Click on the button below to browse through our
                  availble applications for free.
                </p>
                <button>
                  <a href="https://codingherald.netlify.app">view apps</a>
                </button>
              </div>
            </transition>

            <transition name="appear">
              <div class="blur-container" v-show="course.forex">
                <h1>Learn Forex Trading</h1>
                <div class="img">
                  <img src="../assets/forex.jpg" alt="" />
                </div>
                <p>
                  The world today is goind digital earnig a skill an forex
                  trading is a best idea. Having to work at home as part time
                  and trading at your own convinience is a great idea. Your job
                  can one day disappoint you but your investment in forex won't
                  be affected by your job, government or anyone.
                </p>
                <button><a href="/course/forex">learn forex trading</a></button>
              </div>
            </transition>
            <transition name="appear">
              <div class="blur-container" v-show="course.web">
                <h1>Become a web developer in less than no time</h1>
                <div class="img">
                  <img src="../assets/html-logo-removebg-preview.png" alt="" />
                </div>
                <p>
                  we have a good number of applications ready and set for you to
                  use them daily and improve you knowledge while learning
                  online. Click on the button below to browse through our
                  availble applications for free.
                </p>
                <button><a href="/course/web">continue</a></button>
              </div>
            </transition>

            <transition name="appear">
              <div class="blur-container" v-show="course.music">
                <h1>Learn about music and how to play musical instruments</h1>
                <div class="img">
                  <img src="../assets/pexels-pixabay-33597.jpg" alt="" />
                </div>
                <p>
                  we have a good number of applications ready and set for you to
                  use them daily and improve you knowledge while learning
                  online. Click on the button below to browse through our
                  availble applications for free.
                </p>
                <button><a href="/music/piano">learn more</a></button>
              </div>
            </transition>
          </div>
          <ul>
            <li
              class="route"
              :class="{ active: course.app }"
              @click="
                course.app = true;
                course.forex = false;
                course.web = false;
                course.music = false;
              "
            >
              <router-link to="#apps" class="link">apps</router-link>
            </li>

            <li
              class="route"
              :class="{ active: course.forex }"
              @click="
                course.app = false;
                course.forex = true;
                course.web = false;
                course.music = false;
              "
            >
              <router-link to="#forex" class="link">forex trading</router-link>
            </li>
            <li
              class="route"
              :class="{ active: course.web }"
              @click="
                course.app = false;
                course.forex = false;
                course.web = true;
                course.music = false;
              "
            >
              <router-link to="#web" class="link">web development</router-link>
            </li>
            <li
              class="route"
              :class="{ active: course.music }"
              @click="
                course.app = false;
                course.forex = false;
                course.web = false;
                course.music = true;
              "
            >
              <router-link to="#music" class="link">music</router-link>
            </li>
          </ul>
        </div>
      </transition>
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
                    <a href="https://codingherald.netlify.app" class="link"
                      ><i class="fa-solid fa-chart-line"></i>apps</a
                    >
                  </li>
                  <li>
                    <router-link to="/course/forex" class="link"
                      ><i class="fa-solid fa-chart-line"></i>forex trading
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/course/web" class="link"
                      ><i class="fa-solid fa-code"></i>web
                      developement</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/music/piano" class="link"
                      ><i class="fa-solid fa-music"></i>piano
                      lessons</router-link
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
                  <li>
                    <router-link to="/login" class="link"
                      ><i class="fa-solid fa-user-plus"></i>sign up</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/login" class="link"
                      ><i class="fa-solid fa-arrow-right-to-bracket"></i>sign
                      in</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/register" class="link"
                      ><i class="fa-solid fa-registered"></i
                      >register</router-link
                    >
                  </li>
                </ul>
              </div>
            </transition>
            <li>
              <router-link to="#" class="link" @click="toggleMentor()"
                >Mentorship<i class="fa-solid fa-caret-down"></i>
              </router-link>
            </li>

            <transition name="fade">
              <div class="mentor" v-if="showMentor">
                <span @click="toggleMentor()">&times;</span>
                <h1>Atech Mentorship</h1>
                <p>
                  Sign up for our mentorship program to join our community and
                  get one on one lessons tutorials and trainings. You will also
                  get to join our live sessions and programs, In Forex you'll
                  have the chance to join live market chart analysis on weekly
                  basis and more.
                </p>
              </div>
            </transition>

            <li>
              <router-link to="/why-us" class="link">why crypto?</router-link>
            </li>
            <li><router-link to="/blog" class="link">blog</router-link></li>
            <li><a href="/#contact" class="link">contact</a></li>
          </ul>
          <footer>&copy;atech2022</footer>
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

    let course = reactive({
      app: true,
      forex: false,
      web: false,
      music: false,
    });

    let showMentor = ref(false);

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

    function displayMentor() {
      showMentor.value = true;
    }
    function hideMentor() {
      showMentor.value = false;
    }
    function toggleMentor() {
      showMentor.value = !showMentor.value;
    }
    return {
      dropRoute,
      showMentor,
      displayMentor,
      hideMentor,
      toggleMentor,
      onDropdown,
      noDropdown,
      showCourses,
      mode,
      colorMode,
      engagements,
      course,
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
      position: relative;
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
      .route.active {
        background: rgba(230, 101, 129, 1);
      }
      @keyframes hovering {
        from {
          width: 0;
        }
        to {
          width: 100%;
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

      .mentor {
        width: 400px;
        height: fit-content;
        border-radius: 2px;
        background: white;
        position: fixed;
        top: 17vh;
        left: 45vw;
        z-index: 1;
        border: 1px solid rgb(219, 217, 217);
        padding: 10px;

        h1 {
          font-size: 20px;
          padding: 10px;
          text-transform: capitalize;
        }
        p {
          font-size: 15px;
          padding: 10px;
        }

        @media screen and (max-width: 917px) {
          top: 25vh;
          left: 10vw;
          width: 80vw;
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

  .courses-exp {
    width: 100vw;
    height: 100vh;
    background: white;
    background: #23426e;
    // z-index: 1;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row-reverse;

    .header {
      width: 100vw;
      height: 15vh;
      position: relative;
      background: white;
      background: #1b3456;
      // box-shadow: 3px 0px 3px rgb(244, 243, 243);

      .logo-nav {
        width: 20%;

        .logo-name span {
          color: rgb(106, 104, 104);
          color: white;
        }
      }

      .routes {
        width: 70%;
        .route {
          color: rgb(54, 54, 54);
          color: white;
          i {
            color: rgb(53, 52, 52);
            color: white;
          }
        }
      }

      .route.register {
        background: rgb(213, 67, 96);
        color: white;
        height: 40px;
      }
      .route.special {
        background: transparent;
        color: rgb(67, 70, 72);
        color: white;
        border: 1px solid rgb(152, 152, 152);

        &:hover {
          border: 2px solid rgb(152, 152, 152);
        }
      }
      span.route {
        font-size: 30px;
        cursor: pointer;
      }
    }
    .blur {
      width: 75%;
      height: 85vh;
      position: relative;
      cursor: pointer;
      opacity: 0.9;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(227, 226, 226);
      background: #23426e;

      padding: 40px 0;

      .blur-container {
        width: 80%;
        height: 100%;
        background: white;
        padding: 20px;
        border-radius: 5px;
        margin-top: 10px;
        overflow: hidden;
        overflow-y: auto;

        h1 {
          padding: 20px;
          font: 50px 700 "Poppins", sans-serif;
        }
        .img {
          width: auto;
          height: 200px;
          overflow: hidden;
          border-radius: 3px;
          margin: 10px auto;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }
        }
        p {
          padding: 10px;
          // color: white;
        }
        button {
          min-width: 200px;
          height: 50px;
          border-radius: 10px;
          border: none;
          margin: 10px auto;
          box-shadow: 5px 5px 10px rgb(191, 190, 190);
          overflow: hidden;
          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-transform: capitalize;
            background: white;
            color: rgb(60, 59, 59);
            text-decoration: none;

            &:hover {
              background: transparent;
            }
          }

          &:hover {
            box-shadow: inset -5px -5px 10px rgb(191, 190, 190);
          }
        }
      }
    }

    ul {
      width: 25%;
      height: 85vh;
      background: white;
      background: #1b3456;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      li {
        width: 100%;
        list-style-type: none;
        height: 50px;
        cursor: pointer;
        flex-basis: 1;
        flex-grow: 0.5;
        position: relative;
        margin: 0;

        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          text-transform: capitalize;
          font: 600 17px "Poppins", sans-serif;
          color: rgb(70, 69, 69);
          color: white;

          i {
            padding-right: 5px;
            font-size: 19px;
            color: $SecondaryColor;
          }
          &:hover {
            box-shadow: none;
          }
        }

        &:hover {
          background: #2d548b;
          border-right: 5px solid rgba(230, 101, 129, 1);
        }
      }

      li.active {
        // box-shadow: 10px 10px 20px #ececec;
        border-right: 5px solid rgba(230, 101, 129, 1);
        background: white;

        a {
          color: rgba(230, 101, 129, 1);
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
        background: #3f6297;
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
        height: 97%;
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
              height: 45px;
              border-radius: 10px;
              margin: 8px auto;
              background: rgb(11, 50, 83);

              .link {
                font-size: 13px;
              }
            }
          }
        }
        .mentor {
          width: 80vw;
          height: fit-content;
          border-radius: 2px;
          background: white;
          position: fixed;
          top: 20vh;
          left: 10vw;
          z-index: 1;
          padding: 10px;
          span {
            font-size: 25px;
            padding: 10px;
            cursor: pointer;
          }

          h1 {
            font-size: 20px;
            padding: 10px;
            text-transform: capitalize;
          }
          p {
            font-size: 15px;
            padding: 10px;
          }
        }
      }

      @media screen and (max-width: 400px) {
        width: 100%;
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
  bottom: 0;
  background: rgb(5, 30, 52);
  .topNav,
  .bottom-nav {
    background: transparent;
  }
}
</style>
