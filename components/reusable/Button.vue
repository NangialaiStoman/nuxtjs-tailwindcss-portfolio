<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(["click"]);
</script>

<template>
  <button @click="emit('click')">{{ title }}</button>
</template>

<style lang="scss" scoped></style>
