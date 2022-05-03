<template>
  <div class="block">
    <p>Your reaction time is .</p>
    <slot name="score">
    </slot>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.block {
  width: 400px;
  border-radius: 20px;
  background: #444;
  color: white;
  text-align: center;
  padding: 100px 0;
  margin: 40px auto;
}
</style>