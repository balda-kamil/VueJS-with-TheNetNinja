var one = new Vue({
    el: '#vue-app-one',
    data: {
        title: "Vue App One"
    },
    methods: {

    },
    computed: {
       greet: function(){
           return "Hello from app one!"
       }
    }
});

var two = new Vue({
    el: '#vue-app-two',
    data: {
        title: "Vue App Two"
    },
    methods: {
        changeTitle: function(){
            one.title = "Title has been changed by another VUE INSTANCE!!"
        }
    },
    computed: {
        greet: function(){
            return "Yoo, App Two Here!!"
        }
    }
});

two.title = "change from outside!"