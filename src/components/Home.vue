<template>
  <main>
    <div class="landing-page" id="home">
      <div class="blur" id="blur"></div>
      <Header />
      <div class="animation">
        <div class="animate1"></div>
        <div class="animate2"></div>
      </div>
      <div class="animation1">
        <div class="animate3"></div>
        <div class="animate4"></div>
      </div>
      <div class="title">
        <transition name="move-in">
          <h1 v-if="animate">Advanced Tech acadmey</h1>
        </transition>

        <transition name="appear">
          <p v-if="animate">
            Welcome to your world of creativity and learning. Add more skills to
            your skills!
          </p>
        </transition>
        <transition name="appear">
          <div class="intro-btn" v-if="animate">
            <router-link to="/login" class="start-btn">start now!</router-link>
            <a href="https://codingherald.netlify.app" class="start-btn"
              >view portfolio</a
            >
          </div>
        </transition>
        <transition name="refresh">
          <section v-if="animate">
            <h2>There is a reason</h2>
            <div class="words">
              <ul>
                <li>you love <span>music</span></li>
                <li>you love <span>graphics</span></li>
                <li>you love <span>the blockchain</span></li>
                <li>you love <span>technology</span></li>
              </ul>
            </div>
          </section>
        </transition>
      </div>
    </div>
    <navbar />

    <div class="learn-more">
      <div class="info">
        <h1 data-aos="slide-up">Learn advanced professional skills online.</h1>
        <div class="image" data-aos="slide-up">
          <img src="../assets/mtn-computer.png" alt="" />
        </div>
        <p data-aos="slide-up">
          Our academy has multiple courses to start your skill edifying journey.
          <br />Choose any of the courses and start adding value to your
          portfolio right away.
        </p>
        <button data-aos="slide-up">
          <router-link to="/login" class="btn-route">start now!</router-link>
        </button>
      </div>
    </div>
    <div class="courses-div" data-aos="slide-up">
      <h1 data-aos="slide-up">Advanced Tech Academy courses</h1>
      <p data-aos="slide-up">
        Find out the best and outstanding courses in the area of your choice
        with the best and experienced instructors online. Also get online
        mentorship for your course of choice
      </p>
      <transition name="slide-in">
        <div id="container">
          <div class="card-container" data-aos="slide-left">
            <div class="card-header">
              <div class="img" data-aos="slide-up">
                <img src="../assets/html-logo-removebg-preview.png" alt="" />
              </div>
              <div class="card-media" data-aos="fade-up">
                <a href="https://www.facebook.com/237atech/" class="route">
                  <i class="fa-brands fa-facebook"></i></a
                ><a href="https://wa.link/geye6o" class="route"
                  ><i class="fa-brands fa-whatsapp"></i></a
                ><a href="https://twitter.com/KukwaNgong" class="route"
                  ><i class="fa-brands fa-twitter"></i></a
                ><a
                  href="https://www.linkedin.com/in/codingherald/"
                  class="route"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="card-body">
              <h2 class="card-title" data-aos="slide-up">
                Learning web development
              </h2>
              <p class="card-description" data-aos="fade-up">
                this is an online web developmenet course for free to master and
                get to learn new skills to add to your portfolio
              </p>
              <div class="card-buttons" data-aos="slide-up">
                <router-link to="/login" class="btn">learn more</router-link>
                <router-link to="/register" class="btn">Enroll Now</router-link>
              </div>
            </div>
          </div>
          <div class="card-container" data-aos="slide-up">
            <div class="card-header">
              <div class="img" data-aos="fade-up">
                <img src="../assets/pexels-pixabay-33597.jpg" alt="" />
              </div>
              <div class="card-media" data-aos="slide-up">
                <a href="https://www.facebook.com/237atech/" class="route">
                  <i class="fa-brands fa-facebook"></i
                ></a>
                <a href="https://wa.link/geye6o" class="route"
                  ><i class="fa-brands fa-whatsapp"></i></a
                ><a href="https://twitter.com/KukwaNgong" class="route"
                  ><i class="fa-brands fa-twitter"></i></a
                ><a
                  href="https://www.linkedin.com/in/codingherald/"
                  class="route"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="card-body">
              <h2 class="card-title" data-aos="fade">Team Jesus Music</h2>
              <p class="card-description" data-aos="slide-up">
                Learn how to play instruments professionally. Learn more below
              </p>
              <div class="card-buttons" data-aos="slide-up">
                <router-link to="/login" class="btn">learn more</router-link>
                <router-link to="/register" class="btn">Enroll Now</router-link>
              </div>
            </div>
          </div>
          <div class="card-container" data-aos="slide-right">
            <div class="card-header">
              <div class="img" data-aos="fade">
                <img src="../assets/team.jpg" alt="" />
              </div>
              <div class="card-media" data-aos="slide-up">
                <a href="https://www.facebook.com/237atech/" class="route">
                  <i class="fa-brands fa-facebook"></i></a
                ><a href="https://wa.link/geye6o" class="route"
                  ><i class="fa-brands fa-whatsapp"></i></a
                ><a href="https://twitter.com/KukwaNgong" class="route"
                  ><i class="fa-brands fa-twitter"></i></a
                ><a
                  href="https://www.linkedin.com/in/codingherald/"
                  class="route"
                  ><i class="fa-brands fa-linkedin"></i
                ></a>
              </div>
            </div>
            <div class="card-body">
              <h2 class="card-title" data-aos="fade-up">
                FOREX TRADING COMMUNITY
              </h2>
              <p class="card-description" data-aos="slide-up">
                Learn how to trade Forex professionally and profitably
              </p>
              <div class="card-buttons" data-aos="slide-up">
                <router-link to="/login" class="btn">learn more</router-link>
                <router-link to="/register" class="btn">Enroll Now</router-link>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div class="mission" data-aos="slide-right">
      <h1 data-aos="fade-up">our mission</h1>
      <p data-aos="slide-up">
        The mission of Advanced Tech Academy is here to help you out with your
        studies online and provide the best learning experience that you need
        <br />Happy learning...
      </p>
      <div class="img" data-aos="slide-up">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
      <h1 data-aos="slide-up">our programs</h1>
      <div class="programs">
        <div class="program" data-aos="slide-up">
          <i data-aos="fade" class="fa-solid fa-chart-line"></i>
          <p data-aos="slide-up">crypto & forex</p>
        </div>
        <div class="program" data-aos="slide-up">
          <i data-aos="fade" class="fa-solid fa-code"></i>
          <p data-aos="slide-up">web development</p>
        </div>
        <div class="program" data-aos="fade">
          <i data-aos="fade" class="fa-solid fa-music"></i>
          <p data-aos="slide-up">Music</p>
        </div>
      </div>
      <button data-aos="slide-up"><a href="/register">take a course</a></button>
    </div>
    <div class="benefit">
      <h1 data-aos="slide-up">Benefits of our programs and mentorships</h1>
      <div class="container" data-aos="slide-left">
        <div class="content">
          <div class="img" data-aos="slide-up">
            <img src="../assets/Person-Laptop_blue.png" alt="" />
          </div>
          <h2 data-aos="slide-up">Learn at your own convinience</h2>
          <p data-aos="slide-up">
            Learning at the comfort of your home and at your pace with no
            pressure. Learning at your convinience while gaining experience and
            building up your portfolio
          </p>
        </div>
        <div class="content" data-aos="slide-up">
          <div class="img" data-aos="fade">
            <img src="../assets/Responsive_blue.png" alt="" />
          </div>
          <h2 data-aos="slide-up">Learn with the device of your choice</h2>
          <p data-aos="slide-up">
            Learning from all media devices. You can learn while shoping or
            while taking a walk anywhere with any media device from a phone to a
            computer.
          </p>
        </div>
        <div class="content" data-aos="slide-up">
          <div class="img" data-aos="fade">
            <img src="../assets/Profile_blue-1.png" alt="" />
          </div>
          <h2 data-aos="slide-up">Build your portfolio</h2>
          <p data-aos="slide-up">
            Build your portfolio that showcases your new abilities and
            capabilities. Get certified
          </p>
        </div>
        <div class="content" data-aos="slide-up">
          <div class="img" data-aos="fade">
            <img src="../assets/star_blue.png" alt="" />
          </div>
          <h2 data-aos="slide-up">Be the best.</h2>
          <p data-aos="slide-up">
            Learn a skill and stand out. Be the best in what your do.
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="design" data-aos="fade">
      <Carousel :images="carousel_images" />
    </div> -->
    <div class="course-expo">
      <div class="img" data-aos="slide-right">
        <img data-aos="slide-right" src="../assets/team.jpg" alt="" />
      </div>
      <div class="expo" data-aos="slide-left">
        <div class="expo-level">
          <h3 data-aos="slide-up">beginners</h3>
          <div class="content">
            <p data-aos="slide-up">
              Basics and fundamentals of the Blockchain and the essentials
              therein.
            </p>
            <button data-aos="slide-up">
              <router-link to="/login"
                ><i class="fa-solid fa-arrow-right"></i
              ></router-link>
            </button>
          </div>
        </div>
        <div class="expo-level">
          <h3 data-aos="slide-up">intermediates</h3>
          <div class="content">
            <p data-aos="slide-up">Trading strategies and market structures</p>
            <button data-aos="slide-up">
              <router-link to="/login"
                ><i class="fa-solid fa-arrow-right"></i
              ></router-link>
            </button>
          </div>
        </div>
        <div class="expo-level">
          <h3 data-aos="slide-up">Advanced</h3>
          <div class="content">
            <p data-aos="slide-up">
              Risk management and ways to become a profitable trader and more.
            </p>
            <button data-aos="slide-up">
              <router-link to="/login"
                ><i class="fa-solid fa-arrow-right"></i
              ></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="social-sample" data-aos="slide-left">
      <div class="blur"></div>
      <div class="left-content" data-aos="slide-up">
        <h2 data-aos="slide-up">investing in yourself</h2>
        <h4 data-aos="slide-up">
          Great men are men who are never scared of learning...
        </h4>
        <p data-aos="slide-up">
          If you've come this far then you really are curious to learn. Why not
          join the moving train now and start learning!!
        </p>
        <div class="btns" data-aos="slide-up">
          <button>
            <router-link to="/login" class="route">start now!</router-link>
          </button>
        </div>
      </div>
      <div class="right-content" data-aos="fade">
        <div class="img">
          <img data-aos="fade" src="../assets/group.jpeg" alt="" />
        </div>
      </div>
    </div>
    <div class="section-2" data-aos="slide-up">
      <h2 data-aos="slide-up">
        Real investment is investing in knowledge(learning)
      </h2>
      <p data-aos="slide-up">
        Why not try out our courses prepared to see you through your learning!
      </p>
      <button data-aos="slide-up">
        <router-link to="/login" class="route">start learning</router-link>
      </button>
    </div>
    <div class="piano-expo large-screen">
      <div class="left-expo" data-aos="slide-right"></div>
      <div class="right-expo" data-aos="slide-up">
        <div class="blur"></div>
        <h1 data-aos="slide-up">
          Learn from the basics of how to play the piano to an outstanding
          professional
        </h1>
        <p data-aos="slide-up">
          Get to know more about <br />piona scales, piano chords, piano
          structure and many more
        </p>
        <p data-aos="slide-up">
          Gender or age or size or anything, can't stop you from doing what
          makes you happy and fulfilled.
        </p>
        <p data-aos="slide-up">seize this opportunity and learn</p>
        <button data-aos="slide-up"><a href="/login">start learning</a></button>
      </div>
      <div class="bottom-expo" data-aos="slide-left">
        <div class="blur"></div>
        <p data-aos="slide-up">
          Start your lessons today and migrat from a beginner to an outstanding
          instrumentalist in your church or community.
        </p>
        <button data-aos="slide-up"><a href="/login">start a course</a></button>
      </div>
    </div>
    <div class="piano-expo small-screen">
      <transition name="appear">
        <div class="right-expo" v-if="expo1">
          <div class="blur"></div>
          <h1 data-aos="slide-up">
            Learn from the basics of how to play the piano to an outstanding
            professional
          </h1>
          <p data-aos="slide-up">
            Get to know more about <br />piona scales, piano chords, piano
            structure and many more
          </p>
          <p data-aos="slide-up">
            Gender or age or size or anything, can't stop you from doing what
            makes you happy and fulfilled.
          </p>
          <p data-aos="slide-up">seize this opportunity and learn</p>
          <button data-aos="slide-up">
            <a href="/login">start learning</a>
          </button>
        </div>
      </transition>
      <transition name="appear">
        <div class="bottom-expo" v-if="expo2">
          <div class="blur"></div>
          <p data-aos="slide-up">
            Start your lessons today and migrat from a beginner to an
            outstanding instrumentalist in your church or community.
          </p>
          <button data-aos="slide-up">
            <a href="/login">start a course</a>
          </button>
        </div>
      </transition>
    </div>
    <div class="bitquery">
      <div class="content">
        <div class="left-div" data-aos="fade">
          <h1 data-aos="fade">
            <sup data-aos="slide-down">*</sup> Learning from the best
            <sup data-aos="slide-up">*</sup>
          </h1>
          <p data-aos="slide-right">
            Learning can really be awesome expecially when you learn from an
            experienced and well structured source. We provide valid and timely
            lessons that you need in order to change your world.
          </p>
          <h2 data-aos="slide-up">experience</h2>
          <p data-aos="slide-right">
            In the world and field of technology nothing really counts as much
            as experience. Having adequate experience in the field is what we
            offer. We teach with experience and we offer you the experience you
            need to take of in the field you desire.
          </p>
          <h2 data-aos="slide-up">practise</h2>
          <p data-aos="slide-right">
            Learning practically so far has been proven the best method of
            learning. Not only do we offer you the course but we offer you the
            reality of what you are in for. The highest achievement in learning
            is being able to apply and use what you've learnt in your daily life
            and that's our goal and target.
          </p>
          <h2 data-aos="slide-up">application</h2>
          <p data-aos="slide-right">
            It is needless to learn a skill that won't be of help to you or that
            won't be solving a problem in your life. We offer applicable ways to
            use our courses in solving your problems or in polishing your skill
            or in advancing in your field. We don't only teach you what should
            know, we show you what to do and make sure you do it.
          </p>
        </div>
        <div class="right-div">
          <img data-aos="slide-left" src="../assets/Group-1-1.png" alt="" />
        </div>
      </div>
    </div>
    <contactForm />
    <transition name="pop">
      <div class="response-div" v-if="response.success || response.failed">
        <div class="success" v-if="response.success">
          <i class="fa-solid fa-circle-check"></i>{{ response.msg }}
        </div>
        <div class="failed" v-if="response.failed">
          <i class="fa-solid fa-triangle-exclamation"></i>{{ response.msg }}
        </div>
      </div>
    </transition>

    <span class="to-landing-page beamerTrigger"
      ><a href="" class="a"><i class="fa-solid fa-bell"></i></a
    ></span>
    <chatbox />

    <popchat />
    <div class="advertisement" data-aos="slide-up">
      Learning never ends!
      <div class="toTop"><a href="#home">Back to the top</a></div>
    </div>
    <Footer />
  </main>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import Header from "./header.vue";
