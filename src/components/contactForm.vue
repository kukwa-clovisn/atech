<template>
  <div class="contact-form" id="contact" data-aos="fade-up">
    <div class="bubble"></div>

    <h1 data-aos="slide-up">get in touch!</h1>
    <h6 data-aos="slide-up">
      We deal and handle many businesses that will interest you. Check out our
      list of services we offer...
    </h6>
    <div class="contact-header">
      <nav>
        <a href="https://wa.link/geye6o" class="icon"
          ><i class="fa-brands fa-whatsapp icon"></i>
          <p>click to contact us on whatsapp</p></a
        >
      </nav>
      <nav class="nav">
        <a
          href="mailto:kukwaclovisngong3@gmail.com?subject=From Atech"
          class="icon"
        >
          <i class="fa-solid fa-envelope icon"></i>
          <p>kukwaclovisngong3@gmail.com</p>
        </a>
      </nav>
    </div>
    <form @submit.prevent="sendMessage()">
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
                v-model="user.username"
                placeholder="Enter name..."
                required
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
                v-model="user.email"
                placeholder="Enter Email.."
                required
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
                v-model="user.number"
                placeholder="Enter whatsapp contact..."
                required
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
            v-model="user.message"
            placeholder="Your message here!"
            required
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
            <span>piano lessons</span>
          </div>
          <div class="service">
            <span> forex</span>
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
</template>

<script setup>
import axios from "axios";
import { reactive } from "vue";

let user = reactive({
  username: "",
  email: "",
  message: "",
  number: "",
});

let response = reactive({
  success: false,
  failed: false,
  msg: "",
});

function sendMessage() {
  axios
    .post("api/admin/contact", user, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      if (res.statusText === "OK") {
        response.success = true;
        response.msg = res.data.msg;

        user.username = "";
        user.email = "";
        user.number = "";
        user.message = "";

        setTimeout(() => {
          response.success = false;
        }, 3000);
      }
    })
    .catch((err) => {
      response.failed = true;
      response.msg = err.response.data.msg;

      setTimeout(() => {
        response.failed = false;
      }, 3000);
    });
}
</script>

<style lang="scss" scoped>
.contact-form {
  width: 100vw;
  height: fit-content;
  padding: 30px 5px;
  position: relative;
  margin-bottom: 0;
  background: white;

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

  h1 {
    padding: 20px;
    padding-bottom: 10px;
    text-transform: capitalize;
    color: #0d4357;
  }

  h6 {
    color: #105460;
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
      width: 350px;
      height: 70px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: column;
      padding: 0;
      transition: all 0.3s ease;

      a {
        width: 100%;
        height: 100%;
        text-decoration: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        padding: 10px;
        transition: all 0.3s ease;

        p {
          font-size: 16px;
        }
      }

      i {
        color: rgb(16, 72, 106);
      }
      p {
        padding: 0;
        font: 400 17px "Montserrat", "Nunito Sans", sans-serif;
        color: #0f4163;
      }

      &:hover {
        a {
          background: rgb(255, 255, 255);
          box-shadow: 0 0 20px 10px rgb(237, 233, 233);
          border-radius: 5px;
        }
      }
    }

    @media screen and (max-width: 868px) {
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
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
    box-shadow: 0 0 28px 9px rgb(229, 228, 228);

    h2 {
      padding: 10px;
      text-transform: capitalize;
      width: 100%;
      text-align: center;
      padding: 20px;
      color: #505560;
      font: 500 20px "Montserrat", "Poppins", sans-serif;
    }

    .top-form {
      width: 95%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .credentials {
        width: 48%;
        height: fit-content;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        .input {
          width: 100%;
          height: 90px;

          label {
            text-align: left;
            text-transform: capitalize;
            display: block;
            color: #535c61;
            font: 500 18px "Montserrat", "Poppins", sans-serif;
            width: 100%;
            padding: 2px 0 4px 0;
          }

          .input-field {
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            background: #ffffff;
            box-shadow: 0 0 17px 8px #e7e7e7;

            i {
              width: 15%;
              height: 100%;
              color: rgba(78, 90, 94, 0.7);
            }

            input {
              width: 100%;
              height: 50px;
              display: block;
              border: none;
              background: inherit;
              color: rgba(78, 88, 92, 0.54);
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
          color: #4e575c;
          font: 800 18px "Poppins", sans-serif;
          width: 100%;
          padding: 2px 0 4px 0;
        }

        #message {
          display: block;
          width: 100%;
          height: 90%;
          padding: 10px 20px;
          border: none;
          background: #ffffff;
          border-radius: 3px;
          box-shadow: 0 0 18px 9px #eaeaea;
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
      margin: 10px auto;

      h3 {
        text-align: left;
        text-transform: capitalize;
        color: #16537b;
        font: 500 19px "Montserrat", "Poppins", sans-serif;
        padding: 20px;
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
          border-radius: 5px;
          background: #ffffff;
          box-shadow: 0 0 19px 9px rgb(218, 218, 218);
          cursor: pointer;

          span {
            text-transform: capitalize;
            color: #505d63;
            font: 400 16px "Montserrat", "Poppins", sans-serif;

            @media screen and (max-width: 600px) {
              font-size: 10px;

              @media screen and (max-width: 300px) {
                font-size: 8px;
              }
            }
          }

          &:hover {
            transform: scale(0.9);
          }
        }
      }
    }
    .btns {
      width: 95%;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0;

      button {
        width: 45%;
        height: 60px;
        background: #e66581;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 5px 0 19px 9px rgb(218, 218, 218);
        border: none;

        i {
          color: #ffffff;
          margin-right: 10px;
          font-size: 20px;
        }
        span {
          color: #ffffff;
          font: 500 18px "Poppins", sans-serif;
          text-transform: capitalize;
        }

        &:last-child {
          background: linear-gradient(to bottom left, #072e54, #194e83);

          i,
          span {
            color: white;
          }
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
</style>