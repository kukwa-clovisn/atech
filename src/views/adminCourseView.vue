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
import { useRouter } from "vue-router";
import { reactive, onMounted } from "vue";
export default {
  name: "AdminCourseView",
  setup() {
    const router = useRouter();
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
      axios(`/api/admin/course/all/${localStorage.getItem("courseId")}`)
        .then((res) => {
          if (res.statusText === "OK") {
            response.name = localStorage.getItem("courseId");
            response.data = res.data;
          } else {
            router.push("/admin/dashboard");
          }

          console.log(res);
        })
        .catch((err) => router.push("/admin/dashboard"));
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
// $primaryColor: white;
// $secondaryColor: rgb(232, 232, 232);
// $tertiaryColor: rgb(249, 249, 249);
// $textColor1: rgb(123, 122, 122);
// $baseColor: tomato;
// $fallback: teal;
// $misc: #072e54;

$randomColor: rgba(230, 101, 129, 1);

$primaryColor: #072e54;
$secondaryColor: rgb(215, 214, 214);
$tertiaryColor: #194e82;
$textColor1: white;
$textColor2: whitesmoke;
$baseColor: rgba(230, 101, 129, 1);
$misc: rgb(232, 232, 232);
$fallback: teal;
.container {
  width: 100%;
  height: fit-content;
  h1 {
    width: 95%;
    margin: auto;
    color: $textColor2;
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
    background: $secondaryColor;
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
      background: $misc;
      list-style-type: none;
      margin: 15px;
      position: relative;
      color: $primaryColor;
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
      @media screen and (max-width: 490px) {
        width: 85%;
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
      color: $tertiaryColor;
      border: 1px solid $secondaryColor;
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
    @media screen and (max-width: 490px) {
      width: 95%;
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
        border-radius: 5px;
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
          width: 25px;
          font-size: 13px;
          height: 25px;
          border-radius: 100%;
          background: $tertiaryColor;
          color: $textColor1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        p {
          font-size: 15px;
          padding: 5px;
          color: $primaryColor;
        }

        button {
          width: 160px;
          height: 35px;
          border-radius: 30px;
          border: none;
          margin: 7px;
          background: $fallback;
          color: $textColor2;
        }

        .delete {
          background: $baseColor;
        }
      }
      @media screen and (max-width: 500px) {
        width: 100%;
        li {
          width: 96%;
        }
      }
    }
  }
}
</style>