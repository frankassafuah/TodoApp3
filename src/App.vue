<template>
  <div class="app">
    <TodoHeader />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TodoHeader from "@/components/TodoHeader.vue";

export default {
  components: {
    TodoHeader,
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
</style>
