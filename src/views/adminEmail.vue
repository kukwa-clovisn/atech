<template>
  <form @submit.prevent="sendEmail()">
    <h1>send email to users</h1>
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
    <div class="response">
      <div class="done" v-if="response.success">
        <i class="fa-solid fa-circle-check"></i>
        <span>post successfully uploaded.</span>
      </div>
      <div class="error" v-if="response.failed">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>error: post not uploaded.</span>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import { reactive } from "@vue/reactivity";

export default {
  name: "AdminEmail",
  setup() {
    let user = reactive({
      username: "",
      email: "",
      message: "",
    });

    let response = reactive({
      success: false,
      failed: false,
    });

    function sendEmail() {
      axios
        .post("api/send", user, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.statusText === "OK") {
            response.success = true;

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
    return {
      user,
      response,
      sendEmail,
    };
  },
};
</script>

<style lang="scss" scoped>
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
$col: #3d566f;
$adminCol: rgb(21, 55, 101);

form {
  width: 80%;
  height: fit-content;
  padding: 30px 10px;
  padding-bottom: 40px;
  margin: auto;
  background: transparent;

  h1 {
    text-transform: capitalize;
    color: $SecondaryColor;
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
    }

    input {
      width: 100%;
      height: 40px;
      outline: none;
      border: none;
      border-bottom: 1px solid $baseColor;
      background: transparent;
      margin: 5px auto;
    }
    input[type="reset"] {
      border: none;
      text-align: left;
      font-weight: 800;
      color: $baseColor;
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
      box-shadow: 0 0 2px 1px $baseColor;
      outline: none;
      border: none;
      padding: 20px;
      margin: 10px auto;
      background: transparent;
    }

    button {
      background: $SecondaryColor;
      height: 50px;
      width: 100%;
      margin: 20px auto;
      border: none;
      border-radius: 5px;
      color: white;
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
      color: white;
    }

    span {
      color: black;
    }
  }

  .error {
    background: red;
    span {
      color: white;
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
</style>
