<template>
  <div class="samples">
    <Header />
    <div class="container">
      <div class="left-container">
        <h1>Atech</h1>
        <h2>Professional Graphic Design & Designers</h2>
        <p>
          Get a chance to learn Graphic Design from the best and professional
          Graphic designers ever. <br />
          Get the opportunity to have professional Designers work on your
          project
        </p>
        <h4>made of #Graphics</h4>
      </div>
      <div class="right-container">
        <button>
          <router-link to="/#contact" class="link">Hire us</router-link>
        </button>
      </div>
    </div>
    <h1>
      We're exceptional in what we do and offer.
      <hr />
      <br />Samples
    </h1>
    <div class="images">
      <div class="image flex-left">
        <img src="../assets/design-1.jpeg" alt="" />
        <div class="desc">
          <h1>e-learn design</h1>
          <a href="/#contact">hire us</a>
        </div>
      </div>
      <div class="image flex-right">
        <div class="desc">
          <h1>company advertisement design</h1>
          <a href="/#contact">hire us</a>
        </div>
        <img src="../assets/design-2.jpeg" alt="" />
      </div>
      <div class="image no-flex">
        <img src="../assets/design-3.jpeg" alt="" />
        <div class="desc">
          <h1>laptop sale design</h1>
          <a href="/#contact">hire us</a>
        </div>
      </div>
    </div>
    <span class="to-landing-page reach"
      ><a href="/#contact" class="a"
        ><i class="fa-solid fa-person-circle-question"></i></a
    ></span>
    <Footer />
  </div>
</template>

<script>
import Header from "./header.vue";
import Carousel from "./carousel.vue";
import Footer from "./footer.vue";
export default {
  name: "Design_samples",
  components: { Header, Carousel, Footer },
};
</script>

<style lang="scss" scoped>
$baseColor: #13253e;
$primaryColor: #e66581;
.samples {
  width: 100vw;
  height: fit-content;
  background: $baseColor;
  padding: 0;

  .container {
    width: 100%;
    height: 600px;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;

    .left-container {
      width: 40%;
      height: 100%;
      padding: 10px;
      color: white;
      padding-top: 30px;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;
      h1 {
        padding: 10px;
        text-align: left;
      }
      p,
      h2 {
        text-align: left;
      }

      h4 {
        color: rgb(13, 112, 188);
      }
    }
    .right-container {
      width: 55%;
      height: 100%;
      background: url(../assets/design.jpeg);
      background-repeat: no-repeat;
      background-size: contain;
      background-attachment: scroll;

      button {
        width: 200px;
        height: 50px;
        border: none;
        background: white;
        border-radius: 5px;
        margin: 40% auto;

        .link {
          text-decoration: none;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          font: 500 22px "Grand Hotel", sans-serif;
        }
      }
    }
    @media screen and (max-width: 800px) {
      flex-direction: column;
      height: fit-content;
      .left-container,
      .right-container {
        width: 100%;
      }
      .left-container {
        height: 400px;
        align-items: center;

        h1,
        h2,
        h4,
        p {
          text-align: center;
        }
      }
    }
  }

  h1 {
    color: white;
    font: 600 23px "Nunito Sans", "Poppins", sans-serif;
    padding: 10px;

    hr {
      width: 90%;
      border: none;
      margin: auto;
      height: 4px;
      border-radius: 30px;
      background: linear-gradient(
        to right,
        $baseColor 10%,
        rgb(198, 205, 212) 20%,
        $primaryColor 50%,
        $baseColor 90%
      );
    }
  }

  .images {
    width: 95%;
    margin: auto;
    height: fit-content;
    padding: 20px 3px;

    .image {
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 50px auto;
      overflow: hidden;

      .desc {
        width: 30%;
        margin: 20px;

        h1 {
          color: white;
          text-transform: capitalize;
        }

        a {
          text-decoration: none;
          width: 200px;
          height: 50px;
          display: flex;
          color: white;
          margin: 10px auto;
          border-radius: 8px;
          justify-content: center;
          align-items: center;
          text-transform: capitalize;
          background: $primaryColor;
          font: 600 20px "Poppins", sans-serif;
        }

        @media screen and (max-width: 1126px) {
          width: fit-content;
        }
      }
      img {
        width: auto;
        max-height: 60vh;
        border-radius: 10px;

        @media screen and (max-width: 900px) {
          width: 100%;
          height: auto;
        }
      }
    }

    .image.flex-left,
    .image.flex-right {
      width: 80%;
      img {
        max-height: 90vh;
        @media screen and (max-width: 450px) {
          max-height: 99vh;
        }
      }
    }
    .image.flex-left {
      justify-content: flex-start;
    }
    .image.flex-right {
      justify-content: flex-end;
    }
  }
}
</style>
