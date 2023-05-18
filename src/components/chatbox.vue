<template>
  <div
    :class="[
      { active: $store.state.chat.start },
      { inactive: !$store.state.chat.start },
      ' chatbox-container',
    ]"
  >
    <div class="chat-header">
      <h1>advanced tech academy</h1>
      <span @click="$store.state.chat.start = false">&times;</span>
    </div>
    <div class="chatbox-wrapper">
      <h2>codingherald</h2>
      <form @submit="submitForm">
        <div class="form-data">
          <label for="message">ask a question?</label
          ><textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            required
            v-model="messageBody.message"
            placeholder="Start Typing.."
          ></textarea>
        </div>
        <div class="response-div">
          <p>{{ messageBody.response }}</p>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";
import { useStore } from "vuex";

const store = useStore();

const messageBody = reactive({
  message: "",
  response: "",
});

console.log(store.state.chat.start);

const submitForm = (e) => {
  e.preventDefault();
  axios
    .post("/api/chatgpt", { question: messageBody.message })
    .then((res) => {
      messageBody.response = res.data.data;
    })
    .catch((err) => console.log(err));
};
</script>

<style lang="scss" scoped>
.chatbox-container {
  width: 400px;
  height: 93vh;
  position: fixed;
  right: 2%;
  bottom: 3%;
  background: #22467c;
  border-radius: 5px;
  z-index: 1000;
  overflow: hidden;
  box-sizing: border-box;

  .chat-header {
    width: 100%;
    height: 75px;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    h1 {
      font: 600 17px "Montserrat", sans-serif;
      color: rgb(255, 255, 255);
      text-transform: uppercase;
    }
    span {
      font-size: 40px;
      color: white;
      cursor: pointer;
      position: absolute;
      top: 2%;
      right: 2%;
    }
  }

  .chatbox-wrapper {
    width: 94%;
    height: 85%;
    padding: 10px;
    margin: 0 auto;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    box-sizing: border-box;
    overflow: hidden;

    h2 {
      font: 400 14px "Montserrat", sans-serif;
      text-align: left;
      text-transform: capitalize;
      color: rgb(84, 82, 82);
      padding: 0 10px;
    }

    form {
      width: 100%;
      height: 98%;
      padding: 10px;
      overflow: hidden;

      position: relative;

      .form-data {
        width: 100%;
        margin: 12px auto;

        label {
          display: block;
          text-transform: capitalize;
          text-align: left;
          font-size: 12px;
          padding: 2px 0;
        }
        textarea {
          display: block;
          width: 100%;
          padding: 5px;
          padding-left: 10px;
          border: none;
          background: rgb(255, 255, 255);
          height: 70px;
          outline: none;
          text-align: left;
          box-shadow: 0 0 10px 4px rgb(231, 229, 229);
        }
      }
      .response-div {
        width: 100%;
        margin: 5px auto;
        height: 60%;
        overflow: hidden;
        overflow-y: scroll;
        padding: 10px;
        box-shadow: inset 0 0 5px 2px rgb(253, 253, 253);
        p {
          text-align: left;
          font: 400 12px/23px Montserrat, sans-serif;
        }
      }
      button {
        width: 60%;
        height: 40px;
        border-radius: 4px;
        border: none;
        margin: 10px auto;
        background: #254981;
        color: white;
        font-weight: 600;
        position: absolute;
        bottom: 0.5%;
        left: 1%;
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 100vw;
    height: 100vh;
    bottom: 0;
    right: 0;
    .chat-header {
      height: 15%;
    }
    .chatbox-wrapper {
      height: 83%;
      overflow: hidden;
      overflow-y: scroll;
      form {
        .form-data {
          label {
            font-size: 1.1em;
            padding: 10px 2px;
          }
          input {
            height: 50px;
          }
          textarea {
            height: 160px;
          }
          input,
          textarea {
            font-size: 18px;
          }
        }
        button {
          width: 100%;
          height: 45px;
        }
      }
    }
  }
  @media screen and (max-height: 500px) {
    height: 100vh;
    bottom: 0;
    left: 0;
    width: 100vw;
    .chat-header {
      height: 15%;
    }
    .chatbox-wrapper {
      height: 83%;
      overflow: hidden;
      overflow-y: scroll;
      form {
        .form-data {
          label {
            font-size: 1.1em;
            padding: 10px 2px;
          }
          input {
            height: 50px;
          }
          textarea {
            height: 160px;
          }
          input,
          textarea {
            font-size: 18px;
          }
        }
        button {
          width: 100%;
        }
      }
    }
  }
}
.active {
  animation: openchat 0.4s linear alternate forwards;
}

.inactive {
  animation: closechat 0.8s linear alternate forwards;
}

@keyframes openchat {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes closechat {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(200%);
    display: none;
  }
}
</style>