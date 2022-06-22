<template>
  <div class="container">
    <div class="courses">
      <div class="course-container">
        <h2>{{ response.course }} courses</h2>
        <ul>
          <li v-for="(course, index) in response.courses" :key="index">
            <span class="course-number">{{ index }}</span>
            <span
              class="course-bookmark"
              title="Add to Bookmark"
              @click="bookmarkFunc(course._id)"
              ><i class="fa-regular fa-star"></i
            ></span>
            <!-- <span class="course-bookmark" title="Add to Bookmark"
              ><i class="fa-solid fa-star"></i
            ></span> -->
            <p>{{ course.title }}</p>
            <button>start course</button>
          </li>
        </ul>
      </div>
      <div class="description-container">
        <div class="content">
          <span class="close">&times;</span>
          <h3><i class="fa-regular fa-star"></i>Boomark</h3>
          <p>
            Save some courses to study later. You can also find those courses in
            your profile
          </p>
        </div>
        <div class="content">
          <span class="close">&times;</span>
          <h3><i class="fa-regular fa-bookmark"></i>Subscriptions</h3>
          <p>
            Register for courses to be able to study them. You can find a list
            of your registered courses in your profile
          </p>
        </div>
      </div>
    </div>
    <div id="tutorial" v-if="response.showCourse">
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
      courses: [],
      bookmarks: [],
      showCourse: false,
      bookmarked: false,
    });

    onMounted(() => {
      axios(`/api/admin/course/all/${route.params.course}`)
        .then((res) => {
          if (res.statusText === "OK") {
            console.log(res);
            response.courses = res.data;
            response.course = route.params.course;
            console.log(localStorage.getItem("accessId"));
            for (let i = 0; i < res.data.length; i++) {
              console.log(res.data[i].Bookmarks);
              for (let j = 0; j < res.data[i].Bookmarks.length; j++) {
                console.log(res.data[i].Bookmarks[j]);
                console.log(
                  "true"
                    ? res.data[i].Bookmarks[j].courseId ===
                        "62ab50cf2ba3cc5baf71b83c"
                    : false
                );
              }
            }
          } else {
            router.push("/login");
          }
        })
        .catch((err) => {
          router.push("/login");
          console.log(err);
          return err;
        });
    });

    function bookmarkFunc(courseId) {
      console.log(courseId);
      axios
        .post(`/api/admin/course/${courseId}`, {
          userId: localStorage.getItem("accessId"),
          courseId,
        })
        .then((res) => {
          console.log(res);
          if (res.statusText === "Created") {
            response.bookmarked = true;
          }
        });
    }

    return { response, bookmarkFunc };
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
}
.courses {
  width: 100%;
  min-height: 90vh;
  background: rgb(241, 242, 244);
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;

  .course-container {
    width: 65%;
    height: fit-content;

    h2 {
      width: 90%;
      height: 100px;
      margin: auto;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      text-transform: capitalize;
      font: 700 19px "Nunito Sans", sans-serif;
      color: rgb(34, 34, 34);
    }
    ul {
      width: 100%;
      height: fit-content;
      list-style: none;

      li {
        width: 100%;
        height: 90px;
        background: white;
        box-shadow: 0 0 2px 2px rgb(241, 242, 244);
        border-radius: 10px;
        margin: 20px auto;
        position: relative;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;

        .course-number,
        .course-bookmark {
          position: absolute;
          top: -2%;
          left: -1%;
          width: 20px;
          height: 20px;
          border-radius: 100%;
          background: rgb(225, 105, 7);
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 9px;
        }
        .course-bookmark {
          left: 97%;
          top: 1%;
          background: transparent;

          i {
            color: teal;
            font-size: 25px;
            cursor: pointer;
          }
        }
        p {
          text-transform: capitalize;
          font: 600 19px "Poppins", sans-serif;
        }
        button {
          width: 200px;
          height: 30px;
          border: none;
          border-radius: 30px;
          background: teal;
          color: white;
        }
      }
    }
  }

  .description-container {
    width: 23%;
    height: fit-content;
    padding-top: 50px;

    .content {
      width: 100%;
      height: fit-content;
      background: white;
      padding: 20px;
      position: relative;
      border-radius: 10px;
      margin: 20px auto;

      span {
        position: absolute;
        top: 1%;
        right: 5%;
        font-size: 20px;
        cursor: pointer;
      }

      h3 {
        text-align: left;
        padding: 10px;
      }
      p {
        font-size: 13px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;

    .course-container,
    .description-container {
      width: 95%;
      margin: auto;
    }

    @media screen and (max-width: 400px) {
      .course-container {
        ul li {
          height: 110px;
          p {
            font-size: 15px;
          }
          .course-bookmark{
            left:95%;
          }
        }
      }
    }
  }
}
</style>