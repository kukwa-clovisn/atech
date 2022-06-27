<template>
  <div class="container">
    <form class="formdata" @submit.prevent="userRequest()">
      <label for="question">Question:</label>
      <textarea
        name="question"
        id="question"
        cols="30"
        rows="10"
        v-model="user.message"
        placeholder="Ask question(s) or leave a comment...."
        required
      ></textarea>
      <button type="submit">submit</button>
      <div class="response-div">
        <div class="done" v-if="response.success">
          <i class="fa-solid fa-circle-check"></i>
          <span>{{ response.msg }}</span>
        </div>
        <div class="error" v-if="response.failed">
          <i class="fa-solid fa-circle-exclamation"></i>
          <span>{{ response.msg }}</span>
        </div>
      </div>
    </form>
    <form class="formdata" @submit.prevent="sendFeedback()">
      <label for="feedback">send Feedback:</label>
      <textarea
        name="feedback"
        id="feedback"
        cols="30"
        rows="10"
        placeholder="Hi, how was your experience with our course?"
        v-model="feedback.message"
        required
      ></textarea>
      <button type="submit">submit</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { reactive } from "vue";
export default {
  name: "Contact",
  setup() {
    let user = reactive({
      name: "",
      email: "",
      message: "",
    });

    let feedback = reactive({
      name: "",
      email: "",
      message: "",
    });

    let response = reactive({
      failed: false,
      success: false,
      msg: "",
    });

    function userRequest() {
      axios
        .post("api/course/contact", user, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.statusText === "OK") {
            response.msg = res.data.msg;
            response.success = true;
            setTimeout(pop, 3000);
          }
        })
        .catch((err) => {
          response.msg = err.response.data.msg;
          response.failed = true;
          setTimeout(post_error, 3000);
        });
    }

    function sendFeedback() {
      console.log(feedback);
    }

    function pop() {
      response.success = false;
    }
    function post_error() {
      response.failed = false;
    }

    return { user, feedback, response, userRequest, sendFeedback };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
$col: #3d566f;

.container {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .formdata {
    width: 47%;
    margin: auto;
    height: fit-content;
    padding: 20px;
    background: $baseColor;
    border-radius: 15px;

    label {
      padding: 10px;
      text-align: left;
      display: block;
      width: 100%;
      text-transform: capitalize;
      font: 600 23px "Poppins", sans-serif;
      color: white;
    }

    textarea {
      width: 100%;
      height: 300px;
      border: none;
      outline: none;
      font-weight: 500;
      font: 500 17px "Nunito Sans", sans-serif;
      color: $baseColor;
      border-radius: 10px;
      box-shadow: 3px 3px 1px 1px rgb(235, 235, 235) !important;
      padding: 20px;
      background: white !important;
    }

    button {
      display: block;
      width: 100% !important;
      height: 60px;
      border: none;
      background: #174c81 !important;
      color: rgb(216, 216, 216);
      border-radius: 5px !important;
      margin: 10px auto !important;
      margin-bottom: 0 !important;
      text-transform: capitalize;
      font: 600 20px "Nunito sans", sans-serif;
    }

    .response-div {
      width: 90%;
      height: fit-content;
      position: fixed;
      left: 5%;
      top: 5vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .done,
    .error {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(71, 243, 151);
      border-radius: 4px;
      padding: 20px;
      z-index: 1;
      position: relative;
      animation: pop 1s linear alternate forwards;

      i {
        font-size: 30px;
        margin-right: 10px;
        color: white;
      }

      span {
        color: white;
        white-space: pre-wrap;
      }
    }

    .error {
      background: $SecondaryColor;
      span {
        color: white;
      }
    }

    @keyframes pop {
      from {
        top: 0;
      }
      to {
        top: 15vh;
      }
    }

    @media screen and (max-width: 768px) {
      input,
      button {
        width: 100% !important;
        border: 3px solid blue;
      }
    }
  }
}
</style>
