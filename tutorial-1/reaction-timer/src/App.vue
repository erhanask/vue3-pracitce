<template>
  <h1>Reaction Timer</h1>
  <button @click="start" :disabled="isPlaying" >Play</button>
  <div v-if="isPlaying">
    <Block :delay="delay" @end="endGame"/>
  </div>
  <Results v-if="showResult">
    <template v-slot:score>
      <p style="font-size: larger;font-family: Bahnschrift">{{score}} ms</p>
    </template>

  </Results>
</template>

<script>
import Block from "@/components/Block";
import Results from "@/components/Results";


export default {
  name: 'App',
  components: {
    Results,
    Block
  },
  data() {
    return {
      delay : null,
      isPlaying : false,
      score: null,
      showResult: false
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResult = false
    },
    endGame(reactionTime) {
      this.score = reactionTime
      this.isPlaying = false
      this.showResult = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
