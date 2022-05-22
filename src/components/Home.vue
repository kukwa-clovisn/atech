<template>
  <main>
    <div class="landing-page" id="home">
      <div class="blur"></div>
      <Header />
      <div class="title">
        <h1>
          Advanced <br />
          Tech acadmey
        </h1>
        <p>
          this is a crypto trading website where you get to learn all about
          crypto currency and also how to trade with crypto and forex
        </p>
        <button class="landing-page-btn">
          <router-link to="/login" class="homeBtn">sign up</router-link>
        </button>

        <section>
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
      </div>
    </div>
    <div class="courses-div">
      <div class="blur"></div>
      <h1>Explore our top courses</h1>
      <p>
        Find out the best and outstanding courses in the area of your choice
        with the best and experienced instructors online. Also get online
        mentorship for your course of choice
      </p>
      <section class="courses">
        <div class="course">
          <div class="course-img">
            <img src="../assets/ch1.png" alt="" />
          </div>
          <h3>one month <span class="open">open</span></h3>
          <h5>Learn about crypto &amp; Forex</h5>
          <p>
            Start from a newbie into becomimg a profitable crypto trader in less
            than no time. <br />
            Register now to start your lessons
          </p>
          <button>
            <router-link to="/login" class="route">Start course</router-link>
          </button>
        </div>
        <div class="course">
          <div class="course-img">
            <img src="../assets/web-dev.jpg" alt="" />
          </div>
          <h3>three months <span>open</span></h3>
          <h5>Learn web development</h5>
          <p>
            Have you ever thought of learning web development and it seems hard?
            here we have everything made easy for you. <br />
            register now to start your lessons
          </p>
          <button>
            <router-link to="/login" class="route">Start course</router-link>
          </button>
        </div>
        <div class="course">
          <div class="course-img">
            <img src="../assets/graphic-design.jpg" alt="" />
          </div>
          <h3>one month <span>open</span></h3>
          <h5>learn graphic design</h5>
          <p>
            Learn phone and computer design and how to use design apps in less
            than a month. <br />
            register now to start your lessons
          </p>
          <button>
            <router-link to="/login" class="route">Start course</router-link>
          </button>
        </div>
      </section>
    </div>
    <div class="mission">
      <h1>our mission</h1>
      <p>
        The mission of Advanced Tech Academy is here to help you out with your
        studies online and provide the best learning experience that you need
        <br />Happy learning...
      </p>
      <div class="img">
        <img src="../assets/logo-white.jpg" alt="" />
      </div>
    </div>
    <div class="course-expo">
      <div class="img">
        <img src="../assets/team.jpg" alt="" />
      </div>
      <div class="expo">
        <div class="expo-level">
          <h3>beginners</h3>
          <div class="content">
            <p>
              Basics and fundamentals of the Blockchain and the essentials
              therein.
            </p>
            <button>
              <router-link to="/login"
                ><i class="fa-solid fa-arrow-right"></i
              ></router-link>
            </button>
          </div>
        </div>
        <div class="expo-level">
          <h3>intermediates</h3>
          <div class="content">
            <p>Trading strategies and market structures</p>
            <button>
              <router-link to="/login"
                ><i class="fa-solid fa-arrow-right"></i
              ></router-link>
            </button>
          </div>
        </div>
        <div class="expo-level">
          <h3>Advanced</h3>
          <div class="content">
            <p>
              Risk management and ways to become a profitable trader and more.
            </p>
            <button>
              <router-link to="/login"
                ><i class="fa-solid fa-arrow-right"></i
              ></router-link>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="social-sample">
      <div class="blur"></div>
      <div class="left-content">
        <h2>investing in yourself</h2>
        <h4>Great men are men who are never scared of learning...</h4>
        <p>
          If you've come this far then you really are curious to learn. Why not
          join the moving train now and start learning!!
        </p>
        <div class="btns">
          <button>
            <router-link to="/login" class="route">start now!</router-link>
          </button>
        </div>
      </div>
      <div class="right-content">
        <div class="img">
          <img src="../assets/group.jpeg" alt="" />
        </div>
      </div>
    </div>
    <div class="section-2">
      <h2>Real investment is investing in knowledge(learning)</h2>
      <p>
        Why not try out our courses prepared to see you through your learning!
      </p>
      <button>
        <router-link to="/login" class="route">start learning</router-link>
      </button>
    </div>
    <div class="bitquery">
      <div class="content">
        <div class="left-div">
          <h1>
            <sup>*</sup> Learning from the best
            <sup>*</sup>
          </h1>
          <p>
            Learning can really be awesome expecially when you learn from an
            experienced and well structured source. We provide valid and timely
            lessons that you need in order to change your world.
          </p>
          <h2>experience</h2>
          <p>
            In the world and field of technology nothing really counts as much
            as experience. Having adequate experience in the field is what we
            offer. We teach with experience and we offer you the experience you
            need to take of in the field you desire.
          </p>
          <h2>practise</h2>
          <p>
            Learning practically so far has been proven the best method of
            learning. Not only do we offer you the course but we offer you the
            reality of what you are in for. The highest achievement in learning
            is being able to apply and use what you've learnt in your daily life
            and that's our goal and target.
          </p>
          <h2>application</h2>
          <p>
            It is needless to learn a skill that won't be of help to you or that
            won't be solving a problem in your life. We offer applicable ways to
            use our courses in solving your problems or in polishing your skill
            or in advancing in your field. We don't only teach you what should
            know, we show you what to do and make sure you do it.
          </p>
        </div>
        <div class="right-div">
          <img src="../assets/Group-1-1.png" alt="" />
        </div>
      </div>
    </div>
    <div class="contact-form" id="contact">
      <div class="bubble"></div>
      <div class="blur"></div>
      <h1>get in touch!</h1>
      <h6>
        We deal and handle many businesses that will interest you. Check out our
        list of services we offer...
      </h6>
      <div class="contact-header">
        <nav>
          <i class="fa-brands fa-whatsapp icon"></i>
          <p>+237682449347</p>
        </nav>
        <nav>
          <i class="fa-solid fa-phone icon"></i>
          <p>+237682449347</p>
        </nav>
        <nav class="nav">
          <i class="fa-solid fa-envelope icon"></i>
          <p>kukwaclovisngong3@gmail.com</p>
        </nav>
      </div>
      <form>
        <h2>contact us!</h2>
        <div class="top-form">
          <div class="credentials">
            <div class="input">
              <label for="name">Name:</label>
              <div class="input-field">
                <i class="fa-regular fa-user"></i
                ><input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter name..."
                  required=""
                />
              </div>
            </div>
            <div class="input">
              <label for="email">email:</label>
              <div class="input-field">
                <i class="fa-solid fa-envelope icon"></i
                ><input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Email.."
                  required=""
                />
              </div>
            </div>
            <div class="input">
              <label for="subject">subject:</label>
              <div class="input-field">
                <i class="fa-solid fa-file-word"></i
                ><input
                  type="text"
                  name="number"
                  id="phone"
                  placeholder="Enter whatsapp contact..."
                  required=""
                />
              </div>
            </div>
          </div>
          <div class="message">
            <label for="message">message:</label
            ><textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Your message here!"
              required=""
            ></textarea>
          </div>
        </div>
        <div class="bottom-form">
          <h3>services</h3>
          <div class="form-services">
            <div class="service">
              <span>web developement</span>
            </div>
            <div class="service">
              <span>graphic design</span>
            </div>
            <div class="service">
              <span>crypto &amp; forex</span>
            </div>
          </div>
        </div>
        <div class="btns">
          <button type="reset">
            <i class="fa-solid fa-ban"></i><span>cancel</span></button
          ><button type="submit">
            <i class="fa-regular fa-paper-plane"></i>
            <span>send message</span>
          </button>
        </div>
      </form>
    </div>
    <span class="to-landing-page"
      ><a href="#home" class="a"><i class="fa-solid fa-circle-arrow-up"></i></a
    ></span>
    <Footer />
  </main>
