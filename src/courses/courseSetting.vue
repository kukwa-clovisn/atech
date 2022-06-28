<template>
  <div class="container">
    <h1>privacy policy</h1>
    <p>
      As our users we ensure that your data is secure with us an not allowed to
      any third party users. We don't share your data with anyone and your
      informatioin and your dashboard is allowed access to you alone.
    </p>
    <p>
      We don't advice or recomment you sharing you password or credentials with
      others as that's the only way they can have access to your dashboard and
      can create some changes in your page.
    </p>
    <h2>settings:</h2>
    <p>
      You have the access to set your page mode, change your name and also to
      customize your page the way you want from the dashboard page.
    </p>
  </div>
</template>

<script>
export default {
  name: "CourseSetting",
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: fit-content;
  padding: 10px;

  span {
    color: tomato;
    font-size: 20px;
    padding: 0 5px;
    text-transform: capitalize;
  }

  h1 {
    padding: 20px;
    text-align: center;
    text-transform: capitalize;
    font: 700 30px "Nunito Sans", sans-serif;
  }
  h2 {
    text-align: left;
    color: rgb(61, 59, 59);
    font-family: "Nunito Sans", sans-serif;
    width: 97%;
    margin: auto;
    text-transform: capitalize;
  }
  p {
    width: 94%;
    margin: auto;
    text-align: left;
    padding: 7px;
  }
}
</style>