<script setup>

</script>

<template>

    <v-row class="home-view pa-6">
        <v-col class="pa-4 ma-4" cols="8">
            <div class="my-4">
                <h1 class="custom-font-size my-4">We are bread experts </h1>
                <p class="custom-font-size-2">
                    Enjoy freshly baked bread at our bakery! From hearty whole grain loaves to fluffy baguettes,
                    we offer a wide variety to satisfy your cravings. Whether it' s a daily loaf or a special treat,
                    we've got you covered!
                </p>
            </div>
        </v-col>
        <v-col>
            <h1>lado b</h1>
        </v-col>
    </v-row>
    <v-row>
        otra row
    </v-row>

</template>

<style scoped>
.home-view {
    height: 100vh;
    display: flex;
    justify-content: end;
    align-items: center;
    background-color: #37474F;
    color: white;
    /* background-image: url('/src/assets/bg-bread-2.jpeg'); */
    background-image: linear-gradient(rgba(81, 81, 81, 0.034), rgba(66, 65, 65, 0.624)), url('/src/assets/bg-bread-2.jpeg');
    background-size: cover;
    background-position: right;
    position: relative;
}


.custom-font-size {
    font-size: 3rem;
    font-family: "Roboto", sans-serif;
}

.custom-font-size-2 {
    /* font-family: "Roboto", sans-serif; */
    font-weight: 450;
    line-height: 2.2;
    font-size: 1.2rem;
    color: #a9b4b9;
}
</style>