<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col">
                <p class="h3 text-primary text-center ">User Detail</p>
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
                                <ul class="list-group">
                                    <li class="list-group-item">ID: <span class="fw-bold">#{{ user.id }}</span></li>
                                    <li class="list-group-item">Name: <span class="fw-bold">{{ user.name }}</span></li>
                                    <li class="list-group-item">Email: <span class="fw-bold">{{ user.email }}</span>
                                    </li>
                                    <li class="list-group-item">Gender: <span class="fw-bold">{{ user.gender }}</span>
                                    </li>
                                    <li class="list-group-item">Status: <span class="fw-bold">{{ user.status }}</span>
                                    </li>
                                </ul>
                            </div>
                            <div class="row mt-2">
                                <div class="col-md-12 text-center">
                                    <router-link to="/" class="btn btn-primary">Back</router-link>
                                </div>
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
    name: "ViewContact",
    data: function () {
        return {
            userId: this.$route.params.userId,
            user: {},
        };
    },
    methods: {
        async getUserData() {
            try {
                let response = await UserEndpoint.getByID(this.userId);
                this.user = response.data;
            }
            catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.getUserData()
    }
}
</script>