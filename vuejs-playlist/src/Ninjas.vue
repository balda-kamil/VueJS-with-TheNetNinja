<template>
  <div>
    <ul>
        <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
   data () {
    return {
      ninjas: ['Kamil', 'Bartek', 'Yoshi', 'PatiKoszi']
    }
  }
} 
</script>

<style>
</style>