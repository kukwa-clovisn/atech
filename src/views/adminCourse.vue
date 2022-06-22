<template>
  <div class="course-editor">
    <div class="editor">
      <h1>
        create a <span>{{ courseFormat.name }}</span> course
      </h1>
      <p>
        <i class="fa-solid fa-circle-exclamation"></i>
        Please read the create course guildline before jumping in to create a
        course so you won't get mixed up in creating courses.
      </p>
      <form @submit.prevent="createCourse()">
        <input type="hidden" name="name" v-model="courseFormat.name" />
        <div class="input">
          <label for="title">course Title: <span>*</span></label>
          <input
            type="text"
            name="title"
            id="title"
            v-model="courseFormat.title"
            placeholder="Course title"
            required
          />
        </div>
        <div class="input">
          <label for="objectives">Course Objectives: <span>*</span></label>
          <textarea
            name="objectives"
            id="objectives"
            placeholder="separate each course objective with a comma(,)"
            cols="30"
            rows="10"
            v-model="objectives"
            required
          ></textarea>
        </div>
        <div class="input">
          <label for="intro">course introduction: <span>*</span></label>
          <textarea
            name="intro"
            id="intro"
            cols="30"
            rows="10"
            v-model="courseFormat.intro"
            placeholder="short and simple overview of the course..."
            required
          ></textarea>
        </div>
        <div class="input">
          <label for="course">course explanation: <span>*</span></label>
          <editor
            :init="{
              plugins: 'lists link image table code help wordcount',
            }"
            v-model="courseFormat.course"
            name="course"
          />
        </div>
        <div class="input">
          <label for="video1">video 1:</label>
          <input
            type="text"
            name="video1"
            id="video1"
            v-model="video.video1"
            placeholder="First video after explanation..."
          />
        </div>
        <div class="input">
          <label for="description"
            >Explanation after video 1: <span>*</span></label
          >
          <editor
            :init="{
              plugins: 'lists link image table code help wordcount',
            }"
            id="tinyeditor"
            v-model="courseFormat.description"
            name="description"
          />
        </div>
        <div class="input">
          <label for="video1">video 2:</label>
          <input
            type="text"
            name="video2"
            id="video2"
            v-model="video.video2"
            placeholder="First video after explanation..."
          />
        </div>
        <div class="input">
          <label for="desc1">Explanation after video 2: <span>*</span></label>
          <editor
            :init="{
              plugins: 'lists link image table code help wordcount',
            }"
            id="tinyeditor1"
            v-model="courseFormat.desc1"
            naem="desc1"
          />
        </div>
        <div class="input">
          <label for="video1">video 3:</label>
          <input
            type="text"
            name="video3"
            id="video3"
            v-model="video.video3"
            placeholder="First video after explanation..."
          />
        </div>
        <div class="input">
          <label for="desc2">Explanation after video 3: <span>*</span></label>
          <editor
            :init="{
              plugins: 'lists link image table code help wordcount',
            }"
            id="tinyeditor2"
            v-model="courseFormat.desc2"
            name="desc2"
          />
        </div>

        <div class="input">
          <label for="videoUrl"
            >video url (should be an iframe embedded video)</label
          >
          <input
            type="text"
            name="videoUrl"
            id="vidoeUrl"
            v-model="courseFormat.videoUrl"
            placeholder="Video embed link...."
          />
        </div>

        <div class="input">
          <label for="free">free or paid coure? <span>*</span></label>
          <select name="free" id="free" v-model="courseFormat.free" required>
            <option value="free">free</option>
            <option value="paid">paid</option>
          </select>
        </div>
        <div class="input">
          <label for="conclusion">course conclusion/remarks:</label>
          <textarea
            name="conclusion"
            id="conclusion"
            cols="30"
            rows="10"
            v-model="courseFormat.conclusion"
            placeholder="Course conclusion or remarks"
          ></textarea>
        </div>
        <button type="submit">create course</button>
        <div class="response">
          <div class="done" v-if="success">
            <i class="fa-solid fa-circle-check"></i>
            <span>course successfully uploaded.</span>
          </div>
          <div class="error" v-if="postError">
            <i class="fa-solid fa-circle-exclamation"></i>
            <span>error: course not uploaded.</span>
          </div>
        </div>
      </form>
      <div class="display" v-for="course in response" :key="course.id">
        <div class="courses" v-html="course.title"></div>
        <div class="courses" v-html="course.course"></div>
        <div class="courses" v-html="course.videoUrl"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";
