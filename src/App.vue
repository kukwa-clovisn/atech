<template>
  <div id="main-component">
    <router-view v-slot="{ Component }">
      <transition name="routes">
        <component :is="Component" :class="{ 'cafe-mode': cafe }" />
      </transition>
    </router-view>

    <menuComponent />
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import menuComponent from "./components/menu-component.vue";

const store = useStore();

const page_mode = store.state.mode;
const cafe = ref(false);

computed(() => {
  if (store.state.mode.cafe) {
    cafe.value = true;
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Grand+Hotel&family=Jacques+Francois&family=Jacques+Francois+Shadow&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");

$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$primeColor: rgb(218, 121, 121);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);

.move-in-enter-active,
.move-in-leave-active,
.refresh-enter-active,
.refresh-leave-active {
  transition: all 1s ease;
}

.appear-enter-active,
.appear-leave-active {
  opacity: 0;
  transition: all 0.7s ease;
}

.move-in-enter-from {
  transform: translateY(-70vh);
}

.move-in-leave-to {
  transform: translateX(100vw);
}

.appear-enter-to {
  opacity: 0;
}

.refresh-enter-from,
.refresh-in-enter-from {
  transform: translateX(80vw);
}

.slide-in-enter-from {
  transform: translateY(15vh);
}

.refresh-in-enter-active,
.refresh-in-leave-active,
.slide-in-active {
  transition: all 0.3s ease;
}

.refresh-in-leave-to {
  transform: translateX(90vw);
}

.slide-in-leave-to {
  transform: translateY(20vh);
}

::-webkit-scrollbar {
  width: 10px;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb {
  background: rgb(177, 176, 176);
  border-radius: 30px;
}

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  transition: all 0.3s ease;
}

html {
  scroll-behavior: smooth;
}

.cafe-mode {
  filter: sepia(0.9) hue-rotate(315deg) brightness(0.9);
}

.routes-enter-from {
  transform: translateX(110vw);
}
.routes-enter-active {
  transition: all 1s ease;
}
.routes-enter-to {
  transform: transformX(0);
}
.routes-leave-from {
  transform: transformX(0);
}
.routes-leave-active {
  transition: all 0.5s ease;
}
.routes-leave-to {
  transform: transformX(-110vw);
}

button,
a,
label {
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
  &:active {
    transform: scale(0.8);
  }
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.primary-btn {
  width: 150px;
  height: 45px;
  border: none;
  background: #23426e;
  border-radius: 3px;
  display: block;

  .homeBtn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-transform: capitalize;
    font: 700 20px "Poppins", sans-serif;
    text-decoration: none;
  }
}

.to-landing-page {
  width: 40px;
  height: 40px;
  border-radius: 3px;
  background: $baseColor;
  position: fixed;
  right: 30px;
  bottom: 50px;
  z-index: 1;

  .a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
}
.reach {
  left: 10px;
  border-radius: 100%;
  width: 55px;
  height: 55px;
  background: $SecondaryColor;
  a {
    i {
      font-size: 20px;
    }
  }
}

.blur,
.blur-wrapper {
  width: 100%;
  height: 100%;
  background: #1f1c2d;
  opacity: 0.7;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 0;
}

.landing-page {
  width: 100vw;
  min-height: 90vh;
  background: url(./assets/social.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  position: relative;

  .animation,
  .animation1 {
    position: absolute;
    top: 50%;
    left: 10%;
    canvas {
      width: 20px;
      height: 20px;
      border: 1px solid white;
      position: relative;
    }

    .animate1,
    .animation3 {
      position: relative;
      border: 1px solid white;
      border-top: none;
      border-bottom: none;
      animation: animate1 10s infinite linear alternate forwards;

      &::before,
      &::after {
        content: "Atech";
        width: 30px;
        height: 30px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 7px;
        background: linear-gradient(to bottom left, rgb(28, 160, 222), #0c1725);
        position: absolute;
        top: 0;
        left: 0;
      }

      &::after {
        top: 100%;
        left: 100%;
      }
    }
    .animate2,
    .animation4 {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      animation: animate2 18s linear infinite alternate forwards;
      &::before,
      &::after {
        content: "Atech";
        width: 30px;
        height: 30px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        font-size: 7px;
        background: linear-gradient(to bottom left, rgb(28, 160, 222), #0c1725);
        position: absolute;
        top: 0;
        left: 0;
      }

      &::after {
        top: 100%;
        left: 100%;
      }
    }
  }

  .animation1 {
    left: 90%;
  }

  @keyframes animate1 {
    from {
      width: 20px;
      height: 20px;
    }
    50% {
      width: 100px;
      height: 100px;
      transform: scale(2) translateZ(20%);
    }
    to {
      transform: rotate(300deg);
    }
  }
  @keyframes animate2 {
    50% {
      transform: translateX(200px) rotate(50deg);
    }
    to {
      transform: translateY(300px) rotateX(90deg);
    }
  }
  .title {
    width: 100%;
    height: fit-content;
    position: relative;
    padding: 10px 20px;
    margin: auto;

    h1 {
      text-transform: capitalize;
      font: 800 65px "Poppins", sans-serif;
      color: white;
      padding: 10px;
      width: 95%;
      margin: auto;

      @media screen and (max-width: 400px) {
        font-size: 40px;
      }
    }

    p {
      font: 500 13px "Poppins", sans-serif;
      color: white;
    }

    .intro-btn {
      width: 350px;
      height: fit-content;
      margin: 30px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .start-btn {
        text-decoration: none;
        flex-basis: 1;
        flex-grow: 1;
        margin: 10px;
        height: 45px;
        border-radius: 7px;
        box-shadow: 0 0 0.5px 1px rgb(197, 196, 196);
        color: white;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease;
        &:hover {
          box-shadow: 0 0 1px 1px rgb(25, 121, 165);
          color: rgb(25, 115, 157);
        }

        &:last-child {
          background: rgb(22, 81, 109);
          box-shadow: none;
          &:hover {
            background: linear-gradient(
              to bottom right,
              rgb(20, 92, 125),
              #13253e
            );
            color: white;
          }
        }
      }

      @media screen and (max-width: 550px) {
        width: 90%;
        border-radius: 7px;
      }
    }

    section {
      width: 100%;
      height: auto;
      display: block;
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;

      h2 {
        border: 1px solid #fff;
        width: 300px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #13253e;
        border-radius: 10px 0 10px 0;
      }
      .words {
        width: 300px;
        height: 40px;
        border-bottom: 1px solid #fff;
        position: relative;
        overflow: hidden;

        ul {
          width: 100%;
          height: 40px;
          position: relative;
          top: 0;
          animation: change 20s steps(4) infinite;

          li {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            list-style-type: none;
            text-transform: capitalize;
            text-align: left;
            padding: 0 10px;
            font-family: "Nunito sans", sans-serif;

            span {
              color: $SecondaryColor;
              font-weight: 600;
              padding: 0 5px;
              text-transform: capitalize;
            }
          }
        }
      }

      @keyframes change {
        from {
          top: 0;
        }
        to {
          top: -160px;
        }
      }

      @media screen and (max-width: 500px) {
        h2,
        .words ul li {
          font-size: 14px;
        }
      }
    }
  }

  @keyframes run {
    from {
      left: 0;
      opacity: 1;
    }
    to {
      left: 60vw;
      opacity: 0;
    }
  }

  #blur {
    width: 100%;
    min-height: 100%;
    background: linear-gradient(to bottom, rgb(20, 92, 125), #13253e);
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.85;
  }
}

#main {
  width: 100%;
  margin: 0;
  background: transparent;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .courses-div {
    width: 100%;
    height: fit-content;
    padding: 20px;
    margin-top: 30px;
    padding-top: 50px;
    background: transparent;
    h1 {
      font: 800 40px "Poppins", sans-serif;
      padding-top: 30px;
      text-transform: capitalize;
      word-spacing: 13px;
      letter-spacing: 1px;
      width: 95%;
      margin: 10px auto;
      margin-top: 20px;
      position: relative;
      display: flex;
      font-family: "Grand Hotel", cursive;
      justify-content: center;
      align-items: center;
      background: linear-gradient(
        to bottom,
        $SecondaryColor 40%,
        $tertiaryColor
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      text-transform: capitalize;
      padding: 30px 20px;
      font: 500 20px "Nunito Sans", sans-serif;
      color: white;
      position: relative;
    }

    .courses {
      width: 90%;
      margin: auto;
      padding: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      .tutorial {
        width: 500px;
        margin-right: 40px;
        margin-bottom: 50px;
        border-radius: 20px !important;
        // box-shadow: 0 0 2px 1px #3d566f;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        .video {
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: white;
          border-radius: 7px 7px 0 0;
          position: relative;

          img {
            height: 100%;
            width: auto;
            cursor: pointer;
          }
          .fullwidth {
            width: 100%;
            height: auto;
          }
        }

        .video-title {
          width: 100%;
          min-height: 200px;
          padding: 15px;
          padding-top: 35px;
          position: relative;
          border-radius: 0 0 7px 7px;
          background: #072e54;

          .free-course {
            width: 60px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 5px;
            right: 0;
            color: #fff;
            background: #e66581;
            border-radius: 10px 0 0 10px;
          }

          h3 {
            padding: 10px;
            font: 600 20px "Poppins", sans-serif;
            text-align: left;
            text-transform: capitalize;
            color: #fff;

            span {
              color: #418ce4;
              font-size: 20px;
              text-transform: uppercase;
              display: block;
              padding: 3px;
            }
          }

          p {
            color: #bcbcbc;
          }

          button {
            width: 80%;
            height: 45px;
            margin: 10px auto;
            background: #e66581;
            color: #fff;
            border: none;
            border-radius: 5px;
            text-transform: capitalize;
          }
        }
      }
    }

    @media screen and (max-width: 1285px) {
      .courses {
        justify-content: center;
        .tutorial {
          margin: 40px auto;
        }
      }

      @media screen and (max-width: 768px) {
        padding: 10px;
        .courses {
          width: 100%;
          padding: 10px;
          .tutorial {
            width: 100%;
          }
        }
      }
    }
  }
}

#tutorial {
  width: 100%;
  position: relative;
  margin: 0;
  height: 100%;
  padding: 0;
  position: relative;
  background: linear-gradient(to left, rgb(23, 31, 36), #13253e);
  color: rgb(214, 211, 211);

  .tutorial-common {
    width: 100vw;
    height: fit-content;
    background: linear-gradient(to right, rgb(23, 31, 36), #13253e);
    margin: 0;
    padding: 20px 10px;
    position: relative;

    h1 {
      color: rgb(238, 179, 30);
      text-align: center;
    }

    h2 {
      text-align: center;
      color: white;
    }
    .course-title {
      font: 600 30px "Nunito Sans", sans-serif;
      color: rgb(23, 197, 52);
    }
  }

  .logo {
    width: auto;

    height: fit-content;
    margin: auto;

    img {
      width: 100px;
      height: 100px;
      border-radius: 100%;
    }
  }

  img {
    display: block;
    margin: 4px auto;
    width: auto;
    height: 400px;

    @media screen and (max-width: 400px) {
      width: 100%;
      height: auto;
      margin: auto;
    }
  }

  h1 {
    padding: 10px;
    margin: 20px auto;
    font: 600 30px "Nunito Sans", "Poppins", sans-serif;
    text-transform: uppercase;
    text-align: center;

    @media screen and (max-width: 660px) {
      font-size: 30px;
      white-space: pre-wrap;
    }
  }
  .course-name {
    text-align: center;
  }

  h4 {
    font: 600 19px "Poppins", sans-serif;
    padding: 10px;
    color: rgb(238, 179, 30);
    text-align: center;
  }

  ul {
    width: 100%;
    height: fit-content;
    padding: 20px;
    background: #072e54;

    h3 {
      text-transform: capitalize;
      font: 600 30px "Poppins", sans-serif;
      text-align: left;
      padding: 10px;
      color: #fff;
    }

    li {
      list-style-type: none;
      height: fit-content;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      span {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        border-radius: 100%;
        background: #418ce4;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
      }
      a {
        width: 90%;
        text-decoration: none;
        text-align: left;
        color: #fff;
        text-transform: capitalize;
      }
    }
  }

  h2 {
    font: 600 28px "Nunito sans", sans-serif;
    text-transform: capitalize;
    padding: 10px;
  }
  .course-div {
    width: 95%;
    margin: auto;
    text-align: left;
    line-height: 30px;
  }

  p {
    width: 96%;
    margin: 3px auto;
    font: 400 16px "Poppins", sans-serif;
    text-align: left;
    padding: 10px;
    line-height: 25px;
    position: relative;
  }
  div {
    width: 96%;
    margin: 3px auto;
    text-align: left;
  }
  p.intro {
    text-align: left;
    font: 600 19px "Nunito Sans", sans-serif;
    line-height: 30px;
    padding: 10px;
  }
  .videos {
    max-width: fit-content;
    height: fit-content;
    margin: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  }
  .video {
    width: fit-content;
    height: fit-content;
    margin: 20px;
    margin-bottom: 20px;

    iframe {
      width: 500px !important;
      min-height: fit-content !important;
      border-radius: 2px;
      // box-shadow: 0 3px 2px 2px rgb(233, 232, 232);
      @media screen and (max-width: 540px) {
        width: 95vw !important;
        margin: 20px 0;
      }
    }
    @media screen and (max-width: 540px) {
      margin: 20px 0;
    }
  }
  .feedback {
    width: fit-content;
    margin: 10px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    button {
      min-width: 150px;
      height: 50px;
      padding: 10px;
      border: none;
      margin: 10px;
      border-radius: 5px;
      border: 1px solid #bdbebe;
      font-weight: 700;
      font-size: 20px;
      background: transparent;
      color: $baseColor;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(221, 218, 218);
      i {
        font-size: 25px;
        margin-right: 5px;
        color: #fff;
      }

      @media screen and (max-width: 800px) {
        width: 90%;
      }
    }
    button.active {
      background: rgb(238, 179, 30);
      color: white;
      border: none;

      i {
        color: white;
      }
    }
  }

  .question {
    width: 90%;
    margin: auto;
    height: fit-content;
    padding: 10px;

    label {
      padding: 10px;
      text-align: left;
      display: block;
      width: 100%;
      text-transform: capitalize;
      font: 600 23px "Poppins", sans-serif;
    }

    input {
      width: 50%;
      height: 50px;
      outline: none;
      border: none;
      background: #e7e5e5;
      border-radius: 5px;
      padding: 3px 20px;
      display: block;
      margin-bottom: 10px;
    }

    textarea {
      width: 100%;
      height: 300px;
      border: none;
      outline: none;
      font-weight: 500;
      color: #072e54;
      box-shadow: 0 0 2px 1px #eee;
      padding: 20px;
      background: #eaeaea;
    }

    button {
      display: block;
      width: 50%;
      height: 60px;
      border: none;
      background: #e66581;
      color: #fff;
      border-radius: 5px;
      margin-top: 15px;
      text-transform: capitalize;
      font: 600 20px "Nunito sans", sans-serif;
    }
  }

  @media screen and (max-width: 700px) {
    p,
    div {
      width: 99%;
    }
  }
}

#tutorial.gray-mode {
  background: rgb(4, 104, 49);

  .tutorial-common {
    background: rgb(4, 138, 64);
  }
  ul {
    background: rgb(3, 101, 47);
  }
}

#tutorial.light-mode {
  background: white;
  color: rgb(51, 51, 51);

  .tutorial-common {
    background: white;
  }
  h2 {
    color: rgb(32, 31, 31);
  }

  h3,
  p,
  h5 {
    color: rgb(31, 30, 30);
  }
  ul {
    h3 {
      color: white;
    }
  }
}
</style>
