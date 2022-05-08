<template>
  <div class="home">
    <h1>This is an Jobs Page</h1>
    <div v-for="job in jobs" :key="job.id">
      <router-link :to="{ name:'jobDetail',params: {id : job.id} }">
      <h3>{{ job.title }}</h3>
      </router-link>
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
      jobs:[
        {title:'Ux Designer', id:1,details:'lorem dolor'},
        {title:'Web developer', id:2,details:'lorem dolor'},
        {title:'Vue Developer', id:3,details:'lorem dolor'}
      ]
    }
  }
}
</script>
