<template>
  <div class="menu">
    <h3 class="title">{{ name }}</h3>
    <div class="group">
      <button
        v-for="(item, index) in group"
        :key="index"
        class="group-btn"
        @click="$emit('group-select', item)"
      >
        {{ item }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    group: Array,
  },
};
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.title {
  font-size: 20px;
  color: #253d4e;
  margin-bottom: 10px;
}

.group {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.group-btn {
  padding: 8px 12px;
  border: 1px solid #e3e3e3;
  border-radius: 20px;
  background-color: #fff;
  color: #253d4e;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
}

.group-btn:hover {
  background-color: #f0f0f0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
