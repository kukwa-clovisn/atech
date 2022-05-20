<template>
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Jacques+Francois&family=Noto+Sans:wght@100;300;400;600;700;900&family=Nunito+Sans:ital,wght@0,300;0,600;0,700;0,900;1,300;1,400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200&family=Russo+One&display=swap");

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
          -webkit-animation: change 10s steps(4) infinite;
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
            font-family: Nunito sans, sans-serif;
          }
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
</style>
