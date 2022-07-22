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
            email us</a
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
          <router-link to="#" class="route" @click="openDropdown()"
            >courses<i class="fa-solid fa-caret-down"></i
          ></router-link>
          <router-link to="/why-us" class="route">why crypto?</router-link>
          <router-link to="/blog" class="route">blog</router-link>
          <a href="/#contact" class="route">contact</a>
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
        <transition name="fade">
          <div id="courses-list" v-if="showCourses">
            <span @click="openDropdown()" class="closeDropdown">&times;</span>
            <h1>our courses and services</h1>
            <ul>
              <li>
                <a href="https://codingherald.herokuapp.com"
                  ><i class="fa-solid fa-chart-line"></i>apps</a
                >
              </li>
              <!-- <li>
                <a href="/course/cryptocurrency"
                  ><i class="fa-solid fa-chart-line"></i>cryptocurrency</a
                >
              </li> -->
              <li>
                <a href="/course/forex"
                  ><i class="fa-solid fa-chart-line"></i>forex trading</a
                >
              </li>
              <!-- <li>
                <a href="/course/blockchain"
                  ><i class="fa-solid fa-chart-line"></i>blockchain
                  technology</a
                >
              </li> -->
              <li>
                <a href="/course/web"
                  ><i class="fa-solid fa-code"></i>web developement</a
                >
              </li>
              <!-- <li>
                <a href="/course/design"
                  ><i class="fa-solid fa-object-group"></i>graphic design</a
                >
              </li> -->
              <li>
                <a href="/music/piano"
                  ><i class="fa-solid fa-music"></i>piano lessons</a
                >
              </li>
            </ul>
          </div>
        </transition>
      </nav>
    </header>
    <header class="small-screen-header">
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
        <div class="logo-nav" @click="toHome()">
          <h1>Atech</h1>
          <div class="logo-name">
            <span>Advanced</span><span>Tech</span><span>Acadmemy</span>
          </div>
        </div>
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
            <i class="fa-solid fa-mug-saucer"></i> mode
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
            <i class="fa-solid fa-moon"></i> mode
          </button>
        </div>
        <nav class="menu-bars">
          <button @click="menuFunction()">
            <i class="fa-solid fa-bars"></i>
          </button>
        </nav>
      </nav>
      <nav class="bottom-nav menu-nav" v-if="onDropdown">
        <div class="logo-nav" @click="toHome()">
          <h1>Atech</h1>
          <div class="logo-name">
            <span>Advanced</span><span>Tech</span><span>Acadmemy</span>
          </div>
        </div>
        <!-- 681958002 -->
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
            <i class="fa-solid fa-mug-saucer"></i>mode
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
            <i class="fa-solid fa-moon"></i> mode
          </button>
        </div>
        <nav class="menu-bars">
          <button @click="closeDropdown()">&times;</button>
        </nav>
      </nav>
      <transition name="fade">
        <nav class="menu-dropdown" v-if="onDropdown">
          <ul>
            <li><a @click="openDropdown()">courses</a></li>
            <li v-if="dropRoute"><a href="/login">sign up</a></li>
            <li v-if="dropRoute"><a href="/login">sign in</a></li>
            <li v-if="dropRoute"><a href="/register">register</a></li>
            <li v-if="dropRoute"><a href="/why-us">why crypto?</a></li>
            <li v-if="dropRoute"><a href="/blog">blog</a></li>
            <li v-if="dropRoute"><a href="/#contact">contact</a></li>
          </ul>
        </nav>
      </transition>
      <transition name="fade">
        <div id="courses-list" v-if="showCourses">
          <h1>our courses and services</h1>
          <ul>
            <li>
              <a href="https://codingherald.herokuapp.com"
                ><i class="fa-solid fa-chart-line"></i>apps</a
              >
            </li>
            <!-- <li>
              <a href="/course/crypto"
                ><i class="fa-solid fa-chart-line"></i>cryptocurrency</a
              >
            </li> -->
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
            <!-- <li>
              <a href="/course/graphic"
                ><i class="fa-solid fa-object-group"></i>graphic design</a
              >
            </li> -->
            <li>
              <a href="/music/piano"
                ><i class="fa-solid fa-music"></i>piano lessons</a
              >
            </li>
          </ul>
        </div>
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

  .topNav {
    width: 100vw;
    height: 7vh;
    background: $fallback;
    background: linear-gradient(to top, rgb(20, 92, 125), #13253e);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    position: relative;

    a {
      height: 100%;
      width: fit-content;
      padding: 5px 10px;
      color: rgb(228, 228, 228);
      text-decoration: none;
      font-size: 11px;
      display: flex;
      justify-content: space-around;
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
      cursor:pointer;

      h1 {
        text-transform: uppercase;
        font: 600 35px "Nunito Sans", sans-serif;
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
    }
    .routes {
      width: 60%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .route {
        flex-basis: 1;
        flex-grow: 1;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-transform: capitalize;
        text-decoration: none;
        color: white;
        font-size: 12px;
        font-weight: 500;

        i {
          color: white;
          padding-left: 2px;
        }

        &:hover {
          box-shadow: 0 0 2px 4px #1b3457;
          border-radius: 7px;
        }
      }
      .route.special {
        color: #01b4fb;
        &:hover {
          border: none;
          box-shadow: 0 0 2px 4px #1e3d68;
          border-radius: 7px;
        }
      }
      .route.register {
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
    #courses-list {
      width: 100%;
      height: fit-content;
      background: white;
      position: absolute;
      bottom: -200%;
      left: 0;
      z-index: 1;

      .closeDropdown {
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 27px;
        color: rgb(20, 92, 125);
        cursor: pointer;
        transition: all 0.5s ease;
        margin-left: 20px;
        margin-top: 6px;

        &:hover {
          border-radius: 100%;
          background: linear-gradient(to bottom, rgb(20, 92, 125), #13253e);
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
        height: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        li {
          list-style-type: none;
          height: 9vh;
          cursor: pointer;
          flex-basis: 1;
          flex-grow: 1;

          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-transform: capitalize;
            font: 600 14px "Poppins", sans-serif;

            i {
              padding-right: 5px;
              font-size: 19px;
              color: $SecondaryColor;
            }
          }
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
      padding: 0 10px;
      position: relative;
      justify-content: space-between;

      .logo-nav {
        width: 40%;
      }

      .pagemodes {
        width: max-content;
        height: 70%;
        border-radius: 3px;
        padding: 0 5px;
        margin: 0 10px;
        background: linear-gradient(to bottom left, rgb(28, 160, 222), #0c1725);
        display: flex;
        justify-content: center;
        align-items: center;

        .mode {
          width: 100%;
          height: 100%;
          border: none;
          color: white;
          background: transparent;
          font-size: 15px;
          i {
            color: white;
            padding: 0 2px;
            font-size: 18px;
          }
        }
      }

      .menu-bars {
        width: 100px;
        // position: absolute;
        // right: 20px;
        // top: 10px;
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
          font-size: 35px;
        }
      }
    }

    .menu-dropdown,
    #courses-list {
      width: 100%;
      height: fit-content;
      padding: 20px;

      ul {
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
            color: $primaryColor;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
          }
        }
      }
    }
    #courses-list {
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
</style>
