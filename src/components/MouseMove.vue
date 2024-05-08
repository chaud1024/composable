<script setup>
import { useMouse } from "@/composables/useMouse";

const { x, y } = useMouse();
</script>

<template>
  <h1>Mouse Move</h1>
  <div>마우스 포인터 위치 x, y: {{ x }}, {{ y }}</div>
</template>

<style lang="scss" scoped></style>
