<template>
  <main>
    <div class="landing-page">
      <header>
        <div class="logo">TeamJesusMusic</div>
        <nav>
          <a href="/">Home</a>
          <a @click="openLessons()">lessons</a>
          <a @click="openDropdown()">other courses</a>
        </nav>
        <nav class="menu">
          <i class="fa-solid fa-bars"></i>
        </nav>
        <transition name="fade">
          <div id="courses-list" v-if="showCourses">
            <h1>our courses and services</h1>
            <ul>
              <li>
                <a href="/course/crypto"
                  ><i class="fa-solid fa-chart-line"></i>cryptocurrency</a
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
                <a href="/course/graphic"
                  ><i class="fa-solid fa-object-group"></i>graphic design</a
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
        <transition name="fade">
          <div id="courses-list" v-if="showlessons">
            <h1>Lessons</h1>
            <ul>
              <li>
                <a href="/course/crypto"
                  ><i class="fa-solid fa-music"></i>chromatic scale</a
                >
              </li>
              <li>
                <a href="/course/forex"
                  ><i class="fa-solid fa-music"></i>chords</a
                >
              </li>
              <li>
                <a href="/course/web"
                  ><i class="fa-solid fa-music"></i>scales</a
                >
              </li>
              <li>
                <a href="/course/graphic"
                  ><i class="fa-solid fa-music"></i>harmonizing</a
                >
              </li>
              <li>
                <a href="/music/piano"
                  ><i class="fa-solid fa-music"></i>improvising
                </a>
              </li>
              <li>
                <a href="/music/piano"
                  ><i class="fa-solid fa-music"></i>the ear
                </a>
              </li>
            </ul>
          </div>
        </transition>
        <!-- <nav></nav> -->
      </header>
      <header class="small-screen">
        <nav @click="menuFunc()">
          <span class="logo">TeamJesusMusic</span>
          <i class="fa-solid fa-bars"></i>
        </nav>
        <transition name="fade">
          <ul class="menu-items" v-if="showMenu">
            <li><a href="/">Home</a></li>
            <li @click="openLessons()"><a>lessons</a></li>
            <li @click="openDropdown()"><a>other courses</a></li>
          </ul>
        </transition>
        <transition name="fade">
          <div id="courses-list" v-if="showCourses">
            <h1>our courses and services</h1>
            <ul>
              <li>
                <a href="/course/crypto"
                  ><i class="fa-solid fa-chart-line"></i>cryptocurrency</a
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
                <a href="/course/graphic"
                  ><i class="fa-solid fa-object-group"></i>graphic design</a
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
        <transition name="fade">
          <div id="courses-list" v-if="showlessons">
            <h1>Lessons</h1>
            <ul>
              <li>
                <a href="/course/crypto"
                  ><i class="fa-solid fa-music"></i>chromatic scale</a
                >
              </li>
              <li>
                <a href="/course/forex"
                  ><i class="fa-solid fa-music"></i>chords</a
                >
              </li>
              <li>
                <a href="/course/web"
                  ><i class="fa-solid fa-music"></i>scales</a
                >
              </li>
              <li>
                <a href="/course/graphic"
                  ><i class="fa-solid fa-music"></i>harmonizing</a
                >
              </li>
              <li>
                <a href="/music/piano"
                  ><i class="fa-solid fa-music"></i>improvising
                </a>
              </li>
              <li>
                <a href="/music/piano"
                  ><i class="fa-solid fa-music"></i>the ear
                </a>
              </li>
            </ul>
          </div>
        </transition>
      </header>
      <div class="blur"></div>
      <div class="title">
        <h1>with Music</h1>
        <transition name="refresh">
          <section v-if="animate">
            <h2>Feel the</h2>
            <div class="words">
              <ul>
                <li><span>Music....</span></li>
                <li><span>Passion....</span></li>
                <li><span>Love....</span></li>
                <li><span>Desire....</span></li>
              </ul>
            </div>
          </section>
        </transition>
        <button>lessons</button>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "Music",

  setup() {
    let animate = ref(false);
    let showCourses = ref(false);
    let showlessons = ref(false);
    let dropRoute = ref(false);
    let showMenu = ref(false);

    onMounted(() => {
      animate.value = true;
    });

    function openDropdown() {
      showCourses.value = !showCourses.value;
      showlessons.value = false;
      dropRoute.value = !dropRoute.value;
    }

    function openLessons() {
      showlessons.value = !showlessons.value;
      showCourses.value = false;
      dropRoute.value = !dropRoute.value;
    }

    function menuFunc() {
      showMenu.value = !showMenu.value;
      showlessons.value = false;
      showCourses.value = false;
    }

    return {
      animate,
      dropRoute,
      showCourses,
      showlessons,
      showMenu,
      openDropdown,
      openLessons,
      menuFunc,
    };
  },
};
</script>

