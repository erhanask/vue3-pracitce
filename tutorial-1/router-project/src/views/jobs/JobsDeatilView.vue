<template>
  <div class="home">
    <h1>This is Jobs Detail page </h1>
    <div v-if="job">
        {{id}}. Jobs title is {{job.title}} and detail is {{ job.details }}
    </div>
    <div v-else>
        Cant find data.
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'JobsDetailView',
  props: ['id'],
  data(){
    return {
      job: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/jobs/'+this.id)
        .then(res => res.json())
        .then(data => this.job= data)
        .catch(err => console.log(err.message));
  }
}
</script>