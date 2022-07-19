<template>
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12">
                <div class="card my-2 list-group-item-primary shadow-lg">
                    <router-link to="/add" class="btn btn-btn-success btn-sm">
                        <div class="card-body">
                            <i class="fa fa-plus-circle fa-lg" style="font-size:30px"></i>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="container mt-3" v-if="userdata.length > 0">
        <div class="row">
            <div class="col-md-6" v-for="user in userdata" :key=user.id>
                <div class="card my-2 list-group-item-primary shadow-lg">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-sm-4">
                                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt=""
                                    class="contact-img" />
                            </div>
                            <div class="col-sm-7">
                                <ul class="list-group">
                                    <li class="list-group-item">Name: <span class="fw-bold">{{ user.name }}</span></li>
                                    <li class="list-group-item">Email: <span class="fw-bold">{{ user.email }}</span></li>
                                    <li class="list-group-item">Status: <span class="fw-bold">{{ user.status }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                                <router-link :to="`/view/${user.id}`" class="btn btn-secondary my-1"><i
                                        class="fa fa-eye"></i>
                                </router-link>
                                <button class="btn btn-danger my-1" @click="clickDeleteContact(user.id)"><i
                                        class="fa fa-trash"></i>
                                </button>
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
    name: 'ContactManager',

    data() {
        return {
            userdata: new Array(),
        }
    },


    methods: {
        getActiveUsers() {
            UserEndpoint.getAll()
                .then(response => {
                    (response.data).forEach(element => {
                        if (element.status == "active") {
                            if (element == null) {
                                this.userdata = new Object();
                            }
                            this.userdata.push(element);
                        }
                    });
                })
                .catch(e => {
                    console.log(e);
                });
        },

        clickDeleteContact: async function (contactId) {
            try {
                let response = await UserEndpoint.delete(contactId)
                if (response.status == 204) {
                    this.$router.go(this.$router.currentRoute)
                }
            }
            catch (error) {
                console.log(error)
            }
        }
    },
    mounted() {
        this.getActiveUsers();
    },
}
</script>