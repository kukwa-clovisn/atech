<template>
  <div id="tutorial">
    <a href="/course" class="return">Back to crypto courses</a>
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
import { reactive, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  components: { Contact },
  name: "Course",
  setup() {
    const route = useRoute();
    const router = useRouter();

    let response = reactive({
      title: "",
      course: "",
      videoUrl: "",
      description: "",
      objectives: [],
    });

    onMounted(() => {
      console.log(route.params);
      axios(`/api/admin/course/${route.params.course}`)
        .then((res) => {
          if (res.statusText === "OK") {
            response.title = res.data.title;
            response.course = res.data.course;
            response.objectives = res.data.objectives;
            response.description = res.data.description;
            response.videoUrl = res.data.videoUrl;
          } else {
            router.push("/login");
          }
        })
        .catch((err) => {
          router.push("/login");
          return err;
        });
    });

    return { response };
  },
};
</script>

<style lang="scss" scoped>
</style>