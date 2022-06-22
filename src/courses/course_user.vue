<template>
  <div class="container">
    <div class="left-content">
      <div class="user-logo">{{ profile.name.split("")[0] }}</div>
      <div class="top-content"></div>
      <div class="bottom-content">
        <span class="edit"><i class="fa-solid fa-pen"></i></span>
        <div class="info">
          <h1>{{ profile.name }}</h1>
          <p>{{ profile.email }}</p>
          <h5>Douala</h5>
        </div>
      </div>
    </div>
    <div class="right-content">
      <div class="top-content">
        <h2>Subscriptions</h2>
        <ul
          v-for="subscription in profile.subscriptions"
          :key="subscription.id"
        >
          <li>
            <span class="subscription">{{ subscription.course }}</span>
            <span
              class="plan"
              :class="{ paid: subscription.plan === 'paid' }"
              >{{ subscription.plan }}</span
            >
          </li>
        </ul>
        <p v-if="!profile.subscriptions.length">No subscriptions yet</p>
      </div>
      <div class="bottom-content">
        <h2>Bookmarks</h2>
        <ul v-for="course in profile.savedCourses" :key="course.id">
          <li>
            <p class="subscription">{{ course.name }}</p>
            <span class="plan">{{ course.title }}</span>
          </li>
        </ul>
        <p v-if="!profile.savedCourses.length">No courses saved yet</p>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { useRouter } from "vue-router";
import { reactive, onBeforeMount } from "vue";
export default {
  name: "Course_user",
  setup() {
    const router = useRouter();
    let profile = reactive({
      name: "",
      email: "",
      subscriptions: [],
      savedCourses: [],
      dropdown: false,
    });

    function checkToken() {
      axios("api/token")
        .then((res) => {
          console.log(res);
          profile.name = res.data.username;
          profile.email = res.data.email;
          profile.subscriptions = res.data.subscription;
          profile.savedCourses = res.data.course;
        })
        .catch((err) => {
          router.push("/login");
        });
    }

    onBeforeMount(() => {
      checkToken();
    });
    return { profile };
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgb(226, 226, 231);
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding-top: 25px;

  .left-content {
    width: 60%;
    height: 80%;
    background: white;
    border-radius: 15px;
    box-shadow: 0 0 2px 2px rgb(226, 226, 231);
    position: relative;

    .user-logo {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      position: absolute;
      top: 30%;
      left: 4%;
      border: 3px solid white;
      background: teal;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 45px;
      cursor: pointer;
    }

    .top-content {
      width: 100%;
      height: 40%;
      background: url(../assets/book.jpeg);
      background-size: cover;
      background-repeat: no-repeat;
      background-attachment: scroll;
    }
    .bottom-content {
      position: relative;

      .edit {
        width: 70px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 2%;
        right: 5%;
        cursor: pointer;

        i {
          font-size: 20px;
          color: teal;

          &:active {
            transform: scale(0.8);
          }
        }
      }
      padding: 30px 10px 5px 10px;
    }
  }
  .right-content {
    width: 30%;
    height: 80%;

    .top-content,
    .bottom-content {
      width: 100%;
      height: fit-content;
      margin: 20px auto;
      border-radius: 10px;
      background: white;
      box-shadow: 0 0 2px 2px rgb(226, 226, 231);
      padding: 10px;

      h2 {
        text-align: left;
        padding: 10px;
        color: rgb(88, 87, 87);
      }
      ul {
        width: 100%;
        height: fit-content;
        background: whitesmoke;
        border-radius: 3px;
        padding: 5px;
        list-style: none;

        li {
          width: 100%;
          height: 35px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 3px 10px;

          .plan {
            width: fit-content;
            padding: 2px 10px;
            height: fit-content;
            background: teal;
            color: white;
            border-radius: 3px;
            font-size: 14px;
          }
          .plan.paid {
            background: #e66581;
          }
        }
      }
    }
  }

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    .left-content,
    .right-content {
      width: 95%;
    }
  }
}
</style>