<style lang="scss" scoped>
$baseColor: #13253e;
$primaryColor: #e66581;

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
main {
  width: 100vw;
  .landing-page {
    background: url(../assets/music-woman.jpg);
    background-size: cover;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 780px) {
      background-position-x: 50%;
    }

    .blur {
      opacity: 0.4;
    }

    header {
      width: 100vw;
      height: 10vh;
      display: flex;
      justify-content: space-around;
      align-items: center;
      position: relative;
      z-index: 1;

      .logo {
        color: white;
        padding: 10px 20px;
        cursor: pointer;
        width: fit-content;
        background: $baseColor;
        border-radius: 30px;
      }

      nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 50%;
        height: 100%;

        a {
          text-decoration: none;
          text-transform: capitalize;
          display: flex;
          justify-content: center;
          align-items: center;
          width: fit-content;
          height: 100%;
          padding: 10px;
          font-size: 15px;
          position: relative;
          color: rgb(206, 204, 204);
        }
      }

      .menu {
        display: none;
      }
      #courses-list {
        width: 100%;
        height: 17vh;
        background: white;
        position: absolute;
        bottom: -170%;
        left: 0;
        z-index: 1;

        h1 {
          padding: 5px;
          color: $primaryColor;
          text-transform: capitalize;
          font: 600 15px "Poppins", sans-serif;
        }

        ul {
          width: 100%;
          height: fit-content;
          display: flex;
          justify-content: space-evenly;
          align-items: center;

          li {
            list-style-type: none;
            width: 16%;
            height: 9vh;
            cursor: pointer;

            a {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              text-transform: capitalize;
              font: 600 16px "Poppins", sans-serif;

              i {
                padding-right: 5px;
                font-size: 19px;
                color: $primaryColor;
              }
            }
          }
        }
      }

      @media screen and (max-width: 600px) {
        nav {
          display: none;
        }

        .menu {
          display: flex;
          i {
            color: white;
            font-size: 30px;
            cursor: pointer;

            &:active {
              transform: scaleX(0.8);
            }
          }
        }
      }
    }
    .small-screen {
      background: $baseColor;
      display: none;
      height: fit-content;
    }

    @media screen and (max-width: 600px) {
      header {
        display: none;
      }
      .small-screen {
        width: 100%;
        display: block;

        nav {
          width: 90%;
          height: 10vh;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 10px;

          i {
            color: white;
            font-size: 30px;
          }
        }
        .menu-items,
        #courses-list {
          width: 100%;
          height: fit-content;

          li {
            list-style-type: none;
            width: 90%;
            height: 50px;
            margin: 10px auto;
            border-bottom: 1px solid white;
            list-style-position: outside;
            color: white;

            a {
              text-decoration: none;
              text-transform: capitalize;
              color: white;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }
          }
        }

        #courses-list {
          background: $baseColor;
          bottom: -169.5%;

          ul {
            flex-direction: column;
          }
        }
      }
    }

    .title {
      width: 330px;
      height: fit-content;
      position: absolute;
      bottom: 0;
      right: 11%;

      @media screen and (max-width: 450px) {
        width: 98vw;
        right: 0.5%;
      }

      h1 {
        font-size: 21px;
        padding: 0;
      }

      section {
        h2 {
          color: $primaryColor;
          font-size: 23px;
        }
        ul {
          li {
            background: $primaryColor;
            border-radius: 0 5px 5px 0;
            // height
            span {
              font-size: 21px;
              color: white;
            }
          }
        }
      }

      button {
        border-radius: 5px;
        font: 600 16px "Poppins", sans-serif;
        border: none;
        color: $baseColor;

        &:hover {
          box-shadow: 0 0 2px 1px white;
          color: white;
        }
        &:active {
          transform: scale(0.8);
        }
      }
    }
  }
}
</style>