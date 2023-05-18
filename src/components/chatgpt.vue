<template>
  <div class="chatgpt-container">
    <div class="header-div">
      <Header />
    </div>
    <div class="chatgpt-wrapper">
      <div class="top-content">
        <h1>chatGPT</h1>
        <p>
          chatGPT is one of the most if not the most interesting word's ai built
          so far which deals with responses related to human intelligence. The
          introduction of this great AI has brought about a great shift in
          technology as a whole as many things can be handled, solved and
          resolved by the robot itself. Enough talking why not jump into it and
          try it out for yourself.
        </p>

        <h4>sign up for free to start using chatGPT</h4>
        <router-link to="/login">sign up</router-link>
        <p>
          already have an account? <router-link to="/login">log in</router-link>
        </p>
      </div>
      <div class="chat-area">
        <div class="sidebar"></div>
        <div class="chat-box"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from "./header.vue";
</script>

<style lang="scss" scoped>
.chatgpt-container {
  width: 100vw;
  height: fit-content;

  .header-div {
    width: 100%;
    height: fit-content;
    background: linear-gradient(to bottom, rgb(20, 92, 125), #13253e);
  }

  .chatgpt-wrapper {
    width: 100%;
    height: fit-content;
    padding: 20px 0;
    background: rgb(20, 92, 125);

    .top-content {
      width: 80%;
      height: fit-content;
      padding: 20px 0;
      margin: 0 auto;

      h1 {
        font: 600 50px "Montserrat", "Poppins", sans-serif;
        color: white;
        padding: 20px;
        text-align: center;
      }

      h4 {
        color: rgb(255, 195, 185);
        padding: 20px;
        text-transform: capitalize;
        font: 400 22px Montserrat, Poppins, sans-serif;
      }

      p {
        color: rgb(225, 223, 223);
        padding: 10px;
        text-align: center;
      }

      a {
        text-decoration: none;
        width: max-content;
        height: max-content;
        padding: 10px 30px;
        border-radius: 3px;
        margin: 20px auto;
        cursor: pointer;
        background: white;
        color: black;
        display: block;
      }
    }
  }
}
</style>