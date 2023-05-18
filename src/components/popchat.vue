<template>
  <div
    class="popchat-container"
    title="Leave Us A Message"
    @click="$store.state.chat.start = !$store.state.chat.start"
  >
    <button>
      <i class="fa-solid fa-comment-sms"></i>
    </button>
  </div>
</template>
<script setup>
import { ref } from "vue";

const sticky = ref(false);

window.addEventListener("scroll", () => {
  sticky.value = true ? window.scrollY > 0 : false;
});
</script>
<style lang="scss" scoped>
.popchat-container {
  width: 55px;
  height: 55px;
  position: fixed;
  right: 1.5%;
  bottom: 3%;
  cursor: pointer;
  overflow: hidden;
  z-index: 1000;
  background: rgb(7, 49, 100);
  border-radius: 100%;
  box-shadow: 0 0 2px 1px rgb(4, 26, 74);

  button {
    width: 100%;
    height: 100%;
    border: none;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    i {
      color: white;
      font-size: 30px;
    }
  }
}
</style>