new Vue({
    el: '#vue-app',
    data: {
        name: 'Kamil',
        job: 'front-end developer',
        website: 'https://www.wp.pl',
        websiteTag: '<a href="https://www.wp.pl">Stronka wp.pl</a>'
    },
    methods: {
        greet: function(time){
            return 'Dobry ' + time +' '+ this.name;
        }
    }
})