</template>

<script>
import Header from "./header.vue";
import Footer from "./footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
* {
  transition: all 0.3s ease;
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

  .courses-div {
    width: 100vw;
    height: fit-content;
    padding: 0;
    padding-top: 30px;
    padding-bottom: 20px;
    position: relative;

    .blur {
      width: 100%;
      height: 100%;
      background: #1f1c2d;
      opacity: 0.3;
      position: absolute;
      top: 0;
      left: 0;
    }

    h1 {
      padding: 10px;
      text-transform: capitalize;
      font: 800 35px "Poppins", sans-serif;
      position: relative;
      color: #113b74;
    }
    p {
      width: 80vw;
      padding: 10px;
      padding-bottom: 40px;
      position: relative;
      margin: auto;
      color: #113b74;
    }

    .courses {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      width: 97vw;
      padding: 10px;
      margin: auto;
      position: relative;

      .course {
        width: 335px;
        height: 450px;
        padding-bottom: 10px;
        background: #fff;
        margin: 20px 20px;
        border-radius: 3px;

        .course-img {
          width: 100%;
          height: 180px;
          overflow: hidden;
          margin-bottom: 5px;

          img {
            width: 100%;
            cursor: pointer;
          }
        }

        h3 {
          width: 95%;
          margin: auto;
          padding: 10px;
          color: #e66581;
          text-transform: capitalize;
          text-align: left;
          position: relative;

          span {
            width: 100px;
            height: 40px;
            border-radius: 0 10px 0 10px;
            color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            right: 0;
            top: 0;
            padding: 2px;
            background: #e66581;
            font-size: 14px;
          }
        }

        h5 {
          width: 95%;
          font: 700 19px "Poppins", sans-serif;
          margin: auto;
          text-transform: capitalize;
          text-align: center;
        }

        p {
          padding: 5px;
          line-height: 25px;
          width: 100%;
          line-height: 26px;
          margin: auto;
          text-align: center;
          color: #3d566f;
          font: 500 14px "Poppins", sans-serif;
        }

        button {
          width: 85%;
          height: 50px;
          border-radius: 2px;
          margin: 20px auto;
          margin-bottom: 10px;
          border: none;
          background: #e66581;

          .route {
            color: #fff;
            text-decoration: none;
            text-transform: capitalize;
            font: 600 18px Poppins, sans-serif;
          }
        }

        @media screen and (max-width: 400px) {
          height: fit-content;
          width: 97vw;
        }
      }

      @media screen and (max-width: 400px) {
        width: 99vw;
      }
    }
  }

  .mission {
    width: 100vw;
    height: fit-content;
    padding: 25px 15px;
    background: #13253e;

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
      height: 300px;
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
  }

  .course-expo {
    width: 100vw;
    height: 100vh;
    background: #13253e;
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
          background: #e66581;
          position: absolute;
          top: -5px;
          left: 10px;
        }

        h3 {
          text-align: left;
          font: 600 15px "Nunito sans", sans-serif;
          text-transform: uppercase;
          padding: 5px;
          color: #e66581;
        }

        .content {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          p {
            text-align: left;
            font: 700 23px "Poppins", sans-serif;
            width: 80%;
            color: #d4d3d3;
          }
          button {
            width: 70px;
            height: 50px;
            transform: rotate(30deg);
            background: #e66581;
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
        color: #e66581;
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
          background: #e66581;

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
      box-shadow: 0 0 1px 2px #e66581;

      a {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: all 0.3s ease;
        cursor: pointer;
        text-decoration: none;
        color: #e66581;
        text-transform: uppercase;
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
    background: #13253e;

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
            color: #e66581;
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
          color: #e66581;
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

  .contact-form {
    width: 100vw;
    height: fit-content;
    padding: 30px 5px 20px 5px;
    position: relative;
    margin-bottom: 0;
    background: linear-gradient(to bottom right, #390764, #b93e82, #e66581);

    .bubble {
      width: 200px;
      height: 200px;
      border-radius: 100%;
      background: #fff;
      position: absolute;
      top: 10%;
      opacity: 0.2;
      left: 5%;
    }

    .blur {
      position: absolute;
      height: 50%;
      top: 50%;
      bottom: 0 !important;
      left: 0;
      overflow: hidden;
      opacity: 1;
      border-radius: 70% 0 0 0;
      background: linear-gradient(90deg, #2d548a, #13253e);
    }

    h1 {
      padding: 20px;
      padding-bottom: 10px;
      text-transform: capitalize;
      color: #fff;
    }

    h6 {
      color: #c2c2c2;
      padding: 10px;
      font: 400 13px "Poppins", sans-serif;
    }

    .contact-header {
      width: 850px;
      margin: 10px auto;
      margin-bottom: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      nav {
        width: 270px;
        height: 70px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        padding: 0;
        transition: all 0.3s ease;

        i {
          color: white;
        }
        p {
          padding: 0;
          color: #dbd9d9;
        }
      }

      @media screen and (max-width: 868px) {
        width: 100%;
        flex-wrap: wrap;
        justify-content: center;
        nav {
          width: 140px;
          margin: 0;
          padding: 0;
          i,
          p {
            font-size: 12px;
          }
        }

        .nav {
          width: 47%;
          width: 200px;
        }
      }
    }

    form {
      width: 900px;
      height: fit-content;
      background: #fff;
      position: relative;
      margin: 10px auto;
      padding: 20px;
      border-radius: 5px;

      h2 {
        padding: 10px;
        text-transform: capitalize;
        width: 100%;
        text-align: center;
        color: #16367b;
      }

      .top-form {
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .credentials {
          width: 48%;
          height: 300px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;

          .input {
            width: 100%;
            height: 85px;

            label {
              text-align: left;
              text-transform: capitalize;
              display: block;
              color: #16367b;
              font: 700 18px "Poppins", sans-serif;
              width: 100%;
              padding: 2px 0 4px 0;
            }

            .input-field {
              display: flex;
              justify-content: center;
              align-items: center;
              border-radius: 3px;
              background: #fffbfb;
              box-shadow: 0 0 0.3px 1px #faf0f0;

              i {
                width: 15%;
                height: 100%;
                color: rgba(25, 24, 81, 0.7);
              }

              input {
                width: 100%;
                height: 50px;
                display: block;
                border: none;
                background: inherit;
                color: rgba(22, 53, 123, 0.54);
                outline: none;
              }
            }
          }
        }

        .message {
          width: 48%;
          height: 300px;

          label {
            text-align: left;
            text-transform: capitalize;
            display: block;
            color: #16367b;
            font: 800 18px "Poppins", sans-serif;
            width: 100%;
            padding: 2px 0 4px 0;
          }

          textarea {
            display: block;
            width: 100%;
            height: 90%;
            padding: 10px 20px;
            border: none;
            background: #fffbfb;
            box-shadow: 0 0 0.5px 3px #fffbfb;
            border-radius: 3px;
            box-shadow: 0 0 0.3px 1px #faf0f0;
            outline: none;
          }
        }

        @media screen and (max-width: 600px) {
          flex-direction: column;
          .credentials,
          .message {
            width: 100%;

            input {
              height: 95px;
            }
          }
        }
      }

      .bottom-form {
        width: 95%;
        margin: auto;

        h3 {
          text-align: left;
          text-transform: capitalize;
          color: #16367b;
          font: 800 19px "Poppins", sans-serif;
          padding: 10px;
          padding-left: 0;
        }
        .form-services {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          .service {
            width: 31%;
            height: 60px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            background: #f1f5f5;
            cursor: pointer;

            span {
              text-transform: capitalize;
              color: #16367b;
              font: 500 16px Poppins, sans-serif;

              @media screen and (max-width: 600px) {
                font-size: 10px;

                @media screen and (max-width: 300px) {
                  font-size: 8px;
                }
              }
            }
          }
        }
      }
      .btns {
        width: 95%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        button {
          width: 47%;
          height: 60px;
          background: #da7979;
          border-radius: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;

          i {
            color: #fff;
            margin-right: 10px;
            font-size: 20px;
          }
          span {
            color: #fff;
            font: 500 18px "Poppins", sans-serif;
            text-transform: capitalize;
          }
        }
        @media screen and (max-width: 600px) {
          flex-direction: column;
          button {
            width: 100%;
            margin-bottom: 10px;
          }
        }
      }

      @media screen and (max-width: 905px) {
        width: 99vw;
      }
    }
  }

  .to-landing-page {
    width: 40px;
    height: 40px;
    border-radius: 3px;
    background: #13253e;
    position: fixed;
    right: 30px;
    bottom: 50px;
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
}
</style>
