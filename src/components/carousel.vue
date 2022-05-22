<template>
  <div class="carousel-div">
    <div class="blur"></div>
    <div class="content">
      <h1>Hire us for your Designs</h1>
      <p>
        Here are some of our design samples
        <i class="fa-solid fa-hand-point-right"></i>
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
      <button><a href="#contact">Hire</a></button>
    </div>
    <div class="img">
      <transition name="image">
        <img
          :src="image_src"
          alt="crypto and forex"
          class="carousel-image"
          v-if="image"
        />
      </transition>
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

    let image = ref(true);

    // pushing the images into the image array
    images[0] = "/img/design.fd6dd75d.jpeg";
    // images[1] = "/img/design-1.0530f8c9.jpeg";
    // images[2] = "/img/design-2.d39b2fde.jpeg";
    images[1] = "/img/design-3.c2905318.jpeg";

    // giving a function called image_slide that will cause the image transition.

    //     const image_slide =

    setInterval(() => {
      // getImage.slide.src = images[i];
      image_src.value = images[i];

      // creationg a condition for looping throung the images
      if (i < images.length - 1) {
        image.value = false;
        setTimeout(() => {
          image.value = true;
          i++;
        }, 1000);
      } else {
        i = 0; //we want to make sure that the images actually starts from the first image which is images[0]
      }
    }, 4000);
    //     image_slide();

    return { image_src, image };
  },
};
</script>

<style lang="scss" scoped>
$baseColor: #13253e;
$primaryColor: #e66581;
.image-enter-from {
  transform: scale(1.3);
}
.image-enter-active {
  transition: all 3s ease;
}
.image-enter-to {
  transform: scale(1);
}

.image-leave-from {
  transform: translateX(0);
}
.image-leave-active {
  transition: all 3s ease;
}
.image-leave-to {
  transform: translateX(80vw);
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

  .blur {
    display: none;
    z-index: 1;
  }

  .content {
    width: 40%;
    height: fit-content;
    background: rgb(243, 242, 242);
    border-radius: 7px;
    z-index: 1;

    h1 {
      padding: 20px 10px;
      text-transform: capitalize;
    }

    p {
      padding: 10px;
      font: 500 17px "Poppins", sans-serif;

      i {
        color: $primaryColor;
        font-size: 30px;
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
      height: 70px;
      border-radius: 8px;
      margin: 20px auto;
      border: none;

      background: $primaryColor;

      a {
        text-transform: capitalize;
        text-decoration: none;
        width: 100%;
        color: white;
        height: 100%;
        font-weight: 700;
        font-size: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .img {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 0.5;

    .carousel-image {
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
  }

  @media screen and (max-width: 1000px) {
    min-height: 90vh;

    .blur {
      display: block;
      position: absolute;
      top: 0;
      left: 0;
    }
    .img,
    .content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;

      h1,
      p,
      li {
        color: white;
      }
    }

    .content {
      top: 10%;
      background: transparent;
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
