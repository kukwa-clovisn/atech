<template>
  <main>
    <div class="landing-page">
      <div class="blur-wrapper"></div>
      <h3>
        Biscam Investment Sarl is a multi-service Company that is die-hardly
        committed to satisfy her customers with her resources.
      </h3>
      <h2>Make Business With Us Today!</h2>
      <button>
        <router-link to="#contact">contact</router-link>
      </button>
    </div>
  </main>
</template>


<style lang="scss" scoped>
main {
  width: 100vw;
  height: fit-content;

  .landing-page {
    width: 100vw;
    height: 70vh;
    background: url(../assets/Mental-Health-Social-Challenge-cobranded-illo-732x549-HL-Thumbnail-2.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: scroll;
    background-position: center center;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    .blur-wrapper {
      background: rgb(81, 4, 81);
    }

    h3 {
      width: 85%;
      padding: 15px;
      color: white;
      position: relative;
      font-weight: 300;
    }

    h2 {
      text-align: center;
      padding: 20px;
      position: relative;
      color: white;
      font-weight: 700;
      font-size: 35px;
      text-transform: capitalize;
    }

    button {
      width: 150px;
      height: 50px;
      background: transparent;
      border: 1px solid white;
      cursor: pointer;
      position: relative;
      margin: 10px auto;

      a {
        text-decoration: none;
        color: white;
        text-transform: uppercase;
      }
    }
  }
}
</style>