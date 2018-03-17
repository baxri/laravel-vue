<template>
    <div class="container">
        <div class="row">
            <form class="col l12 s12">
                <div class="row">
                   <br />
                   <br />
                </div>
                <div class="row">
                    <div class="input-field col l4 s12">
                        <input v-model="name" placeholder="Enter full name" id="name" type="text" class="validate">
                        <label for="name">Full Name</label>
                    </div>
                    <div class="input-field col l4 s12">
                        <input v-model="email" placeholder="Enter Email Address" id="email" type="text" class="validate">
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col l4 s12">
                        <select v-model="category">
                            <option value="" selected>Choose Category</option>
                            <option value="1">Technical</option>
                            <option value="2">Operator</option>
                            <option value="3">Administration</option>
                        </select>
                        <label>Category</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col l12 s12">
                        <textarea v-model="text" placeholder="Enter Additional Text" id="text" class="materialize-textarea"></textarea>
                        <label for="text">Text</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col l3 s12">
                        <a class="waves-effect waves-light btn-large s12">
                            <i class="material-icons left">send</i>
                            Send
                        </a>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import contact from './scripts/Contact.js';

    export default {
        data: function(){
            return {
                name   : '',
                email  : '',
            };
        },
        mounted() {

        },
        methods:{
            validateForm: function(){

            }
        }
    }
</script>
