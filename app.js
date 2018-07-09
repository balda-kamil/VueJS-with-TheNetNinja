Vue.component("greeting", {
    template: '<p>Hey There, I\'m {{ name }}. <button v-on:click="changeName">Chnage Name</button></p>',
    data: function(){
        return{
            name: "Kamil"
        }
    },
    methods: {
        changeName: function(){
            this.name = "Mario";
        }
    }

});

new Vue({
    el: '#vue-app-one'
});

new Vue({
    el: '#vue-app-two'
});
