<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <p class="h3 text-primary text-center "> Add contact</p>
            </div>
        </div>
    </div>

    <div class="container mt-6 ">
        <div class="row d-flex justify-content-center">
            <div class="col-md-10 align-self-center">
                <div class="card my-2 list-group-item-primary shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-2">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                    class="contact-img" />
                            </div>
                            <div class="col-md-8">
                                <form @submit.prevent="submitCreate()">
                                    <div class="mb-2">
                                        <input id="name" required v-model="contact.name" type="text" class="form-control"
                                            placeholder="Name">
                                    </div>
                                    <div class="mb-2">
                                        <input id="email" required v-model="contact.email" type="email" class="form-control"
                                            placeholder="Email">
                                    </div>
                                    <div class="row">

                                        <div class="form-group col-md-6">
                                            Status
                                            <select v-model="contact.status" required id="status"
                                                class="form-control">
                                                <option selected value="active">Active</option>
                                                <option value="inactive">Inactive</option>
                                            </select>
                                        </div>
                                        <div class="form-group col-md-6">
                                            Gender
                                            <select v-model="contact.gender" required id="gender"
                                                class="form-control">
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="mt-4">
                                        <input id="submit" type="submit" class="btn btn-primary" style="width: 100%" value="Create">
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import UserEndpoint from "../services/services"
export default {
    name: "AddContact",
    data: function () {
        return {
            contact: {
                name: '',
                email: '',
                status: '',
                gender: ''
            }
        }
    },

    methods: {
        submitCreate: async function () {
            try {
                let response = await UserEndpoint.create(this.contact);
                if (response) {
                    return this.$router.push({ path: '/' })
                }
                else {
                    return this.$router.push({ path: '/add' });
                }
            }
            catch (error) {
                console.log(error)
            }
        }
    }
}
</script>