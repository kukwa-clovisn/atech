<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" appear="">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script>
export default {
  name: "Course_intro",
};
</script>