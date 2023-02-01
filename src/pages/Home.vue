<template>
  <main>
    <div class="landing-page">
      <div class="wrapper">
        <div class="left-wrapper">
          <h1>
            <span>BISCAM</span>
            <br />
            INVESTMENT <br />
            SARL
          </h1>
          <p>
            Biscam sarl is a multi-service company that deals with the sales of
            cars, spare parts of cars, maritime services, flight services,
            digital services and printing.
          </p>
          <div class="link-wrapper">
            <router-link to="/about-us">READ MORE</router-link>
          </div>
        </div>
        <div class="right-wrapper"></div>
      </div>
    </div>

    <div class="garage-section" data-aos="slide-up">
      <div class="wrapper">
        <h2 class="custom-header-2" data-aos="slide-up">Multi-Brand Garage</h2>
        <p class="desc" data-aos="fade">
          This sector of Biscam deals with car maintenance, car renewal and
          ensures a car proper functioning for safety. We deal with cars of
          different ranges like Toyota, Scarlet, Picks, Dinner Rav par etc.
        </p>

        <div class="flex-div">
          <div class="flex-div-content" data-aos="fade">
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img src="../assets/mtn-computer.png" data-aos="fade" alt="" />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <p data-aos="slide-up">MAINTENANCE</p>
            </div>
          </div>
          <div class="flex-div-content" data-aos="fade">
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img src="../assets/mtn-computer.png" data-aos="fade" alt="" />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <p data-aos="slide-up">PROGRAMMING</p>
            </div>
          </div>
          <div class="flex-div-content" data-aos="fade">
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img src="../assets/mtn-computer.png" data-aos="fade" alt="" />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <p data-aos="slide-up">CAR WASHING</p>
            </div>
          </div>
          <div class="flex-div-content" data-aos="fade">
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img src="../assets/mtn-computer.png" data-aos="fade" alt="" />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <p data-aos="slide-up">CAR WIRING</p>
            </div>
          </div>
          <div class="flex-div-content" data-aos="fade">
            <div class="flex-div-content-top">
              <div class="flex-div-content-top-img">
                <img src="../assets/mtn-computer.png" data-aos="fade" alt="" />
              </div>
            </div>
            <div class="flex-div-content-bottom">
              <p data-aos="slide-up">PANA BITING</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flight-section" data-aos="fade">
      <div class="blur-wrapper"></div>
      <h2 class="custom-header-2">BISCAM FLIGHT AGENCY</h2>
      <p>
        We are into sales of Personal and corporate flight tickets and other
        services such as Hotel reservation and Meet and Greet services.
      </p>
      <div class="flex-div">
        <div class="flex-div-content" data-aos="fade">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="../assets/mtn-computer.png" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <p data-aos="slide-up">flight ticket</p>
          </div>
        </div>
        <div class="flex-div-content" data-aos="fade">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="../assets/mtn-computer.png" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <p data-aos="slide-up">hotel reservation</p>
          </div>
        </div>
        <div class="flex-div-content" data-aos="fade">
          <div class="flex-div-content-top">
            <div class="flex-div-content-top-img">
              <img src="../assets/mtn-computer.png" data-aos="fade" alt="" />
            </div>
          </div>
          <div class="flex-div-content-bottom">
            <p data-aos="slide-up">meet and greet</p>
          </div>
        </div>
      </div>
    </div>

    <div class="maritime-section">
      <div class="wrapper">
        <div class="carousel-wrapper" data-aos="slide-right">
          <carousel :images="images"/>
        </div>
        <div class="wrapper-container" data-aos="slide-left">
          <h2 class="custom-header-2">maritime</h2>
          <p>
            Maritime Department of Biscam deals with different maritime services
            which include; offshore services, import and export, ship chandling,
            general supply (door to door services etc )
          </p>

          <button><router-link to="/contact">visit us now</router-link></button>
        </div>
      </div>
      <div class="maritime-section">
        <div class="wrapper">
          <div class="wrapper-container" data-aos="slide-right">
            <h2 class="custom-header-2">Digital centre</h2>
            <p>
              BISCAM also renders documentation services and Graphic designing/
              printing services. Documentation services includes Typing,
              plastification, printing, photocopy, spiral binding etc and
              Graphic design services include the designing of all sort of
              designs and printing like banners, stickers, mugs, plates, caps,
              t-shirts, calenders, magazines etc
            </p>
            <button>
              <router-link to="/contact">visit us now</router-link>
            </button>
          </div>
          <div class="carousel-wrapper" data-aos="slide-left">
             <carousel :images="dg_images"/>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import carousel from "@/components/carousel.vue"
