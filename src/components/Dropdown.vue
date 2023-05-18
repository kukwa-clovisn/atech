<template>
  <el-dropdown @command="handleCommand" class="el-dropdown">
    <span class="el-dropdown-link">
      {{ name }}
      <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          :command="item.path"
          v-for="(item, index) in items"
          :key="index"
          >{{ item.name }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";

const props = defineProps({
  items: Array,
  name: String,
  message: String,
});

const router = useRouter();

const handleCommand = (command) => {
  ElMessage.success(`${props.message}`);
  router.push(command);
};
</script> 
 <style lang="scss" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: inherit;
  display: flex;
  align-items: center;
  color: white;
}

.el-dropdown {
  color: inherit;
  cursor: pointer;

  span {
    color: white;
    text-transform: capitalize;

    &:hover {
      border: none;
    }
  }

  &:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }
}
</style>
