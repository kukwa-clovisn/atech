<template>
  <div :class="[{ sticky: sticky }, 'header-component-container']">
    <div class="header-wrapper">
      <div class="logo">
        <div class="logo-img">
          <img src="../assets/logo-white.jpg" alt="" />
        </div>
      </div>
      <div class="routes">
        <div class="route"><router-link to="/">Home</router-link></div>

        <div class="route">
          <router-link to="/why-us">about us</router-link>
        </div>
        <div class="route">
          <router-link to="/blog">blog</router-link>
        </div>
        <div class="route"><a href="/#contact">contact</a></div>
      </div>
      <div :class="[{ show: sticky }, 'menu-btn']">
        <button @click="$store.state.menuState = true">
          <i class="fa-solid fa-bars-staggered"></i>
        </button>
      </div>
      <div :class="[{ hide: sticky }, 'logins']">
        <div class="route">
          <router-link to="/chatgpt">chatGPT</router-link>
        </div>
        <div class="route">
          <router-link to="/login">log in</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const sticky = ref(false);
window.addEventListener(
  "scroll",
  () => (sticky.value = true ? window.scrollY > 0 : false)
);
</script>

<style lang="scss" scoped>
$fallback: rgb(19, 37, 62);
$basecolor: #23426e;

.header-component-container {
  width: 100vw;
  height: 14vh;

  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;

  .header-wrapper {
    width: 90%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 15%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;

      .logo-img {
        height: 50px;
        width: 50px;
        overflow: hidden;
        border-radius: 100%;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }
      }
    }

    .routes {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .route {
        a {
          color: white;
          letter-spacing: 1px;
          text-decoration: none;
          text-transform: capitalize;
          font: 500 13px "Montserrat", sans-serif;
        }
      }
    }

    .menu-btn {
      height: 100%;
      width: 20%;
      display: none;
      justify-content: center;
      align-items: center;
      button {
        background: transparent;
        border: none;

        i {
          font-size: 26px;
          color: white;
        }
      }
    }
    .menu-btn.show {
      display: flex;
    }

    .logins {
      width: 30%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      gap: 10px;

      .route {
        width: 45%;
        height: 35px;
        background: white;
        border-radius: 30px;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          letter-spacing: 1px;
          color: #23426e;
          text-transform: capitalize;
          font: 400 13px "Montserrat", "Poppins", sans-serif;
        }

        &:last-child {
          background: #e66581;

          width: 40%;
          a {
            color: white;
          }
        }

        &:hover {
          transform: scale(0.9);
        }
      }
    }
    .logins.hide {
      display: none;
    }
  }
}

.header-component-container.sticky {
  height: 12vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background: linear-gradient(to bottom left, $fallback, $basecolor);
  animation: slide_down 0.4s alternate ease-in-out forwards;

  .header-wrapper {
    width: 70%;
  }

  .logo .logo-img {
    height: 40px;
    width: 40px;
  }
}

@keyframes slide_down {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
}
</style>