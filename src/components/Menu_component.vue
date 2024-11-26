<template>
    <div class="list">
      <h3 class="name">{{ name }}</h3>
      <div class="group">
            <p v-for="(item, index) in group" :key="index" @click="$emit('group-select', item)">{{ item }}</p>
      </div>
    </div>
</template>
  
<script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },

      group: {
        type: String,
        required: true,
      }
    },
  };
</script>

<style scoped>
.list {
    padding: 10px;
    width: 100px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
}

.name {
    color: #253D4E;
    font-weight: bold;
}

.group{
    display: flex;
    gap: 25px;
    color: #253D4E;
}
</style>