<template>
    <div class="container">
        <div class="row">
            <div class="col m10 offset-m1 s12">
                <h2 class="center-align">Contact Form</h2>
                <div class="row">
                    <form class="col m8 offset-m2 s12">
                        <div class="row">
                            <div class="input-field col s12">
                                <input id="name" type="text">
                                <label for="name">Name</label>
                            </div>
                            <div class="input-field col s12">
                                <input id="email" type="email" class="form-input">
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field col s12">
                                <textarea id="message" class="materialize-textarea"></textarea>
                                <label for="message">Message</label>
                            </div>
                        </div>

                        <div class="divider"></div>
                        <div class="row">
                            <div class="col m12">
                                <p class="right-align"><button class="btn btn-large waves-effect waves-light" type="button" name="action">Send Message</button></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {

        },
        data: function(){
            return {
                errors:[],
                name:null,
                age:null,
                movie:null
            };
        },
        methods:{
            checkForm:function(e) {
                if(this.name && this.age) return true;
                this.errors = [];
                if(!this.name) this.errors.push("Name required.");
                if(!this.age) this.errors.push("Age required.");
                e.preventDefault();
            }
        }
    }
</script>
