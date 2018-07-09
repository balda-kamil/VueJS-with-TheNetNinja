new Vue({
    el: '#vue-app',
    data: {
        output: "Your Fav food"
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            this.output = this.$refs.input.value;
        }
    }
})