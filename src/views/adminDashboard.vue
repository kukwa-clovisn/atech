<template>
  <div class="dashboard">
    <h1>Dashboard</h1>
    <div class="right-dashboard">
      <div class="profile">
        <div class="img">
          <img src="../assets/book.jpeg" alt="" />
        </div>
        <div class="info">
          <h2>{{ response.name }}</h2>
          <p>{{ response.email }}</p>
          <button>edit profile</button>
        </div>
      </div>
    </div>
    <div class="left-dashboard">
      <div class="content">
        <button>
          <router-link
            to="/admin/dashboard/course/course"
            class="route"
            @click="createCourse()"
            ><i class="fa-solid fa-square-plus"></i>create a course</router-link
          >
        </button>

        <button>
          <router-link to="/admin/blog" class="route"
            ><i class="fa-solid fa-pen"></i>write a post</router-link
          >
        </button>

        <button>
          <router-link to="/admin/email" class="route"
            ><i class="fa-solid fa-envelope"></i>email client(s)</router-link
          >
        </button>

        <button>
          <router-link to="/admin/course/courses/view" class="route">
            <i class="fa-solid fa-book-open-reader"></i>view my
            courses</router-link
          >
        </button>

        <button>
          <router-link to="/admin/guide" class="route"
            ><i class="fa-solid fa-circle-info"></i>admin guide</router-link
          >
        </button>
        <button>
          <router-link to="/admin/dashboard" class="route"
            ><i class="fa-solid fa-message"></i>feedback</router-link
          >
        </button>
        <button>
          <router-link to="/admin/dashboard" class="route">
            <i class="fa-solid fa-gear"></i>customize your
            dashboard</router-link
          >
        </button>
        <button>
          <router-link to="/" class="route"
            ><i class="fa-solid fa-power-off"></i>log out</router-link
          >
        </button>
      </div>
      <div class="left-content-main">
        <div class="img">
          <img src="../assets/mtn-computer.png" alt="" />
        </div>
        <div class="analytics">
          <h2>analytics</h2>
          <h4>Courses:</h4>
          <ul>
            <li v-for="(course, index) in response.data" :key="index">
              <p>{{ course }}</p>
              <p>{{ index }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, reactive } from "vue";
import axios from "axios";
export default {
  name: "AdminDashboard",
  setup() {
    const router = useRouter();

    let response = reactive({
      name: "",
      email: "",
      data: [],
    });
    onMounted(() => {
      axios(`/api/admin/getAdmin/${localStorage.getItem("adminId")}`)
        .then((res) => {
          console.log(res);
          response.data = res.data.course;
          response.name = res.data.username;
          response.email = res.data.email;
        })
        .catch((err) => console.log(err));
    });

    function createCourse() {
      router.push(
        `/admin/dashboard/course/${localStorage.getItem("courseId")}`
      );
    }

    return { response, createCourse };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: white;
$secondaryColor: rgb(232, 232, 232);
$tertiaryColor: rgb(249, 249, 249);
$textColor1: rgb(123, 122, 122);
$baseColor: tomato;
$fallback: teal;
$misc: #072e54;
.dashboard {
  width: 100%;
  height: fit-content;

  h1 {
    width: 95%;
    margin: auto;
    text-align: left;
    padding: 20px;
    font-family: "Nunito Sans", sans-serif;
  }
  .right-dashboard {
    width: 80%;
    margin: auto;
    border-radius: 3px;
    height: fit-content;
    background: transparent;
    //     box-shadow: 0 3px 2px 1px rgb(216, 215, 215);

    h3 {
      padding: 10px;
      text-align: left;
      //  color: rgb(124, 123, 123);
    }

    .profile {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;

      .img {
        width: 250px;
        height: 250px;
        border-radius: 100%;
        overflow: hidden;

        img {
          height: 100%;
          width: auto;
          cursor: pointer;
        }
      }

      .info {
        width: fit-content;
        height: fit-content;
        padding-left: 10px;
        h2,
        p {
          color: rgb(97, 96, 96);
          font-family: "Nunito Sans", sans-serif;
          text-align: left;
        }
        button {
          width: 200px;
          height: 40px;
          background: rgb(135, 134, 134);
          color: $primaryColor;
          border: none;
          border-radius: 3px;
          display: block;
          margin: 10px 0;
        }
      }
    }
  }
  .left-dashboard {
    width: 95%;
    height: fit-content;
    padding: 0 10px;
    margin: 20px auto;

    .content {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      button {
        min-width: 210px;
        height: 55px;
        border: none;
        border-radius: 4px;
        margin: 10px;
        background: $misc;

        .route {
          text-decoration: none;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          color: rgb(183, 181, 181);
        }

        i {
          color: $primaryColor;
          padding-right: 5px;
          font-size: 21px;
        }
      }
    }
    .left-content-main {
      width: 100%;
      height: fit-content;

      .img {
        width: 100%;
        img {
          width: auto;
          height: 200px;
        }
      }
      h2 {
        text-align: left;
        text-transform: capitalize;
        padding: 10px;
      }
      h4 {
        text-align: left;
        width: 90%;
        margin: auto;
        padding: 10px;
      }
      ul {
        width: 95%;
        margin: 10px auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        li {
          background: $secondaryColor;
          list-style-type: none;
          width: 200px;
          height: 100px;
          margin: 10px;
          padding: 10px;
          border-radius: 5px;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          align-items: center;
          flex-direction: column;

          p {
            color: rgb(135, 134, 134);
          }
        }
      }
    }
  }
}
</style>