<template>
  <main :class="{ squeeze: course.profileMenu }">
    <div class="blur"></div>
    <header>
      <nav class="profile" @click="showProfileMenu()">
        <span>
          <i class="fa-solid fa-book-open"></i>
        </span>
        view courses
      </nav>
    </header>
    <transition name="refresh-in">
      <div class="profile-menu" v-if="course.profileMenu">
        <button
          class="profile-menu-button"
          v-if="course.profileMenu"
          @click="hideProfileMenu()"
        >
          &times;
        </button>
        <nav class="logo">
          <img src="../assets/logo-white.jpg" alt="" />
        </nav>
        <div class="profile-header">
          <span>
            <i class="fa-solid fa-user"></i>
          </span>
          <p>
            {{ course.courseUser }} <br />
            <i :title="course.courseUserEmail">{{ course.courseUserEmail }}</i>
          </p>
        </div>
        <div class="profile-items">
          <li @click="getCourse('Cryptocurrency')">
            <span><i class="fa-solid fa-bitcoin-sign"></i></span>
            <p>cryptocurrency</p>
          </li>
          <li @click="getCourse('Forex')">
            <span><i class="fa-solid fa-chart-line"></i></span>
            <p>Forex</p>
          </li>
          <li @click="getCourse('Graphic Design')">
            <span>
              <i class="fa-brands fa-sketch"></i>
            </span>
            <p>Graphic design</p>
          </li>
          <li @click="getCourse('Web Development')">
            <span><i class="fa-solid fa-code"></i></span>
            <p>Web developement</p>
          </li>
        </div>
      </div>
    </transition>

    <div class="course-intro">
      <h1>courses</h1>
      <p>
        Welcome <span>{{ course.courseUser.split(" ")[0] }}!</span>
      </p>
      <p>Before you strive to earn, learn. Knowledge is never wasted!</p>
      <section>
        <h2>There is a reason:</h2>
        <div class="words">
          <ul>
            <li>you love <span>music</span></li>
            <li>you love <span>technology</span></li>
            <li>you love <span>the blockchain</span></li>
            <li>you love <span>graphics</span></li>
          </ul>
        </div>
      </section>
    </div>
    <span class="to-landing-page reach"
      ><a href="/#contact" class="a"
        ><i class="fa-solid fa-person-circle-question"></i></a
    ></span>
  </main>
</template>

