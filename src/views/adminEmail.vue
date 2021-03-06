<template>
  <main :class="{ dark: mode.dark, gray: mode.gray }">
    <div class="btns">
      <button type="button" :class="{ active: sendToSome }" @click="sender()">
        sending to specific client(s)...
      </button>
      <button type="button" :class="{ active: sendAll }" @click="senderAll()">
        sending to all clients...
      </button>
    </div>
    <transition name="move-in" appear>
      <form @submit.prevent="sendEmail()" v-if="sendToSome">
        <h1>send email to specific client(s)</h1>
        <div class="input">
          <label for="user"> Recepient's Credentials:</label>
          <input
            type="text"
            name="user"
            id="user"
            v-model="user.username"
            placeholder="Recipient's name...."
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            v-model="user.email"
            placeholder="Recepient's Email address..."
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            v-model="user.message"
            placeholder="Message...."
          ></textarea>
          <button type="submit">
            <i class="fa-solid fa-email"></i> send email
          </button>
          <input type="reset" value="Clear Form" />
        </div>
        <transition name="pop">
          <div class="response">
            <div class="done" v-if="response.success">
              <i class="fa-solid fa-circle-check"></i>
              <span>{{ response.msg }}</span>
            </div>
            <div class="error" v-if="response.failed">
              <i class="fa-solid fa-circle-exclamation"></i>
              <span>error: post not uploaded.</span>
            </div>
          </div></transition
        >
      </form>
    </transition>
    <transition name="move-in">
      <form @submit.prevent="sendToAll()" v-if="sendAll">
        <h1>send email to all clients</h1>
        <div class="input">
          <label for="user"> Recepient's Credentials:</label>
          <input
            type="text"
            name="user"
            id="user"
            v-model="user.subject"
            placeholder="Message subject...."
            required
          />
          <input
            type="text"
            name="user"
            id="user"
            v-model="user.aim"
            placeholder="Message aim...."
            required
          />
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            v-model="user.message"
            placeholder="Message...."
          ></textarea>
          <button type="submit">
            <i class="fa-solid fa-email"></i> send email
          </button>
          <input type="reset" value="Clear Form" />
        </div>
        <transition name="pop">
          <div class="response">
            <div class="done" v-if="response.success">
              <i class="fa-solid fa-circle-check"></i>
              <span>{{ response.msg }}</span>
            </div>
            <div class="error" v-if="response.failed">
              <i class="fa-solid fa-circle-exclamation"></i>
              <span>error: post not uploaded.</span>
            </div>
          </div></transition
        >
      </form>
    </transition>
  </main>
</template>

<script>
import axios from "axios";
import { reactive, ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "AdminEmail",
  setup() {
    const store = useStore();

    const mode = computed(() => store.state.mode);

    let user = reactive({
      username: "",
      email: "",
      message: "",
      subject: "",
      aim: "",
    });

    let response = reactive({
      success: false,
      failed: false,
      msg: "",
    });

    let sendToSome = ref(true);
    let sendAll = ref(false);

    function sendEmail() {
      axios
        .post("api/admin/send", user, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.statusText === "OK") {
            response.success = true;
            response.msg = res.data.msg;

            user.username = "";
            user.email = "";
            user.message = "";

            setTimeout(() => {
              response.success = false;
            }, 4000);
          } else {
            response.failed = true;

            setTimeout(() => {
              response.failed = false;
            }, 4000);
          }
        })
        .catch((err) => {
          response.failed = true;

          setTimeout(() => {
            response.failed = false;
          }, 4000);
        });
    }

    function sendToAll() {
      axios
        .post("api/admin/sendAll", user, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.statusText === "OK") {
            response.success = true;
            response.msg = res.data.msg;

            user.subject = "";
            user.aim = "";
            user.message = "";

            setTimeout(() => {
              response.success = false;
            }, 4000);
          } else {
            response.failed = true;

            setTimeout(() => {
              response.failed = false;
            }, 4000);
          }
        })
        .catch((err) => {
          response.failed = true;

          setTimeout(() => {
            response.failed = false;
          }, 4000);
        });
    }

    function senderAll() {
      sendToSome.value = false;

      setTimeout(() => {
        sendAll.value = true;
      }, 1000);
    }

    function sender() {
      sendAll.value = false;

      setTimeout(() => {
        sendToSome.value = true;
      }, 1000);
    }
    return {
      mode,
      user,
      response,
      sendToSome,
      sendAll,
      sender,
      senderAll,
      sendEmail,
      sendToAll,
    };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: #072e54;