import Footer from "./footer.vue";
import Carousel from "./carousel.vue";
import chatbox from "./chatbox.vue";
import popchat from "./popchat.vue";
import navbar from "./navbar.vue";
import contactForm from "./contactForm";
import image1 from "../assets/graphic-design.jpg";
import image2 from "../assets/group.jpeg";
import image3 from "../assets/learn-b.jpg";
import image4 from "../assets/jugos.jpeg";

import "../utils/style.css";

    let animate = ref(false);
    let expo1 = ref(false);
    let expo2 = ref(true);

    let response = reactive({
      success: false,
      failed: false,
      msg: "",
    });

    const reqData = {
      question: "cheapest web hosting service providers for nuxt.js websites",
    };
    onMounted(() => {
      setTimeout(() => {
        animate.value = true;
      }, 500);

      setInterval(() => {
        expo1.value = !expo1.value;
        expo2.value = !expo2.value;
      }, 15000);
    });

    const carousel_images = [image1, image2, image3, image4];

    // function onSignIn(googleUser) {
    //   console.log("this is for sign in");
    //   let profile = googleUser.getBasicProfile();
    //   console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    //   console.log("Name: " + profile.getName());
    //   console.log("Image URL: " + profile.getImageUrl());
    //   console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
    // }

    // function signOut() {
    //   var auth2 = gapi.auth2.getAuthInstance();
    //   auth2.signOut().then(function () {
    //     console.log("User signed out.");
    //   });
    // }