import { ref, reactive, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
export default {
  name: "AdminCourse",
  components: {
    editor: Editor,
  },
  setup() {
    const route = useRoute();

    let response = ref("");
    let success = ref(false);
    let postError = ref(false);
    let objectives = ref("");
    let video = reactive({
      video1: "",
      video2: "",
      video3: "",
    });

    let courseFormat = reactive({
      name: "",
      title: "",
      course: "",
      videoUrl: "",
      objectives: [],
      description: "",
      desc1: "",
      desc2: "",
      free: "free",
      intro: "",
      conclusion: "",
      firstvideolist: [],
      secondvideolist: [],
      thirdvideolist: [],
    });
    onMounted(() => {
      courseFormat.name = route.params.course;
    });

    const createCourse = () => {
      courseFormat.name = localStorage.getItem("courseId");
      courseFormat.objectives = objectives.value.split(",");
      courseFormat.firstvideolist = video.video1.split(",");
      courseFormat.secondvideolist = video.video2.split(",");
      courseFormat.thirdvideolist = video.video3.split(",");
      axios
        .post(
          `/api/admin/course/create/${localStorage.getItem("courseId")}`,
          courseFormat
        )
        .then((res) => {
          console.log(res);
          if (res.statusText === "OK") {
            success.value = true;
            setTimeout(pop, 3000);
            // courseFormat.name = "";
            // courseFormat.title = "";
            // courseFormat.course = "";
            // courseFormat.description = "";
            // objectives.value = "";
            // courseFormat.videoUrl = "";
          } else {
            error.value = true;
            setTimeout(post_error, 3000);
          }
        })
        .catch((err) => {
          postError.value = true;
          setTimeout(post_error, 3000);
        });
    };

    function pop() {
      success.value = false;
    }
    function post_error() {
      postError.value = false;
    }
    return {
      courseFormat,
      response,
      video,
      success,
      postError,
      objectives,
      createCourse,
    };
  },
};
</script>

<style lang="scss" scoped>
$adminCol: rgb(21, 55, 101);
.course-editor {
  max-width: 100%;
  height: 100%;
  padding: 0;

  .editor {
    width: 95%;
    height: fit-content;
    margin: 10px auto;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      font-size: 20px;
      padding: 20px;
      color: rgb(118, 116, 116);
      padding-bottom: 0;
      span {
        color: rgba(230, 101, 129, 1);
        font-size: 26px;
      }
    }
    p {
      padding-bottom: 10px;
      width: 95%;
      margin: auto;

      i {
        font-size: 30px;
        color: rgba(230, 101, 129, 1);
      }
    }
    form {
      width: 97%;
      height: fit-content;
      margin: auto;

      .input {
        margin: 20px auto;
        width: 100%;
        height: fit-content;
        background: white;
        border-radius: 5px;
        box-shadow: 0 0 1px 6px rgb(241, 242, 244);
      }

      label {
        width: 100%;
        display: block;
        text-align: left;
        text-transform: capitalize;
        padding: 3px 10px;
        font-weight: 700;
        font-family: "Nunito Sans", sans-serif;
        color: rgb(117, 116, 116);
        span {
          color: rgba(230, 101, 129, 1);
        }
      }
      input,
      select {
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 5px;
        background: white;

        padding: 3px 20px;
        margin: 20px auto;
        margin-top: 10px;
        display: block;
        outline: none;
      }
      input[type="checkbox"] {
        width: 30px;
        height: 30px;
        margin: 10px 0;
      }
      textarea,
      editor {
        border: none;
        outline: none;
        width: 100%;
        padding: 10px;
        border-radius: 5px;
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

    .display {
      width: 100%;
      height: fit-content;
      padding: 10px;
      margin: 10px auto;

      p {
        color: white;
      }
    }

    button {
      width: 100%;
      height: 55px;
      border: none;
      border-radius: 5px;
      background: rgba(230, 101, 129, 1);
      margin: 20px auto;
      font-size: 23px;
      color: white;
      text-transform: capitalize;
    }
    textarea {
      width: 97%;
    }
  }
}
</style>
