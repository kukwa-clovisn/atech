<template>
  <div class="footer">
    <div class="blur"></div>
    <div class="footer-content">
      <div class="left-content">
        <h1>Atech</h1>
        <h4>Advanced Tech Acadmey</h4>
        <h6>Building the future</h6>
      </div>
      <div class="right-content">
        <ul>
          <li>
            <a href="https://codingherald.herokuapp.com" class="route">apps</a>
          </li>
          <li><router-link to="/login" class="route">sign up</router-link></li>
          <li><router-link to="/login" class="route">sign in</router-link></li>
          <li>
            <router-link to="/why-us" class="route">why crypto?</router-link>
          </li>
          <li><router-link to="/course" class="route">courses</router-link></li>
          <li>
            <a href="/#contact" class="route">contact us</a>
          </li>
          <li>
            <a href="/admin/dashboard" class="route">admin</a>
          </li>
          <li>
            <a href="https://wa.link/geye6o" class="route">whatsapp</a>
          </li>
          <div class="elfsight-app-ac18bf6d-0180-4ec2-831d-5638ec79d748"></div>
        </ul>
      </div>
    </div>
    <p>&copy;copyright_codingHerald_2022</p>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
$baseColor: #072e54;

.footer {
  width: 100%;
  height: fit-content;
  padding: 30px 20px;
  background: url(../assets/forex-blue.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  position: relative;

  .blur {
    background: $baseColor;
    opacity: 0.9;
  }

  .footer-content {
    width: 90%;
    height: fit-content;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    z-index: 1;

    .left-content {
      width: 34%;
      padding: 20px;
      border-right: 1px solid rgb(176, 175, 175);
      position: relative;

      h1 {
        text-transform: uppercase;
        font: 900 60px "Russo One", sans-serif;
        position: relative;
        z-index: 1;
        color: rgb(229, 233, 236);
        letter-spacing: 3px;
      }

      h4 {
        color: rgb(195, 202, 210);
      }

      h6 {
        color: rgb(137, 156, 171);
      }
    }

    .right-content {
      width: 65%;
      padding: 10px;
      position: relative;

      ul {
        width: 100%;
        height: fit-content;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;

        li {
          width: 200px;
          height: 75px;
          list-style-type: none;

          a {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            text-transform: capitalize;
            color: rgb(190, 190, 190);
          }
        }
      }
    }
    @media screen and (max-width: 768px) {
      flex-direction: column;

      .left-content,
      .right-content {
        width: 100%;
      }
    }
  }

  p {
    color: rgb(226, 241, 245);
    position: relative;
    margin: 20px auto;
  }
}
</style>
