<template>
  <main>
    <Header />
    <div class="content">
      <h2>Atech</h2>
      <transition name="fade">
        <div class="form" v-if="response.to_signin">
          <form @submit.prevent="signinFunc()">
            <h1>sign in</h1>
            <div class="input">
              <div class="value">
                <label for="username" class="input-label">
                  <i class="fa-solid fa-user"></i
                ></label>

                <input
                  type="username"
                  name="username"
                  id="username"
                  placeholder=" "
                  v-model="credentials.username"
                  required
                />
                <label for="username" class="active"
                  >Name <span>.....</span></label
                >
              </div>
            </div>
            <!-- <div class="input">
              <label for="username">Name:</label
              ><input
                type="text"
                name="username"
                id="username"
                v-model="credentials.username"
                placeholder="Enter username...."
                
              />
            </div> -->
            <div class="input">
              <div class="value">
                <label for="password" class="input-label">
                  <i class="fa-solid fa-user"></i
                ></label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  v-model="credentials.password"
                  required
                />
                <label for="password" class="active"
                  >password <span>.....</span></label
                >
              </div>
            </div>
            <button type="submit">sign in</button>
            <div class="forget-password">
              <span
                ><router-link to="/forget_password" class="route"
                  >forgot_password</router-link
                ></span
              ><span><router-link to="/" class="route">home</router-link></span>
            </div>
          </form>
          <div class="login">
            <div class="welcome">
              <h1>welcome again</h1>
              <h3>advanced Tech academy</h3>
              <p>invest in knowledge, invest in your future</p>
              <button @click="swapSigninFunc()">
                sign up <i class="fa-solid fa-hand-point-right"></i>
              </button>
              <router-link to="/" class="hroute">Home</router-link>
            </div>
          </div>
        </div>
      </transition>
      <transition name="slide">
        <div class="form form-signup" v-if="response.to_signup">
          <div class="login signup">
            <div class="welcome">
              <h1>welcome again</h1>
              <h3>advanced tech academy</h3>
              <p>discipline is a price for every success</p>
              <button @click="swapSignupFunc()">
                <i class="fa-solid fa-hand-point-left"></i> sign in
              </button>
              <router-link to="/" class="hroute">Home</router-link>
            </div>
          </div>
          <form @submit.prevent="signupFunc()">
            <div class="form-header">
              <h1>sign up</h1>
            </div>
            <div class="input">
              <div class="value">
                <label for="userName" class="input-label">
                  <i class="fa-solid fa-user"></i
                ></label>

                <input
                  type="userName"
                  name="userName"
                  id="userName"
                  placeholder=" "
                  v-model="user.username"
                  required
                />
                <label for="userName" class="active"
                  >Name <span>.....</span></label
                >
              </div>
            </div>
            <div class="input">
              <div class="value">
                <label for="Email" class="input-label">
                  <i class="fa-solid fa-envelope"></i
                ></label>

                <input
                  type="Email"
                  name="Email"
                  id="Email"
                  placeholder=" "
                  v-model="user.email"
                  required
                />
                <label for="Email" class="active"
                  >email <span>.....</span></label
                >
              </div>
            </div>
            <div class="input">
              <div class="value">
                <label for="password" class="input-label">
                  <i class="fa-solid fa-key"></i
                ></label>

                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder=" "
                  v-model="user.password"
                  required
                />
                <label for="password" class="active"
                  >password <span>.....</span></label
                >
              </div>
            </div>
            <div class="input">
              <div class="value">
                <label for="confirm_password" class="input-label">
                  <i class="fa-solid fa-key"></i
                ></label>

                <input
                  type="password"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder=" "
                  v-model="user.confirm_password"
                  required
                />
                <label for="confirm_password" class="active"
                  >confirm password <span>.....</span></label
                >
              </div>
            </div>
            <button type="submit">sign up</button>
          </form>
        </div>
      </transition>
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
      <footer>&copy;copyright_CodingHerald_2022</footer>
    </div>
    <span class="to-landing-page reach"
      ><a href="/#contact" class="a"
        ><i class="fa-solid fa-person-circle-question"></i></a
    ></span>
    <Spinner v-show="loader.state" :rate="loader.percent" :msg="loader.msg" />
  </main>
