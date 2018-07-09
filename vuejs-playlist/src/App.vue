<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
   data () {
    return {
      title: "My first Vue file, łooo"
    }
  },
  methods: {
    greeting: function(){
      return 'heey cowboy!';
    }
  }
}
</script>

<style>

</style>
