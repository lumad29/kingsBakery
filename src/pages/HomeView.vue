<script setup>

</script>

<template>

    <v-row class="home-view pa-8">
        <v-col class="pa-8 ma-8" cols="8">
            <div class="my-4">
                <h1 class="custom-font-size">We are bread experts </h1>
                <p class="custom-font-size-2">
                    Enjoy freshly baked bread at our bakery! From hearty whole grain
                    loaves to
                    fluffy baguettes, we offer
                    a wide variety to satisfy your cravings. Whether it's a daily loaf or a special treat, we've got
                    you
                    covered!
                </p>
            </div>
        </v-col>
        <v-col>
            <h1>lado b</h1>
        </v-col>
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
    color: #96a5ac;
}
</style>