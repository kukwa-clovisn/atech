<template>
  <div
    class="container"
    :class="{ 'dark-mode': mode.dark, 'gray-mode': mode.gray }"
  >
    <h1>privacy policy</h1>
    <p>
      As our users we ensure that your data is secure with us an not allowed to
      any third party users. We don't share your data with anyone and your
      informatioin and your dashboard is allowed access to you alone.
    </p>
    <p>
      We don't advice or recomment you sharing you password or credentials with
      others as that's the only way they can have access to your dashboard and
      can create some changes in your page.
    </p>
    <h2>settings:</h2>
    <p>
      You have the access to set your page mode, change your name and also to
      customize your page the way you want from the dashboard page.
    </p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "CourseSetting",
  setup() {
    const store = useStore();
    const mode = computed(() => store.state.course_mode);

    return { mode };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  padding: 10px;

  span {
    color: tomato;
    font-size: 20px;
    padding: 0 5px;
    text-transform: capitalize;
  }

  h1 {
    padding: 20px;
    text-align: center;
    text-transform: capitalize;
    font: 700 30px "Nunito Sans", sans-serif;
  }
  h2 {
    text-align: left;
    color: rgb(61, 59, 59);
    font-family: "Nunito Sans", sans-serif;
    width: 97%;
    margin: auto;
    text-transform: capitalize;
  }
  p {
    width: 94%;
    margin: auto;
    text-align: left;
    padding: 7px;
  }
}

.container.dark-mode,
.container.gray-mode {
  background: rgb(4, 104, 49);

  h1 {
    color: white;
  }

  h2 {
    color: rgb(227, 223, 223);
  }

  p {
    color: rgb(197, 195, 195);
  }
}

.container.dark-mode {
  background: linear-gradient(to top, rgb(8, 58, 88), #13253e);
}
</style>