<script>
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  name: "CourseHome",

  setup() {
    const router = useRouter();

    let course = reactive({
      courseUser: "",
      courseUserEmail: "",
      profileMenu: false,
      hideProfile: true,
    });

    let response = reactive({
      courses: [],
      title: "",
      free: true,
    });

    onMounted(() => {
      axios("api/token")
        .then((res) => {
          course.courseUser = res.data.username;
          course.courseUserEmail = res.data.email;
        })
        .catch((err) => {
          router.push("/login");
        });
    });

    function getCourse(courseId) {
      router.push(`/course/${courseId}`);
    }

    const showProfileMenu = () => {
      course.profileMenu = true;
      course.hideProfile = false;
    };

    const hideProfileMenu = () => {
      course.profileMenu = false;
      course.hideProfile = true;
    };

    return {
      course,
      response,
      showProfileMenu,
      hideProfileMenu,
      getCourse,
    };
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
$col: #3d566f;

html {
  scroll-behavior: smooth;
}

.fade-enter-from {
  transform: scale(0.2);
}
.fade-enter-active {
  transition: all 2s ease;
}
.fade-enter-to {
  transform: scale(1);
}

@keyframes display {
  from {
    opacity: 0;
    transform: scale(2);
    border-radius: 100%;
  }
  to {
    border-radius: 0;
  }
}

main {
  width: 100vw;
  margin: 0;
  min-height: 100vh;
  background: url(../assets/book.jpeg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .blur {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.6;
    background-color: rgb(0, 0, 0);
  }

  header {
    width: 98%;
    height: fit-content;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    .profile {
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      position: relative;
      cursor: pointer;
      font: 600 17px "Nunito Sans", "Poppins", sans-serif;
      color: whitesmoke;
      padding: 10px;

      span {
        width: 40px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;

        i {
          font-size: 25px;
          color: white;
        }
      }
    }

    @media screen and (max-width: 1055px) {
      width: 100%;

      nav li {
        width: fit-content;
      }
    }

    @media screen and (max-width: 900px) {
      width: 95%;
      margin: auto;
      padding: 0;
      .routes {
        display: none;
      }

      .profile {
        width: 30%;
      }
    }

    @media screen and (max-width: 570px) {
      width: 100%;
      justify-content: space-between;

      .logo {
        margin: 0;

        span {
          font-size: 15px;
        }
      }

      .profile {
        font-size: 13px;
      }
    }
  }

  .profile-menu {
    width: 25vw;
    height: 100vh;
    position: fixed;
    top: 10vh;
    right: 0;
    z-index: 1;
    background: white;
    box-shadow: 0 3px 2px 1px rgb(220, 219, 219);
    animation: slide-in 0.3s 1 linear forwards;

    .profile-menu-button {
      width: 35px;
      height: 35px;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin: 0;
      background: rgba(230, 101, 129, 1);
      color: white;
      position: absolute;
      right: 1%;
      top: 1%;
      z-index: 1;
      font-size: 27px;
    }
    .logo {
      width: 100%;
      height: fit-content;
      border-radius: 0 0 10px 10px;
      padding: 0;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 70px;
        height: 70px;
        margin: 0;
      }
    }

    .profile-header {
      width: 100%;
      height: 14vh;
      display: flex;
      justify-content: center;
      align-items: center;
      background: whitesmoke;

      span {
        width: 40px;
        height: 40px;
        display: flex;
        border-radius: 100%;
        justify-content: center;
        align-items: center;
        background: #3d566f;
        cursor: pointer;

        i {
          font-size: 21px;
          color: white;
        }
      }
      p {
        width: 60%;
        padding-left: 10px;
        font: 600 15px "Poppins", sans-serif;
        color: $fallback;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 30px;
        color: $col;

        i {
          font-size: 12px;
        }
      }
    }

    .profile-items {
      width: 100%;
      height: fit-content;
      padding-top: 20px;

      li {
        list-style-type: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        height: 55px;
        cursor: pointer;
        padding: 0;
        border-bottom: 1px solid rgb(227, 227, 227);

        span {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: auto;
          background: #213c63;

          i {
            font-size: 15px;
            color: white;
          }
        }

        p {
          width: 75%;
          text-transform: capitalize;
          text-align: left;
        }

        button {
          background: transparent;
          width: 100%;
          height: 50px;
          margin: auto;
          border: none;
          display: flex;
          justify-content: space-between;
          align-items: center;

          i {
            font-size: 25px;
            color: #3d566f;
          }

          span {
            width: 70%;
            justify-content: flex-start;
            border-radius: 0;
            font: 500 17px "Poppins", sans-serif;
            text-align: left;
            color: #3d566f;
            text-transform: capitalize;
          }
        }

        &:hover {
          transform: scale(0.9) translateX(10px);
        }
      }
    }

    @media screen and (max-width: 770px) {
      position: relative;
      left: 0;
      width: 100%;
      height: fit-content;
      padding: 15px;
    }
  }

  @keyframes slide-in {
    from {
      right: -400px;
    }
    to {
      right: 0;
    }
  }

  .course-intro {
    width: 90%;
    margin: 20px auto;
    height: fit-content;
    padding: 10px;
    padding-top: 50px;
    background: transparent;
    position: relative;

    h1 {
      font: 800 65px "Nunito Sans", sans-serif;
      text-transform: uppercase;
      padding: 20px;
      color: rgb(239, 236, 236);
      position: relative;

      @media screen and (max-width: 560px) {
        font-size: 45px;
      }
    }

    p {
      padding: 10px;
      color: rgb(165, 165, 165);

      span {
        color: $tertiaryColor;
        font: 800 23px "Nunito Sans", sans-serif;
        background: linear-gradient(
          to bottom,
          $primaryColor 20%,
          $tertiaryColor
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    section {
      width: 100%;
      height: auto;
      display: block;
      height: 20vh;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      margin-top: 30px;

      h2 {
        border: 1px solid white;
        width: 300px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: white;
        font-family: "Grand Hotel", cursive;
        font-size: 30px;
        color: $col;
        font-weight: 300;
        color: $fallback;
        border-radius: 10px 0 10px 0;

        @media screen and (max-width: 768px) {
          font-size: 15px;
        }
      }
      .words {
        width: 300px;
        height: 40px;
        border-bottom: 1px solid white;
        position: relative;
        overflow: hidden;

        ul {
          width: 100%;
          height: 40px;
          position: relative;
          top: 0;
          animation: change 10s steps(4) infinite;

          li {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            list-style-type: none;
            text-transform: capitalize;
            text-align: left;
            padding: 0 10px;
            font-family: "Nunito sans", sans-serif;

            span {
              color: $SecondaryColor;
              padding: 0 4px;
            }
          }
        }
      }
    }

    h3 {
      text-transform: capitalize;
      color: rgb(209, 208, 208);
      font: 600 23px "Poppins", sans-serif;
      padding: 20px;
      margin-top: 70px;
      position: relative;
    }

    .course-choice {
      width: 90%;
      margin: 20px auto;
      height: fit-content;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      position: relative;

      button {
        width: 230px;
        height: 100px;
        margin-bottom: 23px;
        margin-right: 13px;
        color: $col;
        border: none;
        border-radius: 10px 0 10px 0;
        font: 700 20px "Nunito Sans", sans-serif;
        text-transform: capitalize;
        background: rgb(230, 251, 240);

        &:hover {
          background: whitesmoke;
        }
      }
    }
  }

  .course-samples {
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    position: relative;

    ul {
      width: 100%;
      height: fit-content;
      list-style: none;
      li {
        width: 80%;
        height: 100px;
        background: white;
        padding: 10px;
        margin: 20px auto;
        cursor: Pointer;
        border-radius: 5px;
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .index {
          height: 100%;
          width: 15%;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: teal;
          color: white;
          font-weight: 700;
        }

        a {
          width: 80%;
          height: 100%;
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-direction: column;

          h3 {
            font: 600 19px "Poppins", sans-serif;
            text-transform: capitalize;
          }

          button {
            width: 150px;
            height: 30px;
            border: none;
            border-radius: 3px;
            background: $col;
            color: white;
          }
        }
        &:hover {
          transform: scale(1.1);
          background: whitesmoke;
        }
        &:active {
          transform: scale(0.8);
        }
      }
    }
  }
}

main.squeeze {
  width: 75vw;
  header {
    justify-content: center;
  }

  @media screen and (max-width: 770px) {
    width: 100vw;

    header {
      justify-content: flex-start;

      @keyframes slice-in {
        to {
          top: 30px;
          right: 30px;
        }
      }
    }

    .profile-menu .logo {
      display: none;
    }
  }
}
</style>
