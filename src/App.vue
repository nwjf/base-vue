<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button
        @click="btn"
        >
        sdfsdfsdsfsd
      </button>
    </div>
    <router-view/>
  </div>
</template>
<script>
import require from './utils/request'
export default {
  name: 'app',
  created() {
    
  },
  methods: {
    btn() {
      console.log(process.env.NODE_ENV);
      console.log('==============');
      require({
        method: 'post',
        url: '/',
        data: {
          name: '12',
          con: 'con'
        }
      })
      .then(res => {
        console.log(res);
      })
    }
  }
}
</script>

<style lang="less">
</style>
