new Vue({
    el: '#vue-app',
    data: {
        age: 27,
        x: 0,
        y: 0
    },
    methods: {
        add: function(inc){
            this.age += inc;
        },
        odd: function(dec){
            this.age -= dec;
        },
        updateXY: function(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
        }
    }
})