<template>
  <div
    class="container"
    :class="{ 'dark-mode': mode.dark, 'gray-mode': mode.gray }"
  >
    <div class="left-content">
      <div class="user-logo">{{ profile.name.split("")[0] }}</div>
      <h1>Dashboard</h1>
      <div class="container-card">
        <div class="top-content"></div>
        <div class="bottom-content">
          <span class="edit" @click="updateProfile = true"
            ><i class="fa-solid fa-pen"></i
          ></span>
          <div class="info">
            <h1>{{ profile.name }}</h1>
            <p>{{ profile.email }}</p>
            <h5>Douala</h5>
          </div>
        </div>
      </div>

      <h1>Select page color mode:</h1>
      <div class="page-modes">
        <button
          class="page-mode light"
          :class="{ active: mode.light }"
          @click="pagemode('light')"
          title="Light mode"
        >
          <span>
            <i class="fa-solid fa-moon off"></i><i class="fa-solid fa-bahai"></i
          ></span>
        </button>
        <button
          class="page-mode dark"
          :class="{ active: mode.dark }"
          @click="pagemode('dark')"
          title="Dark mode"
        >
          <span
            ><i class="fa-solid fa-power-off off"></i
            ><i class="fa-solid fa-bahai"></i
          ></span>
        </button>
        <button
          class="page-mode gray"
          :class="{ active: mode.gray }"
          @click="pagemode('gray')"
          title="Gray mode"
        >
          <span
            ><i class="fa-solid fa-power-off off"></i
            ><i class="fa-solid fa-bahai"></i
          ></span>
        </button>
      </div>
    </div>
    <div class="right-content">
      <div class="top-content">
        <h2>Subscriptions</h2>
        <ul>
          <li
            v-for="subscription in profile.subscriptions"
            :key="subscription.id"
          >
            <span class="subscription">{{ subscription.course }}</span>
            <span
              class="plan"
              :class="{ paid: subscription.plan === 'paid' }"
              >{{ subscription.plan }}</span
            >
          </li>
        </ul>
        <p v-if="!profile.subscriptions.length">No subscriptions yet</p>
      </div>
      <div class="bottom-content">
        <h2>Bookmarks</h2>
        <ul>
          <li v-for="(course, index) in profile.savedCourses" :key="index">
            <span class="plan">{{ index + 1 }}</span>
            <p class="subscription">{{ course.title }}</p>
          </li>
        </ul>
        <p v-if="!profile.savedCourses.length">No courses saved yet</p>
      </div>
    </div>
    <transition name="appear">
      <div class="update-container" v-if="updateProfile">
        <div class="blur"></div>
        <div class="form">
          <form @submit.prevent="updateFunc()">
            <h2>
              update your profile
              <span @click="updateProfile = !updateProfile">&times;</span>
            </h2>
            <div class="credentials">
              <div class="input">
                <div class="value">
                  <label for="name" class="input-label">
                    <i class="fa-solid fa-user"></i
                  ></label>

                  <input
                    type="name"
                    name="name"
                    id="name"
                    v-model="update_user.name"
                    placeholder=" "
                    required
                  />
                  <label for="name" class="active">new Name</label>
                </div>
              </div>
              <div class="input">
                <div class="value">
                  <label for="email" class="input-label">
                    <i class="fa-solid fa-envelope"></i>
                  </label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    v-model="update_user.email"
                  />
                  <label for="email" class="active">new email</label>
                </div>
              </div>
              <div class="input">
                <div class="value">
                  <label for="password" class="input-label">
                    <i class="fa-solid fa-key"></i>
                  </label>

                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" "
                    v-model="update_user.password"
                  />
                  <label for="password" class="active">new Password</label>
                </div>
              </div>
              <button type="submit">Update Profile</button>
            </div>
            <div class="footer">
              &copy;<span>Advanced<span>Tech</span>Academy</span>
            </div>
          </form>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive, onBeforeMount, computed, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "Course_user",
  setup() {
    const router = useRouter();
    const store = useStore();
    const mode = computed(() => store.state.course_mode);
    let profile = reactive({
      name: "",
      email: "",
      subscriptions: [],
      savedCourses: [],
      dropdown: false,
    });

    let update_user = reactive({
      name: "",
      email: "",
      password: "",
    });

    let updateProfile = ref(false);

    function checkToken() {
      axios("api/token")
        .then((res) => {
          profile.name = res.data.username;
          profile.email = res.data.email;
          profile.subscriptions = res.data.subscription;
          profile.savedCourses = res.data.Bookmarks;
        })
        .catch((err) => {
          router.push("/login");
        });
    }

    onBeforeMount(() => {
      checkToken();
    });

    function pagemode(mode) {
      store.dispatch("pagemode", mode);
    }

    function updateFunc() {
      axios
        .post(
          `/api/user/update/${localStorage.getItem("accessId")}`,
          update_user
        )
        .then((res) => {
          if (res.statusText === "OK") {
            localStorage.setItem("accessToken", res.data.accessToken);
            axios.defaults.headers.common[
              "Authorization"
            ] = `Bearer ${localStorage.getItem("accessToken")}`;
          }

          update_user.name = "";
          update_user.email = "";
          update_user.password = "";
        })
        .catch((err) => err);
    }

    return { profile, update_user, updateFunc, updateProfile, mode, pagemode };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  background: rgb(226, 226, 231);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 25px;
  padding-bottom: 20px;
  position: relative;

  .left-content {
    width: 60%;
    height: 80%;
    border-radius: 15px;
    position: relative;
    padding: 10px;

    .user-logo {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      position: absolute;
      top: 32%;
      z-index: 1;
      left: 4%;
      border: 3px solid white;
      background: teal;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 45px;
      cursor: pointer;
    }

    h1 {
      text-align: left;
      padding: 10px;
    }

    .container-card {
      width: 100%;
      height: fit-content;
      border-radius: 15px;
      overflow: hidden;
    }
    .top-content {
      width: 100%;
      height: 150px;
      background: url(../assets/book.jpeg);
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: scroll;
    }
    .bottom-content {
      position: relative;
      background: white;
      padding: 30px 10px 5px 10px;
      .edit {
        width: 70px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 2%;
        right: 5%;
        cursor: pointer;

        i {
          font-size: 20px;
          color: teal;

          &:active {
            transform: scale(0.8);
          }
        }
      }
      .info {
        h1,
        h5,
        p {
          text-align: left;
          padding: 10px;
        }
        @media screen and (max-width: 400px) {
          h1 {
            font-size: 20px;
          }
        }
      }
    }
    .page-modes {
      width: 300px;
      height: fit-content;
      margin: 10px auto;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      .page-mode {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        background: rgb(215, 214, 214);
        border: none;
        border-radius: 100%;
        padding: 2px;
        span {
          width: 100%;
          height: 100%;
          border-radius: 100%;
          background: white;
          display: flex;
          justify-content: center;
          align-items: center;

          i {
            font-size: 24px;
            display: none;
          }
          .off {
            font-size: 100%;
            display: block;
          }
        }
      }
    }

    .page-mode.dark {
      background: rgb(21, 21, 106);
      span {
        background: #194e82;
        box-shadow: 0 0 1px 1px #194e82;
      }
    }
    .page-mode.gray {
      background: rgb(27, 182, 99);
      span {
        background: rgb(4, 138, 64);
        box-shadow: 0 0 1px 1px rgb(27, 182, 99);
      }
    }
    .page-mode.active {
      position: relative;
      order: 1;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      animation: mode 2s infinite linear forwards;
      span {
        width: 100%;
        height: 100%;
        box-shadow: none;

        i {
          display: block;
          color: rgba(230, 101, 129, 1);
        }
        .off {
          display: none;
        }
      }
    }
    @keyframes mode {
      to {
        transform: rotateZ(360deg);
      }
    }
  }

  .right-content {
    width: 30%;
    height: 80%;

    .top-content,
    .bottom-content {
      width: 100%;
      height: fit-content;
      margin: 20px auto;
      border-radius: 10px;
      background: white;
      box-shadow: 0 0 2px 2px rgb(226, 226, 231);
      padding: 10px;

      h2 {
        text-align: left;
        padding: 10px;
        color: rgb(88, 87, 87);
      }
      ul {
        width: 100%;
        height: 150px;
        background: whitesmoke;
        border-radius: 3px;
        padding: 5px;
        list-style: none;
        overflow-y: scroll;

        li {
          width: 100%;
          height: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3px 10px;

          .plan {
            width: fit-content;
            padding: 2px 10px;
            height: fit-content;
            background: teal;
            color: white;
            border-radius: 3px;
            font-size: 14px;
          }
          .subscription {
            width: 87%;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            text-align: left;
          }
          .plan.paid {
            background: #e66581;
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    .left-content,
    .right-content {
      width: 95%;
      height: fit-content;
    }
  }
}
.update-container {
  position: fixed;
  top: 0vh;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  z-index: 1;

  .blur {
    background: linear-gradient(to top, rgb(8, 58, 88), #13253e);
    opacity: 0.9;
    z-index: 1;
  }
  .form {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    form {
      width: 500px;
      height: fit-content;
      border-radius: 7px;
      background: white;
      overflow: hidden;
      position: relative;
      z-index: 1;

      h2 {
        width: 100%;
        position: relative;
        padding: 10px;
        font: 600 30px "Nunito Sans", sans-serif;
        color: rgb(65, 78, 83);

        span {
          position: absolute;
          top: 0;
          right: 15px;
          color: tomato;
          cursor: pointer;
        }
      }

      .credentials {
        width: 83%;
        height: fit-content;
        margin: 10px auto;

        .input {
          margin: 20px auto;
          padding: 5px 0;
          width: 100%;

          .value {
            width: 100%;
            height: fit-content;
            display: Flex;
            justify-content: center;
            align-items: center;
            box-shadow: 0 0 0.5px 1px #315589;
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

              &:active,
              &:focus {
                background: white;
              }
            }
            @keyframes writing {
              to {
                transform: rotateY(360deg);
              }
            }

            input:focus ~ label.active,
            input:not(:focus):not(:placeholder-shown) ~ label.active {
              top: -0.6rem;
              left: 12%;
              background: white;
              font-size: 0.7em;
              padding: 3px 6px;
              box-shadow: none;
              span {
                display: none;
              }
            }
          }
        }
        button {
          width: 100%;
          height: 50px;
          margin: 10px auto;
          border: none;
          background: linear-gradient(to top, rgb(8, 58, 88), #13253e);
          border-radius: 4px;
          color: white;
          font: 600 24px "Nunito Sans", sans-serif;
        }
      }

      .footer {
        width: 100%;
        height: 70px;
        background: rgb(240, 241, 241);
        display: flex;
        justify-content: center;
        align-items: center;
        span {
          padding: 0 5px;
          font: 600 23px "Nunito Sans", sans-serif;
          color: rgb(65, 78, 83);
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          span {
            color: tomato;
            padding: 0;
          }
        }
        .link {
          text-decoration: none;
          padding-left: 5px;
          color: rgb(38, 51, 59);

          &:hover {
            color: tomato;
            text-decoration: underline;
          }
        }

        @media screen and (max-width: 320px) {
          span {
            font-size: 18px;
          }
        }
      }

      @media screen and (max-width: 522px) {
        width: 99%;
      }
    }
  }
}

.container.dark-mode,
.container.gray-mode {
  background: linear-gradient(to top, rgb(8, 58, 88), #13253e);

  .left-content {
    box-shadow: none;
    box-shadow: 0 0 3px #102441;
    .container-card {
      box-shadow: 0 0 3px #102441;
    }
    .user-logo {
      border-color: rgb(8, 58, 88);
      background: #153d75;
    }

    h1 {
      color: white;
    }

    .bottom-content {
      background: rgb(8, 58, 88);
      .edit i {
        color: white;
      }
      h1,
      h5,
      p {
        color: rgb(227, 225, 225);
      }
    }
  }
  .right-content {
    .top-content,
    .bottom-content {
      background: rgb(8, 58, 88);
      box-shadow: 0 0 3px #102441;

      h2 {
        color: rgb(220, 217, 217);
      }

      ul {
        background: #13253e;

        li {
          color: rgb(195, 194, 194);
        }
      }
    }
  }
}

.container.gray-mode {
  background: rgb(4, 104, 49);

  .left-content {
    border-color: rgb(4, 138, 64);
    box-shadow: 0 0 3px rgb(16, 81, 45);

    .container-card {
      box-shadow: 0 0 3px rgb(16, 81, 45);
    }
    .user-logo {
      background: rgb(4, 104, 49);
      border-color: rgb(4, 138, 64);
    }
    .bottom-content {
      background: rgb(4, 138, 64);
    }
  }

  .right-content {
    .top-content,
    .bottom-content {
      background: rgb(4, 138, 64);
      box-shadow: 0 0 3px rgb(16, 81, 45);

      ul {
        background: rgb(4, 104, 49);
      }
    }
  }
}
</style>