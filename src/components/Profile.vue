<template>
    <div style = "padding-top: 72px">
        <section class="hero is-bold">

            <div class="hero-body">
                <div class="container">
                    <div class="columns is-vcentered">
                        <div class="column is-4 is-offset-4">
                            <h1 class="title">
                                Edit Profile
                            </h1>

                            <div class="box">
                                <div class="field">
                                    <div class="file is-small has-name is-fullwidth">
                                            <input class="file-input" type="file" id="file" accept=".jpg, .jpeg, .png" @change="getFileName">
                                                <span class="file-cta">
                                                    <span class="file-label">
                                                    Change Image
                                                    </span>
                                                </span>
                                                <span class="file-name">
                                                     {{ fileName }}
                                                </span>
                                    </div>
                                </div>

                                    <div class="field">
                                         <p class="control has-icons-left">
                                            <input class="input" type="text" placeholder="First Name" v-model="description">
                                                <span class="icon is-small is-left">
                                                    <i class="fa fa-pencil-square-o"></i>
                                                </span>
                                         </p>
                                    </div>

                                    <div class="field">
                                         <p class="control has-icons-left">
                                            <input class="input" type="text" placeholder="Last Name" v-model="description">
                                                <span class="icon is-small is-left">
                                                    <i class="fa fa-pencil-square-o"></i>
                                                </span>
                                         </p>
                                    </div>

                                    <hr>
                                        <div class="level">
                                            <div class="level-left"></div>
                                                <div class="level-right">
                                                    <p class="level-item">
                                                        <a class="button is-primary" @click="postEvent">
                                                            <span>Accept</span>
                                                        </a>
                                                    </p>
                                                </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </div>
</template>

<style scoped>
@import "../assets/css/timeline.css";
</style>