import {ref} from 'vue';
import img from '../assets/learn.jpg'
import img1 from '../assets/learn-b.jpg'
import img2 from '../assets/login.png'
import img3 from '../assets/social.jpg'
import img4 from '../assets/group.jpeg'
import img5 from '../assets/team.jpg'
import img6 from '../assets/mtn-computer.png'
import img7 from '../assets/music-woman.jpg'
export default {
  name: "Home",
  components:{
    carousel
  },
  setup(){
    const images = ref([
      {
        src:img1,
    title:"maritime one"
  },
    {
      src:img2,
    title:"maritime two"
  },
    {
      src:img,
    title:"maritime three"
  }
  ]);


   const dg_images = ref([
      {
        src:img3,
    title:"digital center one"
  },
    {
      src:img4,
    title:"digital center two"
  },
    {
      src:img5,
    title:"digital center three"
  },
  { 
    src:img6,
    title:"digital center four"
  },{
    src:img7,
    title:"digital center five"
  }
  ]);

    return{ 
      images,dg_images
    }
  }
};
</script>
<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;
  padding: 0;
  margin: 0;


  .landing-page {
    width: 100%;
    height: 90vh;
    background: rgb(217, 217, 217);

    .wrapper {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .left-wrapper {
        width: 40%;
        height: 100%;
        padding-top: 70px;

        h1 {
          font-size: 60px;
          font-weight: 400;
          text-align: left;
          padding: 20px 0;
          line-height: 80px;

          span {
            font-weight: 900;
            font-size: 100px;
          }
        }

        p {
          text-align: left;
        }

        .link-wrapper {
          width: 150px;
          height: 40px;

          background: rgb(241, 162, 42);
          margin: 15px auto;
          display: flex;
          justify-content: center;
          align-items: center;

          a {
            font-size: 15px;
            color: rgb(55, 53, 53);
            text-decoration: none;
          }
        }
      }
      .right-wrapper {
        width: 40%;
        height: 100%;
      }
    }
  }

  .garage-section {
    width: 100vw;
    min-height: 90vh;
    background: rgb(14, 6, 106);
    margin: 0;
    padding-top: 30px;

    .wrapper {
      width: 100%;
      height: fit-content;
      padding: 50px 10px;

      p.desc {
        font-size: 17px;
        line-height: 30px;
        color: rgb(220, 220, 220);
        text-align: center;
        width: 70%;
        margin: 15px auto;
        padding: 20px 10px;
      }

      .flex-div .flex-div-content{
        height:140px;
        width:220px;
      }
    }
  }

  .flight-section {
    width: 100vw;
    height: 80vh;
    margin: 0;
    background: url(../assets/social.jpg);
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
    position: relative;
    padding-top: 50px;

    p {
      width: 80%;
      margin: 10px auto;
      position: relative;
      color: white;
      line-height: 40px;
    }
  }

  .maritime-section {
    width: 100vw;
    height: 400px;
    background: rgb(14, 6, 106);

    .wrapper {
      width: 90%;
      height: 100%;
      margin:0 auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .carousel-wrapper{ 
        width:60%;
        height:100%;
        display:flex;
        justify-content:center;
        align-items:center;
      }

      .wrapper-container {
        width: 40%;
        height: 100%;
        display: flex;
        justify-content:center;
        align-items: center;
        flex-direction: column;
        overflow-x:hidden;
        gap:15px;

        h2 {
          margin: 0;
        }
        p {
          color: white;
          width: 90%;
        }

        button {
          border: none;
          width: 120px;
          height: 40px;
          border-radius: 2px;
          margin: 0 auto;
          a {
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>