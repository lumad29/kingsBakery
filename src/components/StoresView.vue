<script setup>

</script>

<template>
    <v-card min-height="100%" class="fill-heightx" color="#37474F" flat>
        <v-row class="mt-16" align="start" justify="center">
            <v-col class="bg-primaryx" cols="11" md="6">
                <h1>Find your favorite store</h1>
                <div class="mt-4">
                    <p class="custom-font">
                        Enjoy the comforting aroma of freshly baked bread at our bakeries, open 24 hours a day, every
                        day of the week so you can enjoy warm, delicious bread whenever you want.
                        <br> Pick your most ocnventient store,
                        we are all over London!
                    </p>
                    <div class="mt-8 mx-4">
                        <ul>
                            <li>17-21 Elizabeth St</li>
                            <li>84-86 Petty France</li>
                            <li>10-12 Old Town</li>
                            <li>50-52 Camden Square</li>
                            <li>55 Battersea Bridge Rd</li>
                        </ul>
                    </div>
                </div>
            </v-col>
            <v-col class="fill-height" cols="11" md="4">
                <v-img src="/assets/bread-shop-1.png" height="100%" class="mb-4" />
                <!-- <v-img src="/assets/bread-shop-3.jpeg" height="100%" /> -->
            </v-col>
        </v-row>
    </v-card>
</template>

<style>
ul li {
    margin-top: 1rem;
}

.stores-view {
    /* height: 100vh; */
    /* display: flex;
    justify-content: center;
    align-items: center; */
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
