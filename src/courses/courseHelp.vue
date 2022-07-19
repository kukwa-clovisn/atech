<template>
  <div
    class="container"
    :class="{ 'dark-mode': mode.dark, 'gray-mode': mode.gray }"
  >
    <h1>How to navigate through your page</h1>
    <p>
      We're going to be walking you through some steps to help you maximize your
      use of this website and learning so you can have the best experience
      learning with us. <br />
      Read through this guide carefully to ease your experience with our
      courses.
    </p>
    <h2>Course home page</h2>
    <p>
      Whenever you login or sign in, you will be redirected to your landing page
      and in your landing page, on the header bottom top you'll find
      <span>subscription</span> and <span>bookmarks</span> which shows the
      number of courses you're subscribed to and the number of courses you've
      saved as Bookmark to study later.
    </p>
    <p>
      You can get to your dashboard by clicking the <span>subscription</span>or
      <span>bookmark</span>
    </p>
    <h1>courses</h1>
    <p>
      To see various courses, click on the page or on the
      <span>view courses</span> to display the various courses and you will be
      allowed access only to courses with you have subscribed to or courses
      which you are registered to.
    </p>
    <h2>Dashboard</h2>
    <p>
      You will be able to find the courses you're subscribed and the courses
      you've bookmarked to study later.
    </p>
    <h2>Course page</h2>
    <p>
      When you choose a course to study, you will find the course description
      and some videos related to the course to watch. Still in the course page
      you will find the <span>like</span>, <span>dislike</span> and
      <span>bookmark</span> button. <br />
      The like and dislike button is to give your impression of the course. The
      bookmark button helps you to save the course to follow later again.
    </p>
    <p>
      In the course page after taking the course, you'll find the
      <span>Questions</span> and <span>feedback</span> text fields where you can
      post your questions from the course and the <span>feedback</span> field
      will be for you to send your feedback or experience of the course.
    </p>
    <p>
      Any difficulties you will find in using the course, you can always write
      us using the feedback input field or any inconviniences you find you can
      write using the <span>feedback field</span>
    </p>
    <h2>Notifications</h2>
    <p>
      You can always find our latest news and updates by clicking the
      notification bell
    </p>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "CourseHelp",
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
    padding: 10px;
    text-align: left;
    text-transform: capitalize;
    font: 700 25px "Nunito Sans", sans-serif;
  }
  h2 {
    text-align: left;
    color: rgb(61, 59, 59);
    font-family: "Nunito Sans", sans-serif;
  }
  p {
    width: 95%;
    margin: auto;
    text-align: left;
    padding: 10px;
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