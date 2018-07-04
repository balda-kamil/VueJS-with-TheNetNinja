new Vue({
    el: '#vue-app',
    data: {
        name: 'Kamil',
        job: 'front-end developer'
    },
    methods: {
        greet: function(time){
            return 'Dobry ' + time +' '+ this.name;
        }
    }
})