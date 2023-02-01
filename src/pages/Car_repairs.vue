<template>
  <main>

  <div class="landing-page">

      <slider :images="images" />

  </div>

   
  </main>
</template>

<script>
import slider from "@/components/slider.vue";
import {ref} from 'vue';
import img from '../assets/learn.jpg'
import img1 from '../assets/learn-b.jpg'
import img2 from '../assets/login.png'

export default{
  name: "Car_repairs",

  components: {
    slider,
  },
  
  setup(props) { 
  const images = ref([
      {
        src:img,
    title:"digital center one"
  },
    {
      src:img1,
    title:"digital center two"
  },
    {
      src:img2,
    title:"digital center three"
  }
  ]);

    return {
  images
}
  }
};
</script>

<style lang="scss" scoped>
main{
  width:100vw;
  height:fit-content;

  .landing-page{ 
    width:100vw;
    height:90vh;
  }
}
</style>