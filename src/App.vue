<template>
  <transition name="routes">
    <router-view />
  </transition>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jacques+Francois&family=Jacques+Francois+Shadow&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");

$primaryColor: rgb(255, 255, 255);
$SecondaryColor: rgba(230, 101, 129, 1);
$tertiaryColor: rgba(65, 140, 228, 1);
$footerColor: rgb(51, 2, 69);
$primeColor: rgb(218, 121, 121);
$baseColor: #072e54;
$fallback: rgb(19, 37, 62);
#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  transition: all 0.3s ease;
}

html {
  scroll-behavior: smooth;
}

.routes-enter-from {
  transform: scale(2);
}
.routes-enter-active {
  transition: all 1s ease;
}
.routes-enter-to {
  transform: scale(1);
}
.routes-leave-from {
  transform: scale(1);
}
.routes-leave-active {
  transition: all 0.5s ease;
}
.routes-leave-to {
  transform: scale(2);
}

button,
a,
label {
  cursor: pointer;

  &:hover {
    transform: scale(0.9);
  }
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.primary-btn {
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
    color: #fff;
    text-transform: capitalize;
    font: 700 20px "Poppins", sans-serif;
    text-decoration: none;
  }
}

.blur {
  width: 100%;
  height: 100%;
  background: #1f1c2d;
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
}

.landing-page {
  width: 100vw;
  height: 100vh;
  background: url(./assets/social.jpg);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;

  .title {
    width: 100%;
    height: 83vh;
    position: relative;
    padding: 20px;
    top: 20px;

    h1 {
      text-transform: capitalize;
      font: 800 50px "Poppins", sans-serif;
      color: white;
      padding: 10px;
      padding-top: 75px;
    }

    p {
      font: 500 13px "Poppins", sans-serif;
      color: white;
    }

    button {
      width: 200px;
      height: 50px;
      margin: 30px auto;
      margin-bottom: 5px;

      .homeBtn {
        animation: blink 1.7s infinite alternate forwards;
      }
      &:hover {
        background: transparent;
        border: 1px solid white;
      }
      @keyframes blink {
        from {
          left: 0;
          opacity: 1;
        }
        to {
          left: 60vw;
          opacity: 0.3;
        }
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
      color: #fff;

      h2 {
        border: 1px solid #fff;
        width: 300px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        color: #13253e;
        border-radius: 10px 0 10px 0;
      }
      .words {
        width: 300px;
        height: 40px;
        border-bottom: 1px solid #fff;
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
              font-weight: 600;
              padding: 0 5px;
              text-transform: capitalize;
            }
          }
        }
      }

      @keyframes change {
        from {
          top: 0;
        }
        to {
          top: -160px;
        }
      }

      @media screen and (max-width: 500px) {
        h2,
        .words ul li {
          font-size: 14px;
        }
      }
    }
  }

  @keyframes run {
    from {
      left: 0;
      opacity: 1;
    }
    to {
      left: 60vw;
      opacity: 0;
    }
  }

  #blur {
    width: 100%;
    height: 100%;
    background: #13253e;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.85;
  }
}

