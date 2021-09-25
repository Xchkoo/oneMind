<template>
<h2>{{info}}</h2>
</template>


<script>
const axios = require('axios');
export default {
  name: 'Home',
  data() {
    return {
      info: null
    }
  },
  mounted(){
    axios
      .get('https://127.0.0.1/api/time')
      .then(response => (this.info = response))
  }
};
</script>

<style>
  a:link{
    text-decoration: none;
  }
</style>