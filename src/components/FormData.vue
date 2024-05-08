<script setup>
import { formatDate } from "@/composables/useFormDate";
const date1 = formatDate("2024-1-1");
const date2 = formatDate("2024-01-1");
const date3 = formatDate("2024-1-01");
</script>
<template>
  <h1>Form Data</h1>
  <div>
    {{ date1 }}
  </div>
  <div>{{ date2 }}</div>
  <div>{{ date3 }}</div>
</template>

<style lang="scss" scoped></style>