#main {
  width: 100%;
  margin: 0;
  background: transparent;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;

  .courses-div {
    width: 100%;
    height: fit-content;
    padding: 20px;
    margin-top: 30px;
    padding-top: 50px;
    background: transparent;
    h1 {
      font: 800 35px "Poppins", sans-serif;
      padding-top: 30px;
      text-transform: capitalize;
      word-spacing: 13px;
      letter-spacing: 1px;
      width: 95%;
      margin: 10px auto;
      margin-top: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: linear-gradient(
        to bottom,
        $SecondaryColor 20%,
        $tertiaryColor
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    h2 {
      text-transform: capitalize;
      padding: 30px 20px;
      font: 500 20px "Poppins", sans-serif;
      color: white;
    }

    .courses {
      width: 90%;
      margin: auto;
      padding: 20px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;

      .tutorial {
        width: 500px;
        margin-right: 40px;
        margin-bottom: 50px;
        border-radius: 20px;
        box-shadow: 0 0 2px 1px #3d566f;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        .video {
          width: 100%;
          height: 190px;
          overflow: hidden;
          background: white;

          img {
            height: 100%;
            width: auto;
          }
          .fullwidth {
            width: 100%;
            height: auto;
          }
        }

        .video-title {
          width: 100%;
          min-height: 200px;
          padding: 15px;
          padding-top: 35px;
          position: relative;
          background: #072e54;

          .free-course {
            width: 60px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 5px;
            right: 0;
            color: #fff;
            background: #e66581;
            border-radius: 10px 0 0 10px;
          }

          h3 {
            padding: 10px;
            font: 600 20px "Poppins", sans-serif;
            text-align: left;
            text-transform: capitalize;
            color: #fff;

            span {
              color: #418ce4;
              font-size: 20px;
              text-transform: uppercase;
              display: block;
              padding: 3px;
            }
          }

          p {
            color: #bcbcbc;
          }

          button {
            width: 80%;
            height: 45px;
            margin: 10px auto;
            background: #e66581;
            color: #fff;
            border: none;
            border-radius: 5px;
            text-transform: capitalize;
          }
        }
      }
      @media screen and (max-width: 1285px) {
        justify-content: center;

        @media screen and (max-width: 768px) {
          width: 100%;
          padding: 10px;
          .tutorial {
            width: 98%;
          }
        }
      }
    }
  }

  .single-tutorial {
    width: 100%;
    margin: 5px auto;

    height: fit-content;
    padding: 20px 0;
    background: #fff;

    .return {
      color: #418ce4;
      text-decoration: none;
      padding: 10px;
      font: 600 20px "Poppins", sans-serif;
    }

    .logo {
      width: auto;

      height: fit-content;
      margin: auto;

      img {
        width: 100px;
        height: 100px;
        border-radius: 100%;
      }
    }

    h1 {
      padding: 20px;
      margin: 30px auto;
      font: 800 50px "Nunito Sans", "Poppins", sans-serif;
      text-transform: uppercase;
    }

    h4 {
      font: 600 19px "Poppins", sans-serif;
      padding: 10px;
      color: #3d566f;

      a {
        display: block;
        color: #e66581;
      }
    }

    ul {
      width: 100%;
      padding: 20px;
      background: #072e54;

      h3 {
        text-transform: capitalize;
        font: 600 30px "Poppins", sans-serif;
        text-align: left;
        padding: 10px;
        color: #fff;
      }

      li {
        list-style-type: none;
        height: 50px;
        margin-bottom: 10px;

        a {
          width: 100%;
          height: 100%;
          text-decoration: none;
          text-align: left;
          color: #fff;
          display: flex;
          justify-content: flex-start;
          align-items: center;

          span {
            width: 40px;
            height: 40px;
            margin-right: 15px;
            border-radius: 100%;
            background: #418ce4;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    h2 {
      font: 600 25px "Nunito sans", sans-serif;
      text-transform: capitalize;
      text-align: left;
      padding: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;

      span {
        width: 70px;
        height: 70px;
        margin-right: 15px;
        border-radius: 100%;
        background: #e66581;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    p {
      font: 400 16px "Poppins", sans-serif;
      text-align: left;
      padding: 10px;
      padding-left: 30px;
      line-height: 30px;
    }

    .video {
      width: 100%;
      height: fit-content;
      margin: 60px auto;
      margin-bottom: 20px;

      iframe {
        width: 90%;
        height: 80vh;
        margin: auto;
        border-radius: 2px;
      }
    }

    .question {
      width: 90%;
      margin: auto;
      height: fit-content;
      padding: 10px;

      label {
        padding: 10px;
        text-align: left;
        display: block;
        width: 100%;
        text-transform: capitalize;
        font: 600 23px "Poppins", sans-serif;
      }

      input {
        width: 50%;
        height: 50px;
        outline: none;
        border: none;
        background: #e7e5e5;
        border-radius: 5px;
        padding: 3px 20px;
        display: block;
        margin-bottom: 10px;
      }

      textarea {
        width: 100%;
        height: 300px;
        border: none;
        outline: none;
        font-weight: 500;
        color: #072e54;
        box-shadow: 0 0 2px 1px #eee;
        padding: 20px;
        background: #eaeaea;
      }

      button {
        display: block;
        width: 50%;
        height: 60px;
        border: none;
        background: #e66581;
        color: #fff;
        border-radius: 5px;
        margin-top: 15px;
        text-transform: capitalize;
        font: 600 20px "Nunito sans", sans-serif;
      }
    }
  }
}
</style>
