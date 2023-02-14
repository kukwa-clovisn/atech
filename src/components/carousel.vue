<template>
  <main>
 <el-carousel :interval="1000" type="card">
    <!-- <el-carousel-item v-for="item in 8" :key="item">
      <h3 justify="center">{{ item }}</h3>
    </el-carousel-item> -->
    <el-carousel-item v-for="(image,index) in images" :key="index">
      <div class="blur-wrapper"></div>
      <h1>{{image.title}}</h1>
<img :src="image.src" />

    </el-carousel-item>

  </el-carousel>

  </main>
 
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'Carousel',
props:{
  images: {type:Array}
},
  setup(props) {
    const images = ref(props.images)
    return {
      images
    }
  }
}
</script>

<style lang="scss" scoped>
  
  main{ 
    width:100%;
    height:fit-content;
    overflow-x:hidden;
    margin:0 auto;
  }
  h1{ 
    display:block;
   
    position:absolute;
    top:40%;
    left:20%;
    color:white;
    text-transform:capitalize;
    font-weight:400;
    font-size:16px;
    z-index:1;
  }
  button.el-carousel_arrow{ 
    display:flex !important;
    visibility:visible;
  }
  img{ 
    height:100%;
    width:auto;
  }
.el-carousel__item h3 {
  position:relative;
  color: red;
  line-height: 200px;
  margin: 0;
  font-size:40px;
  text-align: center;
}
.el-carousel{ 
  width:100% !important;
  margin:0;
  padding:0;
  position:relative;
}
.el-carousel_item{ 
  height:100%;
  position:relative;
}
.el-carousel__item:nth-child(2n) {
  background-color:transparent;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: transparent;
}
</style>
