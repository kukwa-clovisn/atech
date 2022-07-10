<template>
  <div class="carousel-div">
    <div class="content">
      <h1>Hire us for your Designs</h1>
      <p>
        Here are some of our design samples
        <i class="fa-solid fa-hand-point-right"></i>
        <a href="/samples">View more Design samples</a>
      </p>
      <p>
        We do best to satisfy our clients. We do Get to us for your professional
        designs
      </p>
      <ul>
        <li>flyer design</li>
        <li>book cover</li>
        <li>poster design</li>
        <li>businesses card design</li>
        <li>badges</li>
        <li>and many more.</li>
      </ul>
      <button>
        <a href="https://wa.link/geye6o" class="route"
          >chat us on <i class="fa-brands fa-whatsapp"></i>whatsapp for your
          designs</a
        >
      </button>
    </div>

    <div class="img">
      <transition name="image">
        <img
          src="../assets/design.jpeg"
          v-if="image1"
          class="carousel-image"
          alt=""
        />
      </transition>
      <transition name="image">
        <img
          src="../assets/design.jpeg"
          v-if="image1"
          class="carousel-image"
          alt=""
        />
      </transition>
      <!-- <img :src="image_src" alt="Atech" v-if="image" /> -->

      <transition name="image">
        <img
          src="../assets/design-3.jpeg"
          v-if="image2"
          class="carousel-image"
          alt=""
        />
      </transition>
      <div class="blur"></div>
    </div>
    <div class="img small-screen">
      <transition name="image">
        <img
          src="../assets/design-1.jpeg"
          v-if="image1"
          class="small-screen-image"
          alt=""
        />
      </transition>
      <transition name="image">
        <img
          src="../assets/design-2.jpeg"
          v-if="image2"
          class="small-screen-image"
          alt=""
        />
      </transition>

      <div class="blur"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "carousel",

  setup() {
    let image_src = ref("");
    // starting the images from image zero
    let i = 0;
    // letting the images into an array
    let images = [];

    let image1 = ref(true);
    let image2 = ref(false);

    // pushing the images into the image array
    images[0] = "/img/design.fd6dd75d.jpeg";
    // images[1] = "http://localhost:9003/img/design-1.0530f8c9.jpeg";
    // images[2] = "http://localhost:9003/img/design-2.d39b2fde.jpeg";

    setInterval(() => {
      image_src.value = images[i];

      // creationg a condition for looping throung the images
      // if (i < images.length - 1) {
      //   image.value = false;
      //   i++;
      //   setTimeout(() => {
      //     image.value = true;
      //   }, 1000);
      // } else {
      //   i = 0; //we want to make sure that the images actually starts from the first image which is images[0]
      // }
      image1.value = !image1.value;
      image2.value = !image2.value;
      // setTimeout(() => {
      //   image2.value = !image2.value;
      // }, 6000);
    }, 7000);

    return { image_src, image1, image2 };
  },
};
</script>

<style lang="scss" scoped>
$baseColor: #13253e;
$primaryColor: #e66581;
.image-enter-from {
  transform: scale(1.5);
  opacity: 0.4;
}
.image-enter-active {
  opacity: 0.5;
  transition: all 3s ease-in;
}
.image-enter-to {
  opacity: 1;
}

.image-leave-from {
  transform: translateX(0);
}
.image-leave-active {
  transition: all 2s ease;
}
.image-leave-to {
  transform: translateX(80vw);
  opacity: 0;
}

.carousel-div {
  width: 100vw;
  height: fit-content;
  margin: 0;
  padding: 30px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  overflow: hidden;
  position: relative;
  background: $baseColor;

  .content {
    width: 35%;
    height: fit-content;
    border-radius: 7px;
    z-index: 1;

    h1,
    p,
    li {
      color: white;
    }
    h1 {
      padding: 20px 10px;
      text-transform: capitalize;
    }

    p {
      padding: 10px;
      font: 500 15px "Poppins", sans-serif;
      text-align: left;
      width: 95%;
      margin: auto;

      i {
        color: $primaryColor;
        font-size: 30px;
      }

      a {
        text-decoration: none;
        display: block;
        padding: 5px 20px;
        width: fit-content;
        font: 600 17px "Poppins", sans-serif;
        color: color;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        color: white;
        border-radius: 5px;
        background: $primaryColor;
        margin: 10px auto;

        &:active {
          transform: scale(0.8);
        }
      }
    }

    ul {
      width: 70%;
      margin: auto;
      padding: 10px;

      li {
        list-style-type: square;
        text-transform: capitalize;
        text-align: left;
        font: 550 19px "Poppins", sans-serif;
        margin-bottom: 10px;
      }
    }
    button {
      width: 80%;
      height: fit-content;
      border-radius: 8px;
      margin: 20px auto;
      padding: 20px 10px;
      border: none;

      background: white;

      a {
        text-transform: capitalize;
        text-decoration: none;
        width: 100%;
        color: $primaryColor;
        height: 100%;
        font-weight: 700;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        i {
          margin: 0 5px;
          font-size: 22px;
        }
      }
    }
  }
  .img {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0.5;
    position: relative;
    overflow: hidden;

    .blur {
      display: none;
      height: 100%;
      width: 100%;
      // opacity: 0.7;
    }
    .carousel-image {
      width: 100%;
      height: auto;
      border-radius: 5px;
      position: absolute;
      top: 5%;
      left: 0;
    }
  }
  .img.small-screen {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    min-height: 90vh;

    .img,
    .content {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;

      h1,
      p,
      li {
        color: white;
      }

      .blur {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .content {
      top: 10%;
      background: transparent;
    }
    .img {
      img {
        height: 100%;
        width: auto;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .img {
      display: none;
    }
    .img.small-screen {
      display: block;
    }
  }
  @media screen and (max-height: 750px) {
    height: 100vh;

    .content {
      top: 5%;
    }

    @media screen and (max-height: 650px) {
      height: 110vh;
      @media screen and (max-height: 577px) {
        height: 123vh;
        .content {
          top: 2%;
        }
      }
    }
  }
}
</style>
