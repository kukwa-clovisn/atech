<template>
  <div class="container">
    <h1>{{ response.name }}</h1>
    <button @click="analyticsData()">Analytics</button>
    <div class="header">
      <li v-if="analytics.views">
        <span class="close" @click="analytics.views = false">&times;</span>
        <span class="data">100</span>views
      </li>
      <li v-if="analytics.likes">
        <span class="close" @click="analytics.likes = false">&times;</span>
        <span class="data">100</span>likes
      </li>
      <li v-if="analytics.dislikes">
        <span class="close" @click="analytics.dislikes = false">&times;</span>
        <span class="data">100</span>dislikes
      </li>
      <li v-if="analytics.comments">
        <span class="close" @click="analytics.comments = false">&times;</span>
        <span class="data">100</span>comments
      </li>
    </div>
    <div class="search-course">
      <input type="search" name="search" id="search" /><input
        type="submit"
        value="search"
      />
    </div>
    <div class="main">
      <ul>
        <li v-for="(data, index) in response.data" :key="data._id">
          <span class="count">{{ index }}</span>
          <p>{{ data.title }}</p>
          <span>{{ data.intro }}</span>
          <div class="btns">
            <button class="delete">Delete</button> <button>Edit</button>
          </div>
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

    let analytics = reactive({
      views: true,
      likes: true,
      dislikes: true,
      comments: true,
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

    function analyticsData() {
      analytics.views = true;
      analytics.likes = true;
      analytics.dislikes = true;
      analytics.comments = true;
    }
    return { response, analytics, analyticsData };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: white;
$secondaryColor: rgb(232, 232, 232);
$tertiaryColor: rgb(249, 249, 249);
$textColor1: rgb(123, 122, 122);
$baseColor: tomato;
$fallback: teal;
$misc: #072e54;
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
  button {
    width: fit-content;
    height: fit-content;
    padding: 10px;
    border-radius: 2px;
    border: none;
    background: rgb(177, 176, 176);
    color: $primaryColor;
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
      background: $secondaryColor;
      list-style-type: none;
      margin: 15px;
      position: relative;
      color: rgb(111, 111, 111);
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
        color: $baseColor;
      }
    }
  }

  .search-course {
    width: 400px;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;

    input {
      outline: none;
      background: transparent;
      height: 45px;
      border: 1px solid rgb(214, 213, 213);
    }

    input[type="search"] {
      width: 85%;
      border-radius: 30px 0 0 30px;
      padding: 3px 20px;

      border-right: none;
    }
    input[type="submit"] {
      width: 15%;
      border-radius: 0 30px 30px 0;
      border-left: none;
      cursor: pointer;
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
        background: $secondaryColor;
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
          background: $fallback;
          color: $primaryColor;
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
          background: $fallback;
          color: $primaryColor;
        }

        .delete {
          background: rgba(230, 101, 129, 1);
        }
      }
    }
  }
}
</style>