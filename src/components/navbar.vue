<template>
  <div :class="[{ changeBg: sticky }, 'navbar']">
    <div class="navbar-wrapper">
      <div class="left-navbar">
        <h3>connect with us:</h3>
      </div>
      <div class="right-navbar">
        <div class="link">
          <a
            href="https://www.facebook.com/237atech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-facebook"></i> facebook</a
          >
        </div>
        <div class="link">
          <a
            href="https://twitter.com/KukwaNgong"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-twitter"></i> twitter</a
          >
        </div>
        <div class="link">
          <a
            href="https://www.linkedin.com/in/codingherald/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-linkedin"></i> linkedin</a
          >
        </div>
        <div class="link">
          <a
            href="https://wa.link/geye6o"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-whatsapp"></i> whatsapp</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const sticky = ref(false);

window.addEventListener("scroll", () => {
  sticky.value = true ? window.scrollY > 0 : false;
});
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 10vh;
  background: #1d375f;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .navbar-wrapper {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    flex-wrap: wrap;

    .left-navbar {
      width: 25%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        color: white;
        text-transform: capitalize;
      }
    }

    .right-navbar {
      width: 60%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .link {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        height: 100%;
        color: white;

        i {
          color: rgb(226, 226, 226);
        }

        a {
          text-decoration: none;
          color: white;
          text-transform: capitalize;
        }

        &:hover {
          color: gold;
          i,
          a {
            color: gold;
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      .left-navbar {
        width: 100%;

        h3 {
          font-size: 14px;
        }
      }
      .right-navbar {
        width: 100%;

        .link {
          a {
            font-size: 11px;

            @media screen and (max-width: 450px) {
              font-size: 8px;
            }
          }
        }
      }
    }
  }
}
.navbar.changeBg {
  background: rgb(255, 255, 255);
  box-shadow: 0 8px 10px 3px rgb(237, 236, 236);
  height: 13vh;
  animation: slide_down 0.5s 1 alternate forwards;
  position: relative;

  .navbar-wrapper {
    .left-navbar h3,
    .right-navbar .link a,
    .right-navbar .link i {
      color: #1d375f;
    }
  }
}
.navbar.changeBg {
  box-shadow: 0 8px 18px 2px rgb(201, 200, 200);
}
</style>