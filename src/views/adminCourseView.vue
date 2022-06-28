<template>
  <div class="container" :class="{ dark: mode.dark, gray: mode.gray }">
    <h1>{{ response.name }}</h1>
    <button @click="analyticsData()">Analytics</button>
    <transition-group tag="div" class="header" appear name="fade">
      <li v-if="analytics.views" key="analytics.views">
        <span class="close" @click="analytics.views = false">&times;</span>
        <span class="data">{{ response.views }}</span
        >views
      </li>
      <li v-if="analytics.likes" key="likes">
        <span class="close" @click="analytics.likes = false">&times;</span>
        <span class="data">{{ response.likes }}</span
        >likes
      </li>
      <li v-if="analytics.dislikes" key="dislikes">
        <span class="close" @click="analytics.dislikes = false">&times;</span>
        <span class="data">{{ response.dislikes }}</span
        >dislikes
      </li>
      <li v-if="analytics.comments" key="comments">
        <span class="close" @click="analytics.comments = false">&times;</span>
        <span class="data">{{ response.comments }}</span
        >feedback(s)
      </li>
      <li key="data">
        <span class="data">{{ response.data.length }} </span>course(s)
      </li>
    </transition-group>

    <div class="search-course">
      <input
        type="search"
        name="search"
        id="search"
        v-model="searchVal"
        placeholder="Search by title..."
      /><input type="submit" value="search" @click="searchCourse" />
    </div>
    <p v-if="searchVal.length">search title"{{ searchVal }}"</p>

    <p v-if="!searchVal.length" @click="allCourses()" class="all-courses">
      All courses
    </p>
    <div class="main">
      <transition name="fade" appear>
        <AdminSingleCourse v-if="!analytics.show" />
      </transition>
      <transition-group tag="ul" appear name="fade" v-if="analytics.show">
        <li v-for="(data, index) in response.data" :key="data._id">
          <span class="count">{{ index + 1 }}</span>
          <p>{{ data.title }}</p>
          <span>{{ data.intro }}</span>
          <div class="btns">
            <button class="delete" @click="deleteCourse(data._id)">
              Delete
            </button>
            <button @click="editCourse(data._id)">Edit</button>
            <button class="btn-analyse" @click="courseAnalytics(data._id)">
              Analytics
            </button>
          </div>
        </li>
      </transition-group>
    </div>
  </div>
</template>
<script>
import AdminSingleCourse from "./adminAnalytics.vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { reactive, onMounted, computed, ref } from "vue";
export default {
  name: "AdminCourseView",
  components: {
    AdminSingleCourse,
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const mode = computed(() => store.state.mode);
    let response = reactive({
      name: "",
      data: [],
      views: 0,
      likes: 0,
      dislikes: 0,
      comments: 0,
    });

    let config = {
      headers: {
        "Content-Type": "application/json",
        searchid: `${localStorage.getItem("")}`,
      },
    };

    let searchVal = ref("");

    let analytics = reactive({
      views: true,
      likes: true,
      dislikes: true,
      comments: true,
      show: true,
    });

    function allCourses() {
      axios(`/api/admin/course/all/${localStorage.getItem("courseId")}`, {
        headers: { coursename: `${localStorage.getItem("courseId")}` },
      })
        .then((res) => {
          if (res.statusText === "OK") {
            response.name = localStorage.getItem("courseId");
            response.data = res.data;
            analytics.show = true;
            for (let i = 0; i < res.data.length; i++) {
              response.views =
                parseInt(res.data[i].views.length) + parseInt(response.views);
              response.likes =
                parseInt(res.data[i].likes.length) + parseInt(response.likes);
              response.dislikes =
                parseInt(res.data[i].dislikes.length) +
                parseInt(response.dislikes);
              response.comments =
                parseInt(res.data[i].comments.length) +
                parseInt(response.comments);
            }
          } else {
            router.push("/admin/dashboard");
          }
        })
        .catch((err) => router.push("/admin/dashboard"));
    }

    onMounted(() => {
      allCourses();
    });

    function analyticsData() {
      analytics.views = true;
      analytics.likes = true;
      analytics.dislikes = true;
      analytics.comments = true;
    }

    function searchCourse() {
      axios
        .post(
          `/api/admin/search/course/${localStorage.getItem("courseId")}`,
          { title: searchVal.value },
          config
        )
        .then((res) => {
          if (res.statusText === "OK") {
            response.data = res.data;
            for (let i = 0; i < res.data.length; i++) {
              response.views =
                parseInt(res.data[i].views.length) + parseInt(response.views);
              response.likes =
                parseInt(res.data[i].likes.length) + parseInt(response.likes);
              response.dislikes =
                parseInt(res.data[i].dislikes.length) +
                parseInt(response.dislikes);
            }
          }
        })
        .catch((err) => err);
      searchVal.value = "";
    }

    function deleteCourse(id) {
      if (
        window.confirm(
          `Are you sure you want to delete this course it can't be undone.`
        )
      ) {
        axios
          .post(`api/admin/delete/course/${id}`, { id: id })
          .then((res) => {
            allCourses();
          })
          .catch((err) => err);
      }
    }

    function editCourse(id) {
      localStorage.setItem("editToken", id);
      store.dispatch("edit_course", true);
      router.push(
        `/admin/dashboard/course/${localStorage.getItem("courseId")}`
      );
    }

    function courseAnalytics(id) {
      localStorage.setItem("editToken", id);
      router.push("/admin/analytics");
      // analytics.show = false;
    }

    return {
      mode,
      searchVal,
      response,
      analytics,
      allCourses,
      deleteCourse,
      analyticsData,
      courseAnalytics,
      editCourse,
      searchCourse,
    };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: #072e54;
$secondaryColor: rgb(215, 214, 214);
$tertiaryColor: #194e82;
$textColor1: white;
$textColor2: whitesmoke;
$baseColor: rgba(230, 101, 129, 1);
$misc: rgb(232, 232, 232);
$fallback: teal;

.fade-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-move {
  transition: all 0.4s ease;
  position: absolute;
}
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
      // text-transform: capitalize;
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

  .all-courses {
    width: fit-content;
    height: fit-content;
    padding: 5px 15px;
    background: $secondaryColor;
    cursor: pointer;
    margin: 2px auto;
    border-radius: 30px;
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
        .btn-analyse {
          background: rgb(3, 122, 59);
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

.container.dark,
.container.gray {
  .search-course {
    input {
      color: white;
    }
  }
  p {
    color: white;
  }
  .all-courses {
    color: white;
    background: none;
    border: 1px solid rgb(168, 167, 167);
  }
}
</style>