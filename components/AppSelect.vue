<script setup lang="ts">
const props = withDefaults(defineProps<{
  select?: string,
  selectOptions?: string[]
}>(), {
  select: "cuisine",
  selectOptions: () => ["tacos", "pizza", "dim sum"]
})

const emit = defineEmits<{
  change: [value: string]
}>()
</script>

<template>
  <div>
    <label :for="select">Which {{ select }} do you want ?</label>&nbsp;
    <select @change="emit('change', ($event.target as HTMLInputElement).value)" :id="select" :name="select">
      <option value>--- Please select a {{ select }}</option>
      <option v-for="option in selectOptions" :key="option" :value="option">{{ option }}</option>
    </select>
  </div>
</template>

<style scoped>

</style>