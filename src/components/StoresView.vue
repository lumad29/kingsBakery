<script setup>

</script>

<template>
    <v-card min-height="100" max-height="100%" class="fill-heightx rounded-0 pt-5" color="#37474F" flat>
        <v-row class="mt-16" align="start" justify="center">
            <v-col cols="11" md="5" v-motion-slide-visible-left :delay="80" :duration="1000">
                <!-- <v-btn @click="h1Key++">{{ h1Key }}re-render title</v-btn> -->
                <!-- <v-fade-transition hide-on-leave> -->
                <component is="h1">Find your favorite store</component>
                <!-- </v-fade-transition> -->
                <div class="mt-4">
                    <p class="custom-font">
                        Enjoy the comforting aroma of freshly baked bread at our bakeries, open 24 hours a day,
                        every
                        day of the week so you can enjoy warm, delicious bread whenever you want.
                        <br> Pick your most convenient store,
                        we are all over London!
                    </p>
                    <v-row>
                        <v-col class="my-10">
                            <ul class="list-icons">
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />Elizabeth St</li>
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />84-86 Petty France
                                </li>
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />10-12 Old Town</li>
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />12C Lyndhurst Rd</li>
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />3 Wren Ave</li>
                            </ul>
                        </v-col>
                        <v-col class="my-10">
                            <ul class="list-icons">
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />612 Lordship</li>
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />89 Nightingale</li>
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />Rushey Grn</li>
                                <li><v-icon>mdi-map-marker</v-icon><span class="text-margin" />Highgate Rd</li>
                            </ul>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col class="fill-height" cols="11" md="5">
                <div>
                    <v-img src="/assets/bread-shop-1.png" height="100%" class="mb-4"
                        gradient="to bottom, rgba(150, 150, 150, 0.3), rgba(34, 34, 34, 0.4)" />
                    <v-img src="/public/assets/bg-bread-3.png" />
                </div>
            </v-col>
        </v-row>
    </v-card>
</template>

<style>
ul li {
    margin-top: 1rem;
}

.stores-view {
    background-color: #37474F;
    color: white;
}

/* .img-opacity {
    opacity: 0.7;
} */

.list-icons {
    list-style-type: none;
}

.text-margin {
    margin-left: 1rem;
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
