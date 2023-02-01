<template>
     <div>
          biscam sarl flight bookings
     </div>
     <carousel :images="images" />
</template>


<script>
import carousel from "@/components/carousel.vue";
import {ref} from 'vue';
import img from '../assets/social.jpg'
import img1 from '../assets/group.jpeg'
import img2 from '../assets/team.jpg'
import img3 from '../assets/mtn-computer.png'
import img4 from '../assets/music-woman.jpg'

export default{
  name: "Flight",

  components: {
    carousel,
  },
  
  setup(props) { 
const images = ref([img,img1,img2,img3,img4])

    return {
  images
}
  }
};
</script>