<template>
    <div>
        <from-helper>
            <div slot="form-header">
                <h3>This is the title of the form</h3>
                <p>info about form</p>
            </div>
            <div slot="form-fields">
                <input type="text" placeholder="name" required/>
                <input type="password" placeholder="password" required/>
            </div>
            <div slot="form-controls">
                <button v-on:click="handleSubmit">Submit</button>
            </div>
        </from-helper>
    </div>
</template>

<script>
import formHelper from './components/formHelper.vue'

export default {
    components: {
        'from-helper': formHelper
    },
    data () {
        return {
            title: 'I am dynamic slot title'
        }
    },
    methods: {
        
    }
}
</script>

<style>

</style>