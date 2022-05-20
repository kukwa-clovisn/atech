<template>
  <main>
    <Header />
    <div class="c1">
      <img src="../assets/bitcoin.png" alt="BTC" />
    </div>
    <div class="content">
      <h2>Atech</h2>
      <div class="form">
        <form>
          <h1>sign in</h1>
          <div class="input">
            <label for="username">Name:</label
            ><input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username...."
              required=""
            />
          </div>
          <div class="input">
            <label for="password">password:</label
            ><input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password...."
              required=""
            />
          </div>
          <button type="submit">sign in</button>
          <div class="forget-password">
            <span
              ><a href="/forget_password" class="route"
                >forgot password?</a
              ></span
            ><span><a href="/" class="route">home</a></span>
          </div>
        </form>
        <div class="login">
          <div class="welcome">
            <h1>welcome again</h1>
            <h3>advanced Tech academy</h3>
            <p>invest in knowledge, invest in your future</p>
            <button>
              <a
                aria-current="page"
                href="/login"
                class="router-link-active router-link-exact-active route"
                >sign up</a
              ></button
            ><a href="/" class="hroute">home</a>
          </div>
        </div>
      </div>
      <div class="form form-signup">
        <div class="login signup">
          <div class="welcome">
            <h1>welcome again</h1>
            <h3>advanced tech academy</h3>
            <p>discipline is a price for every success</p>
            <button>
              <a
                aria-current="page"
                href="/login"
                class="router-link-active router-link-exact-active route"
                >sign in</a
              ></button
            ><a href="/" class="hroute">home</a>
          </div>
        </div>
        <form>
          <h1>sign up</h1>
          <div class="input">
            <label for="username">Name:</label
            ><input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username...."
              required=""
            />
          </div>
          <div class="input">
            <label for="email">email:</label
            ><input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email address...."
              required=""
            />
          </div>
          <div class="input">
            <label for="password">password:</label
            ><input
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password...."
              required=""
            />
          </div>
          <button type="submit">sign up</button>
        </form>
      </div>
      <!---->
      <div class="response-div"><!----><!----></div>
    </div>
    <footer>&copy;copyright_CodingHerald_2022</footer>
  </main>
</template>

<script>
import Header from "./header.vue";
export default {
  name: "Sign_in",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;
  background: #e7e7e7;
  background: #13253e;

  .landing-page-btn {
    width: 150px;
    height: 40px;
    border: none;
    background: white;
    border-radius: 3px;
    display: block;

    .homeBtn {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(9, 69, 149);
      text-transform: capitalize;
      font: 700 20px "Poppins", sans-serif;
      text-decoration: none;
    }
  }

  .c1 {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: transparent;
    position: fixed;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotateZ(-90deg);
    opacity: 0.6;
    top: 15vh;
    left: 0vw;
    animation: turn 10s linear infinite alternate-reverse forwards;

    img {
      display: block;
      width: 100%;
    }
  }

  @keyframes turn {
    to {
      transform: rotateZ(360deg) translateY(150px);
    }
  }

  .content {
    width: 100vw;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 0;
    padding-top: 30px;
    padding-bottom: 30px;
    position: relative;

    h2 {
      color: #a4a5a5;
      font: 500 27px "Poppins", sans-serif;
      padding: 10px;
      text-align: left;
      width: 730px;
      position: relative;
    }

    .form {
      width: 730px;
      height: 420px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      overflow: hidden;
      position: relative;
      background: #fff;

      .login {
        width: 47%;
        height: 100%;
        display: flex;
        justify-content: center;
        border-radius: 0 0 60% 0;
        align-items: center;
        background: linear-gradient(to bottom right, #264f81, #13253e 80%);

        .welcome {
          width: 90%;
          height: fit-content;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          flex-direction: column;
          padding: 5px;

          h1 {
            text-transform: capitalize;
            font: 700 34px "Poppins", sans-serif;
            color: #fff;
          }

          h3 {
            font: 600 12px Poppins, sans-serif;
            text-transform: capitalize;
            padding: 5px;
            background: linear-gradient(180deg, #e66581, #fff);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          p {
            color: #d5d3d3;
            font: 400 9px "Poppins", sans-serif;
          }

          button {
            width: 170px;
            height: 50px;
            border: none;
            box-shadow: 0 0 1px 0.5px #fff;
            border-radius: 5px;
            margin-top: 20px;
            background: transparent;

            .route {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              text-decoration: none;
              color: #fff;
              font: 600 20px "Poppins", sans-serif;
            }

            &:hover {
              background: transparent;
              transform: scale(0.9);
            }
          }
          .hroute {
            text-decoration: underline;
            background: linear-gradient(180deg, #e66581, #fff);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 10px;
            font: 600 11px Poppins, sans-serif;
            opacity: 0.8;
            text-transform: uppercase;
            transition: all 0.3s ease;

            &:hover {
              text-decoration: underline;
              transform: scale(1.2);
            }
          }
        }
      }

      form {
        width: 53%;
        height: 100%;
        padding: 10px;
        background: #fff;

        h1 {
          padding: 10px;
          padding-bottom: 0;
          font: 700 40px Poppins, sans-serif;
          color: #e66581;
        }

        .input {
          width: 90%;
          height: 80px;
          margin: 10px auto;

          label {
            width: 100%;
            display: block;
            text-align: left;
            text-transform: capitalize;
            font: 550 22px "Poppins", sans-serif;
            color: #717070;
          }

          input {
            display: block;
            width: 98%;
            height: 50px;
            padding: 3px 10px 3px 20px;
            font: 500 17px "Poppins", sans-serif;
            outline: none;
            border: 1px solid #dedbdb;
            background: #fff;
            border-radius: 5px;
          }
        }

        .errormsg {
          width: 90%;
          margin: auto;

          p {
            color: red;
            padding: 5px;
          }
        }

        button {
          width: 89%;
          height: 50px;
          background: #e66581;
          color: #fff;
          font: 700 23px "Poppins", sans-serif;
          border: none;
          border-radius: 5px;
          margin: 10px auto;
        }

        .forget-password {
          width: 90%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 5px;
          span {
            cursor: pointer;
            .route {
              text-decoration: none;
              text-transform: capitalize;
              font: 500 16px "Poppins", sans-serif;
              color: #717070;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    .form-signup {
      height: 450px;
      width: 750px;
    }
  }

  footer {
    width: 100vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(216, 216, 216);
  }
}
</style>
