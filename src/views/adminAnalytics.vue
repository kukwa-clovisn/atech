<template>
  <div class="container" :class="{ dark: mode.dark, gray: mode.gray }">
    <router-link to="/admin/course/courses/view" class="route"
      >all courses</router-link
    >
    <h1>Single course Analytics Data</h1>
    <h2 title="course title">{{ response.title }}</h2>

    <transition-group tag="ul" appear name="fade">
      <li key="views">
        views: <span>{{ response.views.length }}</span>
      </li>
      <li key="likes">
        likes: <span>{{ response.likes.length }}</span>
      </li>
      <li key="dislikes">
        dislikes: <span>{{ response.dislikes.length }}</span>
      </li>
      <transition-group tag="div" class="btn" name="fade" appear>
        <button key="feedback" @click="getFeedback()">view all feedbacks</button
        ><button key="like" @click="getLikes()">view likes</button
        ><button key="dislike" @click="getDislikes()">view dislikes</button>
        <button key="view" @click="getViews()">see views</button>
      </transition-group>
      <h2 key="comment" v-if="analytics.feedback">Course feedback(s):</h2>
      <h2 key="comment" v-if="analytics.likes">course likes(s):</h2>
      <h2 key="comment" v-if="analytics.dislikes">course dislikes(s):</h2>
      <h2 key="comment" v-if="analytics.views">course views(s):</h2>
      <div v-if="analytics.feedback">
        <div
          v-for="(comment, index) in response.comments"
          class="feedback"
          :key="index"
        >
          <div class="img" key="img">
            <i class="fa-regular fa-user" key="i"></i>
          </div>
          <div class="content" key="content">
            <h2 key="cmt">{{ comment.name }}</h2>
            <p key="date">{{ comment.date }}</p>
            <p key="msg">{{ comment.message }}</p>
          </div>
        </div>
      </div>

      <div class="all" key="all-likes" v-if="analytics.likes">
        <li v-for="(like, id) in response.data.likes" :key="id">
          {{ like.name }}
        </li>
      </div>
      <div class="all" key="all-views" v-if="analytics.views">
        <li v-for="(view, id) in response.data.views" :key="id">
          {{ view.name }}<span>{{ view.date }}</span>
        </li>
      </div>
      <div class="all" key="all-dislikes" v-if="analytics.dislikes">
        <li v-for="(dislike, id) in response.data.dislikes" :key="id">
          {{ dislike.name }}
        </li>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
import { useStore } from "vuex";
export default {
  name: "adminAnalytics",
  setup() {
    const router = useRouter();
    const store = useStore();

    let mode = computed(() => store.state.mode);

    let response = reactive({
      data: {},
      title: "",
      views: [],
      likes: [],
      dislikes: [],
      comments: [],
    });

    let analytics = reactive({
      views: false,
      dislikes: false,
      likes: false,
      feedback: true,
    });

    onMounted(() => {
      axios(`api/admin/course/${localStorage.getItem("courseId")}`, {
        headers: {
          editId: `${localStorage.getItem("editToken")}`,
        },
      })
        .then((res) => {
          response.data = res.data;
          response.title = res.data.title;
          response.views = res.data.views;
          response.likes = res.data.likes;
          response.comments = res.data.comments;
          response.dislikes = res.data.dislikes;
        })
        .catch((err) => err);
    });

    function getLikes() {
      analytics.likes = true;
      analytics.dislikes = false;
      analytics.views = false;
      analytics.feedback = false;
    }
    function getDislikes() {
      analytics.likes = false;
      analytics.dislikes = true;
      analytics.views = false;
      analytics.feedback = false;
    }
    function getViews() {
      analytics.likes = false;
      analytics.dislikes = false;
      analytics.views = true;
      analytics.feedback = false;
    }
    function getFeedback() {
      analytics.likes = false;
      analytics.dislikes = false;
      analytics.views = false;
      analytics.feedback = true;
    }

    return {
      response,
      analytics,
      mode,
      getLikes,
      getDislikes,
      getViews,
      getFeedback,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  padding: 20px;

  .route {
    text-decoration: none;
    width: max-content;
    height: max-content;
    padding: 10px;
    margin: 20px;
    color: white;
    background: rgba(230, 101, 129, 1);
    border-radius: 5px;
    text-transform: capitalize;
  }

  h1,
  h2 {
    padding: 10px;
    @media screen and (max-width: 500px) {
      font-size: 18px;
    }
  }

  ul {
    width: 100%;
    height: fit-content;
    list-style: none;

    li {
      width: 90%;
      margin: auto;
      height: fit-content;
      text-align: left;
      span {
        font-size: 24px;
        color: rgba(230, 101, 129, 1);
      }
    }

    .feedback {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: rgb(228, 228, 228);
      border-radius: 5px;
      padding: 5px;
      margin: 10px auto;

      .img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid rgb(94, 94, 95);
        cursor: pointer;

        i {
          font-size: 40px;
        }
      }
      .content {
        width: 70%;
        height: fit-content;
        padding: 10px 3px;

        h2 {
          color: rgb(78, 77, 77);
          text-align: left;
        }
        p {
          color: rgb(110, 109, 109);
          text-align: left;
        }
      }
      @media screen and (max-width: 600px) {
        flex-direction: column;
        .content {
          width: 100%;
          h2,
          p {
            text-align: center;
          }
        }
      }
    }
  }

  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    height: fit-content;
    button {
      width: max-content;
      height: 40px;
      border: none;
      border-radius: 5px;
      padding: 0 10px;
      margin: 10px;
      background: rgba(230, 101, 129, 1);
      color: white;
    }
  }
  .all {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    li {
      background: white;
      width: max-content;
      height: fit-content;
      border-radius: 4px;
      margin: 10px;
      padding: 10px;
      color: rgb(43, 42, 42);
    }
  }
}

.container.dark,
.container.gray {
  h1 {
    color: white;
    text-transform: capitalize;
  }
  h2 {
    color: rgb(219, 218, 218);
    text-align: left;
    text-transform: capitalize;
  }
  p,
  li {
    color: rgb(201, 199, 199);
    text-align: left;
  }
  .all li {
    color: rgb(43, 42, 42);
  }
}
</style>