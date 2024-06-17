<script setup>

</script>

<template>
    <div class="stores-view">
        <v-row class="pa-6x mt-16" align="start" justify="center">
            <v-col class="bg-primary" cols="12" md="6">
                <h1>Find your favorite store</h1>
                <div class="">
                    <p class="custom-font">
                        Enjoy the comforting aroma of freshly baked bread at our bakeries, open 24 hours a day, every
                        day of
                        the week so you can enjoy warm, delicious bread whenever you want. Pick your most ocnventient
                        store,
                        we are all over the city!
                    </p>
                </div>
            </v-col>
            <v-col class="bg-red" cols="12" md="4">
                <v-img src="/assets/bread-shop-1.png"></v-img>
            </v-col>
        </v-row>
    </div>
</template>

<style>
.stores-view {
    /* height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #37474F;
    color: white;
}

/* .pic-container {
    background-image: linear-gradient(to bottom, rgba(45, 44, 44, 0.200), rgba(66, 65, 65, 0.6)), url('/src/assets/bread-shop-1.png');
    height: 30rem;
    width: 20rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}  */

.custom-font {
    line-height: 2.2;
}
</style>
