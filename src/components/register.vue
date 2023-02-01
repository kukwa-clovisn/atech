<template>
  <div class="container">
    <header>
      <Header />
    </header>

    <div class="form-container">
      <div class="form">
        <div class="form-header">
          <h2>Register</h2>
        </div>
        <div class="form-logo">
          <h1>Atech-Academy</h1>
        </div>
        <hr />
        <form class="form-inputs">
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
                v-model="user.username"
                autocomplete="off"
                required
              />
              <label for="username" class="active"
                >Name <span>.....</span></label
              >
            </div>
          </div>
          <div class="input">
            <div class="value">
              <label for="email" class="input-label">
                <i class="fa-solid fa-envelope"></i
              ></label>

              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                v-model="user.email"
                required
              />
              <label for="email" class="active">email <span>.....</span></label>
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
            <label for="course" class="standard">select a course:</label>
            <div class="value">
              <label for="course" class="input-label"
                ><i class="fa-solid fa-book"></i
              ></label>
              <select
                name="course"
                id="course"
                v-model="user.subscription.course"
                placeholder="Select a course"
                title="Select a course"
                required
              >
                <option value="Forex">Forex</option>
                <option value="Web Development">Web Development</option>
                <option value="Music">Music</option>
              </select>
            </div>
          </div>
          <div class="input">
            <label for="plan" class="standard">subscription plan:</label>
            <div class="value">
              <label for="course" class="input-label"
                ><i class="fa-solid fa-dollar"></i
              ></label>
              <select
                name="plan"
                id="plan"
                v-model="user.subscription.plan"
                placeholder="Select a payment plan"
                title="Select a payment plan"
                @change="checkPay"
                required
              >
                <option value="free">free</option>
                <option value="paid">paid</option>
              </select>
            </div>
          </div>
          <transition name="appear">
            <div class="form-input" v-if="!engagePay">
              <button type="submit">
                <i class="fa-solid fa-money-check-dollar"></i>create a free
                account
              </button>
            </div>
          </transition>
        </form>
        <transition name="appear">
          <div class="form-input">
            <!--  v-if="engagePay" -->
            <button id="payunit-pay">
              <i class="fa-solid fa-money-check-dollar"></i> continue with
              payment
            </button>
          </div>
        </transition>

        <p>
          not signed in yet?
          <router-link to="/login" class="link">sign up</router-link>
        </p>
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
      </div>
      <Spinner v-show="loader.state" :rate="loader.percent" :msg="loader.msg" />
    </div>
  </div>
</template>

<script>
import router from "@/router";
import axios from "axios";
import { reactive, onMounted, computed, ref } from "vue";
import { PayUnit } from "payunitjs";
import generatedToken from "../interceptors/token";
import Header from "./header.vue";
import Spinner from "./spinner.vue";
export default {
  name: "Register",
  components: { Header, Spinner },
  setup() {
    const user = reactive({
      username: "",
      email: "",
      password: "",
      subscription: { plan: "free", course: "Forex" },
    });

    let engagePay = ref(false);
    let payunitBtn = ref(null);
    let registerMsg = ref("register for free");

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

    let loader = reactive({
      percent: 0,
      state: false,
      msg: "",
    });

    onMounted(() => {
      PayUnit(
        {
          apiUsername: "payunit_VKdysPeWL",
          apiPassword: "277bc276-de2e-4b47-a82e-6ea848e65062",
          x_api_key: "sand_IH4vH5PccNP8o8lpZCS3C2WWWLLRW8",
          // base_url: "gateway.paynit.net",
          mode: "test",
        },
        {
          return_url: "http://localhost:9003/register",
          notify_url: "http://localhost:9003/register",
          description: "payment from Advanced Tech Academy",
          purchaseRef: "",
          total_amount: "2000",
          name: "Advanced Tech Academy",
          currency: "XAF",
          transaction_id: generatedToken,
        }
      );
    });

    const checkPay = (e) => {
      if (user.subscription.plan === "paid") {
        registerMsg.value = "continue with payment";
        engagePay.value = true;
      } else {
        engagePay.value = false;
      }
    };

    const registerData = () => {
      loader.state = true;
      loader.msg = "checking user....please wait";
      axios
        .post("/api/register", user, {
          onUploadProgress: (uploadEvent) => {
            loader.percent = computed(() => {
              return Math.round((uploadEvent.loaded / uploadEvent.total) * 100);
            });

            if (loader.percent === 100) {
              response.success = false;
            }
          },
        })
        .then((res) => {
          if (res.statusText === "OK" || res.status === 201) {
            response.success = true;
            response.msg = res.data.msg;
            loader.state = false;
            setTimeout(() => {
              response.success = false;

              router.push("/login");
            }, 3000);
          } else {
            response.failed = true;
            response.msg = "Registration failed.";
            loader.state = false;
            setTimeout(() => {
              response.failed = false;
            }, 4000);
          }
        })
        .catch((err) => {
          loader.state = false;
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
      engagePay,
      payunitBtn,
      loader,
      registerMsg,
      checkPay,
      registerData,
    };
  },
};
</script>

<style lang="scss" scoped>
$baseColor: #1d375f;
.container {
  width: 100%;
  height: fit-content;
  background: $baseColor;
  background: linear-gradient(to bottom, rgb(20, 92, 125), #13253e);

  header {
    width: 100%;
    background: $baseColor;
    background: linear-gradient(to bottom, rgb(20, 92, 125), #13253e);
  }

  .form-container {
    width: 90%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background: url(../assets/login.png);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: 50% auto;
    background-position: right;
    padding: 20px 2px;
    margin: 0 auto;

    .form {
      width: 450px;
      height: fit-content;
      background: rgb(19, 37, 62);
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 0 2px #193257;

      .form-header {
        width: 90%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 auto;

        h2 {
          color: white;
          font: 600 19px "Nunito Sans", sans-serif;
        }
      }
      .form-logo {
        background: white;
        width: 95%;
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
        background: linear-gradient(to bottom, #032f72, #7ca7e7);
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
          #payunit-pay,
          button {
            width: 90%;
            height: 50px;
            border-radius: 3px;
            border: none;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgb(20, 92, 125);
            box-shadow: 0 0 1px rgb(20, 92, 125);
            color: white;
            text-transform: capitalize;
            font-family: "Poppins", sans-serif;
            gap: 7px;
            margin: auto;

            i {
              font-size: 25px;
            }

            &:hover {
              background: #5981be;
              box-shadow: none;
              transform: none;
            }
            &:active {
              transform: scale(0.9);
            }
          }
        }
        .input {
          margin: 20px auto;
          padding: 5px 0;
          width: 90%;

          .standard {
            color: #7ca7e7;
            text-transform: capitalize;
          }

          .value {
            width: 100%;
            height: fit-content;
            display: Flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 0.5px 1px #264f81;
            color: #6089c6;
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
                background: rgb(19, 37, 62);
                padding: 0;
                padding-left: 2px;
                &::before {
                  content: "";
                  width: 100%;
                  height: 100%;
                  background: rgb(19, 37, 62);
                  letter-spacing: 2px;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  border-left: 1px solid rgb(32, 62, 103);
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
              border-right: 1px solid rgb(52, 104, 175);
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

            input,
            select {
              width: 90%;
              height: 50px;
              outline: none;
              border: none;
              padding-left: 15px;
              background: transparent;
              color: #739ddb;
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
              background: rgb(19, 37, 62);
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
      }
      p {
        font-size: 13px;
        color: whitesmoke;

        .link {
          color: #7ca7e7;
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
