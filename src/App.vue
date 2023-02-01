<template>
  <main>
    <header>
      <Header />
    </header>
    <router-view v-slot="{ Component }" data-aos="fade">
      <transition name="routes">
        <component :is="Component" :class="{ 'cafe-mode': cafe }" />
      </transition>
    </router-view>
  </main>
</template>
<script >
import Header from "./components/Header.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: {
    Header,
  },
  setup() {
    const store = useStore();

    const page_mode = store.state.mode;
    const cafe = ref(false);

    computed(() => {
      if (store.state.mode.cafe) {
        cafe.value = true;
      }
    });

    return { cafe };
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,400;1,700&family=Grand+Hotel&family=Jacques+Francois&family=Jacques+Francois+Shadow&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");

main {
  width: 100vw;
  height: fit-content;
  header {
    width: 100vw;
    height: 60px;
  }
}

// custom styles that go for all tags with same class name
.custom-header-2 {
  font-size: 45px;
  text-transform: capitalize;
  font-weight: 700;
  color: white;
  text-align: center;
  padding: 30px auto;
  position: relative;
  line-height: 70px;
}

.blur-wrapper {
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.6;
  z-index: 0.5;
  position: absolute;
  top: 0;
  left: 0;
}

.flex-div {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30px auto;
  width: 95%;
  gap: 20px;

  .flex-div-content {
    background: white;
    width: 240px;
    height: 140px;

    .flex-div-content-top {
      width: 100%;
      height: 70%;

      .flex-div-content-top-img {
        width: 100%;
        height: 100%;
        overflow: hidden;

        img {
          height: 100%;
          width: auto;
          cursor: pointer;
        }
      }
    }

    .flex-div-content-bottom {
      height: 30%;
      width: 100%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;

      p {
        width: 100%;
        color: black;
        font-weight: bold;
        font-size: 18px;
        text-align: center;
      }
    }

    &:hover {
      background: transparent;
      box-shadow: 0 1px 2px 1px rgb(255, 255, 255);
      transition: all 0.7s ease;
      transform: scale(3);
      .flex-div-content-bottom p {
        color: white;
      }
    }
  }
}
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
</style>
