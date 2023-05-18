<template>
  <div
    :class="[
      { active: $store.state.menuState },
      { inactive: !$store.state.menuState },
      'menu-container',
    ]"
  >
    <div
      class="blur-wrapper"
      @click="($event) => ($store.state.menuState = false)"
    ></div>
    <div
      :class="[
        { 'is-active': $store.state.menuState },
        { inactive: !$store.state.menuState },
        'menu-wrapper',
      ]"
    >
      <button
        class="close"
        @click="($event) => ($store.state.menuState = false)"
      >
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="menu-header">
        <div class="logo">
          <img
            @click="($event) => $router.push('/')"
            src="../assets/logo-white.jpg"
            alt=""
          />
        </div>
        <p>Book and appointment with us today.</p>
        <button
          class="appointment"
          @click="
            ($event) => {
              $router.push('/'), ($store.state.menuState = false);
            }
          "
        >
          book an appointment now!
        </button>
      </div>

      <div class="services">
        <h2>Advanced Tech Academy</h2>
        <div class="service-wrapper">
          <router-link
            to="/"
            @click="($event) => ($store.state.menuState = false)"
            >home <i class="fa-solid fa-arrow-right"></i
          ></router-link>
          <router-link
            to="/why-us"
            @click="($event) => ($store.state.menuState = false)"
            >about us <i class="fa-solid fa-arrow-right"></i
          ></router-link>
          <router-link
            to="/blog"
            @click="($event) => ($store.state.menuState = false)"
            >blog <i class="fa-solid fa-arrow-right"></i
          ></router-link>
        </div>
        <hr />
        <h2><i class="fa-solid fa-phone"></i> contact us</h2>
        <div class="service-wrapper">
          <a
            href="/#contact"
            @click="($event) => ($store.state.menuState = false)"
            >contact us <i class="fa-solid fa-arrow-right"></i
          ></a>
        </div>
        <h2>follow us on:</h2>
        <div class="media-wrapper">
          <a href="#" class="link" title="Give us a call"
            ><i class="fa-solid fa-phone"></i
          ></a>
          <a href="#" class="link" title="Chat us on whatsapp"
            ><i class="fa-brands fa-whatsapp"></i
          ></a>
          <a href="#" class="link"
            ><i class="fa-brands fa-facebook" title="Follow on facebook"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;

  .blur-wrapper {
    background: #173159;
    opacity: 0.7;
    cursor: pointer;
  }

  .menu-wrapper {
    width: 28vw;
    height: 100vh;
    background: #1d375f;
    position: relative;
    padding-left: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .close {
      width: 100px;
      height: 40px;
      position: absolute;
      top: 2%;
      right: 3%;
      border: none;
      background: transparent;
      font-size: 25px;
      color: rgb(237, 236, 236);

      i {
        color: white;
      }

      &:hover {
        transform: scale(1.2) rotateZ(-180deg);
        color: rgb(217, 144, 7);
      }
    }

    .menu-header {
      width: 95%;
      height: 35vh;
      padding-top: 30px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      gap: 10px;
      border-bottom: 2px solid #e66581;

      .logo {
        width: 70px;
        height: 70px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        border-radius: 100%;

        img {
          width: 70px;
          height: 70px;
          object-fit: contain;
          cursor: pointer;
        }
      }

      p {
        font-size: 12px;
        text-align: center;
        color: rgb(252, 249, 242);

        @media screen and (max-width: 400px) {
          margin: 3px 0;
        }
      }

      .appointment {
        border: none;
        background: #e66581;
        color: white;
        width: 80%;
        height: 45px;
        text-transform: uppercase;
        border-radius: 4px;
        overflow: hidden;
        position: relative;

        &:hover {
          background: rgb(21, 50, 105);

          &::before {
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
            background: #e66581;
            border-radius: 0 30px 30px 0;
            animation: background_slideX 1s 1 linear alternate forwards;
          }
        }

        @media screen and (max-width: 1000px) {
          width: 90%;
        }
      }

      @media screen and (max-width: 1000px) {
        height: 36vh;
      }
    }

    .services {
      width: 100%;
      height: 65vh;
      padding: 10px 0 20px 0;
      overflow: hidden;
      overflow-y: scroll;
      background: #1d375f;

      h2 {
        padding: 10px 0;
        text-transform: uppercase;
        text-align: left;
        color: #be7d8b;
        font-size: 20px;
        @media screen and (max-width: 1000px) {
          font-size: 17px;
          padding: 3px 0;
          padding-left: 10px;
        }
      }

      .service-wrapper {
        width: 100%;
        height: fit-content;

        a {
          display: block;
          width: 100%;
          height: fit-content;

          text-decoration: none;
          text-transform: capitalize;
          text-align: left;
          padding: 10px 15px;
          color: white;

          i {
            visibility: hidden;
          }

          &:hover {
            color: #e66581;

            i {
              visibility: visible;
            }
          }
        }
      }

      .media-wrapper {
        width: 90%;
        height: fit-content;
        display: flex;
        margin: 5px auto;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;

        .link {
          width: 50px;
          height: 50px;
          border-radius: 100%;
          background: #e66581;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;

          i {
            color: white;
            font-size: 25px;
          }
        }
      }

      @media screen and (max-width: 1000px) {
        height: 64vh;
      }
    }

    @media screen and (max-width: 1000px) {
      width: 40vw;

      @media screen and (max-width: 790px) {
        width: 50vw;

        @media screen and (max-width: 610px) {
          width: 100%;
        }
      }
    }
  }

  .menu-wrapper.is-active {
    animation: menu_active 0.5s 1 linear alternate forwards;
  }
  .menu-wrapper.inactive {
    animation: menu_inactive 0.5s linear alternate forwards;
  }
}
.menu-container.inactive {
  animation: menu_inactive 0.5s linear alternate forwards;

  .blur-wrapper {
    animation: disappear 0.4s linear alternate forwards;
  }
}

@keyframes menu_active {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}

@keyframes menu_inactive {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-200%);
    display: none;
  }
}
</style>