</script>

<style lang="scss" scoped>
$baseColor: #1d375f;
$primaryColor: #e66581;

.pop-enter-from {
  opacity: 0;
}
.pop-enter-active {
  opacity: 1;
  animation: pop 2s linear alternate forwards;
}
.pop-enter-to {
  opacity: 1;
}
.pop-leave-from {
  opacity: 1;
  transform: scale(0.7);
}
.pop-leave-active {
  opacity: 1;
  transition: 1s ease;
}
.pop-leave-to {
  opacity: 0;
  transform: translateX(150px);
}

* {
  transition: all 1s ease;
}
.landing-page-btn {
  width: 150px;
  height: 45px;
  border: none;
  background: #23426e;
  border-radius: 3px;
  display: block;

  .homeBtn {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: capitalize;
    font: 700 20px "Poppins", sans-serif;
    text-decoration: none;
  }
}
main {
  width: 100%;
  height: auto;
  padding: 0;
  margin: 0;

  .learn-more {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 10px;

    .info {
      width: 100%;
      height: 100%;
      display: block;
      padding: 20px 0;
      .image {
        width: auto;
        height: 200px;
        overflow: hidden;
        border-radius: 3px;
        img {
          height: 100%;
          width: auto;
          margin: auto;
        }
      }
      h1 {
        width: 99%;
        margin: auto;
        padding: 20px;
        font: 700 45px "Montserrat", "Poppins", sans-serif;
        text-align: center;
        color: #0d4c76;
        text-transform: capitalize;

        @media screen and (max-width: 508px) {
          font-size: 22px;
        }
      }
      p {
        text-align: center;
        padding: 10px;
        font-size: 20px;
        font-family: "Poppins", sans-serif;
        line-height: 30px;
        color: rgb(120, 119, 119);
      }

      button {
        width: 200px;
        height: 45px;
        display: block;
        border-radius: 7px;
        background: #183c6b;
        margin: 20px auto;
        border: none;
        .btn-route {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          text-transform: capitalize;
          padding: 5px 10px;
          color: white;
        }
        &:hover {
          background: linear-gradient(
            to bottom left,
            rgb(28, 160, 222),
            #0c1725
          );
        }
      }
    }
  }

  .courses-div {
    width: 100vw;
    height: fit-content;
    padding: 0;
    padding-top: 30px;
    padding-bottom: 20px;
    position: relative;
    background: linear-gradient(to bottom, white, #ececec);

    h1 {
      padding: 10px;
      text-transform: capitalize;
      font: 800 35px "Poppins", sans-serif;
      position: relative;
      color: #113b74;

      @media screen and (max-width: 500px) {
        font-size: 20px;
      }
    }
    p {
      width: 80vw;
      padding: 10px;
      padding-bottom: 40px;
      position: relative;
      margin: 10px auto;
      color: #113b74;
    }
  }

  .mission {
    width: 100vw;
    height: fit-content;
    padding: 25px 15px;
    background: $baseColor;

    h1 {
      padding: 10px;
      font: 800 30px "Poppins", sans-serif;
      text-transform: capitalize;
      color: white;
    }

    p {
      width: 95%;
      margin: auto;
      padding: 10px;
      font: 600 20px "Poppins", sans-serif;
      white-space: pre-wrap;
      color: rgb(200, 198, 198);
    }

    .img {
      width: 100%;
      height: 200px;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 70%;
        width: auto;
        border-radius: 100%;
      }
    }

    .programs {
      width: 95%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 20px;

      .program {
        width: 300px;
        padding: 10px;
        margin-right: 10px;
        i {
          color: white;
          font-size: 50px;
        }
        p {
          text-transform: capitalize;
        }
      }
    }
    button {
      width: 300px;
      height: 55px;
      border-radius: 5px;
      background: white;
      margin: 15px auto;
      border: none;

      a {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: $primaryColor;
        text-transform: capitalize;
        font: 600 22px "Poppins", sans-serif;
        text-decoration: none;
      }
    }
  }

  .benefit {
    width: 100%;
    height: fit-content;
    padding: 30px 0;
    background: transparent;

    h1 {
      padding: 10px;
      font: 600 30px "Montserrat", "Nunito Sans", sans-serif;
    }

    .container {
      width: 90%;
      height: fit-content;
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      flex-wrap: wrap;
      margin: 10px auto;

      .content {
        width: 330px;
        height: fit-content;
        margin: 10px;

        .img {
          width: 100%;
          height: 90px;

          img {
            height: 90px;
            width: auto;
            margin: 2px auto;
            cursor: pointer;
          }
        }
        h2 {
          font: 650 23px "Nunito Sans", sans-serif;
        }
        p {
          padding: 10px;
          font-family: "Nunito Sans", sans-serif;
        }
      }
    }
  }

  .course-expo {
    width: 100vw;
    height: 100vh;
    background: $baseColor;
    display: flex;
    justify-content: center;
    align-items: center;

    .img {
      width: 45%;
      border-radius: 10px 0 10px 0;
      transform: rotate(10deg);
      box-shadow: 3px 3px 2px 1px #ababab;

      img {
        width: 90%;
        height: auto;
        border-radius: 20px 0 20px 0;
      }
    }

    .expo {
      width: 50%;
      height: fit-content;
      padding: 10px;

      .expo-level {
        margin-bottom: 20px;
        margin-left: 10px;
        padding-left: 10px;
        position: relative;

        &::before {
          content: "";
          width: 50px;
          height: 3px;
          border-radius: 0 30px 30px 0;
          background: $primaryColor;
          position: absolute;
          top: -5px;
          left: 10px;
        }

        h3 {
          text-align: left;
          font: 600 15px "Nunito sans", sans-serif;
          text-transform: uppercase;
          padding: 5px;
          color: $primaryColor;
        }

        .content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            text-align: left;
            font: 400 20px "Montserrat", "Poppins", sans-serif;
            width: 80%;
            color: #d4d3d3;
          }
          button {
            width: 70px;
            height: 50px;
            transform: rotate(30deg);
            background: $primaryColor;
            border: none;
            border-radius: 0 2px 2px 0;

            a {
              color: #fff;
              font-size: 20px;
            }
          }
        }
      }
    }

    @media screen and (max-width: 1000px) {
      height: fit-content;
      padding: 5px;
      .img {
        display: none;
      }
      .expo {
        width: 90%;

        @media screen and (max-width: 500px) {
          width: 98%;

          .expo-level {
            padding: 0;

            .content p {
              font-size: 18px;
            }
          }
        }
      }
    }
  }

  .social-sample {
    width: 85vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 10px auto;
    margin-top: 0;
    padding: 20px 5px;

    .blur {
      width: 100%;
      height: 100%;
      display: none;
      background: #1f1c2d;
      opacity: 0.7;
      position: absolute;
      top: 0;
      left: 0;
    }

    .left-content {
      position: relative;
      width: 45%;

      h2 {
        padding: 10px;
        padding-bottom: 3px;
        font: 800 40px poppins, sans-serif;
        text-transform: capitalize;
        color: $primaryColor;
      }

      h4 {
        font: 600 25px "Poppins", sans-serif;
        padding-bottom: 10px;
      }

      p {
        padding: 10px;
      }

      .btns {
        width: 100%;
        height: fit-content;
        padding: 10px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-wrap: wrap;

        button {
          width: 200px;
          height: 45px;
          border-radius: 3px;
          display: block;
          border: none;
          margin-top: 10px;
          background: $primaryColor;

          .route {
            text-decoration: none;
            text-transform: capitalize;
            color: #fff;
            font: 500 15px Poppins, sans-serif;
          }
        }
      }
    }

    .right-content {
      width: 50%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;

      .img {
        width: 400px;
        height: 400px;
        border-radius: 100%;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          width: 100%;
          display: block;
        }
      }
    }

    @media screen and (max-width: 900px) {
      width: 100vw;
      background: url(../assets/group.jpeg);
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;

      .blur {
        display: block;
      }

      .left-content {
        width: 98%;

        h4,
        p {
          color: white;
        }
      }

      .right-content {
        display: none;
      }
    }
  }
  .section-2 {
    text-align: center;
    color: #3d566f;
    font-family: "Poppins", sans-serif;
    box-sizing: border-box;
    transition: all 0.3s ease;
    width: 97vw;
    margin: 20px auto;
    height: fit-content;
    padding: 20px;
    position: relative;
    margin-bottom: 50px;

    h2 {
      text-align: center;
      color: #3d566f;
      margin: 0;
      box-sizing: border-box;
      transition: all 0.3s ease;
      padding: 15px;
      font: 700 30px "Poppins", sans-serif;
      text-transform: capitalize;

      @media screen and (max-width: 400px) {
        font-size: 20px;
      }
    }
    p {
      text-align: center;
      font-family: "Poppins", sans-serif;
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      transition: all 0.3s ease;
      color: #03377b;
      width: 100%;
    }

    button {
      padding: 0;
      box-sizing: border-box;
      transition: all 0.3s ease;
      cursor: pointer;
      width: 250px;
      height: 45px;
      border-radius: 3px;
      border: none;
      margin: 20px auto;
      background: transparent;
      box-shadow: 0 0 1px 2px $primaryColor;

      a {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: all 0.3s ease;
        cursor: pointer;
        text-decoration: none;
        color: $primaryColor;
        text-transform: uppercase;
      }
    }
  }

  .piano-expo {
    width: 100vw;
    height: 80vh;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;

    .left-expo,
    .right-expo,
    .bottom-expo {
      width: 32%;
      border-radius: 10px;
      height: 100%;
      background-repeat: no-repeat;
      background-size: contain;
      background-attachment: scroll;
    }

    .left-expo {
      position: relative;
      background: url(../assets/piano-female.jpeg);
    }
    .right-expo,
    .bottom-expo {
      background: url(../assets/piano.jpeg);
      position: relative;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      overflow: hidden;

      .blur {
        width: 100%;
        height: 100%;
      }

      h1,
      p,
      button {
        position: relative;
      }

      h1 {
        color: white;
        font: 700 21px "Poppins", sans-serif;
        padding: 10px;
        text-transform: capitalize;
      }
      p {
        color: white;
        padding: 5px;
        font-size: 13px;
      }
      button {
        width: 90%;
        height: 40px;
        border: none;
        border-radius: 30px;
        background: $primaryColor;

        margin: 20px auto;

        a {
          color: white;
          width: 100%;
          height: 100%;
          display: flex;
          text-decoration: none;
          justify-content: center;
          align-items: center;
          text-transform: capitalize;
        }
      }
    }
    .bottom-expo {
      background: url(../assets/piano.jpeg);
    }
  }
  .piano-expo.small-screen {
    display: none;
  }

  @media screen and (max-width: 780px) {
    .piano-expo.large-screen {
      display: none;
    }
    .piano-expo.small-screen {
      display: flex;
      position: relative;

      .right-expo,
      .bottom-expo {
        width: 98%;
        position: absolute;
        left: 0.5%;
        top: 0;
      }

      .right-expo {
        background: url(../assets/piano-female.jpeg);
      }
    }
  }

  .bitquery {
    text-align: center;
    color: #3d566f;
    font-family: Poppins, sans-serif;
    margin: 0;
    box-sizing: border-box;
    transition: all 0.3s ease;
    width: 100vw;
    height: fit-content;
    padding: 10px;
    background: $baseColor;

    .content {
      text-align: center;
      color: #3d566f;
      font-family: Poppins, sans-serif;
      box-sizing: border-box;
      transition: all 0.3s ease;
      width: 96vw;
      display: flex;
      justify-content: center;
      align-items: flex-start;
      margin: auto;
      height: fit-content;
      padding: 20px;

      .left-div {
        width: 58%;
        height: fit-content;
        padding: 20px;

        h1 {
          margin: 0;
          box-sizing: border-box;
          transition: all 0.3s ease;
          font: 900 40px "Nunito sans", "Poppins", sans-serif;
          padding: 10px;
          color: #fff;
          text-align: left;
          text-transform: capitalize;

          sup {
            color: $primaryColor;
          }
        }

        p {
          font: 400 15px "Poppins", sans-serif;
          padding: 10px;
          text-align: left;
          color: #f3f2f2;
          line-height: 25px;
        }

        h2 {
          padding: 10px;
          font: 700 26px "Nunito sans", sans-serif;
          text-transform: capitalize;
          text-align: left;
          color: $primaryColor;
        }
      }

      .right-div {
        width: 40%;
        height: 100%;
        overflow: hidden;
        padding-top: 120px;

        img {
          display: block;
          width: 100%;
          margin: auto;
          height: auto;
        }
      }

      @media screen and (max-width: 1000px) {
        width: 100vw;
        .left-div {
          width: 95%;
        }
        .right-div {
          display: none;
        }

        @media screen and (max-width: 500px) {
          padding: 7px;
          .left-div {
            width: 98%;

            h1 {
              font-size: 30px;
            }
          }
        }
      }
    }
  }

  .response-div {
    width: 100vw;
    height: fit-content;
    position: fixed;
    display: flex;
    justify-content: center;
    align-content: center;
    top: 19vh;
    left: 0;
    z-index: 1;
    div {
      width: fit-content;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
      border-radius: 5px;
      color: white;
      z-index: 1;
      background: rgb(40, 223, 122);
      font: 600 18px "Poppins", sans-serif;

      i {
        color: white;
        font-size: 25px;
        padding: 0 3px;
      }
    }
    div.failed {
      background: crimson;
      color: white;
    }
    @media screen and (max-width: 500px) {
      top: 60vh;
    }
  }
  .advertisement {
    width: 100vw;
    height: fit-content;
    background: #072e54;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    margin: 0;

    .toTop {
      width: fit-content;
      height: max-content;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        background: white;
        padding: 5px 20px;
        width: max-content;
        height: max-content;
        display: block;
        border-radius: 6px;
        text-decoration: none;
        color: rgb(15, 66, 79);

        &:hover {
          color: rgb(240, 129, 157);
        }
      }
    }
  }

  .to-landing-page {
    width: 55px;
    height: 55px;
    border-radius: 100%;
    background: $baseColor;
    position: fixed;
    left: 10px;
    bottom: 150px;
    z-index: 1;

    .a {
      text-decoration: none;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  }
  .reach {
    left: auto;
    right: 10px;
    border-radius: 100%;
    width: 55px;
    height: 55px;
    background: $primaryColor;
    bottom: 130px;

    a {
      i {
        font-size: 20px;
      }
    }
  }

  .beamerTrigger {
    left: 10px;
    background: rgb(10, 234, 104);
    bottom: 50px;
  }
}
</style>
