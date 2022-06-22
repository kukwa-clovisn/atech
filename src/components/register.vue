<template>
  <div class="container">
    <header>
      <Header />
    </header>

    <div class="form-container">
      <form @submit.prevent="registerData">
        <div class="form-header">
          <h2>Register</h2>
          <span><router-link to="/" class="link">&times;</router-link> </span>
        </div>
        <div class="form-logo">
          <h1>Atech-Academy</h1>
        </div>
        <hr />
        <div class="form-inputs">
          <div class="form-input">
            <label for="username">Name:</label>
            <input
              type="text"
              name="username"
              id="username"
              v-model="user.username"
              placeholder="Enter your log in name"
              title="Enter your log in Name"
              required
            />
          </div>
          <div class="form-input">
            <label for="email">email:</label>
            <input
              type="email"
              name="emial"
              id="email"
              v-model="user.email"
              placeholder="Enter your log in email"
              title="Enter your log in email"
              required
            />
          </div>

          <div class="form-input">
            <label for="password">password:</label>
            <input
              type="password"
              name="password"
              id="password"
              v-model="user.password"
              placeholder="Enter your log in password"
              title="Enter your log in password"
              required
            />
          </div>
          <div class="form-input">
            <label for="course">select a course:</label>
            <select
              name="course"
              id="course"
              v-model="user.subscription.course"
              placeholder="Select a course"
              title="Select a course"
              required
            >
              <option value="Cryptocurrency">Cryptocurrency</option>
              <option value="Forex">Forex</option>
              <option value="Web Development">Web Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Music">Music</option>
            </select>
          </div>
          <div class="form-input">
            <label for="plan">subscription plan:</label>
            <select
              name="plan"
              id="plan"
              v-model="user.subscription.plan"
              placeholder="Select a payment plan"
              title="Select a payment plan"
              required
            >
              <option value="free">free</option>
              <option value="paid">paid</option>
            </select>
          </div>
          <div class="form-input">
            <button type="submit">continue</button>
          </div>
          <p>
            not signed in yet?
            <router-link to="/login" class="link">sign up</router-link>
          </p>
        </div>
        <transition name="pop">
          <div class="response-div" v-if="response.success || response.failed">
            <div class="success" v-if="response.success">
              <i class="fa-solid fa-circle-check"></i>{{ response.msg }}
            </div>
            <div class="failed" v-if="response.failed">
              <i class="fa-solid fa-triangle-exclamation"></i>{{ response.msg }}
            </div>
          </div>
        </transition>
      </form>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
import { reactive } from "vue";
import Header from "./header.vue";
export default {
  name: "Register",
  components: { Header },
  setup() {
    const user = reactive({
      username: "",
      email: "",
      password: "",
      subscription: { plan: "free", course: "Cryptocurrency" },
    });

    const response = reactive({
      success: false,
      failed: false,
      msg: "",
    });
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const registerData = () => {
      axios
        .post("/api/register", user, config)
        .then((res) => {
          console.log(res);
          if (res.statusText === "OK" || res.status === 201) {
            response.success = true;
            response.msg = res.data.msg;
            console.log(res);
            setTimeout(() => {
              response.success = false;

              router.push("/login");
            }, 3000);
          } else {
            response.failed = true;
            response.msg = "Registration failed.";
            setTimeout(() => {
              response.failed = false;
            }, 4000);
          }
        })
        .catch((err) => {
          console.log(err);
          response.failed = true;
          response.msg = err.response.data.msg
            ? err.response.data.msg
            : "Registration Failed.";
          setTimeout(() => {
            response.failed = false;
          }, 4000);
        });
    };
    return {
      user,
      response,
      registerData,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;

  header {
    width: 100%;
    background: rgb(161, 198, 181);
  }

  .form-container {
    width: 90%;
    height: fit-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background: url(../assets/login.png);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: contain;
    background-position: left;
    padding: 20px 2px;

    form {
      width: 450px;
      height: fit-content;
      background: rgb(19, 37, 62);
      border-radius: 5px;
      padding: 20px;

      .form-header {
        width: 95%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        h2 {
          color: white;
          font: 500 19px "Nunito Sans", sans-serif;
        }
        span {
          width: 20px;
          height: 20px;
          border-radius: 100%;
          box-shadow: 0 0 3px 2px rgb(215, 213, 213);
          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;

          .link {
            text-decoration: none;
            color: whitesmoke;
            font-size: 22px;
          }
          &:active {
            transform: scale(0.9);
          }
        }
      }
      .form-logo {
        background: white;
        width: 80%;
        height: fit-content;
        border-radius: 30px;
        margin: 20px auto;
        box-shadow: 0 0 1px 1px whitesmoke;
        cursor: pointer;
        position: relative;
        h1 {
          background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: "Grand Hotel", cursive;
          text-transform: capitalize;
        }
        &:active {
          transform: scale(0.9);
        }
      }
      hr {
        background: linear-gradient(to bottom, rgb(206, 5, 163), gold);
      }
      .form-inputs {
        width: 100%;

        .form-input {
          width: 100%;
          margin: 20px auto;

          label {
            width: 100%;
            text-align: left;
            text-transform: capitalize;
            color: whitesmoke;
            display: block;
            font-size: 15px;
          }
          input,
          select {
            width: 100%;
            height: 40px;
            border: none;
            outline: none;
            padding: 3px 15px;
            background: white;
            border-radius: 3px;
          }
          select {
            cursor: pointer;
          }
          button {
            width: 100%;
            height: 50px;
            border-radius: 3px;
            border: none;
            background: transparent;
            box-shadow: 0 0 2px 1px white;
            color: white;

            &:hover {
              background: rgba(230, 101, 129, 1);
              box-shadow: none;
            }
          }
        }
        p {
          font-size: 13px;
          color: whitesmoke;

          .link {
            color: rgba(230, 101, 129, 1);
          }
        }
      }

      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
    @media screen and (max-width: 500px) {
      width: 99%;
    }
  }
  .response-div {
    width: 100vw;
    height: fit-content;
    position: fixed;
    display: flex;
    justify-content: center;
    align-content: center;
    top: 19vh;
    left: 0;
    z-index: 1;
    div {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 5px;
      color: white;
      z-index: 1;
      background: rgb(40, 223, 122);
      font: 600 18px "Poppins", sans-serif;

      i {
        color: white;
        font-size: 25px;
        padding: 0 3px;
      }
    }
    div.failed {
      background: crimson;
      color: white;
    }
    @media screen and (max-width: 500px) {
      top: 60vh;
    }
  }
}
</style>
