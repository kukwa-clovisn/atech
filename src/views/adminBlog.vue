<template>
  <form @submit.prevent="postBlog()">
    <h1>write a blog!</h1>
    <div class="input">
      <input
        name="author"
        id="author"
        v-model="post.author"
        placeholder="Author's name"
        required
      />
      <input
        name="title"
        id="title"
        v-model="post.title"
        required
        placeholder="Post Title..."
      />
      <input
        name="sub-title"
        id="sub-title"
        v-model="post.subTitle"
        required
        placeholder="sub title "
      />
      <!-- <textarea
      
        id="tinyeditor"
        cols="30"
        rows="10"
       
       
       
      ></textarea> -->
      <editor
        :init="{
          plugins: 'lists link image table code help wordcount',
        }"
        id="tinyeditor"
        v-model="post.message"
        name="message"
        placeholder="write message here..."
      />
      <input
        name="tags"
        id="tags"
        v-model="post.tags"
        required
        placeholder="Seperate each tag with a comma(,)...."
      /><button type="submit">submit</button
      ><input type="reset" value="Cancel" />
    </div>

    <div class="response">
      <div class="done" v-if="success">
        <i class="fa-solid fa-circle-check"></i>
        <span>post successfully uploaded.</span>
      </div>
      <div class="error" v-if="postError">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>error: post not uploaded.</span>
      </div>
    </div>
  </form>
</template>

<script>
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
import { reactive, ref } from "vue";
export default {
  name: "AdminBlog",
  components: {
    editor: Editor,
  },
  setup() {
    const post = reactive({
      author: "",
      title: "",
      subTitle: "",
      message: "",
      tags: "",
    });

    let success = ref(false);
    let postError = ref(false);

    function postBlog() {
      axios
        .post("/api/admin/blog", post, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          post.title = "";
          post.subTitle = "";
          post.message = "";
          post.tags = "";
          if (res.statusText === "OK") {
            success.value = true;
            setTimeout(pop, 3000);
          } else {
            postError.value = true;
            setTimeout(post_error, 3000);
          }
        });
    }

    function pop() {
      success.value = false;
    }
    function post_error() {
      postError.value = false;
    }

    return { success, postError, post, postBlog };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: #072e54;
$secondaryColor: rgb(215, 214, 214);
$tertiaryColor: #194e82;
$baseColor: rgba(230, 101, 129, 1);
$text: rgb(84, 84, 84);

form {
  width: 80%;
  height: fit-content;
  padding: 30px 10px;
  padding-bottom: 40px;
  margin: auto;
  background: transparent;

  h1 {
    text-transform: capitalize;
    color: $text;
    font: 600 25px "Poppins", sans-serif;
  }

  .input {
    width: 100%;
    height: fit-content;
    color: $text;

    label {
      width: 100%;
      display: block;
      text-align: left;
      padding-bottom: 10px;
      color: $text;
    }

    input {
      width: 100%;
      height: 40px;
      outline: none;
      border: none;
      border-bottom: 1px solid $text;
      background: transparent;
      color: $text;

      margin: 5px auto;
    }
    input[type="reset"] {
      border: none;
      text-align: left;
      font-weight: 800;
      color: $text;
      cursor: pointer;
      width: fit-content;
      margin: 0;
      float: left;

      &:hover {
        transform: scale(1.1);
      }

      &:active {
        transform: scale(0.9);
      }
    }
    textarea {
      width: 100%;
      height: 200px;
      border-radius: 5px;
      box-shadow: 0 0 2px 0.5px $text;
      outline: none;
      border: none;
      padding: 20px;
      margin: 10px auto;
      background: transparent;
    }

    button {
      background: $secondaryColor;
      height: 50px;
      width: 100%;
      margin: 20px auto;
      border: none;
      border-radius: 5px;
      color: $text;
      font: 600 19px "Poppins", sans-serif;
      text-transform: capitalize;
    }
  }
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
</style>