$secondaryColor: rgb(215, 214, 214);
$tertiaryColor: #194e82;
$baseColor: rgba(230, 101, 129, 1);
$text: rgb(84, 84, 84);

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

main {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 3px;
  padding-bottom: 40px;

  .btns {
    width: 95%;
    margin: auto;
    font-size: 35px;
    color: $baseColor;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button[type="button"] {
      width: fit-content;
      height: 40px;
      padding: 0 25px;
      border: none;
      border-radius: 30px;
      background: $secondaryColor;
      color: $text;
      margin: 10px auto;
      font: 600 16px "Poppins", sans-serif;
    }

    button[type="button"].active {
      background: $baseColor;
      color: $secondaryColor;
      animation: dance 2s infinite linear alternate forwards;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;

      button[type="button"] {
        width: 90%;
        margin: 10px auto;
        font-size: 14px;
      }
    }
  }

  @keyframes dance {
    to {
      opacity: 0.5;
      transform: scale(0.8);
    }
  }

  form {
    width: 80%;
    height: fit-content;
    padding: 10px;
    margin: auto;
    background: transparent;

    h1 {
      text-transform: capitalize;
      color: $text;
      font: 600 25px "Poppins", sans-serif;
    }

    .input {
      width: 100%;
      height: fit-content;

      label {
        width: 100%;
        display: block;
        text-align: left;
        padding-bottom: 10px;
        color: $text;
      }

      input {
        width: 100%;
        height: 40px;
        outline: none;
        border: none;
        border-bottom: 1px solid $text;
        background: transparent;
        margin: 5px auto;
      }
      input[type="reset"] {
        border: none;
        text-align: left;
        font-weight: 800;
        color: $text;
        cursor: pointer;
        width: fit-content;
        margin: 0;
        float: left;

        &:hover {
          transform: scale(1.1);
        }

        &:active {
          transform: scale(0.9);
        }
      }
      textarea {
        width: 100%;
        height: 200px;
        border-radius: 5px;
        box-shadow: 0 0 2px 1px $text;
        outline: none;
        color: $text;
        border: none;
        padding: 20px;
        margin: 10px auto;
        background: transparent;
      }

      button {
        background: $secondaryColor;
        height: 50px;
        width: 100%;
        margin: 20px auto;
        border: none;
        border-radius: 30px;
        color: $text;
        font: 600 19px "Poppins", sans-serif;
        text-transform: capitalize;
      }
    }

    .done,
    .error {
      width: fit-content;
      height: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(71, 243, 151);
      border-radius: 4px;
      padding: 20px;
      position: fixed;
      left: 40vw;
      top: 25vh;
      z-index: 1;
      animation: pop 2s linear alternate forwards;

      i {
        font-size: 30px;
        margin-right: 10px;
        color: $text;
      }

      span {
        color: black;
      }
    }

    .error {
      background: red;
      span {
        color: $text;
      }
    }

    @keyframes pop {
      from {
        top: 10vh;
      }
      to {
        top: 25vh;
      }
    }
  }
}

main.dark,
main.gray {
  form {
    h1 {
      color: $secondaryColor;
    }
    label,
    input,
    input[type="reset"],
    textarea {
      color: rgb(227, 227, 227);
      border-bottom: 1px solid rgb(180, 179, 179);
    }
    textarea {
      box-shadow: 0 0 2px 1px rgb(180, 179, 179);
    }
  }
}
</style>
