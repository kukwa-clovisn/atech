<template>
  <div class="single-tutorial course-1">
    <a class="return">Back to crypto courses</a>
    <div class="logo">
      <img src="../assets/logo-white.jpg" alt="" />
    </div>
    <h1 v-html="response.title"></h1>
    <h4>
      master course <br />
      by: AdvancedTechAcademy
    </h4>
    <ul>
      <h3>tutorial objectives:</h3>
      <li v-for="(objective, index) in response.objectives" :key="objective">
        <span>{{ index + 1 }}</span
        ><a v-html="objective"></a>
      </li>
    </ul>
    <div class="course-div" v-html="response.course"></div>
    <div class="video" v-html="response.videoUrl"></div>
    <div class="course-div" v-html="response.description"></div>
    <Contact />
  </div>
</template>

<script>
import axios from "axios";
import Contact from "../components/contact.vue";
import { reactive } from "vue";
export default {
  components: { Contact },
  name: "Course",
  props: {
    id: {
      required: true,
    },
  },
  setup(props) {
    let response = reactive({
      title: "",
      course: "",
      videoUrl: "",
      description: "",
      objectives: [],
    });
    axios(`/api/admin/course/${props.id}`)
      .then((res) => {
        response.title = res.data.title;
        response.course = res.data.course;
        response.objectives = res.data.objectives;
        response.description = res.data.description;
        response.videoUrl = res.data.videoUrl;
      })
      .catch((err) => console.log(err));
    return { response };
  },
};
</script>
<style lang="scss" scoped>
p {
  color: red;
}
</style>