</template>

<script>
// import { v4 as uuidv4 } from "uuid";
import { computed, inject, watch } from "vue";
import Header from "./header.vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import Spinner from "./spinner.vue";
export default {
  name: "Sign_in",
  components: {
    Header,
    Spinner,
  },
  setup() {
    const router = useRouter();

    let loader = reactive({
      percent: 0,
      state: false,
      msg: "",
    });

    let user = reactive({
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    });

    let credentials = reactive({
      username: "",
      password: "",
    });

    let response = reactive({
      msg: "",
      success: false,
      failed: false,
      swap: true,
      to_signin: true,
      to_signup: false,
    });

    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    function swapSigninFunc() {
      response.to_signin = false;
      setTimeout(() => {
        response.to_signup = true;
      }, 1000);
    }

    function swapSignupFunc() {
      response.to_signup = false;
      setTimeout(() => {
        response.to_signin = true;
      }, 800);
    }

    function signupFunc() {
      if (user.password === user.confirm_password) {
        loader.state = true;
        loader.msg = "processing data.....";
        axios
          .post("api/signup", user, {
            onUploadProgress: (uploadEvent) => {
              response.success = true;
              response.msg = `processing data: ${Math.round(
                (uploadEvent.loaded / uploadEvent.total) * 100
              )} %`;
              watch(
                () => loader.percent,
                (newValue, oldValue) => {
                  console.log("new:", newValue);
                  console.log("old:", oldValue);
                }
              );

              loader.percent = computed(() => {
                return Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                );
              });

              if (loader.percent === 100) {
                response.success = false;
              }
            },
          })
          .then((res) => {
            if (res.statusText === "Created") {
              loader.state = false;
              response.msg = res.data.msg;
              response.success = true;
              response.to_signin = true;
              response.to_signup = false;

              user.username = "";
              user.email = "";
              user.password = "";

              setTimeout(() => {
                response.success = false;
                response.swap = true;
                credentials.username = res.data.username;
              }, 2000);
            } else {
              loader.state = false;
              response.msg = res.data.msg;
              response.failed = true;

              setTimeout(() => {
                response.failed = false;
                response.swap = false;
              }, 3000);
            }
          })
          .catch((err) => {
            loader.state = false;
            response.msg = err.response.data.msg;
            response.failed = true;

            setTimeout(() => {
              response.failed = false;
              response.swap = false;
            }, 3000);
          });
      } else {
        response.failed = true;
        response.msg = "Error: Your passwords don't match.";
        setTimeout(() => {
          response.failed = false;
        }, 3000);
      }
    }

    function signinFunc() {
      loader.state = true;
      loader.msg = "verifying credentials....";
      axios
        .post("api/signin", credentials, {
          onUploadProgress: (uploadEvent) => {
            response.success = true;
            response.msg = `processing data: ${Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            )} %`;
            watch(
              () => loader.percent,
              (newValue, oldValue) => {
                console.log("new:", newValue);
                console.log("old:", oldValue);
              }
            );

            loader.percent = computed(() => {
              return Math.round((uploadEvent.loaded / uploadEvent.total) * 100);
            });

            if (loader.percent === 100) {
              response.success = false;
            }
          },
        })
        .then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            loader.state = false;
            response.success = true;
            response.msg = res.data.msg;
            localStorage.setItem("accessId", res.data.accessId);

            localStorage.setItem("userId", res.data.username);

            localStorage.setItem("accessToken", res.data.accessToken);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${localStorage.getItem("accessToken")}`;

            setTimeout(() => {
              response.success = false;
              router.push("/course");
            }, 2000);
          } else {
            loader.state = false;
            response.msg = res.data.msg;
            response.failed = true;

            setTimeout(() => {
              response.failed = false;
            }, 3000);
          }
        })
        .catch((err) => {
          loader.state = false;
          response.msg = err.response.data.msg
            ? err
            : "Access Denied. Maybe network failure";
          response.failed = true;

          setTimeout(() => {
            response.failed = false;
          }, 3000);
        });
    }

    return {
      loader,
      user,
      credentials,
      response,
      swapSigninFunc,
      swapSignupFunc,
      signinFunc,
      signupFunc,
    };
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;
  background: #e7e7e7;
  background: #13253e;
  background: linear-gradient(to bottom, rgb(20, 92, 125), #13253e);

  .fade-enter-from {
    transform: translateX(120vw);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 1s ease;
  }
  .fade-enter-to {
    transform: translateX(0);
  }
  .fade-leave-from {
    transform: translateX(0);
  }

  .fade-leave-to {
    transform: translateX(120vw);
  }

  .slide-enter-from {
    transform: translateX(-120vw);
  }
  .slide-enter-active,
  .slide-leave-active {
    transition: all 1s ease;
  }
  .slide-enter-to {
    transform: translateX(0);
  }
  .slide-leave-from {
    transform: translateX(0);
  }

  .slide-leave-to {
    transform: translateX(-120vw);
  }

  .pop-enter-from {
    opacity: 0;
  }
  .pop-enter-active {
    opacity: 1;
    animation: pop 2s linear alternate forwards;
  }
  .pop-enter-to {
    opacity: 1;
  }
  .pop-leave-from {
    opacity: 1;
    transform: scale(0.7);
  }
  .pop-leave-active {
    opacity: 1;
    transition: 1s ease;
  }
  .pop-leave-to {
    opacity: 0;
    transform: translateX(150px);
  }

  @keyframes pop {
    from {
      opacity: 0.4;
      transform: scale(0.4);
    }
    to {
      opacity: 1;
      transform: scale(0.9);
    }
  }

  .landing-page-btn {
    width: 150px;
    height: 40px;
    border: none;
    background: white;
    border-radius: 3px;
    display: block;

    .homeBtn {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(9, 69, 149);
      text-transform: capitalize;
      font: 700 20px "Poppins", sans-serif;
      text-decoration: none;
    }
  }

  .content {
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;
    animation: 8s background-change infinite linear forwards;

    h2 {
      width: 730px;
      color: #a4a5a5;
      font: 500 27px "Poppins", sans-serif;
      padding: 10px;
      margin: auto;
      text-align: left;
      position: relative;
    }

    .form {
      width: 730px;
      height: 420px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      background: #fff;

      .login {
        width: 47%;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 0 0 60% 0;
        align-items: center;
        background: linear-gradient(to bottom right, #264f81, #13253e 80%);

        .welcome {
          width: 90%;
          height: fit-content;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          padding: 5px;

          h1 {
            text-transform: capitalize;
            font: 700 34px "Poppins", sans-serif;
            color: #fff;
          }

          h3 {
            font: 600 12px Poppins, sans-serif;
            text-transform: capitalize;
            padding: 5px;
            background: linear-gradient(180deg, #e66581, #fff);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          p {
            color: #d5d3d3;
            font: 400 9px "Poppins", sans-serif;
          }

          button {
            width: 170px;
            height: 50px;
            border: none;
            box-shadow: 0 0 1px 0.5px #fff;
            border-radius: 5px;
            margin-top: 20px;
            background: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            font: 600 20px "Poppins", sans-serif;

            i {
              padding: 0 3px;
            }

            &:hover {
              background: transparent;
              transform: scale(0.9);
            }
          }
          .hroute {
            text-decoration: underline;
            background: linear-gradient(180deg, #e66581, #fff);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 10px;
            font: 600 11px Poppins, sans-serif;
            opacity: 0.8;
            text-transform: uppercase;
            transition: all 0.3s ease;

            &:hover {
              text-decoration: underline;
              transform: scale(1.2);
            }
          }
        }
      }

      form {
        width: 53%;
        height: 100%;
        padding: 10px;
        background: #fff;

        h1 {
          padding: 10px;
          padding-bottom: 0;
          font: 600 45px "Nunito Sans", sans-serif;
          color: #e66581;
        }

        .form-header {
          width: 100%;
          h2 {
            font-size: 21px;
            color: #e66581;
            font-weight: 700;
            padding: 10px;
          }
          button {
            width: 70%;
            height: 30px;
            margin: 5px auto;
            border: 2px solid whitesmoke;
            border-radius: 30px;
            font: 500 14px "Nunito Sans", sans-serif;
            color: rgb(99, 101, 101);
            background: whitesmoke;

            &:hover {
              background: #e66581;
              border: none;
              color: white;
            }
          }
        }

        .input {
          margin: 20px auto;
          padding: 5px 0;
          width: 90%;

          .value {
            width: 100%;
            height: fit-content;
            display: Flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 0.5px 1px #264f81;
            border-radius: 3px;
            position: relative;
            label {
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 4px 3px;
              cursor: text;
              text-transform: capitalize;
              transition: all 0.3s ease;
            }

            label.active {
              position: absolute;
              top: 20%;
              left: 12%;

              span {
                width: fit-content;
                height: 20px;
                position: relative;
                background: white;
                padding: 0;
                padding-left: 2px;
                &::before {
                  content: "";
                  width: 100%;
                  height: 100%;
                  background: white;

                  letter-spacing: 2px;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  border-left: 1px solid rgb(70, 70, 70);
                  border-radius: 1px;
                  animation: inputwrite 2s steps(9, start) infinite alternate;
                }
              }
            }

            @keyframes inputwrite {
              to {
                transform: translateX(100%);
              }
            }

            label.input-label {
              position: relative;
              width: 10%;
              height: 35px;
              background: transparent;
              border-right: 1px solid rgb(207, 206, 206);
              display: flex;
              justify-content: center;
              align-items: center;
              padding: 1px 0;
              cursor: pointer;
              i {
                color: rgb(107, 132, 145);
                position: relative;
                left: 0;
                animation: writing 5s linear infinite forwards;
              }
            }

            input {
              width: 90%;
              height: 50px;
              outline: none;
              border: none;
              padding-left: 15px;
              background: transparent;
              border-radius: 0 3px 3px 0;
            }
            @keyframes writing {
              to {
                transform: rotateY(360deg);
              }
            }

            input:focus ~ label.active,
            input:not(:focus):not(:placeholder-shown) ~ label.active {
              top: -0.55rem;
              left: 12%;
              background: white;
              font-size: 0.7em;
              padding: 3px 6px;
              box-shadow: none;
              border-left: 2px solid #264f81;
              border: 2px solid #264f81;
              border-bottom: none;
              border-radius: 3px;
              span {
                display: none;
              }
            }
          }
        }

        button {
          width: 89%;
          height: 50px;
          background: #e66581;
          color: #fff;
          font: 700 23px "Poppins", sans-serif;
          border: none;
          border-radius: 5px;
          margin: 10px auto;
        }

        .forget-password {
          width: 90%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5px;
          span {
            cursor: pointer;
            .route {
              text-decoration: none;
              text-transform: capitalize;
              font: 500 16px "Poppins", sans-serif;
              color: #717070;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    .form-signup {
      height: 450px;
      width: 750px;

      .login {
        border-radius: 0 0 0 60%;
      }
      .input {
        margin: 10px auto !important;
        label {
          font-size: 15px;
        }
        input {
          height: 45px !important;
          font-size: 13px !important;
        }
      }
    }

    @media screen and (max-width: 760px) {
      .form {
        width: 95vw;
      }
      @media screen and (max-width: 600px) {
        .form {
          width: 400px;
          flex-direction: column-reverse;
          height: fit-content;
          .login {
            width: 100%;
            padding: 20px;
            padding-bottom: 10px;
          }
          form {
            width: 100%;
            height: fit-content;
            padding: 20px;
            padding-top: 10px;

            .input {
              width: 97%;
              margin: 20px auto;
              height: fit-content;
              input {
                height: 65px;
              }
            }
            button {
              width: 97%;
              height: 50px;
            }
          }
        }
        .form-signup {
          flex-direction: column;
        }

        @media screen and (max-width: 430px) {
          .form {
            width: 97vw;
          }
        }
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

    footer {
      width: 100vw;
      height: 5vh;
      padding: 30px auto;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(216, 216, 216);
    }
  }

  @keyframes background-change {
    25% {
      background: linear-gradient(to top left, rgb(20, 92, 125), #13253e);
    }
    50% {
      background: linear-gradient(to bottom left, rgb(20, 92, 125), #13253e);
    }
    75% {
      background: linear-gradient(to bottom, rgb(20, 92, 125), #13253e);
    }
    to {
      background: linear-gradient(to bottom right, rgb(20, 92, 125), #13253e);
    }
  }
}
</style>
