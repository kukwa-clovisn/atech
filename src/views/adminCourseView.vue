<template>
  <div class="container">
    <h1>{{ response.name }}</h1>
    <div class="header">
      <li>
        <span class="close">&times;</span> <span class="data">100</span>views
      </li>
      <li>
        <span class="close">&times;</span> <span class="data">100</span>likes
      </li>
      <li>
        <span class="close">&times;</span> <span class="data">100</span>dislikes
      </li>
      <li>
        <span class="close">&times;</span> <span class="data">100</span>comments
      </li>
    </div>
    <div class="main">
      <ul>
        <li v-for="(data, index) in response.data" :key="data._id">
          <span class="count">{{ index }}</span>
          <p>{{ data.title }}</p>
          <span>{{ data.intro }}</span>
          <div class="btns"><button>Delete</button> <button>Edit</button></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, reactive } from "vue";
export default {
  name: "AdminCourseView",
  setup() {
    let response = reactive({
      name: "",
      data: [],
    });
    onMounted(() => {
      axios
        .get(`/api/admin/course/all/${localStorage.getItem("courseId")}`)
        .then((res) => {
          response.name = localStorage.getItem("courseId");
          response.data = res.data;
          console.log(res);
        })
        .catch((err) => console.log(err));
    });
    return { response };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  h1 {
    width: 95%;
    margin: auto;
    color: rgb(79, 80, 80);
    text-align: left;
    font-family: "Comic Neue", cursive;
    padding: 20px;
  }

  .header {
    width: 95%;
    margin: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;

    li {
      width: 200px;
      height: 70px;
      border-radius: 15px;
      background: white;
      list-style-type: none;
      margin: 15px;
      position: relative;
      color: rgb(91, 89, 89);
      display: flex;
      justify-content: center;
      align-items: center;

      .close {
        position: absolute;
        top: 0;
        right: 0;
        width: 20px;
        height: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      .data {
        font-size: 25px;
        color: teal;
      }
    }
  }

  .main {
    width: 100%;
    height: fit-content;
    ul {
      width: 95%;
      height: fit-content;
      margin: 10px auto;
      list-style: none;

      li {
        width: 80%;
        height: fit-content;
        padding: 10px;
        border-radius: 17px;
        background: white;
        position: relative;
        margin: 10px auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        .count {
          position: absolute;
          left: 0;
          top: 0;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background: teal;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        p {
          font-size: 15px;
          padding: 5px;
        }

        button {
          width: 160px;
          height: 35px;
          border-radius: 30px;
          border: none;
          background: teal;
          color: white;
        }
      }
    }
  }
}
</style>