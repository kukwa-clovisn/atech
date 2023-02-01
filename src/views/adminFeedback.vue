<template>
  <div class="container" :class="{ dark: mode.dark, gray: mode.gray }">
    <h1>Admin Feedback</h1>
    <p>
      How is your feel with the Admin blog and creating courses? if you find any
      difficulties in using the tools at your disporsal, you can write us so we
      can sought it out and give the admin section the best feel for you.
    </p>

    <form @submit.prevent="sendFeedback()">
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        v-model="feedback.message"
        placeholder="Feedback....."
      ></textarea>
      <button type="submit">submit feedback</button>
      <div class="response">
        <div class="done" v-if="success">
          <i class="fa-solid fa-circle-check"></i>
          <span>Feedback sent. Issue is being reviewed.</span>
        </div>
        <div class="error" v-if="postError">
          <i class="fa-solid fa-circle-exclamation"></i>
          <span>error: unable to send feedback</span>
        </div>
      </div>
    </form>
    <footer>&copy;Atech2022</footer>
  </div>
</template>

<script>
import axios from "axios";
import { computed, reactive, ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "AdminFeedback",
  setup() {
    const store = useStore();
    const mode = computed(() => store.state.mode);

    let success = ref(false);
    let postError = ref(false);

    let feedback = reactive({
      username: `${localStorage.getItem("admin")}`,
      id: `${localStorage.getItem("adminId")}`,
      message: "",
    });

    function sendFeedback() {
      axios
        .post("api/admin/contact", feedback)
        .then((res) => {
          if (res.statusText === "OK") {
            feedback.message = "";
            success.value = true;
            setTimeout(pop, 3000);
          } else {
            postError.value = true;
            setTimeout(post_error, 3000);
          }
        })
        .catch((err) => {
          postError.value = true;
          setTimeout(post_error, 3000);
        });
    }

    function pop() {
      success.value = false;
    }
    function post_error() {
      postError.value = false;
    }

    return { mode, feedback, success, postError, sendFeedback };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  padding: 10px;

  h2,
  p {
    width: 95%;
    padding: 10px;
  }

  form {
    width: 90%;
    height: fit-content;
    margin: auto;

    textarea {
      width: 95%;
      height: 250px;
      border: 1px solid rgb(139, 138, 138);
      background: transparent;
      padding: 20px;
      border-radius: 10px;
      outline: none;
      font: 500 17px "Nunito Sans", sans-serif;
    }

    button {
      width: 200px;
      height: 40px;
      border: 1px solid rgb(130, 129, 129);
      background: transparent;
      margin: 10px auto;
      border-radius: 10px;

      &:hover {
        background: rgba(230, 101, 129, 1);
        color: white;
        border: none;
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
}

.container.dark,
.container.gray {
  h1,
  p,
  textarea,
  button {
    color: white;
  }

  button,
  textarea {
    border: 1px solid rgb(202, 201, 201);
  }
  footer {
    color: rgb(168, 167, 167);
  }
}
</style>