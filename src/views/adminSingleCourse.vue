<template>
  <div class="container" :class="{ dark: mode.dark, gray: mode.gray }">
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
      <h2 key="comment">feedback:</h2>
      <p v-if="!response.comments.length">No Feedback</p>
      <div
        v-for="(comment, index) in response.comments"
        class="feedback"
        :key="index"
      >
        <div class="img"><i class="fa-regular fa-user"></i></div>
        <div class="content">
          <h2>{{ comment.name }}</h2>
          <p>{{ comment.time }}</p>
          <p>{{ comment.feedback }}</p>
        </div>
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
  name: "AdminSingleCourse",
  setup() {
    const router = useRouter();
    const store = useStore();

    let mode = computed(() => store.state.mode);

    let response = reactive({
      title: "",
      views: [],
      likes: [],
      dislikes: [],
      comments: [],
    });

    onMounted(() => {
      axios(`api/admin/course/${localStorage.getItem("courseId")}`, {
        headers: {
          editId: `${localStorage.getItem("editToken")}`,
        },
      })
        .then((res) => {
          response.title = res.data.title;
          response.views = res.data.views;
          response.likes = res.data.likes;
          response.comments = res.data.comments;
          response.dislikes = res.data.dislikes;
        })
        .catch((err) => err);
    });

    return { response, mode };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  padding: 20px;

  h1,
  h2 {
    padding: 10px;
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
          color: rgb(43, 42, 42);
          text-align: left;
        }
        p {
          color: rgb(110, 109, 109);
          text-align: left;
        }
      }
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
}
</style>