<template>
     <main>

  <el-carousel :interval="3000" arrow="always" direction="horizontal">
    <el-carousel-item v-for="(image,index) in images" :key="index" height="700px">

     <div class="blur-wrapper"></div>

     <h1>{{image.title}}</h1>

      <img :src="image.src" />

    </el-carousel-item>
  </el-carousel>

</main>
</template>

<script>
import {ref} from 'vue';
export default{
     name:'slider',
     props:{
          images: {type:Array}
     },
     setup(props){
          const images = ref(props.images) ;

          return{ 
          images
     }
     }

   
}
</script>

<!-- <style scoped>
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style> -->
<style lang="scss" scoped>
 main{ 
    width:100%;
    height:70vh;
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


  img{ 
    height:auto;
    width:cover;
  }

.el-carousel{ 
  width:100% !important;
  margin:0;
  padding:0;
 
}

.el-carousel_item{ 
  height:900px;
  border:5px solid green;
}
</style>