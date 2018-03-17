<template>
    <div class="container">
        <div class="row">
            <form class="col s12">
                <div class="col s12">
                    <h1>Contact Form</h1>
                </div>
                <div class="row">
                    <div class="input-field col s4">
                        <input placeholder="Enter full name" id="name" type="text" class="validate">
                        <label for="name">Full Name</label>
                    </div>
                    <div class="input-field col s4">
                        <input placeholder="Enter Email Address" id="email" type="text" class="validate">
                        <label for="email">Email</label>
                    </div>
                    <div class="input-field col s4">
                        <select>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <label>Materialize Select</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <textarea placeholder="Enter Additional Text" id="text" class="materialize-textarea"></textarea>
                        <label for="text">Text</label>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">

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

        }
    }
</script>
