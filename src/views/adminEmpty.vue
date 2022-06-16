<template>
  <div class="course-editor">
    <div class="editor">
      <h1>create a course</h1>
      <form @submit.prevent="createCourse">
        <label for="name">Select course type:</label>
        <select name="name" id="name" v-model="courseFormat.name">
          <option value="Cryptocurrency">Cryptocurrency</option>
          <option value="Forex">Forex</option>
          <option value="Web development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Music">Music</option>
        </select>
        <label for="title">course Title:</label>
        <input
          type="text"
          name="title"
          id="title"
          v-model="courseFormat.title"
          placeholder="Course title"
        />
        <label for="objectives">Course Objectives:</label>
        <textarea
          name="objectives"
          id="objectives"
          placeholder="separate each course objective with a comma(,)"
          cols="30"
          rows="10"
          v-model="objectives"
        ></textarea>
        <label for="course">course explanation:</label>
        <editor
          :init="{
            plugins: 'lists link image table code help wordcount',
          }"
          v-model="courseFormat.course"
        />

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
        <label for="description">Explanation after video:</label>
        <editor
          :init="{
            plugins: 'lists link image table code help wordcount',
          }"
          v-model="courseFormat.description"
        />
        <label for="free">check if course is free.</label>
        <input
          type="checkbox"
          name="free"
          v-model="courseFormat.free"
          id="free"
          placeholder="Is course free??"
        />
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
import { ref, reactive } from "vue";
import axios from "axios";
export default {
  name: "AdminEmpty",
  components: {
    editor: Editor,
  },
  setup() {
    let response = ref("");
    let success = ref(false);
    let postError = ref(false);
    let objectives = ref("");

    let courseFormat = reactive({
      name: "",
      title: "",
      course: "",
      videoUrl: "",
      objectives: [],
      description: "",
      free: true,
    });

    const createCourse = () => {
      courseFormat.objectives = objectives.value.split(",");
      axios
        .post("/api/admin/course", courseFormat, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (res.statusText === "OK") {
            console.log(res.data);
            success.value = true;
            setTimeout(pop, 3000);
            courseFormat.name = "";
            courseFormat.title = "";
            courseFormat.course = "";
            courseFormat.description = "";
            objectives.value = "";
            courseFormat.videoUrl = "";
            courseFormat.free = true;
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
    form {
      width: 97%;
      height: fit-content;
      margin: auto;

      label {
        width: 100%;
        display: block;
        text-align: left;
        text-transform: capitalize;
        padding: 3px 10px;
        font-weight: 700;
      }
      input,
      select {
        width: 100%;
        height: 60px;
        border: none;
        border-radius: 5px;
        background: white;
        box-shadow: 0 0 3px 1px whitesmoke;
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
      textarea {
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
      background: teal;
      margin: 20px auto;
      color: white;
      text-transform: capitalize;
    }
    textarea {
      width: 97%;
    }
  }
}
</style>
