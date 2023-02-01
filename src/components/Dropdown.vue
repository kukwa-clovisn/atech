<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
     {{name}}<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
          <el-dropdown-item :command="item.path" v-for="(item,index) in items" :key="index">{{item.name}}</el-dropdown-item>
        <!-- <el-dropdown-item command="a">Action 1</el-dropdown-item>
        <el-dropdown-item command="b">Action 2</el-dropdown-item>
        <el-dropdown-item command="c">Action 3</el-dropdown-item>
        <el-dropdown-item command="d" disabled>Action 4</el-dropdown-item>
        <el-dropdown-item command="e" divided>Action 5</el-dropdown-item> -->
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ElMessage } from 'element-plus'
import { ArrowDown } from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'

const props = defineProps({
     items:Array,
     name:String
})

const router = useRouter();

const handleCommand = (command) => {
  ElMessage(`welcome to ${command}`)
  router.push(command);
}


</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
}

.el-dropdown{
     color:inherit;

     span{ 
          color:inherit;
     }
}
</style>
