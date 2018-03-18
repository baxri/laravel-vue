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
                        <input v-model="name"
                               v-on:input="$v.name.$touch"
                               v-bind:class="{invalid: $v.name.$error, valid: $v.name.$dirty && !$v.name.$invalid}"
                               placeholder="Enter full name" id="name" type="text" class="">
                        <label for="name">Full Name</label>
                    </div>

                    <div class="input-field col l4 s12">
                        <input v-model="email" placeholder="Enter Email Address" id="email" type="text" class="validate">
                        <label for="email">Email {{email}}</label>
                    </div>
                    <div class="input-field col l4 s12">
                        <select v-material-select:change="selected" id="selected" name="selected">
                            <option value="">Please select one</option>
                            <option value="1">A</option>
                            <option value="2">B</option>
                            <option value="3">C</option>
                        </select>
                        <label for="category">Category {{selected}}</label>
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
                        <a
                           class="waves-effect waves-light btn-large s12"
                           v-bind:class="{disabled: $v.$invalid}"
                            v-on:click="sendEmail">
                            <i class="material-icons left">send</i>
                            {{$v.$invalid}}
                        </a>

                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>

    import { required, minLength, maxLength, email, numeric } from 'vuelidate/lib/validators';
    import contact from './scripts/Contact.js';

    export default {
        data: function(){
            return {
                name   : 'sdfsdf',
                email  : 'sfd@gmail.com',
                selected  : '2',
                text  : 'sjdajsdj jashd aljshd slad',
            };
        },
        validations: {
            name: {
                required,
                minLength: minLength(3),
            },
            email: {
                required,
                email
            },
            selected:{
                required,
                numeric,
            },
            text: {
                required,
                maxlength: maxLength(300)
            }
        },
        mounted() {

        },
        methods:{
            sendEmail: function(){

                console.log(this.name);

                axios.post('send-email', {
                    body: {
                        name: this.name,
                        email: this.email,
                        selected: this.selected,
                        text: this.text,
                    },
                })
                    .then(response => {
                        console.log(response);
                        this.posts = response.data
                    })
                    .catch(e => {
                        this.errors.push(e)
                    })
            }
        }
    }
</script>
