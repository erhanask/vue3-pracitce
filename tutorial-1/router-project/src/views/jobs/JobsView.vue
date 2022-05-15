<template>
  <div class="home">
    <h1>This is an Jobs Page</h1>
    <div v-if="jobs.length" v-for="job in jobs" :key="job.id">
      <router-link :to="{ name:'jobDetail',params: {id : job.id} }">
      <h3>{{ job.title }}</h3>
      </router-link>
    </div>
    <div v-else>
      Loading ...
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JobsView',
  components: {},
  data () {
    return {
      jobs:[]
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(data => this.jobs= data)
    .catch(err => console.log(err.message));
  }
}
</script>
