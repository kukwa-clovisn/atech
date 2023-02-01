<template>
  <header>
    <div class="header-wrapper">
      <div class="logo-wrapper"><Dropdown :items="car_repairs" /></div>
      <div class="header-wrapper-content">
        <div class="header-wrapper-content-services">
          <div class="header-wrapper-content-services-service">
            <button class="header-route">
              <router-link to="/" class="route">Home</router-link>
            </button>
          </div>
          <div class="header-wrapper-content-services-service">
            <button class="header-route">
              <router-link to="/car_repairs" class="route">
                <Dropdown :items="car_repairs" name="car repairs"
              /></router-link>
            </button>
          </div>
          <div class="header-wrapper-content-services-service">
            <button class="header-route">
              <router-link to="/maritime" class="route"
                ><Dropdown :items="maritime" name="maritime"
              /></router-link>
            </button>
          </div>
          <div class="header-wrapper-content-services-service">
            <button class="header-route">
              <router-link to="/flight" class="route">
                <Dropdown :items="flight" name="flight"
              /></router-link>
            </button>
          </div>
        </div>
        <div class="header-wrapper-content-contact">
          <div class="header-wrapper-content-contact-content">
            <button class="header-route">
              <router-link to="/about-us" class="route">about-us</router-link>
            </button>
          </div>
          <div class="header-wrapper-content-contact-content">
            <button class="header-route">
              <router-link to="/contact" class="route">contact</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import Dropdown from "./Dropdown.vue";

const items = [
  { name: "contact", path: "/contact" },
  { name: "car repairs", path: "/car_repairs" },
  { name: "flight", path: "/flight" },
];

const car_repairs = [
  { name: "CAR REPAIR", path: "/car_repairs" },
  { name: "CAR PROGRAMMING", path: "/car_repairs" },
  { name: "CAR WASH", path: "/car_repairs" },
  { name: "PANA BITING", path: "/car_repairs" },
  { name: "PAINTING", path: "/car_repairs" },
];

const maritime = [
  { name: "OFFSHORE", path: "/maritime" },
  { name: "IMPORT & EXPORT", path: "/maritime" },
  { name: "GENERAL SUPPLY", path: "/maritime" },
  { name: "SHIP CHANDLING", path: "/maritime" },
  { name: "PAINTING SERVICES", path: "/maritime" },
  { name: "STANDBY JOBS", path: "/maritime" },
  { name: "GARBAGE REMOVAL", path: "/maritime" },
  { name: "TANK AND DEEP CLEANING", path: "/maritime" },
];

const flight = [
  { name: "FLIGHT TICKET", path: "/flight" },
  { name: "MEET AND GREET", path: "/flight" },
  { name: "HOTEL RESERVATION", path: "/flight" },
];
</script>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 100%;
  padding: 0;
  margin: 0;
  background: rgb(241, 162, 42);

  .header-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-wrapper {
      width: 35%;
      height: 100%;
    }

    .header-wrapper-content {
      width: 75%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      button.header-route {
        background: inherit;
        border: none;
        height: 100%;
        padding: 5px;
        display: block;

        a.route {
          text-decoration: none;
          color: rgb(58, 57, 57);
          font-weight: bold;
          font-size: 17px;
          text-transform: capitalize;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;

          &::after {
            content: "";
            width: 100%;
            height: 2px;
            position: absolute;
            bottom: 0;
            left: 0;
            border-radius: 0 10px 10px 0;
            background: transparent;
            border: 0.3px solid black;
            display: none;
          }
          &:hover {
            &::after {
              display: block;
              animation: hovering 0.3s 1 linear alternate backwards;
            }
          }
        }
        a.router-link-active.router-link-exact-active {
          color: white;

          &::after {
            border-color: white;
            background: white;
          }
        }

        @keyframes hovering {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }
      }
      .header-wrapper-content-services {
        width: 70%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .header-wrapper-content-services-service {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          height: 70%;
        }
      }

      .header-wrapper-content-contact {
        width: 30%;
        height: 100%;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        .header-wrapper-content-contact-content {
          height: 70%;
        }
      }
    }
  }
}
</style>
