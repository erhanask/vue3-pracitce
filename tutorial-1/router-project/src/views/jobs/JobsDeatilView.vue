<template>
  <div class="home">
    <h1>This is Jobs Detail page </h1>
    <div>
        {{id}}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JobsDetailView',
  props: ['id'],
  components: {}
}
</script>